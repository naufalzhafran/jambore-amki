import Profile from "@/components/containers/profile";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-[calc(100vh-80px)] px-6">
        <Profile />
      </main>
      <Footer />
    </>
  );
}
