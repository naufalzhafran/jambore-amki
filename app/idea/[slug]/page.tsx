import IdeaDetail from "@/components/containers/ideadetail";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <IdeaDetail />
      </main>
      <Footer />
    </>
  );
}
