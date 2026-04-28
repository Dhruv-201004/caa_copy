"use client";

import { signOut } from "next-auth/react";

type AdminTopbarProps = {
  userName?: string | null;
};

export default function AdminTopbar({ userName }: AdminTopbarProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4">
      <div>
        <div className="text-sm font-semibold text-navy-900">Dashboard</div>
        <div className="text-xs text-slate-500">
          Welcome back, {userName ?? "Admin"}
        </div>
      </div>
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/admin/login" })}
        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-slate-300"
      >
        Sign Out
      </button>
    </div>
  );
}
