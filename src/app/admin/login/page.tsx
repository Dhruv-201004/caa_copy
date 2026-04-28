"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin/dashboard";
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid credentials. Please try again.");
      return;
    }

    window.location.href = callbackUrl;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-6">
      <div className="glass-panel w-full max-w-md rounded-3xl p-8">
        <div className="text-sm font-semibold text-navy-900">Admin Login</div>
        <p className="mt-2 text-xs text-slate-500">
          Use your admin credentials to access the dashboard.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-navy-900">Email</label>
            <input
              name="email"
              type="email"
              required
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-navy-900">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
            />
          </div>
          {error ? <div className="text-xs text-red-600">{error}</div> : null}
          <button
            type="submit"
            className="rounded-full bg-navy-900 px-4 py-3 text-xs font-semibold text-ivory transition hover:bg-navy-800"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
