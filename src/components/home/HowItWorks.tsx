const steps = [
  {
    number: "01",
    title: "Choose Your Gift",
    description:
      "Browse our collection of premium personalized items — compasses, awards, cutting boards, pocket watches, and more.",
  },
  {
    number: "02",
    title: "Add Your Personalization",
    description:
      "Enter names, dates, a message, logo, or handwriting. Select your font and engraving location.",
  },
  {
    number: "03",
    title: "Review Engraving Details",
    description:
      "For complex orders, we send a proof for your approval before production begins.",
  },
  {
    number: "04",
    title: "We Engrave with Precision",
    description:
      "Our craftspeople engrave your piece using professional laser and rotary engraving equipment.",
  },
  {
    number: "05",
    title: "Ships Ready to Present",
    description:
      "Your gift arrives beautifully packaged, ready to give — no wrapping required.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#f7f1e6] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            The Process
          </p>
          <h2
            className="text-4xl font-light text-[#0d1117] sm:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            How Personalization Works
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[28px] top-0 hidden h-full w-px bg-[#e5e1d8] lg:left-1/2 lg:block" />

          <div className="space-y-10 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-8 lg:grid lg:grid-cols-2 lg:gap-0 ${
                  i % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:px-10 lg:py-6 ${
                    i % 2 === 0 ? "lg:text-right" : "lg:col-start-2"
                  }`}
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
                    Step {step.number}
                  </p>
                  <h3
                    className="mb-2 text-2xl font-light text-[#0d1117]"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6b6560]">
                    {step.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="absolute left-[20px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 border-[#c9a45c] bg-[#f7f1e6] lg:static lg:mx-auto lg:mt-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
