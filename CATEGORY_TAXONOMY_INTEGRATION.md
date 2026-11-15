# CATEGORY TAXONOMY INTEGRATION SPECIFICATION

## KRAK & CO. — Next.js E-Commerce Storefront
**Phase 13 Deliverable — Information Architecture & Cross-Taxonomy Rules**

---

## 1. Taxonomy Matrix & Cardinality

The KRAK & CO. product catalogue organizes items along two primary orthogonal dimensions:
1. **Snack Category** (`primaryCategory` & optional `secondaryCategories`)
2. **Culinary Region** (`region`: `south-indian` | `north-indian` | `pan-indian`)

```
                          CULINARY REGIONS
               ┌────────────────────┬────────────────────┐
               │ South Indian       │ North Indian       │
 ┌─────────────┼────────────────────┼────────────────────┤
 │ Chips &     │ Kerala Banana      │ Delhi Chaat Masala │
 │ Crisps      │ Tapioca Chips      │ Potato Wafers      │
 ├─────────────┼────────────────────┼────────────────────┤
 │ Murukku &   │ Ragi Murukku       │ Punjabi Methi      │
 │ Savouries   │ Butter Murukku     │ Mathri             │
 ├─────────────┼────────────────────┼────────────────────┤
 │ Mixtures &  │ Madurai Special    │ Aloo Bhujia, Sev,  │
 │ Namkeen     │ Mixture            │ Bikaneri, Bombay   │
 ├─────────────┼────────────────────┼────────────────────┤
 │ Sweets &    │ Traditional Soft   │ Royal Kaju Katli   │
 │ Mithai      │ Ghee Mysore Pak    │ Besan Dry Fruit    │
 ├─────────────┼────────────────────┼────────────────────┤
 │ Pickles &   │ Andhra Avakaya     │ Banarasi Stuffed   │
 │ Sides       │ Raw Mango Pickle   │ Lal Mirch Achar    │
 └─────────────┴────────────────────┴────────────────────┘
```

---

## 2. Dynamic Route Mapping & Alias Strategy

To guarantee backwards compatibility with earlier wireframes while strictly following the Phase 02 Product Taxonomy, the service layer implements an **Alias Resolution Strategy**:

```typescript
// src/services/collections/collectionService.ts
async getCollectionBySlug(slug: string): Promise<Collection | null> {
  const col = MOCK_COLLECTIONS.find(
    (c) => c.slug === slug || c.aliases?.includes(slug)
  );
  return col || null;
}
```

| Incoming URL Route | Canonical Slug | Category | Alias Support |
|---|---|---|---|
| `/collections/chips-crisps` | `chips-crisps` | `chips-crisps` | Direct match |
| `/collections/murukku-savouries` | `murukku-savouries` | `savouries` | Aliased from `savouries` |
| `/collections/savouries` | `murukku-savouries` | `savouries` | Supported legacy route |
| `/collections/mixtures-namkeen` | `mixtures-namkeen` | `mixtures` | Aliased from `mixtures` |
| `/collections/mixtures` | `mixtures-namkeen` | `mixtures` | Supported legacy route |
| `/collections/sweets-mithai` | `sweets-mithai` | `sweets-mithai` | Direct match |
| `/collections/pickles-sides` | `pickles-sides` | `pickles-sides` | Direct match |
| `/collections/south-indian` | `south-indian` | *(All South)* | Regional collection |
| `/collections/north-indian` | `north-indian` | *(All North)* | Regional collection |

---

## 3. Subcategory Navigation Design

Each category collection defines high-intent **Subcategory Shortcuts** in `collection.subcategories`. These are rendered by `CategorySubnav` as lightweight, horizontal scrollable pills that manipulate URL query parameters without triggering full page reloads:

### Example: `Chips & Crisps`
1. **All Chips** (`slug: "all"`): Clears `region`, `spice`, and `packSize` filters.
2. **South Indian Chips** (`region: "south-indian"`): Narrows the category to coconut-oil fried chips.
3. **North Indian Wafers** (`region: "north-indian"`): Narrows to spiced potato crisps.
4. **Mild Spiced** (`spiceLevel: "Mild"`): Filters for non-spicy snacking.
5. **Medium & Fiery** (`spiceLevel: "Medium"`): Filters for tangy and spicy variants.

---

## 4. Multi-Category Membership Rules

Where products logically cross multiple categories (e.g., Combos or Gift Hampers containing Banana Chips and Mysore Pak):
* The item specifies a single `primaryCategory` (e.g. `combos` or `gift-boxes`).
* Optional `secondaryCategories?: SnackCategory[]` allow items to appear in related category searches when explicitly configured.
* Product records are never cloned or duplicated in database queries or mock fixtures; uniqueness is maintained by product `id` and `slug`.

