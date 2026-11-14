import type { Metadata } from "next";
import { productService, ProductFilterParams } from "@/services/products/productService";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { CategoryShortcuts } from "@/components/shop/CategoryShortcuts";
import { ShopContainer } from "@/components/shop/ShopContainer";
import { ShopDiscoveryContent } from "@/components/shop/ShopDiscoveryContent";

export const metadata: Metadata = {
  title: "Shop All Authentic Indian Snacks — KRAK & CO.",
  description:
    "Discover authentic South Indian and North Indian savouries, Kerala banana chips, Madurai mixture, Bikaneri bhujia, royal sweets, and curated snack gift boxes.",
  keywords: [
    "Shop Indian snacks",
    "Kerala banana chips",
    "Madurai mixture",
    "Aloo bhujia",
    "Ragi murukku",
    "Kaju katli",
    "Indian namkeen",
    "South Indian snacks",
    "North Indian snacks",
  ],
};

interface ShopPageProps {
  searchParams: {
    region?: string | string[];
    category?: string | string[];
    minPrice?: string;
    maxPrice?: string;
    spice?: string | string[];
    packSize?: string | string[];
    inStock?: string;
    sort?: string;
    page?: string;
  };
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const filterParams: ProductFilterParams = {
    region: searchParams.region,
    category: searchParams.category,
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    spiceLevel: searchParams.spice,
    packSize: searchParams.packSize,
    inStock: searchParams.inStock === "true",
    sort: typeof searchParams.sort === "string" ? searchParams.sort : undefined,
    page: searchParams.page ? Number(searchParams.page) : 1,
    limit: 8, // 8 items per page to provide clean pagination across the catalog
  };

  const filterResult = await productService.filterProducts(filterParams);

  return (
    <div className="flex w-full flex-col bg-surface-canvas min-h-screen">
      {/* Section 02 & 03: Breadcrumb & Shop Page Header */}
      <ShopHeader />

      {/* Section 04: Category Shortcuts */}
      <CategoryShortcuts />

      {/* Main Content Area: Sidebar + Grid */}
      <main className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <ShopContainer filterResult={filterResult} />

        {/* Section 08: Supporting Discovery Content */}
        <ShopDiscoveryContent />
      </main>
    </div>
  );
}
