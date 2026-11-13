/**
 * KRAK & CO. — Discovery, Filter & Search TypeScript Contracts
 */
import { CulinaryRegion, Product, SnackCategory, SpiceLevel } from "./product";

export type SortOption = "popularity" | "price-asc" | "price-desc" | "rating" | "newest";

export interface FacetedFilters {
  regions?: CulinaryRegion[];
  categories?: SnackCategory[];
  spiceLevels?: SpiceLevel[];
  priceRange?: [number, number];
  cookingMediums?: string[];
  inStockOnly?: boolean;
}

export interface SearchResult {
  query: string;
  totalMatches: number;
  products: Product[];
  suggestedCategories: { slug: string; name: string; count: number }[];
  suggestedCollections: { slug: string; name: string }[];
  popularSearches: string[];
}

