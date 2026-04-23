"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"

export default function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    const email = e.target.email.value
    const password = e.target.password.value

    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // 🔥 VERY IMPORTANT
      })

      const result = await res.json()

      if (!res.ok) {
        toast.error(result.message || "Login failed ❌")
        return
      }

      toast.success("Login successful ✅")

      // redirect
      router.push("/")
    } catch (error) {
      toast.error("Something went wrong ❌")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-md">
      <Card className="space-y-5 p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input name="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />

          <Button disabled={loading} className="w-full">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Card>
    </div>
  )
}
