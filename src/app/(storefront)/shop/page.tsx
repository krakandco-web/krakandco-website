import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Snacks & Sweets — KRAK & CO.",
  description: "Browse our complete catalog of authentic Indian savouries, mixtures, sweets, and gift boxes.",
};

export default function ShopPage() {
  return (
    <RoutePlaceholder
      title="Shop All Snacks & Sweets"
      route="/shop"
      category="Storefront"
      description="Complete catalog listing with faceted filtering by region, category, spice level, and price."
    />
  );
}

