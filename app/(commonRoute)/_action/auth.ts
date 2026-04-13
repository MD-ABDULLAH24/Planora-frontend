"use server"

import { cookies } from "next/headers"

export async function loginAction(preState: any, formData: any) {
  try {
    const email = formData.get("email")
    const password = formData.get("password")

    if (!email || !password) {
      throw new Error("Email and password is required")
    }
    const response = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
      cache: "no-store",
    })
    const result = await response.json()

    if(!response.ok){
      return {success : false, message: result.message || "Login Failed"}
    }

    const { accessToken } = result.data

    const cookieOptions = await cookies()

    cookieOptions.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure:false,
      sameSite: "lax",
    })

    return {
      success: true,
      message: "Login successful"
    }
  } catch (error) {
    console.log(error)
  }
}
