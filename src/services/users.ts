import { UserModel } from "@/interfaces";
import PocketBaseInstance from "@/lib/pocketbase";

export const PostRegisterUser = async (
  _key: string,
  { arg }: { arg: { data: Partial<UserModel> } }
) => {
  return await PocketBaseInstance.collection("users").create<UserModel>(
    arg.data
  );
};

