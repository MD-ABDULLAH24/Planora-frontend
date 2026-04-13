"use client"

import { loginAction } from "@/app/(commonRoute)/_action/auth"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useActionState, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, null)
  const router = useRouter()

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    if (!state) return

    if (!state.success) {
      toast.error(state.message || "Login failed ❌")
    } else {
      toast.success("Login successful ✅")
      router.push("/")
    }
  }, [state, router])

  const handleSubmit = (e: any) => {
    const form = e.currentTarget
    const email = form.email.value.trim()
    const password = form.password.value.trim()

    let newErrors = {
      email: "",
      password: "",
    }

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 characters required"
    }

    setErrors(newErrors)

    if (newErrors.email || newErrors.password) {
      e.preventDefault()
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-20 blur-xl"></div>

      <Card className="relative space-y-5 rounded-3xl border bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
        <form
          action={formAction}
          onSubmit={handleSubmit}
          className="space-y-5 pt-10"
        >
          {/* Email */}
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email address"
              className={`h-12 rounded-xl bg-gray-50 text-sm ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-indigo-400"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className={`h-12 rounded-xl bg-gray-50 text-sm ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-purple-400"
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Extra Row */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" className="accent-indigo-500" />
              Remember me
            </label>
            <span className="cursor-pointer hover:underline">Forgot?</span>
          </div>

          {/* Button */}
          <Button
            type="submit"
            disabled={pending}
            className="h-12 w-full rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 font-medium text-white shadow-lg transition hover:scale-[1.02]"
          >
            {pending ? "Logging in..." : "Login"}
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="cursor-pointer font-semibold text-black hover:underline"
          >
            Sign up
          </span>
        </p>
      </Card>
    </div>
  )
}
