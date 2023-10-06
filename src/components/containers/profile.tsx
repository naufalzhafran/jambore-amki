"use client";

import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { UpdateRegisteredUser } from "@/services/users";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { ClientResponseError } from "pocketbase";

const formSchema = z
  .object({
    fullname: z.string(),
    university: z.string(),
    phone_number: z.string(),
    email: z.string().email(),
  })
  .required();

const Profile = ({
  profileData,
}: {
  profileData?: Partial<z.infer<typeof formSchema>> & {
    id?: string;
    data_id?: string;
  };
}) => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...profileData },
  });

  const { trigger, isMutating } = useSWRMutation(
    "/users/create",
    UpdateRegisteredUser
  );

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!profileData?.id) {
      toast({
        variant: "destructive",
        title: "ERROR",
        description: "Please try again later",
      });
    }

    try {
      await trigger({
        userId: profileData?.id || "",
        dataId: profileData?.data_id || "",
        data: values,
      });
      toast({
        title: "SUCCESS",
        description: "Your data is successfully changed",
      });
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
    <Card className={cn(`w-full h-fit md:max-w-2xl`)}>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
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
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Universitas</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor HP</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="register-form">
          Change Data
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Profile;
