"use client";

import React from "react";
import { SlidersHorizontal, X, ArrowUpDown } from "lucide-react";
import { ActiveFilterChip } from "./useShopFilters";

export interface ProductDiscoveryToolbarProps {
  totalCount: number;
  filteredCount: number;
  currentSort: string;
  totalActiveFilterCount: number;
  activeChips: ActiveFilterChip[];
  onOpenMobileFilters: () => void;
  onSortChange: (newSort: string) => void;
  onRemoveChip: (key: string, value: string) => void;
  onClearAll: () => void;
}

export function ProductDiscoveryToolbar({
  totalCount,
  filteredCount,
  currentSort,
  totalActiveFilterCount,
  activeChips,
  onOpenMobileFilters,
  onSortChange,
  onRemoveChip,
  onClearAll,
}: ProductDiscoveryToolbarProps) {
  return (
    <div className="space-y-3">
      {/* Top Bar: Count, Mobile Trigger, Sort */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-sand pb-4">
        {/* Count */}
        <div className="flex items-center gap-2">
          <p className="font-sans text-xs sm:text-sm font-semibold text-text-primary">
            Showing <span className="text-brand-maroon font-bold">{filteredCount}</span> of {totalCount} snacks
          </p>
        </div>

        {/* Controls: Mobile Filters Button & Sort Select */}
        <div className="flex items-center gap-2.5">
          {/* Mobile Filter Trigger */}
          <button
            type="button"
            onClick={onOpenMobileFilters}
            className="inline-flex lg:hidden items-center gap-2 rounded-xl border border-surface-sand bg-surface-card px-3.5 py-2 text-xs font-bold text-text-primary hover:border-brand-maroon/40 shadow-2xs transition-colors"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-brand-maroon" />
            <span>Filters</span>
            {totalActiveFilterCount > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-maroon text-[10px] font-bold text-text-inverse">
                {totalActiveFilterCount}
              </span>
            )}
          </button>

          {/* Sort Control */}
          <div className="flex items-center gap-1.5">
            <span className="hidden sm:inline-block text-xs font-medium text-text-muted">
              Sort by:
            </span>
            <div className="relative">
              <select
                value={currentSort}
                onChange={(e) => onSortChange(e.target.value)}
                aria-label="Sort snacks by"
                className="appearance-none rounded-xl border border-surface-sand bg-surface-card pl-3 pr-8 py-2 text-xs font-semibold text-text-primary shadow-2xs hover:border-brand-maroon/40 focus:border-brand-maroon focus:outline-none transition-colors cursor-pointer"
              >
                <option value="featured">Featured Picks</option>
                <option value="popularity">Bestsellers</option>
                <option value="rating">Customer Rating</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
              <ArrowUpDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-muted" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Active Filter Chips */}
      {activeChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-semibold text-text-muted mr-1">
            Active Filters:
          </span>

          {activeChips.map((chip) => (
            <span
              key={chip.id}
              className="inline-flex items-center gap-1 rounded-full border border-brand-maroon/30 bg-brand-maroon/5 px-2.5 py-1 text-[11px] font-semibold text-brand-maroon shadow-2xs"
            >
              <span>{chip.label}</span>
              <button
                type="button"
                onClick={() => onRemoveChip(chip.key, chip.value)}
                aria-label={`Remove filter ${chip.label}`}
                className="hover:text-brand-maroon-dark focus:outline-none"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}

          <button
            type="button"
            onClick={onClearAll}
            className="text-[11px] font-bold text-brand-maroon hover:underline ml-1"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
