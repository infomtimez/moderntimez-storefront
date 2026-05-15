import Link from "next/link";

const gifts = [
  "Baptism Gifts",
  "First Communion Gifts",
  "Confirmation Gifts",
  "Godson Gifts",
  "Goddaughter Gifts",
  "Grandparent Gifts",
  "Cross Wooden Box Compass",
  "Religious Keepsakes",
];

export function BaptismSection() {
  return (
    <section className="bg-[#0d1117] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Category tags */}
          <div className="order-2 mt-12 flex flex-wrap gap-2 lg:order-1 lg:mt-0">
            {gifts.map((gift) => (
              <Link
                key={gift}
                href="/collections/baptism-gifts"
                className="rounded border border-[#2a3040] px-4 py-2 text-sm text-[#e5e1d8] transition-colors hover:border-[#c9a45c]"
              >
                {gift}
              </Link>
            ))}
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
              Baptism &amp; Sacrament Gifts
            </p>
            <h2
              className="text-4xl font-light leading-tight text-[#f7f1e6] sm:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Keepsakes for Sacred Moments
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#a09890]">
              Personalized brass compasses, cross wooden boxes, and religious
              keepsakes engraved with names, dates, Bible verses, and heartfelt
              messages.
            </p>
            <Link
              href="/collections/baptism-gifts"
              className="mt-8 inline-block rounded bg-[#c9a45c] px-6 py-3 text-sm font-semibold tracking-wide text-[#0d1117] transition-colors hover:bg-[#dfc080]"
            >
              Shop Baptism Gifts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
