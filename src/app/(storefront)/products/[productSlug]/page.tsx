import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { productService } from "@/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ProductPageProps {
  params: {
    productSlug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await productService.getProductBySlug(params.productSlug);
  if (!product) {
    return { title: "Product — KRAK & CO." };
  }
  return {
    title: `${product.name} — KRAK & CO.`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await productService.getProductBySlug(params.productSlug);

  if (!product) {
    notFound();
  }

  return (
    <RoutePlaceholder
      title={product.name}
      route={`/products/${params.productSlug}`}
      category="Commerce"
      description={`${product.shortDescription} Starting at ₹${product.variants[0]?.price} (${product.cookingMedium})`}
    />
  );
}
