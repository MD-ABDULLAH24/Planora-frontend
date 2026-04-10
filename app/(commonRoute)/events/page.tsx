import React from "react"

const EventPage = async () => {
  const data = await fetch("http://localhost:5000/api/v1/events")
  const posts = await data.json()
  return <div>Event Page</div>
}

export default EventPage
