import Navbar from "./_component/shared/navbar/Navbar"



export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Navbar/>
      {children}
      <div>Footer</div>
    </div>
  )
}
