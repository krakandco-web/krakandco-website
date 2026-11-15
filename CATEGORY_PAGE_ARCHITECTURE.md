# CATEGORY PAGE ARCHITECTURE & CONFIGURATION SPECIFICATION

## KRAK & CO. — Next.js E-Commerce Storefront
**Phase 13 Deliverable — Architecture Specification**
**Target Route Pattern:** `/collections/[collectionSlug]`

---

## 1. Executive Architecture Summary

Phase 13 establishes the unified **Reusable Collection Architecture** for KRAK & CO., powering all 5 approved snack categories and regional collections through an adaptable, Server-Component-driven Next.js App Router dynamic route (`/collections/[collectionSlug]`).

Instead of maintaining 5 redundant, copy-pasted page trees, the architecture decouples **Collection Configuration** (`src/data/mock/collections.ts`), **Data Retrieval & Service Contracts** (`src/services/collections/`, `src/services/products/`), and **Presentation Layer** (`src/components/collection/`, `src/components/shop/`).

```
                    ┌──────────────────────────────────────────────┐
                    │ Next.js App Router Request:                  │
                    │ /collections/[collectionSlug]?region=...     │
                    └──────────────────────┬───────────────────────┘
                                           │
                                           ▼
                    ┌──────────────────────────────────────────────┐
                    │ Server Component: CollectionDetailPage      │
                    │ - collectionService.getCollectionBySlug()    │
                    │ - productService.filterProducts() (scoped)   │
                    │ - generateMetadata()                         │
                    └──────────────────────┬───────────────────────┘
                                           │
        ┌──────────────────────────────────┴──────────────────────────────────┐
        ▼                                                                     ▼
┌────────────────────────────┐                                   ┌────────────────────────────┐
│ Category Collection        │                                   │ Regional Collection        │
│ (category: "chips-crisps") │                                   │ (region: "south-indian")   │
└─────────────┬──────────────┘                                   └─────────────┬──────────────┘
              │                                                                │
              ▼                                                                ▼
┌────────────────────────────┐                                   ┌────────────────────────────┐
│ CategoryHero               │                                   │ RegionalHero               │
│ - Compact badge & title    │                                   │ - Temple/Mughal theme      │
│ - Category artwork         │                                   │ - Dual regional CTAs       │
└─────────────┬──────────────┘                                   └─────────────┬──────────────┘
              │                                                                │
              └────────────────────────────┬───────────────────────────────────┘
                                           │
                                           ▼
                    ┌──────────────────────────────────────────────┐
                    │ CategorySubnav                               │
                    │ - Interactive shortcut pills                 │
                    │ - URL search parameter sync                  │
                    └──────────────────────┬───────────────────────┘
                                           │
                                           ▼
                    ┌──────────────────────────────────────────────┐
                    │ Scoped ShopContainer                         │
                    │ - Scoped FilterSidebar (hides redundant col) │
                    │ - ProductDiscoveryToolbar                    │
                    │ - 4-Col Desktop / 2-Col Mobile Product Grid │
                    │ - QuickAddModal & Wishlist integration       │
                    │ - Pagination                                 │
                    └──────────────────────┬───────────────────────┘
                                           │
                                           ▼
                    ┌──────────────────────────────────────────────┐
                    │ CategoryEditorial                            │
                    │ - Cultural storytelling & ingredient roots   │
                    │ - 4 Value Pillars (Zero Palm Oil, etc.)      │
                    └──────────────────────┬───────────────────────┘
                                           │
                                           ▼
                    ┌──────────────────────────────────────────────┐
                    │ RelatedCategoriesSection                     │
                    │ - Cross-category discovery cards             │
                    └──────────────────────────────────────────────┘
```

---

## 2. Dynamic Route & Scope Resolution

### Route Implementation: `src/app/(storefront)/collections/[collectionSlug]/page.tsx`
The dynamic page receives `params.collectionSlug` and optional `searchParams` (`region`, `spice`, `packSize`, `minPrice`, `maxPrice`, `sort`, `page`).

```typescript
export default async function CollectionDetailPage({
  params,
  searchParams,
}: CollectionPageProps) {
  const collection = await collectionService.getCollectionBySlug(params.collectionSlug);

  if (!collection) {
    notFound();
  }

  const isRegionalCollection = Boolean(collection.region);
  const isCategoryCollection = Boolean(collection.category);

  // Enforce Category or Regional Scope
  const filterParams = {
    category: isCategoryCollection ? collection.category : searchParams?.category,
    region: isRegionalCollection ? collection.region : searchParams?.region,
    minPrice: searchParams?.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams?.maxPrice ? Number(searchParams.maxPrice) : undefined,
    spiceLevel: searchParams?.spice,
    packSize: searchParams?.packSize,
    inStock: searchParams?.inStock === "true",
    sort: searchParams?.sort || "featured",
    page: searchParams?.page ? Number(searchParams.page) : 1,
    limit: 12,
  };

  const filterResult = await productService.filterProducts(filterParams);
  // ...
}
```

### Automatic Scope Isolation
1. **Category Scope**: When on `/collections/chips-crisps`, `collection.category === "chips-crisps"`. The `category` filter is strictly locked to `"chips-crisps"`. The `FilterSidebar` receives `hideCategoryFilter={true}`, hiding the redundant Category accordion while maintaining full access to **Culinary Region** (`South Indian` vs `North Indian`), **Price Range**, **Spice Level**, and **Pack Size**.
2. **Regional Scope**: When on `/collections/south-indian`, `collection.region === "south-indian"`. The `FilterSidebar` receives `hideRegionFilter={true}`, hiding the Region accordion while maintaining full category exploration.

---

## 3. Data Contract: `Collection` Interface

Defined in `src/types/collection.ts`:

```typescript
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
```

---

## 4. Component Hierarchy & Responsibilities

| Component | Layer | Responsibility |
|---|---|---|
| `CollectionDetailPage` | Server Component | Resolves slug, fetches scoped product data, generates metadata. |
| `CategoryHero` | Client/Presentation | Renders compact badge, display typography, description, action CTAs, and category illustration. |
| `RegionalHero` | Client/Presentation | Renders regional visual styling (Gopuram / Monument), dual CTAs, and geographic badge. |
| `CategorySubnav` | Client Component | Horizontal interactive shortcut chips updating URL query parameters without full page reloads. |
| `ShopContainer` | Client Component | Orchestrates sidebar filtering, mobile drawer, toolbar, grid, pagination, and modals. |
| `FilterSidebar` | Client Component | Collapsible multi-facet filter accordions with live item counts scoped to the current category. |
| `MobileFilterDrawer` | Client Component | Off-canvas sheet providing mobile access to all filters and sort options. |
| `ProductCard` | Client Component | Displays genuine imagery, price, variant count, ratings, badges, wishlist toggle, and Quick Add. |
| `QuickAddModal` | Client Component | Dialog allowing instant pack-size variant selection and cart addition. |
| `CategoryEditorial` | Server/Presentation | Brand heritage narrative with 4 value pillars (Zero Palm Oil, Farm Fresh, Small Batches, 100% Vegetarian). |
| `RelatedCategoriesSection` | Server/Presentation | Curated cards linking customers to complementary snacking categories. |

---

## 5. Security, State, and Error Boundaries

1. **Unknown Slugs**: Handled via Next.js `notFound()`, rendering the custom 404 page with Munched Snack illustration.
2. **Invalid Filter Params**: Cleanly ignored by `productService.filterProducts()`; falls back to default catalogue bounds.
3. **Empty Filter Results**: When user filters too strictly (e.g. ₹600+ on chips), `ShopContainer` renders an elegant `EmptyState` with a "Clear All Filters" button.
4. **URL Search Parameter Persistence**: Uses native Next.js `useSearchParams()` and `router.push()` with `{ scroll: false }` to maintain smooth scrolling positions during filter adjustments.

