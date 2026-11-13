/**
 * KRAK & CO. — Product & Variant TypeScript Data Contracts
 */

export type CulinaryRegion = "south-indian" | "north-indian" | "pan-indian";

export type SnackCategory =
  | "chips-crisps"
  | "mixtures"
  | "savouries"
  | "sweets-mithai"
  | "pickles-sides"
  | "gift-boxes"
  | "combos";

export type SpiceLevel = "Mild" | "Medium" | "Spicy";

export type CookingMedium =
  | "Pure Cold-Pressed Coconut Oil"
  | "Refined Groundnut Oil"
  | "Pure Desi Ghee"
  | "Sesame (Gingelly) Oil";

export interface ProductVariant {
  id: string;
  sku: string;
  packSize: string; // e.g. "100g", "250g", "500g"
  weightGrams: number;
  price: number; // Current selling price in INR
  compareAtPrice?: number; // Crossed out original price for discount display
  inventoryCount: number;
  isDefault?: boolean;
}

export interface NutritionalInfo {
  servingSize: string; // e.g. "30g"
  calories: number; // kcal
  totalFat: string; // e.g. "9g"
  saturatedFat: string;
  transFat: string;
  carbohydrates: string;
  dietaryFiber: string;
  sugars: string;
  protein: string;
  sodium: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  primaryCategory: SnackCategory;
  secondaryCategories?: SnackCategory[];
  region: CulinaryRegion;
  tags: string[];
  isBestseller: boolean;
  isNew: boolean;
  isFeatured: boolean;
  isOutOfStock?: boolean;
  cookingMedium: CookingMedium;
  spiceLevel: SpiceLevel;
  dietaryType: "100% Vegetarian";
  ingredients: string[];
  allergens: string[];
  shelfLife: string; // e.g. "90 Days from packaging"
  storageInstructions: string;
  thumbnailUrl: string;
  galleryUrls: string[];
  variants: ProductVariant[];
  averageRating: number;
  reviewCount: number;
  relatedProductSlugs?: string[];
  frequentlyBoughtTogetherSlug?: string;
}
