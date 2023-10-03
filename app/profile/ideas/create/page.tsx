import IdeaEdit from "@/components/containers/ideaedit";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { server_component_pb } from "@/lib/servercookie";

export default async function Page() {
  const { PocketBaseInstance } = await server_component_pb();
  const user = PocketBaseInstance.authStore.model;

  return (
    <>
      <Header />
      <IdeaEdit userId={user?.id || ""} />
      <Footer />
    </>
  );
}
