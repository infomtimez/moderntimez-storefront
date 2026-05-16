import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    heading: "Shop",
    links: [
      { label: "All Products", href: "/collections/frontpage" },
      { label: "Corporate Awards", href: "/collections/corporate-awards" },
      { label: "Realtor Gifts", href: "/collections/realtor-closing-gifts" },
      { label: "Baptism Gifts", href: "/collections/baptism-gifts" },
      { label: "Wedding Gifts", href: "/collections/wedding-gifts" },
      { label: "Graduation Gifts", href: "/collections/graduation-gifts" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Shipping Policy", href: "/policies/shipping" },
      { label: "Return Policy", href: "/policies/returns-cancellations" },
      { label: "Personalization Policy", href: "/policies/personalization" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Custom Engraving", href: "/personalization" },
      { label: "Bulk Orders", href: "/bulk" },
      { label: "Logo Engraving", href: "/personalization/logo-engraving" },
      { label: "Corporate Recognition", href: "/collections/corporate-awards" },
      {
        label: "Realtor Gift Program",
        href: "/collections/realtor-closing-gifts",
      },
      { label: "Request a Quote", href: "/request-quote" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About ModernTimez", href: "/about" },
      { label: "Stories", href: "/stories" },
      { label: "Privacy Policy", href: "/policies/privacy" },
      { label: "Terms of Service", href: "/policies/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0d1117] text-[#e5e1d8]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="ModernTimez"
              width={140}
              height={42}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-[#a09890]">
              Personalized engraving and meaningful gifts crafted with care in
              Texas since 2006.
            </p>
            <Link
              href="/request-quote"
              className="mt-6 inline-block rounded border border-[#c9a45c] px-5 py-2 text-sm tracking-wide text-[#c9a45c] transition-colors hover:bg-[#c9a45c] hover:text-[#0d1117]"
            >
              Request a Quote
            </Link>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#c9a45c]">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#a09890] transition-colors hover:text-[#e5e1d8]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#1e2530] pt-8 sm:flex-row">
          <p className="text-xs text-[#a09890]">
            &copy; {new Date().getFullYear()} ModernTimez. All rights reserved.
          </p>
          <p className="text-xs text-[#a09890]">
            Premium personalized gifts &amp; awards &mdash; crafted in Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
