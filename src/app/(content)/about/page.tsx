import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "About Our Story & Craft",
  description: "The story behind KRAK & CO. — celebrating India's rich culinary traditions from Coimbatore to Chandni Chowk.",
};

export default function AboutPage() {
  return (
    <RoutePlaceholder
      title="A Snack Brand That Brings India Together"
      route="/about"
      category="Content"
      description="From the crispy flavours of the South to the beloved snacks of the North, learn about our heritage, founders' journey, sourcing philosophy, and zero-compromise artisanal recipes."
    />
  );
}

