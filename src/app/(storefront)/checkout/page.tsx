import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure one-page checkout for KRAK & CO. authentic Indian snacks.",
};

export default function CheckoutPage() {
  return (
    <RoutePlaceholder
      title="Secure Checkout"
      route="/checkout"
      category="Commerce"
      description="Single-page streamlined checkout flow with address verification, delivery option selection (Standard/Express), and integrated UPI/Card/Netbanking payment methods."
    />
  );
}
