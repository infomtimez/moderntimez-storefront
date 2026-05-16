"use client";

import { useState } from "react";
import { AddToCart } from "./AddToCart";
import { formatMoney } from "@/lib/utils/money";

type Variant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: { amount: unknown; currencyCode: string };
  selectedOptions: { name: string; value: string }[];
};

type Option = {
  id: string;
  name: string;
  values: string[];
};

type Props = {
  options: Option[];
  variants: Variant[];
};

export function ProductForm({ options, variants }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >(() => Object.fromEntries(options.map((o) => [o.name, o.values[0]])));
  const [engravingText, setEngravingText] = useState("");

  const selectedVariant = variants.find((v) =>
    v.selectedOptions.every((so) => selectedOptions[so.name] === so.value),
  );

  const displayOptions = options.filter((o) => o.values.length > 1);

  return (
    <div>
      {selectedVariant && (
        <p className="text-2xl font-light text-[#0d1117]">
          {formatMoney(
            selectedVariant.price.amount as string,
            selectedVariant.price.currencyCode,
          )}
        </p>
      )}

      {displayOptions.map((option) => (
        <div key={option.id} className="mt-6">
          <p className="mb-2 text-sm font-semibold tracking-wide text-[#0d1117]">
            {option.name}
          </p>
          <div className="flex flex-wrap gap-2">
            {option.values.map((value) => {
              const isSelected = selectedOptions[option.name] === value;
              return (
                <button
                  key={value}
                  onClick={() =>
                    setSelectedOptions((prev) => ({
                      ...prev,
                      [option.name]: value,
                    }))
                  }
                  className={`rounded border px-4 py-2 text-sm transition-colors ${
                    isSelected
                      ? "border-[#c9a45c] bg-[#c9a45c] text-[#0d1117]"
                      : "border-[#e5e1d8] text-[#0d1117] hover:border-[#c9a45c]"
                  }`}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-6">
        <label
          htmlFor="engraving-text"
          className="mb-2 block text-sm font-semibold tracking-wide text-[#0d1117]"
        >
          Engraving Text{" "}
          <span className="text-xs font-normal text-[#6b6560]">(optional)</span>
        </label>
        <textarea
          id="engraving-text"
          value={engravingText}
          onChange={(e) => setEngravingText(e.target.value)}
          placeholder="Enter name, date, or message to engrave…"
          rows={3}
          maxLength={200}
          className="w-full rounded border border-[#e5e1d8] px-4 py-3 text-sm text-[#0d1117] placeholder-[#a09890] focus:border-[#c9a45c] focus:outline-none"
        />
        <p className="mt-1 text-right text-xs text-[#a09890]">
          {engravingText.length}/200
        </p>
      </div>

      <AddToCart
        variantId={selectedVariant?.id}
        availableForSale={selectedVariant?.availableForSale ?? false}
        engravingText={engravingText}
      />
    </div>
  );
}
