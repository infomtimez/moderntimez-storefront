"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  url: unknown;
  altText: string | null;
  width: number | null;
  height: number | null;
};

export function ProductGallery({
  images,
  title,
}: {
  images: GalleryImage[];
  title: string;
}) {
  const [selected, setSelected] = useState(0);
  const main = images[selected];

  return (
    <div>
      <div className="aspect-square overflow-hidden rounded-lg bg-[#f0ebe2]">
        {main ? (
          <Image
            src={main.url as string}
            alt={main.altText ?? title}
            width={main.width ?? 900}
            height={main.height ?? 900}
            className="h-full w-full object-cover"
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[#6b6560]">
            No image
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`h-16 w-16 shrink-0 overflow-hidden rounded border-2 transition-colors ${
                i === selected
                  ? "border-[#c9a45c]"
                  : "border-transparent hover:border-[#e5e1d8]"
              }`}
            >
              <Image
                src={img.url as string}
                alt={img.altText ?? title}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
