import { IdeasModel } from "@/interfaces";
import PocketBaseInstance from "@/lib/pocketbase";
import { RecordListOptions } from "pocketbase";
import { Fetcher } from "swr";

export const PostCreateIdeas = async (
  _key: string,
  { arg }: { arg: { data: FormData } }
) => {
  return await PocketBaseInstance.collection("ideas").create<IdeasModel>(
    arg.data
  );
};

export const PostUpdateIdeas = async (
  _key: string,
  { arg }: { arg: { record_id: string; data: FormData } }
) => {
  return await PocketBaseInstance.collection("ideas").update<IdeasModel>(
    arg.record_id,
    arg.data
  );
};

export const DeleteUpdateIdeas = async (
  _key: string,
  { arg }: { arg: { record_id: string } }
) => {
  return await PocketBaseInstance.collection("ideas").delete(arg.record_id);
};

export const GetListIdeas = ({
  arg,
}: {
  arg: { page: number; perPage: number; options?: RecordListOptions };
}) => {
  return PocketBaseInstance.collection("ideas").getList<IdeasModel>(
    arg.page,
    arg.perPage,
    arg.options
  );
};

export const GetIdeaDetail = ({ arg }: { arg: { record_id: string } }) => {
  return PocketBaseInstance.collection("ideas").getOne<IdeasModel>(
    arg.record_id,
    { expand: "user" }
  );
};
