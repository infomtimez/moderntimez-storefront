import Link from "next/link";

export function QuoteCTA() {
  return (
    <section className="bg-[#c9a45c] py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-light leading-tight text-[#0d1117] sm:text-5xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Need Awards or Gifts for a Group?
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#4a2e1f]">
          Tell us your quantity, deadline, logo needs, and occasion. We will
          help you build a polished custom order — corporate awards, realtor
          gift programs, church group orders, and more.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/request-quote"
            className="rounded bg-[#0d1117] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#f7f1e6] transition-colors hover:bg-[#101a24]"
          >
            Request a Custom Quote
          </Link>
          <Link
            href="/collections/corporate-awards"
            className="rounded border border-[#0d1117] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#0d1117] transition-colors hover:bg-[#0d1117] hover:text-[#f7f1e6]"
          >
            Explore Corporate Awards
          </Link>
        </div>
      </div>
    </section>
  );
}
