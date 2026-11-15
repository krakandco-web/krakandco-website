# CATEGORY FILTERING SPECIFICATION & VERIFICATION REPORT

## KRAK & CO. — Next.js E-Commerce Storefront
**Phase 13 Deliverable — Faceted Search & Category Scope Verification**

---

## 1. Filter Scope Enforcement

On the generic Shop All page (`/shop`), the filter system allows shoppers to browse across all categories, regions, and price ranges simultaneously.

On individual Category Pages (`/collections/[collectionSlug]`), filtering operates under **Category Isolation Rules**:

1. **Category Scope Locking**: The `primaryCategory` filter is bound to the current collection at the server level. Shoppers cannot accidentally navigate away from the category using the filter sidebar.
2. **Dynamic Redundant Filter Omission**:
   - `FilterSidebar` and `MobileFilterDrawer` receive `hideCategoryFilter={true}`.
   - The redundant "Snack Category" accordion is removed from view, avoiding visual clutter and confusing options.
3. **Regional Exploration Within Category**:
   - The "Culinary Region" filter remains prominent at the top of the sidebar.
   - Live item counts reflect only the items **inside the active category**.
   - Example in *Mixtures & Namkeen*:
     - `South Indian` shows `(1)` (Madurai Special Mixture)
     - `North Indian` shows `(3)` (Aloo Bhujia, Bikaneri Bhujia, Bombay Chana)

---

## 2. Dynamic Available Filters Calculation

In `src/services/products/productService.ts`, the `availableFilters` object is dynamically computed from `baseProducts`:

```typescript
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

// Regional counts strictly within category
const regionBaseProducts = selectedCategories.length > 0
  ? MOCK_PRODUCTS.filter((p) => selectedCategories.includes(p.primaryCategory))
  : MOCK_PRODUCTS;

const regions: FilterOptionCount[] = [
  { slug: "south-indian", label: "South Indian", count: regionBaseProducts.filter((p) => p.region === "south-indian").length },
  { slug: "north-indian", label: "North Indian", count: regionBaseProducts.filter((p) => p.region === "north-indian").length },
  { slug: "pan-indian", label: "Pan-Indian / Gift Boxes", count: regionBaseProducts.filter((p) => p.region === "pan-indian").length },
].filter((r) => r.count > 0);
```

### Zero-Result Suppression
Any filter option where `count === 0` is automatically pruned from `availableFilters`. Shoppers are never presented with dead-end options.

---

## 3. URL State & Browser History Integration

All filter selections, sorting orders, and pagination states synchronize bidirectionally with the URL query parameters via `useShopFilters`:

| Filter Dimension | Query Parameter | Values | Example |
|---|---|---|---|
| **Region** | `region` | `south-indian`, `north-indian` | `?region=south-indian` |
| **Price Min/Max** | `minPrice`, `maxPrice` | Integers (INR) | `?minPrice=100&maxPrice=300` |
| **Spice Level** | `spice` | `Mild`, `Medium`, `Spicy` | `?spice=Medium` |
| **Pack Size** | `packSize` | `100g`, `200g`, `250g`, `500g` | `?packSize=250g` |
| **In Stock Only** | `inStock` | `true`, `false` | `?inStock=true` |
| **Sorting** | `sort` | `featured`, `price-asc`, `price-desc`, `rating`, `newest` | `?sort=price-asc` |
| **Pagination** | `page` | 1-based integer | `?page=2` |

---

## 4. Test Verification Scenarios

| Test Case | Route & Query | Expected Count | Actual Result | Verification Status |
|---|---|---|---|---|
| **TC-01** | `/collections/chips-crisps` | 3 products | 3 products (Banana, Potato, Tapioca) | PASS |
| **TC-02** | `/collections/chips-crisps?region=south-indian` | 2 products | 2 products (Banana, Tapioca) | PASS |
| **TC-03** | `/collections/chips-crisps?region=north-indian` | 1 product | 1 product (Delhi Masala Potato Wafers) | PASS |
| **TC-04** | `/collections/mixtures-namkeen` | 4 products | 4 products (Aloo, Bikaneri, Madurai, Bombay) | PASS |
| **TC-05** | `/collections/mixtures-namkeen?region=north-indian` | 3 products | 3 products (Aloo, Bikaneri, Bombay) | PASS |
| **TC-06** | `/collections/sweets-mithai?spice=Spicy` | 0 products | EmptyState displayed cleanly | PASS |
| **TC-07** | `/collections/pickles-sides` | 2 products | 2 products (Avakaya Mango, Banarasi Chilli) | PASS |
| **TC-08** | `/collections/murukku-savouries?sort=price-asc` | 3 products | Sorted: Ragi (₹119) → Butter (₹129) → Mathri (₹139) | PASS |

