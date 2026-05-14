import { notFound } from "next/navigation";
import Image from "next/image";
import { getProduct } from "@/lib/shopify";
import { formatMoney } from "@/lib/utils/money";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) notFound();

  const { minVariantPrice } = product.priceRange;
  const price = formatMoney(
    minVariantPrice.amount as string,
    minVariantPrice.currencyCode as string,
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        {/* Images */}
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          {product.featuredImage ? (
            <Image
              src={product.featuredImage.url as string}
              alt={product.featuredImage.altText ?? product.title}
              width={product.featuredImage.width ?? 900}
              height={product.featuredImage.height ?? 900}
              className="h-full w-full object-cover"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-400">
              No image
            </div>
          )}
        </div>

        {/* Details */}
        <div className="mt-8 lg:mt-0">
          <h1 className="text-3xl font-semibold tracking-tight">
            {product.title}
          </h1>

          <p className="mt-3 text-2xl">
            {product.availableForSale ? (
              price
            ) : (
              <span className="text-gray-400">Sold out</span>
            )}
          </p>

          {product.options.some((o) => o.values.length > 1) && (
            <div className="mt-6 space-y-4">
              {product.options
                .filter((o) => o.values.length > 1)
                .map((option) => (
                  <div key={option.id}>
                    <p className="mb-2 text-sm font-medium">{option.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => (
                        <span
                          key={value}
                          className="rounded border px-3 py-1 text-sm"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}

          {product.descriptionHtml ? (
            <div
              className="prose prose-sm mt-8 text-gray-600"
              dangerouslySetInnerHTML={{
                __html: String(product.descriptionHtml),
              }}
            />
          ) : null}
        </div>
      </div>
    </main>
  );
}
