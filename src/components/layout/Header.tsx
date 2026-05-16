import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

const nav = [
  { label: "Shop Gifts", href: "/collections/frontpage" },
  { label: "Corporate Awards", href: "/collections/corporate-awards" },
  { label: "Realtor Gifts", href: "/collections/realtor-closing-gifts" },
  { label: "Baptism & Sacraments", href: "/collections/baptism-gifts" },
  { label: "Personalization", href: "/personalization" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2a3040] bg-[#0d1117]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="ModernTimez"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-[#e5e1d8] transition-colors hover:text-[#c9a45c]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/request-quote"
            className="hidden rounded border border-[#c9a45c] px-4 py-2 text-sm tracking-wide text-[#c9a45c] transition-colors hover:bg-[#c9a45c] hover:text-[#0d1117] sm:block"
          >
            Request Quote
          </Link>
          <Link
            href="/cart"
            className="flex h-9 w-9 items-center justify-center rounded text-[#e5e1d8] hover:text-[#c9a45c]"
            aria-label="Cart"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
