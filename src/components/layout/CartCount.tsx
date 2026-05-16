import { cookies } from "next/headers";
import { fetchCart } from "@/lib/shopify/cart";

export async function CartCount() {
  const store = await cookies();
  const cartId = store.get("cartId")?.value;
  if (!cartId) return null;

  const cart = await fetchCart(cartId).catch(() => null);
  const count = cart?.totalQuantity ?? 0;
  if (count === 0) return null;

  return (
    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#c9a45c] text-[9px] font-bold leading-none text-[#0d1117]">
      {count > 9 ? "9+" : count}
    </span>
  );
}
