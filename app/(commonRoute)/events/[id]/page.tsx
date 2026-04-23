import { fetchSingleEvent } from "@/lib/FetchSingleEvent";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const event = await fetchSingleEvent(id);

  if (!event?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        Event not found
      </div>
    );
  }

  const data = event.data;

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 px-4 py-12">
      
      {/* CARD */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">
            {data?.title}
          </h1>
          <p className="mt-2 text-white/80">
            {data?.description}
          </p>
        </div>

        {/* BODY */}
        <div className="p-6 grid md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="space-y-4">

            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-sm text-gray-500">📍 Venue</p>
              <p className="font-medium text-gray-900">{data?.venue}</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-sm text-gray-500">📅 Date</p>
              <p className="font-medium text-gray-900">
                {formatDate(data?.date)}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-sm text-gray-500">⏰ Time</p>
              <p className="font-medium text-gray-900">{data?.time}</p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-4">

            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-sm text-gray-500">🎯 Event Type</p>

              <span
                className={`inline-block mt-2 px-3 py-1 text-sm rounded-full font-medium ${
                  data?.eventType === "PUBLIC"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {data?.eventType}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-sm text-gray-500">💰 Fee</p>
              <p className="text-xl font-bold text-indigo-600">
                {data?.fee === 0 ? "Free" : `$${data?.fee}`}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50">
              <p className="text-sm text-gray-500">⭐ Rating</p>
              <p className="font-medium">
                {data?.avgRating || 0}/5
              </p>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t px-6 py-4 flex justify-between text-sm text-gray-500">
          <span>Hosted by {data?.creator?.name}</span>
          <span>
            {data?.createdAt && formatDate(data.createdAt)}
          </span>
        </div>

      </div>
    </div>
  );
}