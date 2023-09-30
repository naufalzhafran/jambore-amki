"use client";

import * as z from "zod";
import useSWRMutation from "swr/mutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { ClientResponseError } from "pocketbase";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { PostLoginUser } from "@/services/users";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .required();

const Login = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { trigger, isMutating } = useSWRMutation("/users/login", PostLoginUser);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await trigger({ email: values.email, password: values.password });
      toast({
        title: "SUCCESS",
        description: "Login Success",
      });
      setTimeout(() => router.push("/"), 500);
    } catch (err) {
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
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            className="space-y-2"
            id="register-form"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button disabled={isMutating} type="submit" form="register-form">
          {isMutating ?? <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
