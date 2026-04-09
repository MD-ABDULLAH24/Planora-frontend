"use client";
import { Button } from "@/components/ui/button";
const BannerButton = () => {
  return (
    <div className="space-x-4">
      <Button className="px-6 py-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform duration-200">
          Explore Events
        </Button>
        <Button variant="outline" className="px-6 py-3 rounded-full">
          Create Event
        </Button>
    </div>
  );
};

export default BannerButton;