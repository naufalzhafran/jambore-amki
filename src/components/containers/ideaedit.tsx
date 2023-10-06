"use client";

import { Suspense, useRef, useState } from "react";
import dynamic from "next/dynamic";
import useSWRMutation from "swr/mutation";
import useSWR from "swr";
import { ClientResponseError } from "pocketbase";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

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
import {
  GetIdeaDetail,
  PostCreateIdeas,
  PostUpdateIdeas,
} from "@/services/ideas";
import PocketBaseInstance from "@/lib/pocketbase";
import Link from "next/link";
import { MDXEditorMethods } from "@mdxeditor/editor";

const EditorComp = dynamic(() => import("../ui/rich-editor"), { ssr: false });

const IdeaEdit = ({ userId }: { userId: string }) => {
  const [longDesc, setLongDesc] = useState("");
  const [ideaTitle, setIdeaTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [imageFilename, setImageFilename] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [serverImage, setServerImage] = useState("");
  const mdEditorRef = useRef<MDXEditorMethods | null>(null);

  const params = useParams();
  const router = useRouter();

  const { toast } = useToast();

  const { trigger: triggerCreate, isMutating: isMutatingCreate } =
    useSWRMutation("/idea/create", PostCreateIdeas);

  const { trigger: triggerUpdate, isMutating: isMutatingUpdate } =
    useSWRMutation("/idea/update", PostUpdateIdeas);

  const { isLoading } = useSWR(
    params.slug ? { arg: { record_id: params.slug } } : null,
    GetIdeaDetail,

    {
      onSuccess: (data) => {
        setIdeaTitle(data.title);
        setLongDesc(data.description);
        mdEditorRef.current?.setMarkdown(data.description);
        setAbstract(data.abstract);
        setImageFilename(data.images[0]);
        setServerImage(
          data.images.length
            ? PocketBaseInstance.files.getUrl(data, data.images[0])
            : ""
        );
      },
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

  const handleSubmit = async () => {
    if (abstract.length > 450) {
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan",
        description: "Abstrak tidak boleh lebih dari 450 karakter.",
      });
      return;
    }

    const formData = new FormData();

    formData.append("title", ideaTitle);
    formData.append("abstract", abstract);
    formData.append("description", longDesc);
    formData.append("user", userId);

    if (files.length) {
      formData.append("images", files[0]);

      if (params.slug) {
        formData.append("images-", imageFilename);
      }
    }

    try {
      if (params.slug) {
        await triggerUpdate({
          record_id: params.slug as string,
          data: formData,
        });
      } else {
        await triggerCreate({ data: formData });
      }
      toast({
        title: "Berhasil",
        description: params.slug
          ? "Ide anda berhasil diubah"
          : "Ide anda berhasil didaftarkan",
      });
      setTimeout(() => router.push("/profile/ideas"), 500);
    } catch (err) {
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
    }
  };

  return (
    <main
      className={cn(
        `flex flex-col items-center justify-center min-h-[calc(100vh-80px)]`
      )}
    >
      <div className="w-full h-fit md:max-w-2xl">
        <Button asChild variant="outline" className="my-2">
          <Link href="/profile/ideas">
            <ArrowLeft /> Back
          </Link>
        </Button>
      </div>
      <Card className={cn(`w-full h-fit md:max-w-2xl`)}>
        <CardHeader>
          <CardTitle>Deskripsikan Ide Anda</CardTitle>
        </CardHeader>

        <IdeaImgUploader
          toastFn={toast}
          files={files}
          imagesUrl={serverImage ? [serverImage] : []}
          setFiles={setFiles}
        />

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
              placeholder="Maksimal 450 karakter"
              onChange={(e) => setAbstract(e.target.value)}
            />
            <p className="p-1 text-xs text-right">
              {abstract.length}/450 Karakter
            </p>
          </div>

          <Suspense fallback={<div />}>
            <div className="w-full items-center gap-1.5">
              <Label>Deskripsi Panjang</Label>
              <EditorComp
                markdown={longDesc}
                editorRef={mdEditorRef}
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
            {isMutatingCreate ?? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit Idea
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default IdeaEdit;
