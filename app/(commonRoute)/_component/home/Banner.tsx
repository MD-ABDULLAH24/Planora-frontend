// Server Component - no "use client"
import { Button } from "@/components/ui/button"
import BannerButton from "./BannerButton"

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-indigo-50 via-white to-gray-100 px-4 py-24 text-center">
      {/* Decorative Background Shapes */}
      <div className="animate-blob absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="animate-blob animation-delay-2000 absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

      {/* Hero Title */}
      <h1 className="mb-6 bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
        Discover & Join Amazing Events
      </h1>

      {/* Subtitle */}
      <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700 md:text-xl">
        Planora helps you create, manage, and join events seamlessly. Public or
        private, free or paid 
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-6">
        <BannerButton />
      </div>

      {/* Optional Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform animate-bounce">
        <span className="inline-block h-3 w-3 rounded-full bg-gray-400" />
      </div>
    </section>
  )
}
