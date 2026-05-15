import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { fetchCart } from "@/lib/shopify/cart";
import { CartContents } from "@/components/commerce/CartContents";

export const metadata: Metadata = { title: "Cart" };

export default async function CartPage() {
  const store = await cookies();
  const cartId = store.get("cartId")?.value;
  const cart = cartId ? await fetchCart(cartId).catch(() => null) : null;
  const empty = !cart || cart.lines.edges.length === 0;

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
        Your Order
      </p>
      <h1
        className="text-4xl font-light tracking-tight text-[#0d1117] sm:text-5xl"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        Shopping Cart
      </h1>

      {empty ? (
        <div className="mt-16 text-center">
          <p className="text-lg text-[#6b6560]">Your cart is empty.</p>
          <Link
            href="/collections/frontpage"
            className="mt-6 inline-block rounded bg-[#c9a45c] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#0d1117] transition-colors hover:bg-[#dfc080]"
          >
            Shop Personalized Gifts
          </Link>
        </div>
      ) : (
        <div className="mt-10">
          <CartContents cart={cart} />
        </div>
      )}
    </main>
  );
}
