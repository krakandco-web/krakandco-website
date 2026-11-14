"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

export interface ActiveFilterChip {
  id: string;
  key: string;
  label: string;
  value: string;
}

export function useShopFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Parse current state
  const selectedRegions = useMemo(
    () => searchParams.getAll("region"),
    [searchParams]
  );
  const selectedCategories = useMemo(
    () => searchParams.getAll("category"),
    [searchParams]
  );
  const selectedSpices = useMemo(
    () => searchParams.getAll("spice"),
    [searchParams]
  );
  const selectedPackSizes = useMemo(
    () => searchParams.getAll("packSize"),
    [searchParams]
  );
  const minPrice = searchParams.get("minPrice")
    ? Number(searchParams.get("minPrice"))
    : undefined;
  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : undefined;
  const inStockOnly = searchParams.get("inStock") === "true";
  const currentSort = searchParams.get("sort") || "featured";
  const currentPage = Number(searchParams.get("page")) || 1;

  // Helper to push updated URL with page reset
  const updateUrl = useCallback(
    (newParams: URLSearchParams, resetPage = true) => {
      if (resetPage) {
        newParams.delete("page");
      }
      const queryString = newParams.toString();
      const targetUrl = queryString ? `${pathname}?${queryString}` : pathname;
      router.push(targetUrl, { scroll: false });
    },
    [pathname, router]
  );

  // Toggle multi-value filter (checkboxes)
  const toggleFilter = useCallback(
    (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams.toString());
      const currentValues = newParams.getAll(key);

      if (currentValues.includes(value)) {
        // Remove value
        newParams.delete(key);
        currentValues
          .filter((v) => v !== value)
          .forEach((v) => newParams.append(key, v));
      } else {
        // Add value
        newParams.append(key, value);
      }

      updateUrl(newParams);
    },
    [searchParams, updateUrl]
  );

  // Set single value filter (e.g. price, inStock)
  const setFilter = useCallback(
    (key: string, value: string | number | boolean | null) => {
      const newParams = new URLSearchParams(searchParams.toString());
      if (value === null || value === undefined || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
      updateUrl(newParams);
    },
    [searchParams, updateUrl]
  );

  // Clear single filter chip
  const removeFilterValue = useCallback(
    (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams.toString());
      if (key === "minPrice" || key === "maxPrice" || key === "inStock") {
        newParams.delete(key);
      } else {
        const remaining = newParams.getAll(key).filter((v) => v !== value);
        newParams.delete(key);
        remaining.forEach((v) => newParams.append(key, v));
      }
      updateUrl(newParams);
    },
    [searchParams, updateUrl]
  );

  // Clear all filters but preserve sort
  const clearAllFilters = useCallback(() => {
    const newParams = new URLSearchParams();
    if (currentSort && currentSort !== "featured") {
      newParams.set("sort", currentSort);
    }
    updateUrl(newParams);
  }, [currentSort, updateUrl]);

  // Set sort order (preserves active filters)
  const setSort = useCallback(
    (newSort: string) => {
      const newParams = new URLSearchParams(searchParams.toString());
      if (newSort === "featured") {
        newParams.delete("sort");
      } else {
        newParams.set("sort", newSort);
      }
      updateUrl(newParams, false); // Do not reset page when sorting
    },
    [searchParams, updateUrl]
  );

  // Change page
  const setPage = useCallback(
    (newPage: number) => {
      const newParams = new URLSearchParams(searchParams.toString());
      if (newPage <= 1) {
        newParams.delete("page");
      } else {
        newParams.set("page", String(newPage));
      }
      updateUrl(newParams, false);
    },
    [searchParams, updateUrl]
  );

  // Generate active filter chips
  const activeChips = useMemo<ActiveFilterChip[]>(() => {
    const chips: ActiveFilterChip[] = [];

    // Region chips
    selectedRegions.forEach((reg) => {
      const label =
        reg === "south-indian"
          ? "South Indian"
          : reg === "north-indian"
          ? "North Indian"
          : "Pan-Indian";
      chips.push({ id: `region-${reg}`, key: "region", label, value: reg });
    });

    // Category chips
    selectedCategories.forEach((cat) => {
      const label = cat
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      chips.push({ id: `category-${cat}`, key: "category", label, value: cat });
    });

    // Spice chips
    selectedSpices.forEach((spice) => {
      chips.push({
        id: `spice-${spice}`,
        key: "spice",
        label: `${spice} Spice`,
        value: spice,
      });
    });

    // Pack size chips
    selectedPackSizes.forEach((size) => {
      chips.push({
        id: `packSize-${size}`,
        key: "packSize",
        label: `Size: ${size}`,
        value: size,
      });
    });

    // Price range chips
    if (minPrice !== undefined && maxPrice !== undefined) {
      chips.push({
        id: "price-range",
        key: "minPrice",
        label: `₹${minPrice} - ₹${maxPrice}`,
        value: `${minPrice}-${maxPrice}`,
      });
    } else if (minPrice !== undefined) {
      chips.push({
        id: "price-min",
        key: "minPrice",
        label: `Above ₹${minPrice}`,
        value: String(minPrice),
      });
    } else if (maxPrice !== undefined) {
      chips.push({
        id: "price-max",
        key: "maxPrice",
        label: `Under ₹${maxPrice}`,
        value: String(maxPrice),
      });
    }

    // Availability chip
    if (inStockOnly) {
      chips.push({
        id: "in-stock",
        key: "inStock",
        label: "In Stock Only",
        value: "true",
      });
    }

    return chips;
  }, [
    selectedRegions,
    selectedCategories,
    selectedSpices,
    selectedPackSizes,
    minPrice,
    maxPrice,
    inStockOnly,
  ]);

  const totalActiveFilterCount = activeChips.length;

  return {
    selectedRegions,
    selectedCategories,
    selectedSpices,
    selectedPackSizes,
    minPrice,
    maxPrice,
    inStockOnly,
    currentSort,
    currentPage,
    activeChips,
    totalActiveFilterCount,
    toggleFilter,
    setFilter,
    removeFilterValue,
    clearAllFilters,
    setSort,
    setPage,
  };
}
