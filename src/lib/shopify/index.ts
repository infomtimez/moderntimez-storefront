import { storefront } from "./client";
import { CollectionQuery } from "./queries/collection";
import { ProductQuery } from "./queries/product";
import { AllProductsQuery } from "./queries/products";
import type { CollectionPageQuery, ProductPageQuery } from "./types.generated";

export type ProductCardItem = NonNullable<
  NonNullable<
    CollectionPageQuery["collection"]
  >["products"]["edges"][number]["node"]
>;

type AllProductsData = {
  products: {
    edges: {
      node: {
        id: string;
        title: string;
        handle: string;
        availableForSale: boolean;
        featuredImage: {
          url: string;
          altText: string | null;
          width: number | null;
          height: number | null;
        } | null;
        priceRange: {
          minVariantPrice: { amount: unknown; currencyCode: string };
        };
      };
    }[];
  };
};

export type AllProductItem =
  AllProductsData["products"]["edges"][number]["node"];

export type ProductDetail = NonNullable<ProductPageQuery["product"]>;

export async function getCollection(handle: string) {
  const data = await storefront<CollectionPageQuery>(
    CollectionQuery,
    { handle },
    ["collections", `collection:${handle}`],
  );
  return data.collection ?? null;
}

export async function getAllProducts(first = 48) {
  const data = await storefront<AllProductsData>(AllProductsQuery, { first }, [
    "products",
  ]);
  return data.products.edges.map((e) => e.node);
}

export async function getProduct(handle: string) {
  const data = await storefront<ProductPageQuery>(ProductQuery, { handle }, [
    "products",
    `product:${handle}`,
  ]);
  return data.product ?? null;
}
