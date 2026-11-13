import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Track Your Order",
  description: "Live order tracking for your KRAK & CO. snack parcels across India.",
};

export default function TrackOrderPage() {
  return (
    <RoutePlaceholder
      title="Track Your Order"
      route="/track-order"
      category="Storefront"
      description="Real-time multi-carrier order tracking with milestone timeline: Order Placed → Packed → Shipped → Out for Delivery → Delivered."
    />
  );
}
