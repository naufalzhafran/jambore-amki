"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import useSWRMutation from "swr/mutation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import IdeaImgUploader from "./ideaimguploader";
import { useToast } from "../ui/use-toast";
import { PostCreateIdeas } from "@/services/ideas";
import { ClientResponseError } from "pocketbase";
import { Loader2 } from "lucide-react";

const EditorComp = dynamic(() => import("../ui/rich-editor"), { ssr: false });

const IdeaEdit = ({ userId }: { userId: string }) => {
  const [longDesc, setLongDesc] = useState("");
  const [ideaTitle, setIdeaTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const { toast } = useToast();

  const { trigger, isMutating } = useSWRMutation(
    "/idea/create",
    PostCreateIdeas
  );

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("title", ideaTitle);
    formData.append("abstract", abstract);
    formData.append("description", longDesc);
    formData.append("user", userId);

    if (files.length) {
      formData.append("images", files[0]);
    }

    try {
      await trigger({ data: formData });
      toast({
        title: "SUCCESS",
        description: "Your Idea is submitted",
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
    <main
      className={cn(
        `flex items-center justify-center min-h-[calc(100vh-80px)]`
      )}
    >
      <Card className={cn(`w-full h-fit md:max-w-2xl`)}>
        <CardHeader>
          <CardTitle>Deskripsikan Ide Anda</CardTitle>
        </CardHeader>

        <IdeaImgUploader toastFn={toast} files={files} setFiles={setFiles} />

        <CardContent>
          <div className="w-full items-center gap-1.5">
            <Label htmlFor="title">Judul</Label>
            <Input
              id="title"
              placeholder="Judul"
              value={ideaTitle}
              onChange={(e) => setIdeaTitle(e.target.value)}
            />
          </div>

          <div className="w-full items-center gap-1.5">
            <Label htmlFor="abstract">Abstrak/Rangkuman</Label>
            <Textarea
              id="abstract"
              value={abstract}
              placeholder="Maksimal 150 karakter"
              onChange={(e) => setAbstract(e.target.value)}
            />
          </div>

          <Suspense fallback={<div />}>
            <div className="w-full items-center gap-1.5">
              <Label>Deskripsi Panjang</Label>
              <EditorComp
                markdown={longDesc}
                onChange={(val) => setLongDesc(val)}
              />
            </div>
          </Suspense>
        </CardContent>
        <CardFooter>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
             {isMutating ?? <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Idea
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default IdeaEdit;
