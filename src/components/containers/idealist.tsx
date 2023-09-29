"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "../ui/button";
import { Form, FormField, FormItem, FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const formSchema = z.object({
  username: z.string(),
});

const IdeaList = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className={`flex flex-col items-center`}>
      <h1
        className={`
          text-center text-2xl
          p-10
        `}
      >
        Daftar Ide
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex justify-center gap-2`}
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Search" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">
            <Search />
          </Button>
        </form>
      </Form>
      <div
        className={`
            flex flex-wrap justify-center gap-4
            p-5 my-4
            md:w-[1000px] md:justify-start
          `}
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
            enim necessitatibus consequuntur voluptates molestias culpa
            veritatis voluptat.
          </CardContent>
          <CardFooter className={`flex justify-center`}>
            <Button>
              See More
            </Button>
          </CardFooter>
        </Card>
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
