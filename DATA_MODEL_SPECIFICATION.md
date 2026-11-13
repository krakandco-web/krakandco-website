# KRAK & CO. — Data Model Specification & TypeScript Definitions

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 07 — Next.js Architecture, Folder Structure, Routing & Data Layer  
**TypeScript Version:** 5.6.3 (Strict Mode Enabled)  
**Location:** `src/types/*`  

---

## 1. Domain Entities Overview

The domain model represents all entities necessary to support authentic Indian snack commerce:

1. **`Product` (`src/types/product.ts`):** Complete product SKU with variants, pricing, regional origin, spice level, ingredients, and shelf life.
2. **`Collection` (`src/types/collection.ts`):** Categorical and regional taxonomy grouping snacks (e.g. South Indian Classics, Mixtures).
3. **`Cart` & `CartItem` (`src/types/cart.ts`):** Shopping session, applied coupons, delivery cost calculation, and free shipping progress.
4. **`Customer` (`src/types/customer.ts`):** User profile, authentication session, and saved address book.
5. **`Order` (`src/types/order.ts`):** Finalized transactions, payment receipts, shipment tracking milestones, and item breakdowns.
6. **`Review` (`src/types/review.ts`):** Verified customer ratings, photos, regional commentary, and aggregated score cards.
7. **`Search` (`src/types/search.ts`):** Search input parameters, filter facets, and search suggestion objects.
8. **`API` (`src/types/api.ts`):** Standard API response wrappers, pagination cursors, and service error envelopes.

---

## 2. Core Entity Definitions

### 2.1 Product & Variants (`src/types/product.ts`)

```typescript
export type RegionOrigin = "south-indian" | "north-indian" | "pan-indian";
export type ProductCategory =
  | "chips-crisps"
  | "mixtures"
  | "savouries"
  | "sweets-mithai"
  | "pickles-sides"
  | "gift-boxes"
  | "combos";
export type SpiceLevel = "mild" | "medium" | "spicy" | "extra-spicy";
export type WeightOption = "100g" | "200g" | "250g" | "500g" | "1kg";

export interface ProductVariant {
  id: string;
  sku: string;
  weight: WeightOption;
  weightGrams: number;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  stockCount?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  region: RegionOrigin;
  spiceLevel: SpiceLevel;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  isFestive?: boolean;
  price: number;
  originalPrice?: number;
  variants: ProductVariant[];
  defaultVariantId: string;
  images: string[];
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  regionalOriginStory?: string;
  ingredients: string[];
  keyHighlights: string[];
  shelfLifeDays: number;
  storageInstructions: string;
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
  inStock: boolean;
}
```

### 2.2 Collection Taxonomy (`src/types/collection.ts`)

```typescript
export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortTagline: string;
  region?: RegionOrigin;
  category?: ProductCategory;
  bannerImageUrl: string;
  themeColor: "maroon" | "mustard" | "forest" | "terracotta";
  featuredProductSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}
```

### 2.3 Cart & Free Shipping Calculation (`src/types/cart.ts`)

```typescript
export interface CartItem {
  id: string;
  productId: string;
  productSlug: string;
  productName: string;
  variantId: string;
  weight: WeightOption;
  unitPrice: number;
  originalUnitPrice?: number;
  quantity: number;
  thumbnailUrl: string;
  lineTotal: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  freeShippingThreshold: number; // ₹499
  freeShippingEligible: boolean;
  amountNeededForFreeShipping: number;
  appliedCoupon?: string;
}
```

### 2.4 Order & Tracking Milestone (`src/types/order.ts`)

```typescript
export type OrderStatus =
  | "pending"
  | "confirmed"
  | "packed"
  | "shipped"
  | "out_for_delivery"
  | "delivered"
  | "cancelled";

export interface TrackingMilestone {
  step: "order_placed" | "packed" | "shipped" | "out_for_delivery" | "delivered";
  label: string;
  timestamp?: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  status: OrderStatus;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: "upi" | "card" | "netbanking" | "cod";
  paymentStatus: "paid" | "pending" | "failed";
  shippingAddress: Address;
  carrier?: string;
  trackingNumber?: string;
  timeline: TrackingMilestone[];
}
```
