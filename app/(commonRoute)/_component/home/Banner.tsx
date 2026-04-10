// Server Component - no "use client"
import BannerButton from "./BannerButton";

export default function Banner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-indigo-50 via-white to-gray-100 px-4 sm:px-6 lg:px-8 text-center">
      {/* Background Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 sm:w-md sm:h-md bg-indigo-300/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Discover & Join Amazing Events
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-xl sm:max-w-2xl text-base sm:text-lg md:text-xl text-gray-700">
          Planora helps you create, manage, and join events seamlessly. Public or private, free or paid — all in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <BannerButton />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="block w-3 h-3 bg-gray-400 rounded-full" />
      </div>
    </section>
  );
}
