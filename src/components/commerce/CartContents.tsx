"use client";

import { useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Cart } from "@/lib/shopify/cart";
import { removeItemFromCart, updateItemQuantity } from "@/lib/cart-actions";
import { formatMoney } from "@/lib/utils/money";

export function CartContents({ cart }: { cart: Cart }) {
  const [pending, startTransition] = useTransition();

  return (
    <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-12">
      {/* Line items */}
      <ul className="divide-y divide-[#e5e1d8]">
        {cart.lines.edges.map(({ node: line }) => (
          <li key={line.id} className="flex gap-4 py-6">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#f0ebe2]">
              {line.merchandise.product.featuredImage ? (
                <Image
                  src={line.merchandise.product.featuredImage.url}
                  alt={
                    line.merchandise.product.featuredImage.altText ??
                    line.merchandise.product.title
                  }
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <div className="flex justify-between gap-4">
                <div>
                  <Link
                    href={`/products/${line.merchandise.product.handle}`}
                    className="text-sm font-medium text-[#0d1117] hover:text-[#c9a45c]"
                  >
                    {line.merchandise.product.title}
                  </Link>
                  {line.merchandise.title !== "Default Title" && (
                    <p className="mt-0.5 text-xs text-[#6b6560]">
                      {line.merchandise.title}
                    </p>
                  )}
                  {line.attributes
                    .filter((a) => a.value)
                    .map((a) => (
                      <p key={a.key} className="mt-0.5 text-xs text-[#a09890]">
                        {a.key}: {a.value}
                      </p>
                    ))}
                </div>
                <p className="shrink-0 text-sm font-medium text-[#0d1117]">
                  {formatMoney(
                    line.cost.totalAmount.amount,
                    line.cost.totalAmount.currencyCode,
                  )}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      startTransition(() =>
                        updateItemQuantity(line.id, line.quantity - 1),
                      )
                    }
                    disabled={pending}
                    aria-label="Decrease quantity"
                    className="flex h-7 w-7 items-center justify-center rounded border border-[#e5e1d8] text-sm text-[#0d1117] transition-colors hover:border-[#c9a45c] disabled:opacity-40"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm">
                    {line.quantity}
                  </span>
                  <button
                    onClick={() =>
                      startTransition(() =>
                        updateItemQuantity(line.id, line.quantity + 1),
                      )
                    }
                    disabled={pending}
                    aria-label="Increase quantity"
                    className="flex h-7 w-7 items-center justify-center rounded border border-[#e5e1d8] text-sm text-[#0d1117] transition-colors hover:border-[#c9a45c] disabled:opacity-40"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() =>
                    startTransition(() => removeItemFromCart(line.id))
                  }
                  disabled={pending}
                  className="text-xs text-[#6b6560] transition-colors hover:text-red-500 disabled:opacity-40"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Order summary */}
      <div className="mt-8 lg:mt-0">
        <div className="rounded-lg bg-[#f7f1e6] p-6">
          <h2
            className="text-xl font-light text-[#0d1117]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Order Summary
          </h2>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6b6560]">Subtotal</span>
              <span className="font-medium text-[#0d1117]">
                {formatMoney(
                  cart.cost.subtotalAmount.amount,
                  cart.cost.subtotalAmount.currencyCode,
                )}
              </span>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-[#6b6560]">
            Taxes and shipping calculated at checkout.
          </p>

          <a
            href={cart.checkoutUrl}
            className="mt-6 block rounded bg-[#c9a45c] px-6 py-3.5 text-center text-sm font-semibold tracking-wide text-[#0d1117] transition-colors hover:bg-[#dfc080]"
          >
            Proceed to Checkout
          </a>

          <Link
            href="/collections/frontpage"
            className="mt-3 block text-center text-xs text-[#6b6560] hover:text-[#0d1117]"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
