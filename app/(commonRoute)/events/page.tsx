import Link from "next/link";
import { fetchEvents } from "@/lib/FetchEvents";
import TotalEvents from "./TotalEvents";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function Page() {
  const events = await fetchEvents();

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 px-4 py-10">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Explore Events
        </h1>
        <p className="text-gray-500 mt-2">
          Discover tech meetups, workshops & conferences
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {events?.data?.map((event: any) => (
          <div
            key={event.id}
            className="group bg-white rounded-2xl border shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
          >

            {/* TOP */}
            <div className="p-5">

              {/* TITLE */}
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition">
                {event.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                {event.description}
              </p>

              {/* INFO */}
              <div className="mt-4 space-y-1 text-sm text-gray-600">

                <p>📍 {event.venue}</p>

                <p>📅 {formatDate(event.date)}</p>

                <p>⏰ {event.time}</p>

              </div>

              {/* BADGE + PRICE */}
              <div className="flex items-center justify-between mt-5">

                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    event.eventType === "PUBLIC"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {event.eventType}
                </span>

                <span className="font-bold text-indigo-600">
                  {event.fee === 0 ? "Free" : `$${event.fee}`}
                </span>

              </div>

            </div>

            {/* FOOTER BUTTON */}
            <div className="border-t p-4 bg-gray-50">
              <Link href={`/events/${event.id}`}>
                <button className="w-full cursor-pointer bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                  View Details
                </button>
              </Link>
            </div>

          </div>
        ))}

      </div>

      {/* TOTAL */}
      <div className="mt-12 text-center">
        <TotalEvents />
      </div>

    </div>
  );
}