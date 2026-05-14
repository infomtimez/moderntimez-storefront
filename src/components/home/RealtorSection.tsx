import Link from "next/link";

const items = [
  {
    label: "New Homeowner Gifts",
    desc: "Warm, personal gifts for the moment they get the keys.",
  },
  {
    label: "First Home Buyer Gifts",
    desc: "Celebrate the biggest purchase of their lives.",
  },
  {
    label: "Client Appreciation Gifts",
    desc: "Keep your brand remembered long after closing.",
  },
  {
    label: "Custom Logo Gifts",
    desc: "Your brand engraved on premium gift pieces.",
  },
];

export function RealtorSection() {
  return (
    <section className="bg-[#f7f1e6] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            Realtor Closing Gifts
          </p>
          <h2
            className="text-4xl font-light leading-tight text-[#0d1117] sm:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Closing Gifts Clients Will Remember
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#6b6560]">
            Personalized walnut cutting boards, wine boxes, BBQ gift sets, and
            engraved home keepsakes for realtors and client appreciation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-[#e5e1d8] bg-white p-6"
            >
              <h3
                className="mb-2 text-lg font-light text-[#0d1117]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {item.label}
              </h3>
              <p className="text-sm leading-relaxed text-[#6b6560]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/collections/realtor-closing-gifts"
            className="rounded bg-[#0d1117] px-6 py-3 text-sm font-semibold tracking-wide text-[#f7f1e6] transition-colors hover:bg-[#101a24]"
          >
            Shop Realtor Gifts
          </Link>
          <Link
            href="/request-quote"
            className="rounded border border-[#0d1117] px-6 py-3 text-sm font-semibold tracking-wide text-[#0d1117] transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"
          >
            Start Realtor Gift Program
          </Link>
        </div>
      </div>
    </section>
  );
}
