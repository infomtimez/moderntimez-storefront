"use client";

import { useTransition, useState } from "react";
import { addItemToCart } from "@/lib/cart-actions";

type Props = {
  variantId: string | undefined;
  availableForSale: boolean;
};

export function AddToCart({ variantId, availableForSale }: Props) {
  const [pending, startTransition] = useTransition();
  const [added, setAdded] = useState(false);

  if (!availableForSale) {
    return (
      <button
        disabled
        className="mt-8 w-full rounded border border-[#e5e1d8] py-3.5 text-sm font-semibold tracking-wide text-[#6b6560]"
      >
        Sold Out
      </button>
    );
  }

  function handleClick() {
    if (!variantId) return;
    startTransition(async () => {
      await addItemToCart(variantId!);
      setAdded(true);
      setTimeout(() => setAdded(false), 2500);
    });
  }

  return (
    <button
      onClick={handleClick}
      disabled={pending || !variantId}
      className="mt-8 w-full rounded bg-[#c9a45c] py-3.5 text-sm font-semibold tracking-wide text-[#0d1117] transition-colors hover:bg-[#dfc080] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Adding…" : added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
}
