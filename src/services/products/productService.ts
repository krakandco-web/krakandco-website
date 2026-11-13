/**
 * KRAK & CO. — Product Service Abstraction Layer
 * Pure typed interface designed for swappable headless commerce integration.
 */
import { MOCK_PRODUCTS } from "@/data/mock";
import { CulinaryRegion, Product, SnackCategory } from "@/types";

export interface IProductService {
  getAllProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getProductsByCategory(category: SnackCategory): Promise<Product[]>;
  getProductsByRegion(region: CulinaryRegion): Promise<Product[]>;
  getBestsellerProducts(): Promise<Product[]>;
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
}

export const productService = new ProductService();
