import { IdeasModel } from "@/interfaces";
import PocketBaseInstance from "@/lib/pocketbase";

export const PostCreateIdeas = async (
  _key: string,
  { arg }: { arg: { data: FormData } }
) => {
  return await PocketBaseInstance.collection("ideas").create<IdeasModel>(
    arg.data
  );
};
