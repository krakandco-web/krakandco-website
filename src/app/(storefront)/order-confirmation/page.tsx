import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Thank you for your order with KRAK & CO.",
};

export default function OrderConfirmationPage() {
  return (
    <RoutePlaceholder
      title="Order Confirmed!"
      route="/order-confirmation"
      category="Commerce"
      description="Instant order confirmation displaying assigned Order ID, tracking timeline, dispatch estimate, and delivery summary."
    />
  );
}
