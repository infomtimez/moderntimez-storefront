import { storefront } from "./client";
import { CollectionQuery } from "./queries/collection";
import { ProductQuery } from "./queries/product";
import type { CollectionPageQuery, ProductPageQuery } from "./types.generated";

export type ProductCardItem = NonNullable<
  NonNullable<
    CollectionPageQuery["collection"]
  >["products"]["edges"][number]["node"]
>;

export type ProductDetail = NonNullable<ProductPageQuery["product"]>;

export async function getCollection(handle: string) {
  const data = await storefront<CollectionPageQuery>(
    CollectionQuery,
    { handle },
    ["collections", `collection:${handle}`],
  );
  return data.collection ?? null;
}

export async function getProduct(handle: string) {
  const data = await storefront<ProductPageQuery>(ProductQuery, { handle }, [
    "products",
    `product:${handle}`,
  ]);
  return data.product ?? null;
}
