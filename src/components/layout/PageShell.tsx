import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="text-4xl font-light tracking-tight text-[#0d1117] sm:text-5xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 text-lg leading-relaxed text-[#6b6560]">{intro}</p>
        ) : null}
      </div>
      {children ? <div className="mt-10">{children}</div> : null}
    </main>
  );
}
