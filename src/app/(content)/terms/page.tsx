import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of sale and storefront service for KRAK & CO.",
};

export default function TermsPage() {
  return (
    <RoutePlaceholder
      title="Terms of Service & Sale"
      route="/terms"
      category="Content"
      description="Legal agreement governing site usage, product pricing, intellectual property, promotional coupons, limitation of liability, and jurisdiction."
    />
  );
}
