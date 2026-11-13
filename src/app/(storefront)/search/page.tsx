import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Results — KRAK & CO.",
  robots: { index: false, follow: true },
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  return (
    <RoutePlaceholder
      title={query ? `Search Results for "${query}"` : "Search Snacks & Sweets"}
      route="/search"
      category="Storefront"
      description="Live product discovery with instant suggestions and category matching."
    />
  );
}

