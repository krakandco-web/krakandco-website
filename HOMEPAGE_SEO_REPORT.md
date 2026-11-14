# KRAK & CO. — Homepage SEO & Semantic Structure Report

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 10 — Complete Homepage Development & Conversion Optimisation  
**Target:** `src/app/(storefront)/page.tsx` & `src/app/layout.tsx`  

---

## 1. Metadata Implementation

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "KRAK & CO. — Authentic Indian Snacks: South to North",
  description:
    "Handcrafted authentic South and North Indian snacks, crispy banana chips in cold-pressed coconut oil, spicy mixtures, savouries, sweets and festive gift hampers.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://krakandco.com",
    siteName: "KRAK & CO.",
    title: "KRAK & CO. — Authentic Indian Snacks: South to North",
    description:
      "Traditional recipes, premium ingredients, and irresistible crunch in every bite. Pan-India delivery.",
    images: [
      {
        url: "/assets/brand/identity/reference-artboard.jpg",
        width: 1200,
        height: 630,
        alt: "KRAK & CO. Storefront Artboard",
      },
    ],
  },
};
```

---

## 2. Heading Hierarchy & Semantic Outline

Strict single-H1 heading tree followed:
- **`<h1>`:** `AUTHENTIC INDIAN SNACKS SOUTH TO NORTH` (Hero Display Title)
- **`<h2>`:** `Shop by Category` (Category Discovery Section)
- **`<h2>`:** `Bestsellers` (Featured Products Section)
- **`<h2>`:** `Gift Boxes & Combos` (Gifting Banner Section)
- **`<h2>`:** `Loved by 25,000+ Snack Lovers Across India` (Customer Reviews Section)
- **`<h2>`:** `A Snack Brand That Brings India Together.` (Brand Story Section)
- **`<h3>`:** Individual category titles, regional cards (`South Indian Classics`, `North Indian Favourites`), product names, and combo titles.
- **`<h4>`:** Trust strip titles, review author details, and footer navigation headers.

---

## 3. Image Optimization & Alt Attributes

- All decorative SVGs feature `aria-hidden="true"`.
- All commercial product images feature descriptive, keyword-rich `alt` text:
  - `alt="Vintage Indian Pop Art Woman Enjoying Authentic Snacks"`
  - `alt="Golden Platter of Fresh Banana Chips, Murukku, and Regional Savouries"`
  - `alt="Kerala Banana Chips"`
  - `alt="Madurai Special Mixture"`
  - `alt="KRAK & CO. Keepsake Snack Tin"`
- Critical hero images declare `priority={true}` to prevent Largest Contentful Paint (LCP) delays.

