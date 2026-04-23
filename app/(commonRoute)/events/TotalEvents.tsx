import { fetchEvents } from "@/lib/FetchEvents";


export default async function TotalEvents() {
  const events = await fetchEvents();

  return (
    <div>
      Total Events: {events?.data?.length || 0}
    </div>
  );
}