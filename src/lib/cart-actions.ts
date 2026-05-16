"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import {
  createCart,
  cartLinesAdd,
  cartLinesRemove,
  cartLinesUpdate,
} from "@/lib/shopify/cart";

const CART_COOKIE = "cartId";
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 30,
};

export async function addItemToCart(
  variantId: string,
  quantity = 1,
  engravingText?: string,
) {
  const store = await cookies();
  const existingCartId = store.get(CART_COOKIE)?.value;
  const attributes = engravingText?.trim()
    ? [{ key: "Engraving Text", value: engravingText.trim() }]
    : undefined;

  if (existingCartId) {
    await cartLinesAdd(existingCartId, variantId, quantity, attributes);
  } else {
    const cart = await createCart(variantId, quantity, attributes);
    store.set(CART_COOKIE, cart.id, COOKIE_OPTIONS);
  }

  revalidatePath("/cart");
}

export async function removeItemFromCart(lineId: string) {
  const store = await cookies();
  const cartId = store.get(CART_COOKIE)?.value;
  if (!cartId) return;
  await cartLinesRemove(cartId, lineId);
  revalidatePath("/cart");
}

export async function updateItemQuantity(lineId: string, quantity: number) {
  const store = await cookies();
  const cartId = store.get(CART_COOKIE)?.value;
  if (!cartId) return;

  if (quantity <= 0) {
    await cartLinesRemove(cartId, lineId);
  } else {
    await cartLinesUpdate(cartId, lineId, quantity);
  }

  revalidatePath("/cart");
}
