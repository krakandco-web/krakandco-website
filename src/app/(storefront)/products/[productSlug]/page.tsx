import { productService } from "@/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductDetailView } from "@/components/product";

interface ProductPageProps {
  params: {
    productSlug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await productService.getProductBySlug(params.productSlug);
  if (!product) {
    return { title: "Product Not Found — KRAK & CO." };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const canonicalUrl = `${siteUrl}/products/${product.slug}`;

  return {
    title: `${product.name} — KRAK & CO.`,
    description: `${product.shortDescription} Kettle-fried in ${product.cookingMedium}. Handcrafted, zero palm oil.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${product.name} — Authentic Indian Snacks`,
      description: product.shortDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: product.thumbnailUrl,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await productService.getProductBySlug(params.productSlug);

  if (!product) {
    notFound();
  }

  // Fetch related products for "Frequently Bought Together"
  const allProducts = await productService.getAllProducts();
  const relatedProducts = allProducts.filter(
    (p) => p.slug !== product.slug && (p.region === product.region || p.primaryCategory === product.primaryCategory)
  );

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
