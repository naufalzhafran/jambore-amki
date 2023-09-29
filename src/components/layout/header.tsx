import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

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
        <Button>Login</Button>
      </div>
    </header>
  );
};

export default Header;
