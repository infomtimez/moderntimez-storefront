import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

const checklist = [
  "Approximate quantity",
  "Product type or inspiration",
  "Needed-by date",
  "Logo or artwork requirements",
  "Budget range, if you have one",
];

export default function RequestQuotePage() {
  return (
    <PageShell
      eyebrow="Custom Orders"
      title="Request a Quote"
      intro="Tell us what you are making, how many you need, and when you need them. We will help shape the right engraved gift or award program for your occasion."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-lg border border-[#e5e1d8] bg-white p-6">
          <h2 className="text-xl font-medium">What to include</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#6b6560]">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c9a45c]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg bg-[#101a24] p-6 text-[#f7f1e6]">
          <h2 className="text-xl font-medium">Next step</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#e5e1d8]/80">
            Send your project details through the contact channel you use for
            customer inquiries, and we will follow up with options, pricing, and
            proofing details.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block text-sm font-semibold text-[#dfc080] underline decoration-[#dfc080]/50 underline-offset-4"
          >
            Go to contact details
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
