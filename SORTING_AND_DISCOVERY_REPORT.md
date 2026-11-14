# KRAK & CO. — SORTING & PRODUCT DISCOVERY REPORT (PHASE 11)

**Document:** Merchandising Hierarchy, Sorting Algorithms & Catalog Exploration Strategy  
**Brand:** KRAK & CO. — Authentic Indian Snacks  
**Date:** November 2026  

---

## 1. Merchandising Philosophy & Sorting Architecture

In food e-commerce, customer intent divides across three shopping modes:
1. **The Brand Explorer:** Wants to discover what KRAK & CO. does best (featured flagships and bestseller crunch).
2. **The Price-Conscious Shopper:** Wants to find everyday snacks under ₹150 or evaluate high-value gift bundles.
3. **The Proof-Seeking Snacker:** Sorts by customer ratings and verified reviews to identify undisputed customer favourites.

To support these journeys, the Shop All discovery toolbar incorporates **6 explicit, data-backed sorting options**.

---

## 2. Sorting Options Specification

| Sort Key | UI Display Label | Underlying Data Attributes | Business / Merchandising Rule |
|---|---|---|---|
| `featured` (default) | **Featured Picks** | `isFeatured`, `isBestseller`, `averageRating` | Curated editorial order prioritizing brand hero items (Banana Chips, Madurai Mixture, Kaju Katli) followed by top-rated snacks. |
| `popularity` | **Bestsellers** | `isBestseller`, `reviewCount` | Orders by verified commercial traction and volume of customer reviews. |
| `rating` | **Customer Rating** | `averageRating` (descending), `reviewCount` | Surfaces highest-rated products (4.9 stars down to 4.6 stars). |
| `price-asc` | **Price: Low to High** | `defaultVariant.price` (ascending) | Ascending sort starting with ₹69 single-serve packs up to ₹1,199 hampers. |
| `price-desc` | **Price: High to Low** | `defaultVariant.price` (descending) | Descending sort showcasing luxury gift hampers and festive bundles first. |
| `newest` | **Newest Arrivals** | `isNew` (descending) | Highlights recent seasonal releases (e.g. Spiced Tapioca Chips, Avakaya Mango Pickle). |

---

## 3. Interaction & URL State Preservation Rules

1. **State Preservation Across Sorting:**
   - Changing the sort dropdown updates `?sort={key}` in the URL.
   - Crucially, changing the sort **preserves all currently active filters** (region, category, spice level, price).
2. **Pagination Continuity:**
   - Sorting applies globally across the entire matching dataset, not just the currently visible 8 products on page 1.
3. **Reset Behavior:**
   - Selecting "Featured Picks" (the default) removes the redundant `sort` parameter from the URL, keeping URLs clean and readable (`/shop` instead of `/shop?sort=featured`).
