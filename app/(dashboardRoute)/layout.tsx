export default function DashboardLayout({
  //   children,
  admin,
  user,
}: Readonly<{
  //   children: React.ReactNode
  admin: React.ReactNode
  user: React.ReactNode
}>) {
  const role = "admin" as "admin" | "user"
  return (
    <div>
      {role === "admin" && admin}
      {role === "user" && user}
    </div>
  )
}
