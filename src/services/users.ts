import { UserModel } from "@/interfaces";
import PocketBaseInstance from "@/lib/pocketbase";

export const PostRegisterUser = async (
  _key: string,
  { arg }: { arg: { data: Partial<UserModel> } }
) => {
  const createdUser = await PocketBaseInstance.collection("users").create<
    Omit<UserModel, "phone_number"> & { id: string }
  >(arg.data);

  return await PocketBaseInstance.collection("users_data").create<
    Pick<UserModel, "phone_number">
  >({ ...arg.data, users: createdUser.id });
};

export const UpdateRegisteredUser = async (
  _key: string,
  { arg }: { arg: { userId: string; dataId: string; data: Partial<UserModel> } }
) => {
  await PocketBaseInstance.collection("users").update<
    Omit<UserModel, "phone_number">
  >(arg.userId, arg.data);
  return await PocketBaseInstance.collection("users_data").update<
    Pick<UserModel, "phone_number">
  >(arg.dataId, arg.data);
};

export const PostLoginUser = async (
  _key: string,
  { arg }: { arg: { email: string; password: string } }
) => {
  return await PocketBaseInstance.collection("users").authWithPassword(
    arg.email,
    arg.password
  );
};
