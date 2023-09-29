import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const Summary = () => {
  return (
    <div className={`my-8`}>
      <h1
        className={`
          text-center text-2xle
          p-10
        `}
      >
        Ayo Bawa Kreatifitas ke Sini
      </h1>
      <div
        className={`
          w-full
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
