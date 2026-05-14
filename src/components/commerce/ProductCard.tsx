import Image from "next/image";
import Link from "next/link";
import type { ProductCardItem } from "@/lib/shopify";
import { formatMoney } from "@/lib/utils/money";

export function ProductCard({ product }: { product: ProductCardItem }) {
  const { minVariantPrice } = product.priceRange;
  const price = formatMoney(
    minVariantPrice.amount as string,
    minVariantPrice.currencyCode as string,
  );

  return (
    <Link href={`/products/${product.handle}`} className="group block">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.url as string}
            alt={product.featuredImage.altText ?? product.title}
            width={product.featuredImage.width ?? 600}
            height={product.featuredImage.height ?? 600}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            No image
          </div>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-sm font-medium leading-snug">{product.title}</p>
        <p className="text-sm text-gray-500">
          {product.availableForSale ? price : "Sold out"}
        </p>
      </div>
    </Link>
  );
}
