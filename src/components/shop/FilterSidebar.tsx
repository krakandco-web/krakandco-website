"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/forms/Checkbox";
import { ChevronDown, SlidersHorizontal, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { FilterOptionCount } from "@/services/products/productService";

export interface FilterSidebarProps {
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
  onToggleFilter: (key: string, value: string) => void;
  onSetFilter: (key: string, value: string | number | boolean | null) => void;
  onClearAll: () => void;
  className?: string;
}

export function FilterSidebar({
  availableFilters,
  selectedRegions,
  selectedCategories,
  selectedSpices,
  selectedPackSizes,
  minPrice,
  maxPrice,
  inStockOnly,
  totalActiveFilterCount,
  onToggleFilter,
  onSetFilter,
  onClearAll,
  className,
}: FilterSidebarProps) {
  // Collapsible section open states
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    region: true,
    category: true,
    price: true,
    spice: true,
    availability: true,
    packSize: true,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Local inputs for price range
  const [customMin, setCustomMin] = useState(minPrice?.toString() || "");
  const [customMax, setCustomMax] = useState(maxPrice?.toString() || "");

  const handleApplyPrice = (e: React.FormEvent) => {
    e.preventDefault();
    const minVal = customMin ? Number(customMin) : null;
    const maxVal = customMax ? Number(customMax) : null;
    onSetFilter("minPrice", minVal);
    onSetFilter("maxPrice", maxVal);
  };

  const setPresetPrice = (min: number | null, max: number | null) => {
    setCustomMin(min?.toString() || "");
    setCustomMax(max?.toString() || "");
    onSetFilter("minPrice", min);
    onSetFilter("maxPrice", max);
  };

  return (
    <aside
      aria-label="Product Filters"
      className={cn(
        "w-full rounded-2xl border border-surface-sand bg-surface-card p-5 shadow-xs",
        className
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-4 border-b border-surface-sand">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-brand-maroon" />
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-text-primary">
            Filters
          </h2>
          {totalActiveFilterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-maroon text-[11px] font-bold text-text-inverse">
              {totalActiveFilterCount}
            </span>
          )}
        </div>

        {totalActiveFilterCount > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-maroon hover:text-brand-maroon-dark transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      <div className="divide-y divide-surface-sand/80">
        {/* 1. REGION FILTER */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("region")}
            aria-expanded={openSections.region}
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
            <div className="mt-3 space-y-2.5">
              {availableFilters.regions.map((reg) => (
                <div key={reg.slug} className="flex items-center justify-between">
                  <Checkbox
                    id={`filter-reg-${reg.slug}`}
                    label={<span className="text-xs text-text-primary font-medium">{reg.label}</span>}
                    checked={selectedRegions.includes(reg.slug)}
                    onChange={() => onToggleFilter("region", reg.slug)}
                  />
                  <span className="text-[11px] font-mono text-text-muted">
                    ({reg.count})
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. CATEGORY FILTER */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("category")}
            aria-expanded={openSections.category}
            className="flex w-full items-center justify-between text-left font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon"
          >
            <span>Snack Category</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200 text-text-muted",
                openSections.category && "rotate-180 text-brand-maroon"
              )}
            />
          </button>

          {openSections.category && (
            <div className="mt-3 space-y-2.5">
              {availableFilters.categories.map((cat) => (
                <div key={cat.slug} className="flex items-center justify-between">
                  <Checkbox
                    id={`filter-cat-${cat.slug}`}
                    label={<span className="text-xs text-text-primary font-medium">{cat.label}</span>}
                    checked={selectedCategories.includes(cat.slug)}
                    onChange={() => onToggleFilter("category", cat.slug)}
                  />
                  <span className="text-[11px] font-mono text-text-muted">
                    ({cat.count})
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. PRICE RANGE FILTER */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("price")}
            aria-expanded={openSections.price}
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
              {/* Quick Presets */}
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setPresetPrice(null, 150)}
                  className={cn(
                    "rounded-lg border px-2 py-1 text-[11px] font-semibold transition-all",
                    maxPrice === 150 && minPrice === undefined
                      ? "border-brand-maroon bg-brand-maroon text-text-inverse"
                      : "border-surface-sand bg-surface-canvas text-text-secondary hover:border-brand-maroon/40"
                  )}
                >
                  Under ₹150
                </button>
                <button
                  type="button"
                  onClick={() => setPresetPrice(150, 300)}
                  className={cn(
                    "rounded-lg border px-2 py-1 text-[11px] font-semibold transition-all",
                    minPrice === 150 && maxPrice === 300
                      ? "border-brand-maroon bg-brand-maroon text-text-inverse"
                      : "border-surface-sand bg-surface-canvas text-text-secondary hover:border-brand-maroon/40"
                  )}
                >
                  ₹150 - ₹300
                </button>
                <button
                  type="button"
                  onClick={() => setPresetPrice(300, 600)}
                  className={cn(
                    "rounded-lg border px-2 py-1 text-[11px] font-semibold transition-all",
                    minPrice === 300 && maxPrice === 600
                      ? "border-brand-maroon bg-brand-maroon text-text-inverse"
                      : "border-surface-sand bg-surface-canvas text-text-secondary hover:border-brand-maroon/40"
                  )}
                >
                  ₹300 - ₹600
                </button>
                <button
                  type="button"
                  onClick={() => setPresetPrice(600, null)}
                  className={cn(
                    "rounded-lg border px-2 py-1 text-[11px] font-semibold transition-all",
                    minPrice === 600 && maxPrice === undefined
                      ? "border-brand-maroon bg-brand-maroon text-text-inverse"
                      : "border-surface-sand bg-surface-canvas text-text-secondary hover:border-brand-maroon/40"
                  )}
                >
                  ₹600 &amp; Above
                </button>
              </div>

              {/* Min/Max Manual Input */}
              <form onSubmit={handleApplyPrice} className="flex items-center gap-2 pt-1">
                <input
                  type="number"
                  placeholder="Min"
                  value={customMin}
                  onChange={(e) => setCustomMin(e.target.value)}
                  className="w-full rounded-lg border border-surface-sand bg-surface-canvas px-2.5 py-1.5 text-xs text-text-primary focus:border-brand-maroon focus:outline-none"
                  min="0"
                />
                <span className="text-xs text-text-muted">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={customMax}
                  onChange={(e) => setCustomMax(e.target.value)}
                  className="w-full rounded-lg border border-surface-sand bg-surface-canvas px-2.5 py-1.5 text-xs text-text-primary focus:border-brand-maroon focus:outline-none"
                  min="0"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-brand-maroon px-3 py-1.5 text-xs font-bold text-text-inverse hover:bg-brand-maroon-dark transition-colors"
                >
                  Go
                </button>
              </form>
            </div>
          )}
        </div>

        {/* 4. SPICE LEVEL FILTER */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("spice")}
            aria-expanded={openSections.spice}
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
            <div className="mt-3 space-y-2.5">
              {availableFilters.spiceLevels.map((sp) => (
                <div key={sp.slug} className="flex items-center justify-between">
                  <Checkbox
                    id={`filter-spice-${sp.slug}`}
                    label={<span className="text-xs text-text-primary font-medium">{sp.label}</span>}
                    checked={selectedSpices.includes(sp.slug)}
                    onChange={() => onToggleFilter("spice", sp.slug)}
                  />
                  <span className="text-[11px] font-mono text-text-muted">
                    ({sp.count})
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 5. PACK SIZE FILTER */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("packSize")}
            aria-expanded={openSections.packSize}
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
            <div className="mt-3 space-y-2.5">
              {availableFilters.packSizes.map((size) => (
                <div key={size.slug} className="flex items-center justify-between">
                  <Checkbox
                    id={`filter-size-${size.slug}`}
                    label={<span className="text-xs text-text-primary font-medium">{size.label}</span>}
                    checked={selectedPackSizes.includes(size.slug)}
                    onChange={() => onToggleFilter("packSize", size.slug)}
                  />
                  <span className="text-[11px] font-mono text-text-muted">
                    ({size.count})
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 6. AVAILABILITY FILTER */}
        <div className="py-4">
          <button
            type="button"
            onClick={() => toggleSection("availability")}
            aria-expanded={openSections.availability}
            className="flex w-full items-center justify-between text-left font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon"
          >
            <span>Availability</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200 text-text-muted",
                openSections.availability && "rotate-180 text-brand-maroon"
              )}
            />
          </button>

          {openSections.availability && (
            <div className="mt-3">
              <Checkbox
                id="filter-in-stock"
                label={<span className="text-xs text-text-primary font-medium">In Stock Only</span>}
                checked={inStockOnly}
                onChange={() => onSetFilter("inStock", inStockOnly ? null : "true")}
              />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
