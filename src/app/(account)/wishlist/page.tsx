import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "My Wishlist",
  description: "Saved savouries, sweets, and gift hampers to buy later.",
};

export default function WishlistPage() {
  return (
    <RoutePlaceholder
      title="My Wishlist"
      route="/wishlist"
      category="Account"
      description="Personal collection of saved snack favourites with instant 'Move All to Cart' action and stock status indicators."
    />
  );
}

