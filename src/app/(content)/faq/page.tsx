import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find instant answers regarding shipping, ingredients, shelf life, allergens, and gift orders.",
};

export default function FAQPage() {
  return (
    <RoutePlaceholder
      title="Frequently Asked Questions"
      route="/faq"
      category="Content"
      description="Categorized FAQs covering ingredient sourcing, freshness preservation, shelf life guarantees, pan-India delivery, and payment options."
    />
  );
}
