import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0d1117]">
      {/* Subtle brass gradient top edge */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent opacity-60" />

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
              Precision Engraving · Made in Texas
            </p>
            <h1
              className="text-5xl font-light leading-[1.1] tracking-tight text-[#f7f1e6] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Personalized Gifts &amp; Recognition Awards
              <em className="block text-[#c9a45c]">
                for Life&apos;s Most Meaningful Moments
              </em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#6b6560] sm:max-w-xl">
              From baptism keepsakes and wedding gifts to corporate awards and
              realtor closing gifts, ModernTimez creates custom engraved pieces
              made to be remembered.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/collections/frontpage"
                className="rounded bg-[#c9a45c] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#0d1117] transition-colors hover:bg-[#dfc080]"
              >
                Shop Personalized Gifts
              </Link>
              <Link
                href="/request-quote"
                className="rounded border border-[#e5e1d8]/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#e5e1d8] transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"
              >
                Request a Custom Quote
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                "Engraving since 2006",
                "Crafted in Texas",
                "Bulk orders welcome",
                "Logo engraving available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-px w-4 bg-[#c9a45c]" />
                  <span className="text-xs tracking-wide text-[#6b6560]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category grid */}
          <div className="mt-16 grid grid-cols-2 gap-3 lg:mt-0">
            {[
              { label: "Baptism Gifts", color: "#1a2535" },
              { label: "Corporate Awards", color: "#1f1510" },
              { label: "Realtor Closing Gifts", color: "#14201a" },
              { label: "Personalized Keepsakes", color: "#1a1520" },
            ].map((cat) => (
              <div
                key={cat.label}
                className="flex aspect-square items-end rounded-lg p-5"
                style={{ backgroundColor: cat.color }}
              >
                <p
                  className="text-lg font-light leading-snug text-[#f7f1e6]"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  {cat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
