import IdeaList from "@/components/containers/idealist";
import Summary from "@/components/containers/summary";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-y-4">
        <Summary />
        <IdeaList />
      </main>
    </>
  );
}
