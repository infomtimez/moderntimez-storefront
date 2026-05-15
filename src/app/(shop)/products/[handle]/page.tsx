import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct } from "@/lib/shopify";
import { ProductGallery } from "@/components/commerce/ProductGallery";
import { ProductForm } from "@/components/commerce/ProductForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description:
      (product.descriptionHtml
        ? String(product.descriptionHtml)
            .replace(/<[^>]+>/g, "")
            .slice(0, 160)
        : "") || `Shop ${product.title} from ModernTimez.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) notFound();

  const images = product.images.edges.map((e) => e.node);
  const variants = product.variants.edges.map((e) => e.node);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <ProductGallery images={images} title={product.title} />

        {/* Details */}
        <div className="mt-8 lg:mt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            ModernTimez
          </p>
          <h1
            className="mt-2 text-3xl font-light leading-snug text-[#0d1117] sm:text-4xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {product.title}
          </h1>

          <ProductForm options={product.options} variants={variants} />

          {product.descriptionHtml ? (
            <div
              className="prose prose-sm mt-10 max-w-none text-[#6b6560] prose-headings:text-[#0d1117] prose-headings:font-medium"
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
