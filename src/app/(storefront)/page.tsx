import type { Metadata } from "next";
import { productService } from "@/services";
import {
  HeroSection,
  TrustStrip,
  CategorySection,
  RegionalSection,
  BestsellersSection,
  GiftBoxesCombosSection,
  ReviewsSection,
  BrandStorySection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "KRAK & CO. — Authentic Indian Snacks: South to North",
  description:
    "Handcrafted authentic South and North Indian snacks, crispy banana chips in cold-pressed coconut oil, spicy mixtures, savouries, sweets and festive gift hampers.",
  openGraph: {
    title: "KRAK & CO. — Authentic Indian Snacks: South to North",
    description:
      "Traditional recipes, premium ingredients, and irresistible crunch in every bite. Pan-India delivery.",
    images: [
      {
        url: "/assets/brand/identity/reference-artboard.jpg",
        width: 1200,
        height: 630,
        alt: "KRAK & CO. Storefront",
      },
    ],
  },
};

export default async function StorefrontHomePage() {
  // Fetch real catalog products from commerce service abstraction
  const products = await productService.getAllProducts();

  return (
    <div className="flex w-full flex-col bg-surface-canvas overflow-x-hidden">
      {/* 1. Hero Section (Split Retro Artboard, Display Typography & Dual CTAs) */}
      <HeroSection />

      {/* 2. Trust and Service Strip (Authentic Recipes, Cold-Pressed, Fresh Packed, Pan-India, Secure) */}
      <TrustStrip />

      {/* 3. Shop by Category (6 Circular / Matchbox Avatar Cards) */}
      <CategorySection />

      {/* 4. Regional Showcases (South Indian Classics & North Indian Favourites) */}
      <RegionalSection />

      {/* 5. Bestsellers / Featured Products Grid (5 Verified Product Cards with Quick Add) */}
      <BestsellersSection products={products} />

      {/* 6. Gift Boxes and Snack Combos (Curated Hampers Banner + 4 Value Bundles) */}
      <GiftBoxesCombosSection />

      {/* 7. Customer Reviews & Social Proof Wall (25,000+ Verified Buyers Testimonials) */}
      <ReviewsSection />

      {/* 8. Brand Story / About Us Teaser ("A Snack Brand That Brings India Together") */}
      <BrandStorySection />
    </div>
  );
}
