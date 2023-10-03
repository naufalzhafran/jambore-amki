/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
// import { Trash, X } from "lucide-react";
import { useState } from "react";
import { Toast, ToasterToast } from "../ui/use-toast";

type IdeaImgUploaderProps = {
  toastFn: ({ ...props }: Toast) => {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
  };
  files: File[];
  setFiles: (files: File[]) => void;
  imagesUrl: string[];
};

const IdeaImgUploader = ({
  toastFn,
  files,
  setFiles,
  imagesUrl,
}: IdeaImgUploaderProps) => {
  const [selectedFile, setSelectedFile] = useState(0);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files) {
      let file = e.target.files;

      for (let i = 0; i < file.length; i++) {
        const fileType = file[i]["type"];
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        if (validImageTypes.includes(fileType)) {
          setFiles([file[0]]);
        } else {
          toastFn({
            variant: "destructive",
            title: "Error",
            description: "Only images accepted",
          });
        }
      }
    }
  };

  const removeImage = (i: string) => {
    setFiles(files.filter((x) => x.name !== i));
  };

  return (
    <div
      className={cn(
        `flex justify-center flex-col items-center gap-4 p-6 rounded`
      )}
    >
      {files.length ? (
        <img
          className="w-full rounded-md"
          src={URL.createObjectURL(files[selectedFile])}
          alt="idea"
        />
      ) : imagesUrl && imagesUrl.length ? (
        <img className="w-full rounded-md" src={imagesUrl[0]} alt="idea" />
      ) : null}
      <div className={cn(`flex items-center justify-center w-full h-full`)}>
        <label className="flex cursor-pointer flex-col w-full h-full border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
          <div className="flex flex-col items-center justify-center pt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
              {files.length ? "Ganti" : "Upload"} Foto
            </p>
          </div>
          <input
            type="file"
            onChange={handleFile}
            className="opacity-0"
            multiple
            name="files[]"
          />
        </label>
      </div>

      {/* <div className="flex flex-wrap justify-center gap-2 mt-2">
        {files.map((file, key) => {
          return (
            <div
              key={key}
              className="overflow-hidden relative cursor-pointer p-3 bg-gray-300 rounded"
            >
              <i
                onClick={() => {
                  removeImage(file.name);
                }}
                className="absolute bg-red-400 rounded-full right-1 top-1 cursor-pointer p-1"
              >
                <Trash className="w-4 h-4"/>
              </i>
              <img
                onClick={() => setSelectedFile(key)}
                className="h-24 w-24 rounded-md"
                src={URL.createObjectURL(file)}
                alt="idea"
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default IdeaImgUploader;
