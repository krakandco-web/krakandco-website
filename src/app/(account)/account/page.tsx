import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "My Account Dashboard",
  description: "Manage your KRAK & CO. account profile, orders, addresses, and wishlist.",
};

export default function AccountDashboardPage() {
  return (
    <RoutePlaceholder
      title="My Account"
      route="/account"
      category="Account"
      description="Customer profile hub displaying recent orders, saved addresses, active wishlist items, and account settings."
    />
  );
}

