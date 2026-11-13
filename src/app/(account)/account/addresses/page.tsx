import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Saved Addresses",
  description: "Manage your delivery addresses for seamless snack deliveries across India.",
};

export default function AddressesPage() {
  return (
    <RoutePlaceholder
      title="Saved Addresses"
      route="/account/addresses"
      category="Account"
      description="Address book supporting multiple shipping addresses, PIN code validation, and default address selection."
    />
  );
}

