# KRAK & CO. — PRODUCT FILTERING SPECIFICATION (PHASE 11)

**Document:** Faceted Filtering System Architecture, Logic & Data Modeling  
**Brand:** KRAK & CO. — Authentic Indian Snacks  
**Date:** November 2026  

---

## 1. Filter Architecture Overview

The KRAK & CO. filtering engine is designed to support high-precision product discovery without sacrificing page speed, URL shareability, or user orientation.

All filter dimensions are strictly tied to verified data attributes in the `Product` schema (`src/types/product.ts`). No attributes are inferred from names or arbitrary tags.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        FILTER DIMENSION MATRIX                         │
├───────────────────┬──────────────┬──────────────────┬──────────────────┤
│ Dimension         │ URL Param    │ Selection Type   │ Match Logic      │
├───────────────────┼──────────────┼──────────────────┼──────────────────┤
│ Culinary Region   │ `region`     │ Multi-select     │ Exact Match (OR) │
│ Snack Category    │ `category`   │ Multi-select     │ Exact Match (OR) │
│ Price Range       │ `minPrice`   │ Bounded numeric  │ Range [Min, Max] │
│                   │ `maxPrice`   │ Bounded numeric  │ Range [Min, Max] │
│ Spice Level       │ `spice`      │ Multi-select     │ Exact Match (OR) │
│ Pack Size         │ `packSize`   │ Multi-select     │ Substring Match  │
│ Availability      │ `inStock`    │ Boolean          │ Inventory > 0    │
└───────────────────┴──────────────┴──────────────────┴──────────────────┘
```

---

## 2. Dimension Specifications & Rules

### 2.1 FILTER 01 — Culinary Region (`region`)
- **Query Parameter:** `region` (e.g. `?region=south-indian&region=north-indian`)
- **Options Available:**
  1. `south-indian` (South Indian Classics: Kerala, Tamil Nadu, Karnataka, Andhra Pradesh)
  2. `north-indian` (North Indian Favourites: Delhi, Punjab, Rajasthan, Gujarat)
  3. `pan-indian` (Pan-Indian / Festive Gift Boxes)
- **Behavior:** Multi-select OR logic. Selecting both `south-indian` and `north-indian` displays all products matching either region.

### 2.2 FILTER 02 — Snack Category (`category`)
- **Query Parameter:** `category` (e.g. `?category=chips-crisps&category=mixtures`)
- **Options Available:**
  1. `chips-crisps` (Chips & Crisps: Banana chips, Tapioca chips)
  2. `mixtures` (Mixtures & Namkeen: Madurai mixture, Bombay mixture, Aloo bhujia, Bikaneri bhujia)
  3. `savouries` (Murukku & Savouries: Ragi murukku, Butter murukku)
  4. `sweets-mithai` (Sweets & Mithai: Royal Kaju Katli, Mysore Pak)
  5. `pickles-sides` (Pickles & Sides: Andhra Avakaya Mango Pickle)
  6. `gift-boxes` (Gift Boxes & Hampers: Festive Grand Gift Hamper)
  7. `combos` (Snack Combos & Bundles: Classic South Combo, North Indian Treat Box)
- **Behavior:** Multi-select OR logic across primary and secondary category assignments.

### 2.3 FILTER 03 — Price Range (`minPrice`, `maxPrice`)
- **Query Parameters:** `minPrice`, `maxPrice` (e.g. `?minPrice=150&maxPrice=300`)
- **Quick Preset Bands:**
  1. Under ₹150 (`maxPrice=150`)
  2. ₹150 - ₹300 (`minPrice=150&maxPrice=300`)
  3. ₹300 - ₹600 (`minPrice=300&maxPrice=600`)
  4. ₹600 & Above (`minPrice=600`)
- **Manual Inputs:** Min and Max numeric input fields with validation ensuring non-negative values and `minPrice <= maxPrice`.
- **Target Price Entity:** Evaluates against the product's **default variant price**, representing the primary entry point price.

### 2.4 FILTER 04 — Spice Level (`spice`)
- **Query Parameter:** `spice` (e.g. `?spice=Mild&spice=Spicy`)
- **Options Available:**
  1. `Mild` (Mild Spice: Butter murukku, Banana chips, Mysore pak, Kaju katli)
  2. `Medium` (Medium Spice: Aloo bhujia, Ragi murukku, Combos)
  3. `Spicy` (Spicy / Fiery: Madurai mixture, Bikaneri bhujia, Avakaya pickle, Tapioca chips)
- **Behavior:** Exact enum match against `product.spiceLevel`.

### 2.5 FILTER 05 — Pack Size (`packSize`)
- **Query Parameter:** `packSize` (e.g. `?packSize=250g`)
- **Options Available:**
  1. `100g` (Single-serve snack pouches)
  2. `200g` (Standard pouches)
  3. `250g` (Classic family pouches)
  4. `500g` (Value / pantry pouches)
- **Behavior:** Evaluates if any variant inside `product.variants` contains the requested weight string.

### 2.6 FILTER 06 — Availability (`inStock`)
- **Query Parameter:** `inStock=true`
- **Behavior:** Excludes any product flagged with `isOutOfStock: true` or where all variant `inventoryCount <= 0`.

---

## 3. Server-Side Execution Flow

1. Incoming HTTP Request hits `src/app/(storefront)/shop/page.tsx` with search parameters.
2. Search parameters are normalized into a structured `ProductFilterParams` object:
   ```ts
   const filterParams: ProductFilterParams = {
     region: searchParams.region,
     category: searchParams.category,
     minPrice: Number(searchParams.minPrice) || undefined,
     maxPrice: Number(searchParams.maxPrice) || undefined,
     spiceLevel: searchParams.spice,
     packSize: searchParams.packSize,
     inStock: searchParams.inStock === "true",
     sort: searchParams.sort,
     page: Number(searchParams.page) || 1,
     limit: 8,
   };
   ```
3. `productService.filterProducts(filterParams)` executes in-memory against `MOCK_PRODUCTS` (or remote headless commerce API in production).
4. The service generates:
   - Filtered and sorted product slice for the requested page.
   - Total matching product count.
   - Pagination metadata (currentPage, totalPages).
   - Real-time counts for all available filter dimensions.
5. The component renders the server-rendered HTML payload.

