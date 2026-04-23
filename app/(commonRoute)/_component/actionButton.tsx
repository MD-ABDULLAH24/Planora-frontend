"use client"
import { Button } from "@/components/ui/button"
import React from "react"
import { useFormStatus } from "react-dom"
export default function ActionButton({
  children,
}: {
  children: React.ReactNode
}) {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      className="w-full cursor-pointer rounded-full bg-linear-to-r from-indigo-500 to-purple-600 py-3 text-base font-medium text-white shadow-lg transition-transform hover:scale-[1.02]"
    >
      {pending ? "Loading..." : children}
    </Button>
  )
}
