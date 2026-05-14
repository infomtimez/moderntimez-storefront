import { notFound } from "next/navigation";
import { getCollection } from "@/lib/shopify";
import { ProductCard } from "@/components/commerce/ProductCard";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const collection = await getCollection(handle);

  if (!collection) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          {collection.title}
        </h1>
        {collection.description && (
          <p className="mt-2 text-gray-500">{collection.description}</p>
        )}
      </header>

      {collection.products.edges.length === 0 ? (
        <p className="text-gray-400">No products in this collection.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
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
