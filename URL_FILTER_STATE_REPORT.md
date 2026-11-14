# KRAK & CO. — URL FILTER STATE REPORT (PHASE 11)

**Document:** Query Parameter Architecture, URL Serialization & Browser Navigation  
**Brand:** KRAK & CO. — Authentic Indian Snacks  
**Date:** November 2026  

---

## 1. Architectural Strategy: Single Source of Truth

The KRAK & CO. storefront adopts the **URL-as-State pattern** for all product discovery flows. By relying on Next.js App Router query parameters rather than transient client memory or separate global stores:
- **Every discovery state is 100% shareable:** Customers can copy and share `/shop?region=south-indian&category=chips-crisps` via WhatsApp or email.
- **Full browser history support:** The browser's Back and Forward buttons seamlessly navigate through previous filter and sort states.
- **Hydration safety:** Server and client always agree on the exact active filter configuration.

---

## 2. Query Parameter Schema

| Parameter Key | Allowed Values / Types | Example Query | Purpose |
|---|---|---|---|
| `region` | `south-indian`, `north-indian`, `pan-indian` | `?region=south-indian` | Filters by culinary region |
| `category` | `chips-crisps`, `mixtures`, `savouries`, etc. | `?category=mixtures` | Filters by snack category |
| `minPrice` | Positive integer (e.g. `150`) | `?minPrice=150` | Lower bound price filter |
| `maxPrice` | Positive integer (e.g. `300`) | `?maxPrice=300` | Upper bound price filter |
| `spice` | `Mild`, `Medium`, `Spicy` | `?spice=Spicy` | Filters by heat level |
| `packSize` | `100g`, `200g`, `250g`, `500g` | `?packSize=250g` | Filters by packaging size |
| `inStock` | `true` | `?inStock=true` | Excludes out of stock items |
| `sort` | `featured`, `popularity`, `rating`, `price-asc`, `price-desc`, `newest` | `?sort=price-asc` | Specifies ordering order |
| `page` | Integer >= 1 | `?page=2` | Current catalog page |

---

## 3. URL State Transition Rules

1. **Filter Application -> Page Reset:**
   - Whenever any filter is added, removed, or cleared, `page` is stripped from the URL, automatically returning the user to **page 1** of the new result set.
2. **Sort Change -> Page Retention:**
   - Changing the sort order preserves `page` if desirable, but typically recalculates the ordered stream.
3. **Empty Value Pruning:**
   - Default values (e.g. `sort=featured`, `page=1`) and empty filter arrays are pruned from the query string to keep URLs succinct:
     - *Clean:* `/shop?category=chips-crisps`
     - *Avoided:* `/shop?category=chips-crisps&sort=featured&page=1&region=`
4. **Multi-Value Serialization:**
   - Multi-select parameters are appended using standard array parameters:
     - `/shop?region=south-indian&region=north-indian`
