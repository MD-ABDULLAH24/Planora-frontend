export async function fetchEvents() {
  const res = await fetch("http://localhost:5000/api/v1/events", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log("Failed to fetch events");
    return { data: [] };
  }

  return res.json();
}