/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { ListResult } from "pocketbase";

import { cn } from "@/lib/utils";
import PocketBaseInstance from "@/lib/pocketbase";
import { IdeasModel } from "@/interfaces";

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

type IdeaListProps = {
  formSearch: string;
  setFormSearch: (val: string) => void;
  onSearchSubmit: () => void;
  data?: ListResult<IdeasModel>;
};

const IdeaList = ({
  data,
  formSearch,
  onSearchSubmit,
  setFormSearch,
}: IdeaListProps) => {
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
          onSearchSubmit();
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
                className="object-contain w-[300px] h-[300px]"
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
