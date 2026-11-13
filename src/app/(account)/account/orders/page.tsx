import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Order History",
  description: "View past orders, track live packages, and reorder your favourite snacks.",
};

export default function OrdersPage() {
  return (
    <RoutePlaceholder
      title="Order History"
      route="/account/orders"
      category="Account"
      description="List of all completed, active, and cancelled orders with 1-click reorder and downloadable GST tax invoices."
    />
  );
}
