import { cookies } from "next/headers";

export async function fetchSingleEvent(id: string) {
  const cookieStore = await cookies(); // ❌ await lagbe na
  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`http://localhost:5000/api/v1/events/${id}`, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!res.ok) {
   console.log("Single event API failed");
    return null;
  }

  return res.json();
}