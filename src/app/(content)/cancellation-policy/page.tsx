import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Rules and timelines for modifying or cancelling orders with KRAK & CO.",
};

export default function CancellationPolicyPage() {
  return (
    <RoutePlaceholder
      title="Order Cancellation Policy"
      route="/cancellation-policy"
      category="Content"
      description="Cancellation window instructions (prior to package dispatch), self-service cancellation via Order History, and automated refund processing rules."
    />
  );
}

