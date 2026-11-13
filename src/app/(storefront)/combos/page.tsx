import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snack Combos & Value Bundles — KRAK & CO.",
  description: "Save on bundled Indian snack favorites. Chai-time samplers and regional variety packs.",
};

export default function CombosPage() {
  return (
    <RoutePlaceholder
      title="Snack Combos & Value Bundles"
      route="/combos"
      category="Storefront"
      description="Curated snack combinations and tea-time samplers with package bundle savings."
    />
  );
}
