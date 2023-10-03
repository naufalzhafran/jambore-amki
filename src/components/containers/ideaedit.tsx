"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";

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

const EditorComp = dynamic(() => import("../ui/rich-editor"), { ssr: false });

const IdeaEdit = () => {
  const [longDesc, setLongDesc] = useState("");
  const [ideaTitle, setIdeaTitle] = useState("");
  const [abstract, setAbstract] = useState("");

  const { toast } = useToast();

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

        <IdeaImgUploader toastFn={toast} />

        <CardContent className="space-y-2">
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
          <Button type="submit" form="register-form">
            Submit Idea
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default IdeaEdit;
