# KRAK & CO. — PRODUCT GRID CONVERSION AUDIT (PHASE 11)

**Document:** Conversion Rate Optimization (CRO) & Product Card Usability Audit  
**Brand:** KRAK & CO. — Authentic Indian Snacks  
**Date:** November 2026  

---

## 1. Visual Hierarchy & Scanning Dynamics

The KRAK & CO. product card (`ProductCard.tsx`) is engineered specifically for food e-commerce scanning behavior:

```
┌──────────────────────────────────────────────┐
│  [Bestseller Badge]               [Heart ♡]  │
│                                              │
│          [ARCHED PRODUCT IMAGE]              │
│       Crispy Golden Snack in Urli            │
│                                              │
├──────────────────────────────────────────────┤
│  Product Name (e.g. Kerala Banana Chips)     │
│  ₹149  250g  ₹169                            │
│  ★ 4.8 (2,356 reviews)                       │
├──────────────────────────────────────────────┤
│             [ ADD TO CART ]                  │
└──────────────────────────────────────────────┘
```

1. **Immediate Visual Proof:** Arched image container draws customer eye to golden snack textures.
2. **Social Proof Signals:** Prominent gold star rating and review count build immediate trust before click.
3. **Anchor Price & Value Display:** Current selling price is bold in dark ink, paired with strikethrough compare-at price to emphasize customer savings.
4. **Frictionless Quick Add:** Deep crimson button spans the card base with clear hover and active states.

---

## 2. Pack-Size Variant Selection Logic (Anti-Friction CRO)

- **Single-Variant Products:** When a product has only one size (e.g. 200g pouch or 1.2kg hamper), clicking "ADD TO CART" **instantly adds the item to the cart** with an immediate Toast notification, removing friction.
- **Multi-Variant Products:** When a product has multiple sizes (e.g. 100g, 250g, 500g):
  - Rather than making a hidden assumption and silently adding an arbitrary size to the cart, the card triggers `onSelectVariants(product)`.
  - This immediately opens the **QuickAddModal** dialog, allowing the customer to choose their preferred pack size, adjust quantity, verify price, and confirm with zero page reloads.

---

## 3. Empty State Conversion Recovery

When customer filters return 0 matching items (e.g. mutually exclusive region and category selections):
- **Avoid Dead Ends:** The page never displays a blank white container.
- **Empathetic Brand Microcopy:** Displays "No snacks match your filters" with clear context.
- **Direct Recovery Action:** Prominent "Clear All Filters" button immediately resets the catalog to all 14 snacks.

