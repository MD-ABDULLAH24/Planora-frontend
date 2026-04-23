"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Card } from "@/components/ui/card";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (token) {
      const decoded: any = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6">

      <Card className="w-full max-w-md rounded-3xl p-8 shadow-2xl border bg-white/80 backdrop-blur-xl">

        {/* Avatar */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          {/* Name */}
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            {user.name || "Unknown User"}
          </h1>

          {/* Role Badge */}
          <span className="mt-2 px-4 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-600">
            {user.role || "User"}
          </span>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-4">

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Email</span>
            <span className="text-gray-800 font-medium">
              {user.email}
            </span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">User ID</span>
            <span className="text-gray-800 font-medium text-xs">
              {user.id}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="text-green-600 font-semibold">
              Active
            </span>
          </div>

        </div>

      </Card>
    </div>
  );
}