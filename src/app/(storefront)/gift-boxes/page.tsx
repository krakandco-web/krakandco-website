import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festive Gift Boxes & Hampers — KRAK & CO.",
  description: "Curated snack hampers for festivals, family celebrations, and corporate gifting.",
};

export default function GiftBoxesPage() {
  return (
    <RoutePlaceholder
      title="Festive Gift Boxes & Hampers"
      route="/gift-boxes"
      category="Storefront"
      description="Curated luxury hampers, festive gift packaging, and bulk corporate gifting orders."
    />
  );
}
