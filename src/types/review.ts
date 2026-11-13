/**
 * KRAK & CO. — Customer Reviews & Rating Distribution Contracts
 */

export interface Review {
  id: string;
  productId?: string;
  productName?: string;
  productSlug?: string;
  authorName: string;
  authorCity: string;
  isVerifiedBuyer: boolean;
  rating: number; // 1 to 5
  title: string;
  comment: string;
  createdAt: string;
  helpfulCount: number;
}

export interface ReviewStatistics {
  averageRating: number;
  totalReviews: number;
  distribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

