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

      <AddToCart
        variantId={selectedVariant?.id}
        availableForSale={selectedVariant?.availableForSale ?? false}
      />
    </div>
  );
}
