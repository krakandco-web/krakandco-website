import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Customer Reviews & Social Proof",
  description: "Read 25,000+ verified customer reviews for KRAK & CO. Indian snacks.",
};

export default function ReviewsPage() {
  return (
    <RoutePlaceholder
      title="4.8 / 5 Rating from 25,346 Verified Foodies"
      route="/reviews"
      category="Content"
      description="Wall of authentic customer love, photo reviews, regional taste testimonials, and verified buyer ratings from every corner of India."
    />
  );
}
