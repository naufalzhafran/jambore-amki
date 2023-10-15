/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { ListResult } from "pocketbase";

import { cn, truncateString } from "@/lib/utils";
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
import { Skeleton } from "../ui/skeleton";

type IdeaListProps = {
  isLoading: boolean;
  formSearch: string;
  data?: ListResult<IdeasModel>;
  setListPage: (val: number) => void;
  setFormSearch: (val: string) => void;
  onSearchSubmit: () => void;
};

const IdeaList = ({
  isLoading,
  data,
  formSearch,
  setListPage,
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
        {isLoading &&
          [1, 2, 3].map((key) => (
            <Card key={key} className={`flex flex-col w-full max-w-[300px]`}>
              <Skeleton className="object-contain w-[300px] h-[300px]" />
              <CardHeader>
                <Skeleton className="h-6 w-[250px]" />
                <Skeleton className="h-6 w-[250px]" />
                <Skeleton className="h-4 w-[100px]" />
              </CardHeader>
              <CardContent className="h-[150px] flex flex-col gap-1">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
              </CardContent>
              <CardFooter className={`flex justify-center`}>
                <Skeleton className="h-10 w-[150px]" />
              </CardFooter>
            </Card>
          ))}

        {data?.items.length ? (
          data?.items.map((item) => {
            return (
              <Card
                key={item.id}
                className={`flex flex-col w-full max-w-[300px]`}
              >
                <img
                  className="object-contain w-[300px] h-[300px]"
                  src={PocketBaseInstance.files.getUrl(item, item.images[0])}
                  width={400}
                  height={400}
                  alt={item.title}
                />
                <CardHeader>
                  <CardTitle className="uppercase">
                    {truncateString(item.title, 100)}
                  </CardTitle>
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
                <CardContent className="h-[150px] text-clip">
                  {truncateString(item.abstract, 125)}
                </CardContent>
                <CardFooter className={`flex justify-center`}>
                  <Button asChild>
                    <Link href={`/idea/${item.id}`}>Selengkapnya</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <div className="w-full flex items-center justify-center h-[300px]">
            <p>Daftar Ide Kosong</p>
          </div>
        )}
      </div>
      <div className={`flex justify-center items-center gap-2`}>
        <Button
          onClick={() => {
            if ((data?.page || 1) > 1) {
              setListPage((data?.page || 1) - 1);
            }
          }}
        >
          <ChevronLeft />
        </Button>
        <p>
          Halaman {data?.page} of {data?.totalPages}
        </p>
        <Button
          onClick={() => {
            if ((data?.page || 1) < (data?.totalPages || 1)) {
              setListPage((data?.page || 1) + 1);
            }
          }}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default IdeaList;
