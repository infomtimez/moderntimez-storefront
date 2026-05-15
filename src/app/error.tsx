"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
        Something went wrong
      </p>
      <h1
        className="text-4xl font-light tracking-tight text-[#0d1117] sm:text-5xl"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        We could not load this page
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#6b6560]">
        Try again once. If the problem continues, return home and contact us so
        we can help.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={() => reset()}
          className="rounded bg-[#0d1117] px-6 py-3 text-sm font-semibold tracking-wide text-[#f7f1e6] transition-colors hover:bg-[#101a24]"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded border border-[#0d1117] px-6 py-3 text-sm font-semibold tracking-wide text-[#0d1117] transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
