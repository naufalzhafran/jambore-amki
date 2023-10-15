/* eslint-disable @next/next/no-img-element */
"use client";

import { ThumbsUp, User2 } from "lucide-react";
import useSWR from "swr";
import { useParams } from "next/navigation";
import Markdown from "react-markdown";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { useToast } from "../ui/use-toast";
import { ClientResponseError } from "pocketbase";
import { GetIdeaDetail } from "@/services/ideas";
import PocketBaseInstance from "@/lib/pocketbase";

const IdeaDetail = () => {
  const { toast } = useToast();
  const params = useParams();
  const { data, isLoading } = useSWR(
    params.slug ? { arg: { record_id: params.slug } } : null,
    GetIdeaDetail,
    {
      onError: (err) => {
        if (err instanceof ClientResponseError) {
          toast({
            variant: "destructive",
            title: "Terjadi Kesalahan",
            description: JSON.stringify(err.response, null, 2),
          });
        } else {
          toast({
            variant: "destructive",
            title: "Terjadi Kesalahan",
            description: "Tolong coba lagi setelah beberapa saat.",
          });
        }
      },
    }
  );

  return (
    <div className={`flex flex-col items-center`}>
      <div
        className={cn(`
          flex flex-col md:flex-row
          w-full max-w-[1000px] md:min-h-[400px]
        `)}
      >
        <img
          src={
            data?.images.length
              ? PocketBaseInstance.files.getUrl(data, data.images[0])
              : ""
          }
          width={400}
          height={400}
          alt={data?.title}
          className={cn(`
            flex-none object-contain
          `)}
        />
        <div
          className={cn(`
            flex flex-col items-center gap-5
            p-5
            md:items-start
          `)}
        >
          <h1
            className={cn(`
             text-3xl font-bold
            `)}
          >
            {data?.title}
          </h1>
          <p
            className={cn(`
              flex gap-2
              w-full
              text-md text-gray-600
            `)}
          >
            <User2 />
            {
              (
                data as unknown as {
                  expand: { user: { fullname: string } };
                }
              )?.expand?.user?.fullname
            }
          </p>
          <h4
            className={cn(`
              text-md text-gray-600
            `)}
          >
            {data?.abstract}
          </h4>
          {/* <div className={cn(`flex items-center gap-2`)}>
            <p>500 Likes</p>
            <Button className={cn(`gap-1`)}>
              <ThumbsUp size="16px" />
              Like
            </Button>
          </div> */}
        </div>
      </div>

      <Separator className={`w-full md:max-w-[1000px] my-2`} />

      <div
        className={cn(`
          w-full md:max-w-[1000px]
          flex flex-col md:flex-row gap-4
          my-6
        `)}
      >
        <div
          className={cn(`flex flex-col basis-9/12 px-4 md:px-0 rich-editor`)}
        >
          <Markdown>{data?.description}</Markdown>
        </div>

        <div className={cn(`flex flex-col items-center basis-3/12`)}>
          {/* <h1
            className={cn(`
              text-2xl my-4
            `)}
          >
            Komentar
          </h1>
          <Card className={`w-full max-w-[300px]`}>
            <CardHeader>
              <CardTitle>Ide Utama</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio enim necessitatibus consequuntur voluptates molestias
              culpa veritatis voluptat.
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;
