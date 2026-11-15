import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Returns & Refund Policy",
  description: "Learn about KRAK & CO. 100% taste and freshness guarantee and refund procedures.",
};

export default function ReturnsPolicyPage() {
  return (
    <RoutePlaceholder
      title="Returns & Refund Policy"
      route="/returns-policy"
      category="Content"
      description="100% Freshness and Taste Guarantee policy, reporting window for damaged shipments, no-questions-asked replacements, and direct UPI/original payment mode refund timelines."
    />
  );
}

