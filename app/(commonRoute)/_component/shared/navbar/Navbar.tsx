"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center">
          <span className="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Plan
          </span>
          <span className="text-gray-800">ora</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3 bg-gray-100/80 px-2 py-2 rounded-full shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-md"
                    : "text-gray-600 hover:text-black hover:bg-white/70"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute inset-0 rounded-full ring-2 ring-indigo-400/40" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              className="rounded-full px-5 cursor-pointer hover:bg-gray-100"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="rounded-full cursor-pointer px-6 bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform duration-200">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/login">
                    <Button variant="outline" className="w-full rounded-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
