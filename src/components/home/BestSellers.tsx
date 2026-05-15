import Link from "next/link";
import { getCollection } from "@/lib/shopify";
import { ProductCard } from "@/components/commerce/ProductCard";

export async function BestSellers() {
  const collection = await getCollection("frontpage").catch(() => null);
  const products = collection?.products.edges.slice(0, 8) ?? [];

  return (
    <section className="bg-[#f7f1e6] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
              Best Sellers
            </p>
            <h2
              className="text-4xl font-light text-[#0d1117] sm:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Most Loved Gifts
            </h2>
          </div>
          <Link
            href="/collections/frontpage"
            className="hidden text-sm font-semibold uppercase tracking-[0.15em] text-[#c9a45c] hover:text-[#0d1117] sm:block"
          >
            View All &rarr;
          </Link>
        </div>

        {products.length > 0 ? (
          <ul className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {products.map(({ node }) => (
              <li key={node.id}>
                <ProductCard product={node} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-12 text-center text-[#6b6560]">
            Products coming soon. Add products to your Shopify store to see them
            here.
          </p>
        )}

        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/collections/frontpage"
            className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c9a45c]"
          >
            View All &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
