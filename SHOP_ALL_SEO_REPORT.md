# KRAK & CO. — SHOP ALL SEO & INDEXATION REPORT (PHASE 11)

**Document:** Metadata, Canonical Hierarchy & Search Engine Optimization Strategy  
**Brand:** KRAK & CO. — Authentic Indian Snacks  
**Date:** November 2026  

---

## 1. Page Metadata Specification

Implemented via Next.js App Router static metadata export in `src/app/(storefront)/shop/page.tsx`:

- **Title Tag:** `Shop All Authentic Indian Snacks — KRAK & CO.`
- **Meta Description:** `Discover authentic South Indian and North Indian savouries, Kerala banana chips, Madurai mixture, Bikaneri bhujia, royal sweets, and curated snack gift boxes.`
- **Keywords:** `Shop Indian snacks, Kerala banana chips, Madurai mixture, Aloo bhujia, Ragi murukku, Kaju katli, Indian namkeen, South Indian snacks, North Indian snacks`
- **Robots / Indexing Policy:**
  - Base `/shop` page: `index, follow`
  - Canonical URL points directly to `https://krakandco.com/shop`.

---

## 2. Parameterized URLs & Faceted Indexation Strategy

Faceted search pages risk search engine crawl bloat if every permutation of filters is crawled:
1. **Canonical Strategy:**
   - Multi-parameter filter URLs (e.g. `?region=south-indian&spice=Spicy&minPrice=150`) canonicalize back to the primary `/shop` page or relevant collection landing pages (e.g. `/collections/south-indian`).
2. **Dedicated Curated Landing Pages:**
   - Instead of indexing raw filter queries for high-volume keywords like "South Indian Snacks", KRAK & CO. provides curated collection routes (`/collections/south-indian`, `/collections/north-indian`, `/gift-boxes`) with rich static metadata and contextual copy.
3. **Pagination Handling:**
   - Subsequent pages (`/shop?page=2`) utilize standard `rel="prev"` and `rel="next"` metadata patterns to avoid duplicate content penalties.

---

## 3. Semantic Heading Hierarchy

- `<h1>`: "EXPLORE THE GOOD STUFF." (Unique, semantic main page topic)
- `<h2>`: "Filters" (Sidebar heading for screen reader landmarking)
- `<h3>`: "Looking for a Specific Taste Journey?" (Discovery cross-sell)
- `<h4>`: Product Card Titles ("Kerala Banana Chips", "Madurai Special Mixture")
- `<nav aria-label="Breadcrumb">`: Proper schema structure for rich snippet breadcrumb trails in SERPs.

