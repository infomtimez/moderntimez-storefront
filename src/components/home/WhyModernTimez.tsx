const pillars = [
  {
    title: "Engraving Experience Since 2006",
    description:
      "Nearly two decades of precision engraving experience on premium materials.",
  },
  {
    title: "Personalized in Texas",
    description:
      "Every piece is crafted with care in our Texas studio — not overseas.",
  },
  {
    title: "Premium Materials",
    description:
      "Solid walnut, solid brass, crystal, and premium metals — nothing flimsy.",
  },
  {
    title: "Custom Logo Engraving",
    description:
      "We engrave your brand, signature, crest, or artwork with precision.",
  },
  {
    title: "Fast Production Options",
    description:
      "Rush options available for time-sensitive gifts and corporate deadlines.",
  },
  {
    title: "Corporate & Group Orders",
    description:
      "From 5 pieces to 500, we handle volume orders with white-glove service.",
  },
];

export function WhyModernTimez() {
  return (
    <section className="bg-[#101a24] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            Our Promise
          </p>
          <h2
            className="text-4xl font-light text-[#f7f1e6] sm:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Why ModernTimez
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border border-[#2a3545] p-7"
            >
              <div className="mb-3 h-px w-8 bg-[#c9a45c]" />
              <h3
                className="mb-3 text-xl font-light text-[#f7f1e6]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#a09890]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
