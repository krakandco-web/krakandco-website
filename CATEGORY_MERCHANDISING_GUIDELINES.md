# CATEGORY MERCHANDISING & CROSS-DISCOVERY GUIDELINES

## KRAK & CO. — Next.js E-Commerce Storefront
**Phase 13 Deliverable — Curated Merchandising, Editorial Storytelling & Cross-Selling**

---

## 1. Editorial Storytelling Strategy

E-commerce pages for traditional regional foods often fail by treating cultural specialties as generic commodities. KRAK & CO. counters this through **Category Editorial Merchandising** (`CategoryEditorial.tsx`), highlighting the craftsmanship, ingredients, and heritage behind each snack family:

### 1.1 Category Storytelling Themes

| Category | Primary Storytelling Hook | Key Ingredients Highlighted | Culinary Technique |
|---|---|---|---|
| **Chips & Crisps** | "Kettle-Crisped in Pure Cold-Pressed Oils" | Hand-harvested Nendran raw bananas, hill tapioca | Freshly sliced directly into hot coconut oil |
| **Murukku & Savouries** | "The Art of the Hand-Pressed Coil" | Milled raw rice flour, roasted urad dal, black sesame | Hand-kneaded dough extruded through brass achu |
| **Mixtures & Namkeen** | "A Symphony of Textures & Spices" | Moth bean flour, crunchy peanuts, sev, boondi | Multi-component kettle frying & stone-ground spice tossing |
| **Sweets & Mithai** | "Sweetness Crafted with Reverence" | 100% Pure cow desi ghee, whole cashews, saffron | Slow simmered, hand-rolled, zero vanaspati |
| **Pickles & Sides** | "Sun-Cured in Traditional Clay Martabans" | Raw sour mangoes, Guntur chillies, yellow mustard | Naturally cured under the sun in ceramic barni jars |

---

## 2. Cross-Category Discovery & Navigation

To maintain shopper engagement and encourage discovery across complementary products, each category template includes the **Related Categories Section** (`RelatedCategoriesSection.tsx`):

```
       ┌────────────────────────┐
       │ Active Category:       │
       │ Chips & Crisps         │
       └───────────┬────────────┘
                   │
     ┌─────────────┼─────────────┐
     ▼             ▼             ▼
┌───────────┐ ┌───────────┐ ┌───────────┐
│ Murukku & │ │ Mixtures  │ │ Pickles & │
│ Savouries │ │ & Namkeen │ │ Sides     │
└───────────┘ └───────────┘ └───────────┘
```

### Merchandising Logic:
* **Murukku Shoppers** are presented with **Mixtures & Namkeen** and **Chips & Crisps** (tea-time companion savouries).
* **Sweets Shoppers** are presented with **Gift Boxes & Hampers** and **Murukku & Savouries** (sweet & savoury balance).
* **Pickles Shoppers** are presented with **Chips & Crisps** and **Murukku** (crunchy vehicles for spicy pickles).

---

## 3. Strict Truth-in-Advertising Rules

To preserve brand authenticity and customer trust:
1. **No Artificial Bestseller Badges**: Only products with genuine `isBestseller: true` in catalogue records carry the badge.
2. **No Fabricated Review Counts**: Ratings and review numbers correspond to recorded customer feedback data.
3. **Transparent Ingredients**: Every product card displays exact cooking medium (e.g. *100% Pure Cold-Pressed Coconut Oil*, *Pure Desi Ghee*).
4. **No Artificial Price Strikethroughs**: `compareAtPrice` is only displayed where genuine historical retail prices exist.
