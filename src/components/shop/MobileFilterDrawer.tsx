"use client";

import React, { useState } from "react";
import { Drawer } from "@/components/ui/Drawer";
import { Checkbox } from "@/components/forms/Checkbox";
import { FilterOptionCount } from "@/services/products/productService";
import { ChevronDown, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  availableFilters: {
    regions: FilterOptionCount[];
    categories: FilterOptionCount[];
    spiceLevels: FilterOptionCount[];
    priceRange: { min: number; max: number };
    packSizes: FilterOptionCount[];
  };
  selectedRegions: string[];
  selectedCategories: string[];
  selectedSpices: string[];
  selectedPackSizes: string[];
  minPrice?: number;
  maxPrice?: number;
  inStockOnly: boolean;
  totalActiveFilterCount: number;
  totalMatchingProducts: number;
  onToggleFilter: (key: string, value: string) => void;
  onSetFilter: (key: string, value: string | number | boolean | null) => void;
  onClearAll: () => void;
}

export function MobileFilterDrawer({
  isOpen,
  onClose,
  availableFilters,
  selectedRegions,
  selectedCategories,
  selectedSpices,
  selectedPackSizes,
  minPrice,
  maxPrice,
  inStockOnly,
  totalActiveFilterCount,
  totalMatchingProducts,
  onToggleFilter,
  onSetFilter,
  onClearAll,
}: MobileFilterDrawerProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    region: true,
    category: true,
    price: true,
    spice: false,
    packSize: false,
    availability: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [customMin, setCustomMin] = useState(minPrice?.toString() || "");
  const [customMax, setCustomMax] = useState(maxPrice?.toString() || "");

  const handleApplyPrice = (e: React.FormEvent) => {
    e.preventDefault();
    onSetFilter("minPrice", customMin ? Number(customMin) : null);
    onSetFilter("maxPrice", customMax ? Number(customMax) : null);
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="left"
      title="Filter Snacks"
      description={`${totalMatchingProducts} authentic snacks available`}
      footer={
        <div className="flex items-center gap-3 w-full">
          <button
            type="button"
            onClick={onClearAll}
            disabled={totalActiveFilterCount === 0}
            className="flex-1 rounded-xl border border-surface-sand py-3 text-xs font-bold text-text-secondary hover:border-brand-maroon/40 disabled:opacity-40 transition-colors"
          >
            Clear All
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-2 rounded-xl bg-brand-maroon py-3 text-xs font-bold uppercase tracking-wider text-text-inverse hover:bg-brand-maroon-dark transition-colors"
          >
            Show {totalMatchingProducts} Products
          </button>
        </div>
      }
    >
      <div className="divide-y divide-surface-sand/80 px-1">
        {/* 1. REGION */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("region")}
            className="flex w-full items-center justify-between text-left font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon"
          >
            <span>Culinary Region</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200 text-text-muted",
                openSections.region && "rotate-180 text-brand-maroon"
              )}
            />
          </button>
          {openSections.region && (
            <div className="mt-3 space-y-3">
              {availableFilters.regions.map((reg) => (
                <div key={reg.slug} className="flex items-center justify-between">
                  <Checkbox
                    id={`m-filter-reg-${reg.slug}`}
                    label={<span className="text-xs text-text-primary font-medium">{reg.label}</span>}
                    checked={selectedRegions.includes(reg.slug)}
                    onChange={() => onToggleFilter("region", reg.slug)}
                  />
                  <span className="text-xs text-text-muted">({reg.count})</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. CATEGORY */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("category")}
            className="flex w-full items-center justify-between text-left font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon"
          >
            <span>Category</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200 text-text-muted",
                openSections.category && "rotate-180 text-brand-maroon"
              )}
            />
          </button>
          {openSections.category && (
            <div className="mt-3 space-y-3">
              {availableFilters.categories.map((cat) => (
                <div key={cat.slug} className="flex items-center justify-between">
                  <Checkbox
                    id={`m-filter-cat-${cat.slug}`}
                    label={<span className="text-xs text-text-primary font-medium">{cat.label}</span>}
                    checked={selectedCategories.includes(cat.slug)}
                    onChange={() => onToggleFilter("category", cat.slug)}
                  />
                  <span className="text-xs text-text-muted">({cat.count})</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. PRICE RANGE */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("price")}
            className="flex w-full items-center justify-between text-left font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon"
          >
            <span>Price Range (₹)</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200 text-text-muted",
                openSections.price && "rotate-180 text-brand-maroon"
              )}
            />
          </button>
          {openSections.price && (
            <div className="mt-3 space-y-3">
              <form onSubmit={handleApplyPrice} className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={customMin}
                  onChange={(e) => setCustomMin(e.target.value)}
                  className="w-full rounded-lg border border-surface-sand bg-surface-canvas px-3 py-2 text-xs text-text-primary"
                />
                <span className="text-text-muted">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={customMax}
                  onChange={(e) => setCustomMax(e.target.value)}
                  className="w-full rounded-lg border border-surface-sand bg-surface-canvas px-3 py-2 text-xs text-text-primary"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-brand-maroon px-3 py-2 text-xs font-bold text-text-inverse"
                >
                  Go
                </button>
              </form>
            </div>
          )}
        </div>

        {/* 4. SPICE LEVEL */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("spice")}
            className="flex w-full items-center justify-between text-left font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon"
          >
            <span>Spice Level</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200 text-text-muted",
                openSections.spice && "rotate-180 text-brand-maroon"
              )}
            />
          </button>
          {openSections.spice && (
            <div className="mt-3 space-y-3">
              {availableFilters.spiceLevels.map((sp) => (
                <div key={sp.slug} className="flex items-center justify-between">
                  <Checkbox
                    id={`m-filter-spice-${sp.slug}`}
                    label={<span className="text-xs text-text-primary font-medium">{sp.label}</span>}
                    checked={selectedSpices.includes(sp.slug)}
                    onChange={() => onToggleFilter("spice", sp.slug)}
                  />
                  <span className="text-xs text-text-muted">({sp.count})</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 5. PACK SIZE */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("packSize")}
            className="flex w-full items-center justify-between text-left font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon"
          >
            <span>Pack Size</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200 text-text-muted",
                openSections.packSize && "rotate-180 text-brand-maroon"
              )}
            />
          </button>
          {openSections.packSize && (
            <div className="mt-3 space-y-3">
              {availableFilters.packSizes.map((size) => (
                <div key={size.slug} className="flex items-center justify-between">
                  <Checkbox
                    id={`m-filter-size-${size.slug}`}
                    label={<span className="text-xs text-text-primary font-medium">{size.label}</span>}
                    checked={selectedPackSizes.includes(size.slug)}
                    onChange={() => onToggleFilter("packSize", size.slug)}
                  />
                  <span className="text-xs text-text-muted">({size.count})</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 6. AVAILABILITY */}
        <div className="py-4">
          <Checkbox
            id="m-filter-in-stock"
            label={<span className="text-xs text-text-primary font-medium">In Stock Only</span>}
            checked={inStockOnly}
            onChange={() => onSetFilter("inStock", inStockOnly ? null : "true")}
          />
        </div>
      </div>
    </Drawer>
  );
}
