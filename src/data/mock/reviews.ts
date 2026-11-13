/**
 * KRAK & CO. — Development Mock Reviews Data Fixtures
 */
import { Review, ReviewStatistics } from "@/types";

export const MOCK_REVIEWS: Review[] = [
  {
    id: "rev-1",
    productSlug: "madurai-mixture",
    productName: "Madurai Special Mixture",
    authorName: "Priya S.",
    authorCity: "Chennai",
    isVerifiedBuyer: true,
    rating: 5,
    title: "Tastes just like the ones from my hometown!",
    comment: "The best mixture I've had online! Super fresh and crunchy. Packaging is top-notch, garlic pods give it such an authentic aroma.",
    createdAt: "2026-10-14",
    helpfulCount: 42,
  },
  {
    id: "rev-2",
    productSlug: "kerala-banana-chips",
    productName: "Kerala Banana Chips",
    authorName: "Arjun M.",
    authorCity: "Bengaluru",
    isVerifiedBuyer: true,
    rating: 5,
    title: "Pure coconut oil aroma!",
    comment: "Finally, genuine Kerala chips fried in pure coconut oil without palm oil aftertaste. Perfectly salted and wafer thin crunch.",
    createdAt: "2026-10-18",
    helpfulCount: 38,
  },
  {
    id: "rev-3",
    productSlug: "aloo-bhujia",
    productName: "Crispy Aloo Bhujia",
    authorName: "Nisha R.",
    authorCity: "Delhi",
    isVerifiedBuyer: true,
    rating: 5,
    title: "A perfect mix of South and North Indian snacks!",
    comment: "Ordered the Aloo Bhujia and Banana chips together. Both exceeded expectations. Great gifting quality too.",
    createdAt: "2026-10-22",
    helpfulCount: 29,
  },
];

export const MOCK_REVIEW_STATS: ReviewStatistics = {
  averageRating: 4.8,
  totalReviews: 25346,
  distribution: {
    5: 78,
    4: 16,
    3: 4,
    2: 1,
    1: 1,
  },
};

