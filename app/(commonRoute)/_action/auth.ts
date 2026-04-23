"use server";

import { cookies } from "next/headers";

// ================= LOGIN =================
export async function loginAction(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return { success: false, message: "Email and password required" };
    }

    const response = await fetch(
      "http://localhost:5000/api/v1/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // ⭐ IMPORTANT
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result?.message || "Login failed",
      };
    }

    return {
      success: true,
      message: "Login successful",
      data: {
        accessToken: result?.data?.accessToken,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}
// ================= REGISTER =================
export async function registerAction(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    const response = await fetch(
      "http://localhost:5000/api/v1/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result?.message || "Register failed",
      };
    }

    return {
      success: true,
      message: "Account created successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}