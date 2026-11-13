/**
 * KRAK & CO. — Search & Discovery Service Abstraction Layer
 */
import { MOCK_PRODUCTS, MOCK_COLLECTIONS } from "@/data/mock";
import { SearchResult } from "@/types";

export interface ISearchService {
  search(query: string): Promise<SearchResult>;
}

class SearchService implements ISearchService {
  async search(query: string): Promise<SearchResult> {
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) {
      return {
        query: "",
        totalMatches: 0,
        products: [],
        suggestedCategories: [],
        suggestedCollections: [],
        popularSearches: ["Kerala Banana Chips", "Madurai Mixture", "Aloo Bhujia", "Gift Hampers"],
      };
    }

    // Match products by name, tags, ingredients, region
    const matchedProducts = MOCK_PRODUCTS.filter((product) => {
      const matchName = product.name.toLowerCase().includes(cleanQuery);
      const matchTags = product.tags.some((tag) => tag.toLowerCase().includes(cleanQuery));
      const matchDesc = product.shortDescription.toLowerCase().includes(cleanQuery);
      const matchRegion = product.region.toLowerCase().includes(cleanQuery);
      return matchName || matchTags || matchDesc || matchRegion;
    });

    // Match collections
    const matchedCollections = MOCK_COLLECTIONS.filter((col) =>
      col.name.toLowerCase().includes(cleanQuery)
    ).map((c) => ({ slug: c.slug, name: c.name }));

    return {
      query,
      totalMatches: matchedProducts.length,
      products: matchedProducts,
      suggestedCategories: [],
      suggestedCollections: matchedCollections,
      popularSearches: ["Kerala Banana Chips", "Madurai Mixture", "Aloo Bhujia", "Gift Hampers"],
    };
  }
}

export const searchService = new SearchService();

