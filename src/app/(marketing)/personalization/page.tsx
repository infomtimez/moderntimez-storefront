import { PageShell } from "@/components/layout/PageShell";

const options = [
  "Names and dates",
  "Messages and dedications",
  "Company logos",
  "Handwriting and artwork",
];

export default function PersonalizationPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Personalization"
      intro="Choose from text, dates, logos, and artwork to make each gift feel specific to the person or occasion."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {options.map((option) => (
          <div
            key={option}
            className="rounded-lg border border-[#e5e1d8] bg-white p-5 text-sm font-medium"
          >
            {option}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
