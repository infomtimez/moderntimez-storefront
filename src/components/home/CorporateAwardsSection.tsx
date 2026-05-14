import Link from "next/link";

const categories = [
  "Employee Recognition",
  "Sales Achievement",
  "Leadership Awards",
  "Retirement Awards",
  "Service Anniversary",
  "Executive Gifts",
];

export function CorporateAwardsSection() {
  return (
    <section className="bg-[#101a24] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
              Corporate Awards
            </p>
            <h2
              className="text-4xl font-light leading-tight text-[#f7f1e6] sm:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Recognition That Inspires
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#6b6560]">
              Custom engraved plaques, crystal awards, trophies, and executive
              gifts for teams, leaders, and milestone achievements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/collections/corporate-awards"
                className="rounded bg-[#c9a45c] px-6 py-3 text-sm font-semibold tracking-wide text-[#0d1117] transition-colors hover:bg-[#dfc080]"
              >
                Explore Corporate Awards
              </Link>
              <Link
                href="/request-quote"
                className="rounded border border-[#e5e1d8]/20 px-6 py-3 text-sm font-semibold tracking-wide text-[#e5e1d8] transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"
              >
                Request Bulk Quote
              </Link>
            </div>
          </div>

          {/* Category grid */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-0">
            {categories.map((cat) => (
              <div
                key={cat}
                className="rounded-lg border border-[#2a3545] p-5 text-center"
              >
                <p className="text-sm font-medium text-[#e5e1d8]">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
