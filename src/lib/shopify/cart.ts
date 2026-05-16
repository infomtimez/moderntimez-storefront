import { storefront } from "./client";
import {
  GetCartQuery,
  CartCreateMutation,
  CartLinesAddMutation,
  CartLinesRemoveMutation,
  CartLinesUpdateMutation,
} from "./queries/cart";

type CartLineAttribute = { key: string; value: string };

export type CartLine = {
  id: string;
  quantity: number;
  attributes: CartLineAttribute[];
  merchandise: {
    id: string;
    title: string;
    product: {
      title: string;
      handle: string;
      featuredImage: {
        url: string;
        altText: string | null;
        width: number | null;
        height: number | null;
      } | null;
    };
  };
  cost: {
    totalAmount: { amount: string; currencyCode: string };
  };
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: { edges: { node: CartLine }[] };
  cost: {
    subtotalAmount: { amount: string; currencyCode: string };
    totalAmount: { amount: string; currencyCode: string };
  };
};

export async function fetchCart(cartId: string): Promise<Cart | null> {
  const data = await storefront<{ cart: Cart | null }>(GetCartQuery, {
    cartId,
  });
  return data.cart;
}

export async function createCart(
  variantId: string,
  quantity: number,
  attributes?: CartLineAttribute[],
): Promise<{ id: string; checkoutUrl: string }> {
  const line: Record<string, unknown> = { merchandiseId: variantId, quantity };
  if (attributes?.length) line.attributes = attributes;
  const data = await storefront<{
    cartCreate: { cart: { id: string; checkoutUrl: string } };
  }>(CartCreateMutation, { lines: [line] });
  return data.cartCreate.cart;
}

export async function cartLinesAdd(
  cartId: string,
  variantId: string,
  quantity: number,
  attributes?: CartLineAttribute[],
): Promise<void> {
  const line: Record<string, unknown> = { merchandiseId: variantId, quantity };
  if (attributes?.length) line.attributes = attributes;
  await storefront(CartLinesAddMutation, { cartId, lines: [line] });
}

export async function cartLinesRemove(
  cartId: string,
  lineId: string,
): Promise<void> {
  await storefront(CartLinesRemoveMutation, { cartId, lineIds: [lineId] });
}

export async function cartLinesUpdate(
  cartId: string,
  lineId: string,
  quantity: number,
): Promise<void> {
  await storefront(CartLinesUpdateMutation, {
    cartId,
    lines: [{ id: lineId, quantity }],
  });
}
