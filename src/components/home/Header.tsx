"use client";

import { MoonIcon, SunIcon, PersonIcon, ExitIcon } from "@radix-ui/react-icons";
import { Gloria_Hallelujah } from "next/font/google";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
});

const navLinks = [
  {
    title: "Menu",
    url: "/menu",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },
];

const Header = () => {
  const user = useCurrentUser();
  const { setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 flex">
          <Link
            className={cn(
              gloriaHallelujah.className,
              "mr-6 flex items-center space-x-2"
            )}
            href="/"
          >
            <div className="text-5xl">M</div>
            <div className="flex flex-col">
              <span className="font-bold sm:inline-block relative top-1">
                otti
              </span>
              <span className="font-bold sm:inline-block relative -top-1">
                enu
              </span>
            </div>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.slice(user ? 0 : 1).map((link, idx) => (
              <Link
                key={idx}
                href={link.url}
                className={`transition-colors hover:text-foreground/80 text-foreground${
                  pathname !== link.url && "/60"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-between space-x-2 md:justify-end">
          {user ? (
            <>
              <Button variant="outline">
                <PersonIcon className="mr-2 h-4 w-4" />
                <span className="hidden sm:block">{user.email}</span>
              </Button>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" onClick={() => signOut()}>
                      <ExitIcon className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary p-1 rounded-lg">
                    <p>Logout</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          ) : (
            <Link href="/auth/login">
              <Button className="shadow-sm">Login</Button>
            </Link>
          )}
          <nav className="flex items-center">
            <Button variant="ghost" size="icon">
              <SunIcon
                onClick={() => setTheme("dark")}
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
              <MoonIcon
                onClick={() => setTheme("light")}
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
