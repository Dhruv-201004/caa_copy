"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const adminLinks = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/team", label: "Team" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/certificates", label: "Certificates" },
  { href: "/admin/careers", label: "Careers" },
  { href: "/admin/contacts", label: "Contacts" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 flex-col border-r border-slate-200 bg-white p-6 lg:flex">
      <div className="text-sm font-semibold text-navy-900">
        Ajit Agarwal & Associates
      </div>
      <span className="mt-1 text-xs uppercase tracking-[0.3em] text-gold">
        Admin Panel
      </span>
      <nav className="mt-8 flex flex-1 flex-col gap-2 text-sm">
        {adminLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-3 py-2 transition ${
                isActive
                  ? "bg-navy-900 text-ivory"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
