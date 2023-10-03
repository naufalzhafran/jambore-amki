import Profile from "@/components/containers/profile";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { server_component_pb } from "@/lib/servercookie";

export default async function Page() {
  const { PocketBaseInstance } = await server_component_pb();
  const user = PocketBaseInstance.authStore.model;
  
  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-[calc(100vh-80px)] px-6">
        <Profile profileData={user || {}} />
      </main>
      <Footer />
    </>
  );
}
