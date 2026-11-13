# KRAK & CO. — SEARCH & FILTER SPECIFICATION (PHASE 02)

**Document:** Discovery Engine, Query Handling, Filtering & Faceted Sorting  
**Author:** Lead E-commerce Architect & Search UX Specialist  
**Date:** November 2026

---

## 1. Search Experience Overview

The KRAK & CO. search architecture is designed for **instant live discovery** with sub-50ms response times. Indian food terms feature distinct phonetic transliterations (e.g., *murukku* vs *muruku* vs *chakli*; *sev* vs *shev*). The discovery system accounts for these regional colloquialisms.

---

## 2. Query Handling & Synonym Normalization

### 2.1 Transliteration & Synonym Dictionary
| Customer Input | Normalized Query | Target Match |
|---|---|---|
| `muruku`, `murkoo`, `chakli` | `murukku` | Ragi Murukku, Butter Murukku, Kai Murukku |
| `banana`, `kela chips`, `upperi` | `banana chips` | Kerala Banana Chips (Salted, Pepper, Sweet) |
| `bhujia`, `bhoojia`, `sev` | `bhujia` | Aloo Bhujia, Ratlami Sev, Nylon Sev |
| `sweet`, `mithai`, `dessert` | `sweets-mithai` | Mysore Pak, Kaju Katli, Besan Ladoo |
| `namkeen`, `chivda`, `mixture` | `mixtures` | Madurai Mixture, Bombay Mixture, Cornflakes Mixture |
| `coconut oil` | attribute query: `cookingMedium` | Products fried in pure cold-pressed coconut oil |

### 2.2 Partial Query Matching
- `ban` ➔ Matches *Kerala Banana Chips*
- `mad` ➔ Matches *Madurai Mixture*
- `rag` ➔ Matches *Ragi Murukku*

---

## 3. Search Modal & Suggestion Groups

When a customer clicks the header Search icon or presses `⌘K` / `Ctrl+K`:

```
┌────────────────────────────────────────────────────────────────────────┐
│  🔍  Search crispy snacks, savouries, sweets...             [ESC]      │
├────────────────────────────────────────────────────────────────────────┤
│  POPULAR SEARCHES                                                      │
│  [Kerala Banana Chips]  [Madurai Mixture]  [Gift Boxes]  [Aloo Bhujia] │
├────────────────────────────────────────────────────────────────────────┤
│  SUGGESTED COLLECTIONS                                                 │
│  🌿 South Indian Classics (14 products)                                │
│  🏮 North Indian Favourites (12 products)                              │
│  🎁 Festive Gift Hampers (6 hampers)                                   │
├────────────────────────────────────────────────────────────────────────┤
│  MATCHING SNACKS (4)                                                   │
│  [IMG] Kerala Banana Chips (250g) ........... ₹149  [+ Quick Add]      │
│  [IMG] Madurai Mixture (250g) ............... ₹129  [+ Quick Add]      │
│  [IMG] Bombay Mixture (250g) ................ ₹139  [+ Quick Add]      │
│  [IMG] Aloo Bhujia (250g) ................... ₹149  [+ Quick Add]      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Faceted Filtering Specification

Filtering allows users to narrow catalog results across 7 orthogonal dimensions:

| Filter Attribute | Control Type | Values / Options | Multi-Select? |
|---|---|---|---|
| **Region** | Checkbox Pill | `South Indian`, `North Indian`, `Pan-Indian` | Yes |
| **Category** | Checkbox List | `Chips & Crisps`, `Mixtures & Namkeen`, `Murukku & Savouries`, `Sweets & Mithai`, `Pickles & Sides`, `Gift Boxes` | Yes |
| **Price Range** | Dual Range Slider / Pills | `Under ₹150`, `₹150 – ₹300`, `₹300 – ₹600`, `Above ₹600` | Yes |
| **Spice Level** | Visual Flame Icons | `Mild 🌶️`, `Medium 🌶️🌶️`, `Spicy 🌶️🌶️🌶️` | Yes |
| **Cooking Medium** | Checkbox List | `Pure Coconut Oil`, `Groundnut Oil`, `Pure Desi Ghee` | Yes |
| **Pack Size** | Checkbox Pills | `100g`, `200g - 250g`, `400g - 500g`, `Hampers / 1kg+` | Yes |
| **Availability** | Toggle Switch | `In Stock Only` (Default: ON) | No |

---

## 5. Sorting Criteria

| Sort Value | Label | Logic |
|---|---|---|
| `featured` | Recommended / Popularity | Default algorithmic weighting (Bestsellers + stock velocity) |
| `price-asc` | Price: Low to High | Ascending order of base variant price |
| `price-desc` | Price: High to Low | Descending order of base variant price |
| `rating-desc` | Highest Rated | Descending order of `averageRating` (minimum 10 reviews) |
| `newest` | New Arrivals | Descending order of product creation date |

---

## 6. Responsive Filter Presentation

### 6.1 Desktop Layout (`> 1024px`)
- Sticky left sidebar (`w-64`) with collapsible accordion filter sections.
- Active filters displayed as removable tags above the product grid (`[South Indian ✕] [Spicy ✕] [Clear All]`).
- Instant live updates without page reload.

### 6.2 Mobile Layout (`< 1024px`)
- Sticky sub-header bar below the main header featuring:
  - Total items count (e.g. `18 snacks`)
  - "Filter" button with active badge counter (e.g. `Filters (2)`)
  - "Sort By" trigger dropdown
- Clicking "Filter" triggers a smooth **Slide-Up Bottom Sheet** occupying 85% of screen height with a fixed bottom CTA bar:
  - Left: `Clear All`
  - Right: `Apply Filters (18 Results) →` (Solid maroon button)

