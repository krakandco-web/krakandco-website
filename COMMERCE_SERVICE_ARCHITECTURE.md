# KRAK & CO. — Commerce Service Architecture & Adapter Layer

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 07 — Next.js Architecture, Folder Structure, Routing & Data Layer  
**Location:** `src/services/*`  

---

## 1. Architectural Intent

The Commerce Service layer serves as the single source of truth for business logic and data retrieval across the KRAK & CO. application.

By separating the presentation layer from the data persistence layer:
1. **Decoupled Components:** UI components interact exclusively with typed interfaces (e.g. `productService.getAll()`), not directly with APIs, database queries, or mock fixtures.
2. **Seamless Backend Transition:** The application currently runs on in-memory mock adapters (`src/data/mock/*`). Migrating to Shopify Storefront API, MedusaJS, BigCommerce, or a custom Node/Go backend requires changing only the internal implementation of `src/services/*`, with zero changes to any UI component or route handler.
3. **Optimized Caching & Deduplication:** All service calls return Promises compatible with React `cache()` and Next.js `fetch({ next: { revalidate: 3600 } })`.

---

## 2. Implemented Services

### 2.1 Product Service (`src/services/products/productService.ts`)

| Method | Parameters | Returns | Description |
|---|---|---|---|
| `getAll` | `filter?: ProductFilter` | `Promise<Product[]>` | Returns all products matching optional region, category, spice level, and price range |
| `getBySlug` | `slug: string` | `Promise<Product \| null>` | Resolves a single product by slug; returns null on missing SKU |
| `getById` | `id: string` | `Promise<Product \| null>` | Resolves product by internal ID |
| `getBestsellers` | `limit?: number` | `Promise<Product[]>` | Returns top-rated products tagged `isBestseller: true` |
| `getByCategory` | `category: ProductCategory` | `Promise<Product[]>` | Returns products belonging to specific category |
| `getByRegion` | `region: RegionOrigin` | `Promise<Product[]>` | Returns products belonging to specific culinary region |
| `getRelatedProducts` | `currentSlug: string, limit?: number` | `Promise<Product[]>` | Returns related products within the same region/category |

### 2.2 Collection Service (`src/services/collections/collectionService.ts`)

| Method | Parameters | Returns | Description |
|---|---|---|---|
| `getAll` | — | `Promise<Collection[]>` | Returns all curated collections |
| `getBySlug` | `slug: string` | `Promise<Collection \| null>` | Resolves collection by slug |
| `getProductsByCollectionSlug` | `slug: string` | `Promise<Product[]>` | Resolves all products associated with a collection |

### 2.3 Search Service (`src/services/search/searchService.ts`)

| Method | Parameters | Returns | Description |
|---|---|---|---|
| `search` | `query: SearchQuery` | `Promise<SearchResult>` | Multi-field search across product name, tagline, description, and ingredients |
| `getSuggestions` | `query: string, limit?: number` | `Promise<SearchSuggestion[]>` | Fast autocomplete suggestions for live search drawer |

### 2.4 Cart Service (`src/services/cart/cartService.ts`)

| Method | Parameters | Returns | Description |
|---|---|---|---|
| `calculateCart` | `items: CartItem[], couponCode?: string` | `Cart` | Pure functional calculation of subtotal, tax, ₹499 free shipping threshold, and discounts |
| `applyCoupon` | `code: string, currentSubtotal: number` | `{ discount: number; valid: boolean; message: string }` | Validates promotional coupons (`KRAK10`, `FREESHIP`, `FESTIVE20`) |

### 2.5 Order Service (`src/services/orders/orderService.ts`)

| Method | Parameters | Returns | Description |
|---|---|---|---|
| `getOrderById` | `orderId: string` | `Promise<Order \| null>` | Resolves customer order for detailed invoice view |
| `getCustomerOrders` | `customerId: string` | `Promise<Order[]>` | Fetches order history for customer account portal |
| `trackOrder` | `trackingOrOrderNumber: string` | `Promise<Order \| null>` | Queries tracking milestones for the public track-order page |

---

## 3. Adapter Swap Example

To switch from mock data to a live API in production:

```typescript
// src/services/products/productService.ts
export const productService = {
  async getBySlug(slug: string): Promise<Product | null> {
    // Current Development Implementation:
    // return MOCK_PRODUCTS.find(p => p.slug === slug) ?? null;

    // Production Headless API Implementation:
    const res = await fetch(`https://api.krakandco.com/v1/products/${slug}`, {
      next: { tags: [`product-${slug}`], revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  }
};
```
No consumer of `productService` needs to be modified.

