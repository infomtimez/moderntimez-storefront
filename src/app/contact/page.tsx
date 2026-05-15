import { PageShell } from "@/components/layout/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="Contact Us"
      intro="Questions about an order, engraving details, or bulk pricing? Reach out and we will get back to you as quickly as possible."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-[#e5e1d8] bg-white p-6">
          <h2 className="text-lg font-medium text-[#0d1117]">
            General inquiries
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6b6560]">
            For order questions, personalization details, proofing, and general
            support.
          </p>
          <a
            href="mailto:info.mtimez@gmail.com"
            className="mt-4 inline-block text-sm font-medium text-[#c9a45c] hover:underline"
          >
            info.mtimez@gmail.com
          </a>
        </div>
        <div className="rounded-lg border border-[#e5e1d8] bg-white p-6">
          <h2 className="text-lg font-medium text-[#0d1117]">
            Bulk and business orders
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6b6560]">
            Corporate awards, realtor gift programs, and group orders. Include
            your quantity, deadline, and logo requirements.
          </p>
          <a
            href="mailto:info.mtimez@gmail.com"
            className="mt-4 inline-block text-sm font-medium text-[#c9a45c] hover:underline"
          >
            info.mtimez@gmail.com
          </a>
        </div>
      </div>
    </PageShell>
  );
}
