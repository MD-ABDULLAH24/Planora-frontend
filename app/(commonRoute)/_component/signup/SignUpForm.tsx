"use client"

import { registerAction } from "@/app/(commonRoute)/_action/auth"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useActionState, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import ActionButton from "../actionButton"

export default function SignUpForm() {
  const [state, formAction, pending] = useActionState(registerAction, null)
  const router = useRouter()

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  })

  useEffect(() => {
    if (!state) return

    if (!state.success) {
      toast.error(state.message || "Registration failed ❌")
    } else {
      toast.success("Account created successfully 🎉")
      router.push("/login")
    }
  }, [state, router])

  const handleSubmit = (e: any) => {
    const form = e.currentTarget
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const password = form.password.value.trim()

    let newErrors = {
      name: "",
      email: "",
      password: "",
    }

    if (!name) {
      newErrors.name = "Name is required"
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

    if (newErrors.name || newErrors.email || newErrors.password) {
      e.preventDefault()
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-20 blur-xl"></div>

      <Card className="relative space-y-5 rounded-3xl border bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
        <form action={formAction} onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <Input
              name="name"
              type="text"
              placeholder="Full name"
              className={`h-12 rounded-xl bg-gray-50 text-sm ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email address"
              className={`h-12 rounded-xl bg-gray-50 text-sm ${
                errors.email ? "border-red-500" : ""
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
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Button */}
          <ActionButton>
            {pending ? "Creating account..." : "Sign Up"}
          </ActionButton>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="cursor-pointer font-semibold text-black hover:underline"
          >
            Login
          </span>
        </p>
      </Card>
    </div>
  )
}
