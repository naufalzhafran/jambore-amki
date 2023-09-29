import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const Summary = () => {
  return (
    <div
      className={`
          flex flex-col gap-2 items-center
          bg-primary
          p-10
        `}
    >
      <h1
        className={`
          text-center text-3xl text-white
          p-5
        `}
      >
        Ayo Bawa Kreatifitas ke Sini
      </h1>
      <Button variant="secondary" className={`w-fit`}>
        Daftarkan Ide Anda Disini
      </Button>
      <div
        className={`
          w-full mt-5
          flex items-center justify-center flex-wrap gap-4
        `}
      >
        <Card className={`w-full max-w-[200px]`}>
          <CardHeader className={`items-center`}>
            <CardTitle>50000</CardTitle>
            <CardDescription>Jumlah Peserta</CardDescription>
          </CardHeader>
        </Card>
        <Card className={`w-full max-w-[200px]`}>
          <CardHeader className={`items-center`}>
            <CardTitle>50000</CardTitle>
            <CardDescription>Jumlah Ide</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Summary;
