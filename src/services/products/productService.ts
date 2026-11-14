/**
 * KRAK & CO. — Product Service Abstraction Layer
 * Pure typed interface designed for swappable headless commerce integration.
 */
import { MOCK_PRODUCTS } from "@/data/mock";
import { CulinaryRegion, Product, SnackCategory, SpiceLevel } from "@/types";

export interface ProductFilterParams {
  region?: string | string[];
  category?: string | string[];
  minPrice?: number;
  maxPrice?: number;
  spiceLevel?: string | string[];
  dietary?: string | string[];
  inStock?: boolean;
  packSize?: string | string[];
  sort?: string;
  page?: number;
  limit?: number;
}

export interface FilterOptionCount {
  slug: string;
  label: string;
  count: number;
}

export interface ProductFilterResult {
  products: Product[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  availableFilters: {
    regions: FilterOptionCount[];
    categories: FilterOptionCount[];
    spiceLevels: FilterOptionCount[];
    priceRange: { min: number; max: number };
    packSizes: FilterOptionCount[];
  };
}

export interface IProductService {
  getAllProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getProductsByCategory(category: SnackCategory): Promise<Product[]>;
  getProductsByRegion(region: CulinaryRegion): Promise<Product[]>;
  getBestsellerProducts(): Promise<Product[]>;
  filterProducts(params: ProductFilterParams): Promise<ProductFilterResult>;
}

class ProductService implements IProductService {
  async getAllProducts(): Promise<Product[]> {
    return MOCK_PRODUCTS;
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
    return product || null;
  }

  async getProductsByCategory(category: SnackCategory): Promise<Product[]> {
    return MOCK_PRODUCTS.filter(
      (p) => p.primaryCategory === category || p.secondaryCategories?.includes(category)
    );
  }

  async getProductsByRegion(region: CulinaryRegion): Promise<Product[]> {
    return MOCK_PRODUCTS.filter((p) => p.region === region || p.region === "pan-indian");
  }

  async getBestsellerProducts(): Promise<Product[]> {
    return MOCK_PRODUCTS.filter((p) => p.isBestseller);
  }

  async filterProducts(params: ProductFilterParams): Promise<ProductFilterResult> {
    let filtered = [...MOCK_PRODUCTS];

    const toArray = (v?: string | string[]): string[] => {
      if (!v) return [];
      return Array.isArray(v) ? v : [v];
    };

    const selectedRegions = toArray(params.region);
    const selectedCategories = toArray(params.category);
    const selectedSpices = toArray(params.spiceLevel);
    const selectedPackSizes = toArray(params.packSize);

    // 1. Region Filter
    if (selectedRegions.length > 0) {
      filtered = filtered.filter((p) => {
        // If "south-indian" is selected, match south-indian or pan-indian if specified
        return selectedRegions.includes(p.region);
      });
    }

    // 2. Category Filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(
        (p) =>
          selectedCategories.includes(p.primaryCategory) ||
          p.secondaryCategories?.some((cat) => selectedCategories.includes(cat))
      );
    }

    // 3. Price Filter (based on default variant price)
    if (typeof params.minPrice === "number") {
      filtered = filtered.filter((p) => {
        const defaultVar = p.variants.find((v) => v.isDefault) || p.variants[0];
        return defaultVar ? defaultVar.price >= params.minPrice! : true;
      });
    }
    if (typeof params.maxPrice === "number") {
      filtered = filtered.filter((p) => {
        const defaultVar = p.variants.find((v) => v.isDefault) || p.variants[0];
        return defaultVar ? defaultVar.price <= params.maxPrice! : true;
      });
    }

    // 4. Spice Level Filter
    if (selectedSpices.length > 0) {
      filtered = filtered.filter((p) => selectedSpices.includes(p.spiceLevel));
    }

    // 5. In-Stock Filter
    if (params.inStock) {
      filtered = filtered.filter((p) => {
        if (p.isOutOfStock) return false;
        return p.variants.some((v) => v.inventoryCount > 0);
      });
    }

    // 6. Pack Size Filter
    if (selectedPackSizes.length > 0) {
      filtered = filtered.filter((p) =>
        p.variants.some((v) =>
          selectedPackSizes.some((size) => v.packSize.toLowerCase().includes(size.toLowerCase()))
        )
      );
    }

    // 7. Sorting
    const sort = params.sort || "featured";
    switch (sort) {
      case "price-asc":
        filtered.sort((a, b) => {
          const priceA = (a.variants.find((v) => v.isDefault) || a.variants[0])?.price || 0;
          const priceB = (b.variants.find((v) => v.isDefault) || b.variants[0])?.price || 0;
          return priceA - priceB;
        });
        break;
      case "price-desc":
        filtered.sort((a, b) => {
          const priceA = (a.variants.find((v) => v.isDefault) || a.variants[0])?.price || 0;
          const priceB = (b.variants.find((v) => v.isDefault) || b.variants[0])?.price || 0;
          return priceB - priceA;
        });
        break;
      case "rating":
        filtered.sort((a, b) => b.averageRating - a.averageRating || b.reviewCount - a.reviewCount);
        break;
      case "popularity":
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0) || b.reviewCount - a.reviewCount);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "featured":
      default:
        filtered.sort((a, b) => {
          if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
          if (a.isBestseller !== b.isBestseller) return a.isBestseller ? -1 : 1;
          return b.averageRating - a.averageRating;
        });
        break;
    }

    // Available filters counts computed from baseProducts (scoped by category or region if specified)
    let baseProducts = MOCK_PRODUCTS;
    if (selectedCategories.length > 0) {
      baseProducts = baseProducts.filter(
        (p) =>
          selectedCategories.includes(p.primaryCategory) ||
          p.secondaryCategories?.some((cat) => selectedCategories.includes(cat))
      );
    }
    if (selectedRegions.length > 0) {
      baseProducts = baseProducts.filter((p) => selectedRegions.includes(p.region));
    }

    const allPrices = (selectedCategories.length > 0
      ? MOCK_PRODUCTS.filter(
          (p) =>
            selectedCategories.includes(p.primaryCategory) ||
            p.secondaryCategories?.some((cat) => selectedCategories.includes(cat))
        )
      : MOCK_PRODUCTS
    ).map((p) => (p.variants.find((v) => v.isDefault) || p.variants[0])?.price || 0);

    const minCatalogPrice = allPrices.length > 0 ? Math.min(...allPrices) : 0;
    const maxCatalogPrice = allPrices.length > 0 ? Math.max(...allPrices) : 1000;

    // Regions scoped by category if category is selected
    const regionBaseProducts = selectedCategories.length > 0
      ? MOCK_PRODUCTS.filter(
          (p) =>
            selectedCategories.includes(p.primaryCategory) ||
            p.secondaryCategories?.some((cat) => selectedCategories.includes(cat))
        )
      : MOCK_PRODUCTS;

    const regions: FilterOptionCount[] = [
      {
        slug: "south-indian",
        label: "South Indian",
        count: regionBaseProducts.filter((p) => p.region === "south-indian").length,
      },
      {
        slug: "north-indian",
        label: "North Indian",
        count: regionBaseProducts.filter((p) => p.region === "north-indian").length,
      },
      {
        slug: "pan-indian",
        label: "Pan-Indian / Gift Boxes",
        count: regionBaseProducts.filter((p) => p.region === "pan-indian").length,
      },
    ].filter((r) => r.count > 0);

    const categories: FilterOptionCount[] = [
      {
        slug: "chips-crisps",
        label: "Chips & Crisps",
        count: baseProducts.filter((p) => p.primaryCategory === "chips-crisps").length,
      },
      {
        slug: "mixtures",
        label: "Mixtures & Namkeen",
        count: baseProducts.filter((p) => p.primaryCategory === "mixtures").length,
      },
      {
        slug: "savouries",
        label: "Murukku & Savouries",
        count: baseProducts.filter((p) => p.primaryCategory === "savouries").length,
      },
      {
        slug: "sweets-mithai",
        label: "Sweets & Mithai",
        count: baseProducts.filter((p) => p.primaryCategory === "sweets-mithai").length,
      },
      {
        slug: "pickles-sides",
        label: "Pickles & Sides",
        count: baseProducts.filter((p) => p.primaryCategory === "pickles-sides").length,
      },
      {
        slug: "gift-boxes",
        label: "Gift Boxes",
        count: baseProducts.filter((p) => p.primaryCategory === "gift-boxes").length,
      },
      {
        slug: "combos",
        label: "Combos & Bundles",
        count: baseProducts.filter((p) => p.primaryCategory === "combos").length,
      },
    ].filter((cat) => cat.count > 0); // Only return categories with available products in scope!

    const spiceLevels: FilterOptionCount[] = [
      {
        slug: "Mild",
        label: "Mild Spice",
        count: baseProducts.filter((p) => p.spiceLevel === "Mild").length,
      },
      {
        slug: "Medium",
        label: "Medium Spice",
        count: baseProducts.filter((p) => p.spiceLevel === "Medium").length,
      },
      {
        slug: "Spicy",
        label: "Spicy / Fiery",
        count: baseProducts.filter((p) => p.spiceLevel === "Spicy").length,
      },
    ].filter((sp) => sp.count > 0);

    const packSizes: FilterOptionCount[] = [
      {
        slug: "100g",
        label: "100g Snack Pack",
        count: baseProducts.filter((p) => p.variants.some((v) => v.packSize.includes("100g"))).length,
      },
      {
        slug: "200g",
        label: "200g Standard",
        count: baseProducts.filter((p) => p.variants.some((v) => v.packSize.includes("200g"))).length,
      },
      {
        slug: "250g",
        label: "250g Classic",
        count: baseProducts.filter((p) => p.variants.some((v) => v.packSize.includes("250g"))).length,
      },
      {
        slug: "500g",
        label: "500g Value Pack",
        count: baseProducts.filter((p) => p.variants.some((v) => v.packSize.includes("500g"))).length,
      },
    ].filter((size) => size.count > 0);

    const totalCount = filtered.length;
    const page = Math.max(1, params.page || 1);
    const limit = params.limit || 8;
    const totalPages = Math.ceil(totalCount / limit);
    const offset = (page - 1) * limit;
    const paginatedProducts = filtered.slice(offset, offset + limit);

    return {
      products: paginatedProducts,
      totalCount,
      currentPage: page,
      totalPages,
      availableFilters: {
        regions,
        categories,
        spiceLevels,
        priceRange: { min: minCatalogPrice, max: maxCatalogPrice },
        packSizes,
      },
    };
  }
}

export const productService = new ProductService();

