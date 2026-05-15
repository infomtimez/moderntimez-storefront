import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell
      eyebrow="Not Found"
      title="We could not find that page"
      intro="The link may be outdated, or the item may no longer be available."
    >
      <Link
        href="/"
        className="inline-block rounded bg-[#0d1117] px-6 py-3 text-sm font-semibold tracking-wide text-[#f7f1e6] transition-colors hover:bg-[#101a24]"
      >
        Return Home
      </Link>
    </PageShell>
  );
}
