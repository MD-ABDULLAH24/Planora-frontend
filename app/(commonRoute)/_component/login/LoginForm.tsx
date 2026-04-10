"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md relative">
      {/* Glow Background */}
      <div className="absolute -inset-1 bg-linear-to-r from-indigo-400 to-purple-500 rounded-2xl blur opacity-20"></div>

      <div className="relative bg-white/90 backdrop-blur p-8 rounded-2xl shadow-2xl border">
        {/* Title inside card (optional subtle) */}
        <h2 className="text-xl font-semibold text-center mb-6 text-gray-700">
          Login
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="rounded-lg focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Extra Row */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-indigo-500" />
              Remember me
            </label>
            <span className="hover:underline cursor-pointer">Forgot?</span>
          </div>

          {/* Button */}
          <Button className="w-full rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white py-3 text-base font-medium shadow-lg hover:scale-[1.02] transition-transform">
            Login
          </Button>
        </form>

        {/* Footer */}
        <p  className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account? 
          <Link href={"/signup"} className="text-black font-medium cursor-pointer hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
