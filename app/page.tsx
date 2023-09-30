import IdeaList from "@/components/containers/idealist";
import Summary from "@/components/containers/summary";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="p-y-4">
        <Summary />
        <IdeaList />
      </main>
      <Footer />
    </>
  );
}
