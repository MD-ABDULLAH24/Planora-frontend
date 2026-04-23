"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

/* ICON */
const HamburgerIcon = () => <Menu className="w-5 h-5" />;

/* LINKS */
const defaultLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
];

export const Navbar = React.forwardRef<HTMLElement>((props, ref) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const containerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.offsetWidth < 768);
      }
    };

    handleResize();

    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const combinedRef = React.useCallback(
    (node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    },
    [ref]
  );

  return (
    <header
      ref={combinedRef}
      className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-xl shadow-sm"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* LEFT - LOGO */}
        <Link href="/" className="text-xl font-extrabold">
          <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Planora
          </span>
        </Link>

        {/* CENTER - NAV LINKS */}
        {!isMobile && (
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {defaultLinks.map((link, i) => (
                <NavigationMenuItem key={i}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-600 hover:text-black transition"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* RIGHT - AUTH */}
        {!isMobile && (
          <div className="flex items-center gap-3">

            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>

            <Link href="/signup">
              <Button size="sm" className="bg-indigo-600 text-white">
                Sign Up
              </Button>
            </Link>

          </div>
        )}

        {/* MOBILE */}
        {isMobile && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <HamburgerIcon />
              </Button>
            </PopoverTrigger>

            <PopoverContent align="end" className="w-52 p-3">

              <div className="flex flex-col gap-2">

                {defaultLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t pt-2 mt-2 flex flex-col gap-2">
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>

                  <Link href="/signup">
                    <Button className="w-full bg-indigo-600 text-white">
                      Sign Up
                    </Button>
                  </Link>
                </div>

              </div>
            </PopoverContent>
          </Popover>
        )}

      </div>
    </header>
  );
});

Navbar.displayName = "Navbar";