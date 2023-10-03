import SubmittedIdeas from "@/components/containers/submittedideas";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { server_component_pb } from "@/lib/servercookie";

export default async function Page() {
  const { PocketBaseInstance } = await server_component_pb();
  const user = PocketBaseInstance.authStore.model;

  return (
    <>
      <Header />
      <SubmittedIdeas userId={user?.id || ""} />
      <Footer />
    </>
  );
}
