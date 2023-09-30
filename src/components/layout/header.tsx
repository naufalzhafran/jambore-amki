import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={cn(`
        w-full px-10 py-5
        flex justify-between items-center
        bg-white 
     `)}
    >
      <div> LOGO </div>
      <div>
        <Button asChild>
          <Link href="/auth">Login</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
