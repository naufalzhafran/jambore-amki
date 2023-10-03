import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";


const SubmittedIdeas = () => {
  return (
    <main className={cn(`min-h-[calc(100vh-80px)] px-6 py-10`)}>
      <div
        className={cn(`
        flex justify-center items-start flex-wrap gap-5    
        md:justify-start
      `)}
      >
        <Card className={`w-full max-w-[300px]`}>
          <Image
            src="https://placehold.co/500x500.png"
            width={400}
            height={400}
            alt="Picture of the author"
          />
          <CardHeader>
            <CardTitle>Ide Utama</CardTitle>
            <CardDescription>Jumlah Peserta</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          </CardContent>
          <CardFooter className={`flex justify-center gap-2`}>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </CardFooter>
        </Card>
        <Card
          className={cn(`
            w-full max-w-[300px] 
            `)}
        >
          <Link
            className={cn(`
              w-full h-full p-10
              flex items-center justify-center
            `)}
            href="/profile/ideas/create"
          >
            <Plus />
          </Link>
        </Card>
      </div>
    </main>
  );
};

export default SubmittedIdeas;
