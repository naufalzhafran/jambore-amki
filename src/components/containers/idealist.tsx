/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import useSWR from "swr";

import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GetListIdeas } from "@/services/ideas";
import { ClientResponseError } from "pocketbase";
import PocketBaseInstance from "@/lib/pocketbase";
import Link from "next/link";

const IdeaList = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [formSearch, setFormSearch] = useState("");

  const { data } = useSWR(
    {
      arg: {
        page: 1,
        perPage: 50,
        options: searchQuery
          ? { filter: `title ~ "${searchQuery}"`, expand: "user" }
          : { expand: "user" },
      },
    },
    GetListIdeas,
    {
      onError: (err) => {
        if (err instanceof ClientResponseError) {
          toast({
            variant: "destructive",
            title: "ERROR",
            description: JSON.stringify(err.response, null, 2),
          });
        } else {
          toast({
            variant: "destructive",
            title: "ERROR",
            description: "Please try again later",
          });
        }
      },
    }
  );

  function onSubmit() {
    setSearchQuery(formSearch);
  }

  return (
    <div className={`flex flex-col items-center py-6`}>
      <h1
        className={cn(`
          text-center text-4xl font-bold
          p-10
        `)}
      >
        Daftar Ide
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className={`flex justify-center gap-2`}
      >
        <Input
          placeholder="Search"
          value={formSearch}
          onChange={(e) => setFormSearch(e.target.value)}
        />

        <Button type="submit">
          <Search />
        </Button>
      </form>

      <div
        className={`
            flex flex-wrap justify-center gap-4
            p-5 my-4
            md:w-[1000px] md:justify-start
          `}
      >
        {data?.items.map((item) => {
          return (
            <Card key={item.id} className={`w-full max-w-[300px]`}>
              <img
                className="w-[300px] h-[300px]"
                src={PocketBaseInstance.files.getUrl(item, item.images[0])}
                width={400}
                height={400}
                alt="Picture of the author"
              />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  {
                    (
                      item as unknown as {
                        expand: { user: { fullname: string } };
                      }
                    ).expand?.user?.fullname
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>{item.abstract}</CardContent>
              <CardFooter className={`flex justify-center`}>
                <Button asChild>
                  <Link href={`/idea/${item.id}`}>Selengkapnya</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className={`flex justify-center items-center gap-2`}>
        <Button>
          <ChevronLeft />
        </Button>
        <p>Page 1 of 10</p>
        <Button>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default IdeaList;
