import Link from "next/link";

import Login from "@/components/containers/login";
import Register from "@/components/containers/register";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";

const Page = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center p-4">
      <Tabs defaultValue="login" className="w-[400px]">
        <Button asChild variant="outline" className="my-2">
          <Link href="/">
            <ArrowLeft /> Back
          </Link>
        </Button>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="register">
          <Register />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Page;
