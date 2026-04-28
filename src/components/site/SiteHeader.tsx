"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-ivory">
            AA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-navy-900">
              Ajit Agarwal & Associates
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">
              Chartered Accountants
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-navy-800 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-navy-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-navy-900/20 px-4 py-2 text-xs font-semibold text-navy-900 transition hover:border-navy-900/40"
          >
            Book Consultation
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-ivory card-shadow transition hover:bg-navy-800"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span className="text-xs font-semibold">
            {isOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/50 bg-white/90 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-navy-800">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-navy-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full border border-navy-900/20 px-4 py-2 text-center text-xs font-semibold text-navy-900"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
