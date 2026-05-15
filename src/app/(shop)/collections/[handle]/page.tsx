import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCollection } from "@/lib/shopify";
import { ProductCard } from "@/components/commerce/ProductCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const collection = await getCollection(handle).catch(() => null);

  if (!collection) return { title: "Collection Not Found" };

  return {
    title: collection.title,
    description:
      collection.description || `Browse ${collection.title} from ModernTimez.`,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const collection = await getCollection(handle).catch(() => null);

  if (!collection) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
          Collection
        </p>
        <h1
          className="text-4xl font-light tracking-tight text-[#0d1117] sm:text-5xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {collection.title}
        </h1>
        {collection.description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#6b6560]">
            {collection.description}
          </p>
        )}
      </header>

      {collection.products.edges.length === 0 ? (
        <p className="py-16 text-center text-[#6b6560]">
          Products coming soon.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {collection.products.edges.map(({ node }) => (
            <li key={node.id}>
              <ProductCard product={node} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
