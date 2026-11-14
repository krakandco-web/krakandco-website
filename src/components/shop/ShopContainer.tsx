"use client";

import React, { useState } from "react";
import { Product, ProductVariant } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductFilterResult } from "@/services/products/productService";
import { FilterSidebar } from "./FilterSidebar";
import { MobileFilterDrawer } from "./MobileFilterDrawer";
import { ProductDiscoveryToolbar } from "./ProductDiscoveryToolbar";
import { QuickAddModal } from "./QuickAddModal";
import { useShopFilters } from "./useShopFilters";
import { Pagination } from "@/components/common/Pagination";
import { useToast } from "@/components/feedback/Toast";
import { formatPrice } from "@/lib/utils";
import { EmptyState } from "@/components/feedback/EmptyState";
import { Frown, Sparkles } from "lucide-react";

export interface ShopContainerProps {
  filterResult: ProductFilterResult;
  hideCategoryFilter?: boolean;
  hideRegionFilter?: boolean;
}

export function ShopContainer({
  filterResult,
  hideCategoryFilter,
  hideRegionFilter,
}: ShopContainerProps) {
  const { showToast } = useToast();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  const {
    selectedRegions,
    selectedCategories,
    selectedSpices,
    selectedPackSizes,
    minPrice,
    maxPrice,
    inStockOnly,
    currentSort,
    activeChips,
    totalActiveFilterCount,
    toggleFilter,
    setFilter,
    removeFilterValue,
    clearAllFilters,
    setSort,
    setPage,
  } = useShopFilters();

  const handleAddToCart = (product: Product, variant: ProductVariant, quantity: number) => {
    showToast({
      type: "success",
      title: "Added to Cart!",
      description: `${quantity}x ${product.name} (${variant.packSize}) — ${formatPrice(
        variant.price * quantity
      )}`,
    });
  };

  const handleToggleWishlist = (product: Product) => {
    const isAlreadyWishlisted = wishlistIds.includes(product.id);
    setWishlistIds((prev) =>
      isAlreadyWishlisted ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );

    showToast({
      type: "info",
      title: isAlreadyWishlisted ? "Removed from Wishlist" : "Saved to Wishlist",
      description: product.name,
    });
  };

  const handleSelectVariants = (product: Product) => {
    setSelectedProductForModal(product);
  };

  const hasProducts = filterResult.products.length > 0;

  return (
    <div className="w-full">
      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        availableFilters={filterResult.availableFilters}
        selectedRegions={selectedRegions}
        selectedCategories={selectedCategories}
        selectedSpices={selectedSpices}
        selectedPackSizes={selectedPackSizes}
        minPrice={minPrice}
        maxPrice={maxPrice}
        inStockOnly={inStockOnly}
        totalActiveFilterCount={totalActiveFilterCount}
        totalMatchingProducts={filterResult.totalCount}
        onToggleFilter={toggleFilter}
        onSetFilter={setFilter}
        onClearAll={clearAllFilters}
        hideCategoryFilter={hideCategoryFilter}
        hideRegionFilter={hideRegionFilter}
      />

      {/* Quick Add Variant Selection Modal */}
      <QuickAddModal
        product={selectedProductForModal}
        isOpen={Boolean(selectedProductForModal)}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Main Layout: 2 Columns on Desktop (Sidebar + Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Filter Sidebar (3 cols on lg) */}
        <div className="hidden lg:block lg:col-span-3 sticky top-24">
          <FilterSidebar
            availableFilters={filterResult.availableFilters}
            selectedRegions={selectedRegions}
            selectedCategories={selectedCategories}
            selectedSpices={selectedSpices}
            selectedPackSizes={selectedPackSizes}
            minPrice={minPrice}
            maxPrice={maxPrice}
            inStockOnly={inStockOnly}
            totalActiveFilterCount={totalActiveFilterCount}
            onToggleFilter={toggleFilter}
            onSetFilter={setFilter}
            onClearAll={clearAllFilters}
            hideCategoryFilter={hideCategoryFilter}
            hideRegionFilter={hideRegionFilter}
          />
        </div>

        {/* Main Product Area (9 cols on lg, 12 on mobile) */}
        <div className="lg:col-span-9 space-y-6">
          {/* Discovery Toolbar: Count, Sort, Active Chips */}
          <ProductDiscoveryToolbar
            totalCount={filterResult.totalCount}
            filteredCount={filterResult.products.length}
            currentSort={currentSort}
            totalActiveFilterCount={totalActiveFilterCount}
            activeChips={activeChips}
            onOpenMobileFilters={() => setIsMobileDrawerOpen(true)}
            onSortChange={setSort}
            onRemoveChip={removeFilterValue}
            onClearAll={clearAllFilters}
          />

          {/* Product Grid or Empty State */}
          {hasProducts ? (
            <div className="space-y-10">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filterResult.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onAddToCart={handleAddToCart}
                    onSelectVariants={handleSelectVariants}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>

              {/* Pagination */}
              {filterResult.totalPages > 1 && (
                <div className="flex justify-center pt-6 border-t border-surface-sand">
                  <Pagination
                    currentPage={filterResult.currentPage}
                    totalPages={filterResult.totalPages}
                    onPageChange={(page) => setPage(page)}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="py-12">
              <EmptyState
                icon={<Frown className="h-12 w-12 text-brand-maroon" />}
                title="No snacks match your filters"
                description="We couldn't find any snacks matching your selected filter combination. Try clearing some filters or browse all authentic savouries."
                primaryAction={{
                  label: "Clear All Filters",
                  onClick: clearAllFilters,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
