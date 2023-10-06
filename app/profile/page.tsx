import Profile from "@/components/containers/profile";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { server_component_pb } from "@/lib/servercookie";

export default async function Page() {
  const { PocketBaseInstance } = await server_component_pb();
  const user = PocketBaseInstance.authStore.model;
  const user_data = user
    ? await PocketBaseInstance.collection("users_data").getFirstListItem<{
        phone_number: string;
        id: string;
      }>(`users = "${user?.id || ""}"`)
    : { phone_number: "", id: "" };

  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-[calc(100vh-80px)] px-6">
        <Profile
          profileData={
            {
              ...user,
              phone_number: user_data?.phone_number,
              data_id: user_data?.id,
            } || {}
          }
        />
      </main>
      <Footer />
    </>
  );
}
