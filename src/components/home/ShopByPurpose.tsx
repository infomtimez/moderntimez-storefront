import Link from "next/link";

const categories = [
  {
    label: "Baptism & Sacraments",
    description:
      "Engraved compasses, cross wooden boxes, and religious keepsakes for sacred milestones.",
    href: "/collections/baptism-gifts",
    accent: "#101A24",
  },
  {
    label: "Corporate Awards",
    description:
      "Custom plaques, crystal awards, trophies, and executive gifts for teams and leaders.",
    href: "/collections/corporate-awards",
    accent: "#1f1510",
  },
  {
    label: "Realtor Closing Gifts",
    description:
      "Personalized cutting boards, wine boxes, and BBQ sets for new homeowners.",
    href: "/collections/realtor-closing-gifts",
    accent: "#14201a",
  },
  {
    label: "Wedding & Groomsmen",
    description:
      "Pocket watches, keepsakes, and engraved gifts for the wedding party.",
    href: "/collections/wedding-gifts",
    accent: "#1a1225",
  },
  {
    label: "Graduation & Milestones",
    description:
      "Recognition gifts and keepsakes for graduates, retirees, and major life moments.",
    href: "/collections/graduation-gifts",
    accent: "#1a2010",
  },
];

export function ShopByPurpose() {
  return (
    <section className="bg-[#f7f1e6] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            Shop by Occasion
          </p>
          <h2
            className="text-4xl font-light text-[#0d1117] sm:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Find the Perfect Gift
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-lg p-6"
              style={{ backgroundColor: cat.accent, minHeight: "220px" }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent opacity-0 transition-opacity group-hover:opacity-60" />
              <p
                className="text-xl font-light leading-snug text-[#f7f1e6]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {cat.label}
              </p>
              <div>
                <p className="mb-4 text-sm leading-relaxed text-[#6b6560]">
                  {cat.description}
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a45c] transition-opacity group-hover:opacity-80">
                  Shop Now &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
