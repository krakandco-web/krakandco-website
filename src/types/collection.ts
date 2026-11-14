/**
 * KRAK & CO. — Collection & Taxonomy TypeScript Data Contracts
 */
import { CulinaryRegion, SnackCategory } from "./product";

export interface SubcategoryShortcut {
  name: string;
  slug: string;
  queryParam: { key: string; value: string };
  count?: number;
}

export interface Collection {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  description: string;
  shortTagline: string;
  region?: CulinaryRegion;
  category?: SnackCategory;
  bannerImageUrl: string;
  themeColor: "maroon" | "forest" | "mustard" | "sand";
  featuredProductSlugs: string[];
  metaTitle: string;
  metaDescription: string;
  heroBadge?: string;
  subcategories?: SubcategoryShortcut[];
  editorialTitle?: string;
  editorialText?: string;
  relatedCollectionSlugs?: string[];
}


