import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Shopping Cart — KRAK & CO.",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <RoutePlaceholder
      title="Your Shopping Cart"
      route="/cart"
      category="Commerce"
      description="Review selected snacks, apply coupons, and monitor the Free Pan-India Shipping progress bar."
    />
  );
}
