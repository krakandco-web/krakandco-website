/**
 * KRAK & CO. — Collection & Taxonomy TypeScript Data Contracts
 */
import { CulinaryRegion, SnackCategory } from "./product";

export interface Collection {
  id: string;
  slug: string;
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
}
