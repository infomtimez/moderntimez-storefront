import { PageShell } from "@/components/layout/PageShell";

const faqs = [
  {
    question: "Can I preview my engraving before production?",
    answer:
      "For complex layouts, logos, and larger orders, we provide a proof before production begins.",
  },
  {
    question: "Do you support bulk orders?",
    answer:
      "Yes. We regularly support corporate awards, realtor programs, church groups, and event gifts.",
  },
  {
    question: "Can I use a logo or custom artwork?",
    answer:
      "Yes. Send your artwork with your quote request and we will confirm what will engrave cleanly.",
  },
];

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="Frequently Asked Questions"
      intro="A few quick answers while the fuller help center is being built."
    >
      <div className="space-y-4">
        {faqs.map((faq) => (
          <section
            key={faq.question}
            className="rounded-lg border border-[#e5e1d8] bg-white p-6"
          >
            <h2 className="text-lg font-medium">{faq.question}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#6b6560]">
              {faq.answer}
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
