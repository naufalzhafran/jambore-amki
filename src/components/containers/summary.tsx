import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { GetListIdeas } from "@/services/ideas";
import Link from "next/link";

const Summary = async () => {
  const data = await GetListIdeas({
    arg: {
      page: 1,
      perPage: 50,
    },
  });

  return (
    <div
      className={cn(`
          flex flex-col gap-2 items-center justify-center
          bg-primary
          min-h-[calc(100vh-80px)] p-10
        `)}
    >
      <h1
        className={cn(`
          text-center text-6xl text-white font-black
          p-5
        `)}
      >
        JAMBORE NASIONAL <br /> AMKI MUDA
      </h1>
      <h2
        className={cn(`
          text-center text-3xl text-white font-semibold
          p-2
        `)}
      >
        Inpirasi Membangun Negeri
      </h2>
      <Button asChild variant="secondary" className={`m-6 w-fit`}>
        <Link href="/profile/ideas/create">Daftarkan Karya Anda Disini</Link>
      </Button>
      <div
        className={`
          w-full mt-5
          flex items-center justify-center flex-wrap gap-4
        `}
      >
        <Card className={`w-full max-w-[200px]`}>
          <CardHeader className={`items-center`}>
            <CardTitle>{data?.totalItems}</CardTitle>
            <CardDescription>Jumlah Ide</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Summary;
