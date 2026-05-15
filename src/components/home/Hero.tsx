"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const slides = [
  { src: "/images/Hero_image1.png", alt: "ModernTimez personalized gifts" },
  { src: "/images/Hero_image2.png", alt: "ModernTimez engraved awards" },
  { src: "/images/Hero_image3.png", alt: "ModernTimez corporate gifts" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  // Ref holds the latest advance so the interval never needs to re-register
  const advanceFn = useRef<(dir: 1 | -1) => void>(() => {});

  function advance(dir: 1 | -1) {
    if (animating) return;
    setPrev(current);
    setAnimating(true);
    setCurrent((c) => (c + dir + slides.length) % slides.length);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 900);
  }

  useLayoutEffect(() => {
    advanceFn.current = advance;
  });

  function goTo(i: number) {
    if (animating || i === current) return;
    setPrev(current);
    setAnimating(true);
    setCurrent(i);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 900);
  }

  useEffect(() => {
    const timer = setInterval(() => advanceFn.current(1), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] overflow-hidden bg-[#0d1117]"
      aria-label="Featured images"
    >
      {/* Announce slide changes to screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {slides[current].alt}
      </div>

      {/* Slides */}
      {slides.map((slide, i) => {
        const isActive = i === current;
        const isPrev = i === prev;
        if (!isActive && !isPrev) return null;
        return (
          <div
            key={slide.src}
            aria-hidden={!isActive}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
            style={{ opacity: isActive ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        );
      })}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/90 via-[#0d1117]/65 to-[#0d1117]/25" />

      {/* Brass top edge */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent opacity-60" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            Precision Engraving · Made in Texas
          </p>
          <h1
            className="text-5xl font-light leading-[1.1] tracking-tight text-[#f7f1e6] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Personalized Gifts &amp; Recognition Awards
            <em className="block text-[#c9a45c]">
              for Life&apos;s Most Meaningful Moments
            </em>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#e5e1d8]/80 sm:max-w-xl">
            From baptism keepsakes and wedding gifts to corporate awards and
            realtor closing gifts, ModernTimez creates custom engraved pieces
            made to be remembered.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/collections/frontpage"
              className="rounded bg-[#c9a45c] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#0d1117] transition-colors hover:bg-[#dfc080]"
            >
              Shop Personalized Gifts
            </Link>
            <Link
              href="/request-quote"
              className="rounded border border-[#e5e1d8]/40 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#e5e1d8] transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"
            >
              Request a Custom Quote
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex flex-wrap gap-6">
            {[
              "Engraving since 2006",
              "Crafted in Texas",
              "Bulk orders welcome",
              "Logo engraving available",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-px w-4 bg-[#c9a45c]" />
                <span className="text-xs tracking-wide text-[#e5e1d8]/60">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-6">
        {/* Prev */}
        <button
          onClick={() => advance(-1)}
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e1d8]/20 text-[#e5e1d8]/60 transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M10 3L5 8l5 5" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={i === current}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? "24px" : "6px",
                backgroundColor:
                  i === current ? "#c9a45c" : "rgba(229,225,216,0.3)",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => advance(1)}
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e1d8]/20 text-[#e5e1d8]/60 transition-colors hover:border-[#c9a45c] hover:text-[#c9a45c]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 3l5 5-5 5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
