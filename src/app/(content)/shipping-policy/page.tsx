import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: "Learn about KRAK & CO. shipping timelines, courier partners, free shipping thresholds, and tracking.",
};

export default function ShippingPolicyPage() {
  return (
    <RoutePlaceholder
      title="Shipping & Delivery Policy"
      route="/shipping-policy"
      category="Content"
      description="Details on Free Shipping above ₹499, metro 2-3 business days delivery, tier-2/3 4-5 business days timelines, air couriers (Bluedart, Delhivery), and tamper-evident nitro-flushed packing."
    />
  );
}
