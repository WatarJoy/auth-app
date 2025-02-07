import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Snackbar from "./snackbar";

type SnackbarType = "info" | "error" | "success";
interface SnackbarState {
  open: boolean;
  message: string;
  type: SnackbarType;
}

const loginSchema = z.object({
  username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters" })
      .max(40, { message: "Username must be at most 40 characters" })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username can only contain letters, numbers, and underscores",
      }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    type: "error",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Invalid credentials");
      }
      const text = await res.text();
      const userData = text ? JSON.parse(text) : {};
      dispatch(setUser(userData));
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      setSnackbar({
        open: true,
        message: "Login failed. Please check your credentials.",
        type: "error",
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Username</label>
          <input
            type="username"
            {...register("username")}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message as string}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message as string}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        type={snackbar.type}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </>
  );
}
