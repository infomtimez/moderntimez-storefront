import { PageShell } from "@/components/layout/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About ModernTimez"
      intro="ModernTimez creates personalized gifts and recognition pieces for meaningful milestones, from sacred keepsakes to corporate awards and closing gifts."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          "Crafted in Texas",
          "Engraving since 2006",
          "Bulk orders welcome",
        ].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-[#e5e1d8] bg-white p-5 text-sm font-medium"
          >
            {item}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
