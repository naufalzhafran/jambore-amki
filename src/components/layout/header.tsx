"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogOut, User, UserCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import PocketBaseInstance from "@/lib/pocketbase";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header
      className={cn(`
        w-full px-10 py-5
        flex justify-between items-center
        bg-white 
     `)}
    >
      <div>
        <Image src="/logo.webp" width={75} height={50} alt="logo" />
      </div>
      <div>
        {isClient ? (
          PocketBaseInstance.authStore.isValid ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className={`gap-2`} variant="outline">
                  <UserCircle />
                  {PocketBaseInstance.authStore.model?.fullname}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile/ideas">
                      <User className="mr-2 h-4 w-4" />
                      <span>Ide Saya</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={() => {
                    PocketBaseInstance.authStore.clear();
                    document.cookie =
                      PocketBaseInstance.authStore.exportToCookie({
                        httpOnly: false,
                      });

                    toast({
                      title: "SUCCESS",
                      description: "Logout Success",
                    });
                    setTimeout(() => router.push("/"), 500);
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link href="/auth">Login</Link>
            </Button>
          )
        ) : null}
      </div>
    </header>
  );
};

export default Header;
