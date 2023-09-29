"use client";

import { ThumbsUp, User2 } from "lucide-react";
import Image from "next/image";

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

const IdeaDetail = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <div
        className={cn(`
          flex flex-col md:flex-row
          w-full max-w-[1000px] md:min-h-[400px]
        `)}
      >
        <Image
          src="https://placehold.co/500x500.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className={cn(`
            flex-none
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
             text-2xl
            `)}
          >
            Pembuatan Instagram Bot Islami
          </h1>
          <p
            className={cn(`
              flex gap-2
              w-full
              text-md text-gray-600
            `)}
          >
            <User2 />
            Ilham Paramita
          </p>
          <h4
            className={cn(`
              text-md text-gray-600
            `)}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            officia quod quibusdam culpa sapiente alias libero unde vero vitae,
            eligendi dolor accusantium asperiores, repellendus itaque,
            distinctio enim cumque voluptate illum!
          </h4>
          <div className={cn(`flex items-center gap-2`)}>
            <p>500 Likes</p>
            <Button className={cn(`gap-1`)}>
              <ThumbsUp size="16px" />
              Like
            </Button>
          </div>
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
        <div className={cn(`flex flex-col basis-9/12 px-4 md:px-0 `)}>
          <h1
            className={cn(`
              text-2xl my-4
            `)}
          >
            Permasalahan
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            beatae impedit excepturi repellendus, aliquid voluptatum maxime
            adipisci doloremque sequi, temporibus nam consequuntur laborum
            fugiat, magnam cumque amet vero dolore animi.
          </p>
          <h1
            className={cn(`
              text-2xl my-4
            `)}
          >
            Solusi/Ide
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            beatae impedit excepturi repellendus, aliquid voluptatum maxime
            adipisci doloremque sequi, temporibus nam consequuntur laborum
            fugiat, magnam cumque amet vero dolore animi.
          </p>
          <h1
            className={cn(`
              text-2xl my-4
            `)}
          >
            Dampak
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            beatae impedit excepturi repellendus, aliquid voluptatum maxime
            adipisci doloremque sequi, temporibus nam consequuntur laborum
            fugiat, magnam cumque amet vero dolore animi.
          </p>
        </div>

        <div className={cn(`flex flex-col items-center basis-3/12`)}>
          <h1
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
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;
