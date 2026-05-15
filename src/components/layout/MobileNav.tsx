"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Shop Gifts", href: "/collections/frontpage" },
  { label: "Corporate Awards", href: "/collections/corporate-awards" },
  { label: "Realtor Gifts", href: "/collections/realtor-closing-gifts" },
  { label: "Baptism & Sacraments", href: "/collections/baptism-gifts" },
  { label: "Personalization", href: "/personalization" },
  { label: "About", href: "/about" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function close() {
    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded text-[#e5e1d8] transition-colors hover:text-[#c9a45c] lg:hidden"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={close}
          aria-hidden
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-[#0d1117] transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-modal
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between border-b border-[#2a3040] px-6 py-4">
          <span
            className="text-sm font-semibold tracking-[0.15em] text-[#f7f1e6]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            MODERNTIMEZ
          </span>
          <button
            onClick={close}
            aria-label="Close menu"
            className="text-[#e5e1d8] transition-colors hover:text-[#c9a45c]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={`px-6 py-3.5 text-sm tracking-wide transition-colors hover:text-[#c9a45c] ${
                pathname === item.href ? "text-[#c9a45c]" : "text-[#e5e1d8]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-[#2a3040] p-6">
          <Link
            href="/request-quote"
            onClick={close}
            className="block rounded border border-[#c9a45c] px-4 py-2.5 text-center text-sm tracking-wide text-[#c9a45c] transition-colors hover:bg-[#c9a45c] hover:text-[#0d1117]"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </>
  );
}
