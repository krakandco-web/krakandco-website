/**
 * KRAK & CO. — Collection Service Abstraction Layer
 */
import { MOCK_COLLECTIONS } from "@/data/mock";
import { Collection } from "@/types";

export interface ICollectionService {
  getAllCollections(): Promise<Collection[]>;
  getCollectionBySlug(slug: string): Promise<Collection | null>;
}

class CollectionService implements ICollectionService {
  async getAllCollections(): Promise<Collection[]> {
    return MOCK_COLLECTIONS;
  }

  async getCollectionBySlug(slug: string): Promise<Collection | null> {
    const col = MOCK_COLLECTIONS.find((c) => c.slug === slug);
    return col || null;
  }
}

export const collectionService = new CollectionService();

