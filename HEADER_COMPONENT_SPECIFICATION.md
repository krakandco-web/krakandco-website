# KRAK & CO. — Header Component Specification

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 09 — Global Storefront Layout, Header, Navigation, Mega Menu & Footer  
**Location:** `src/components/layout/Header.tsx`  

---

## 1. Composition & Spatial Geometry

The KRAK & CO. desktop header balances brand personality with conversion-focused clarity:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Announcement Bar: ✨ Festive Snack Boxes Now Live! | Free Shipping Above ₹499   (36px) │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [KRAK & CO. Logo]    [Shop ▾] [South Indian] [North Indian] [Gift Boxes] [Combos]   │
│                       [About]               [Search 🔍] [Account 👤] [♡] [Bag 🛍 3]    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Height:** 80px (`h-20`).
- **Surface:** `bg-surface-card/95 backdrop-blur-md border-b border-surface-sand`.
- **Max Width:** `max-w-7xl` with responsive side padding (`px-4 sm:px-6 lg:px-8`).

---

## 2. Desktop vs Mobile Responsiveness

| Element | Desktop (≥ 1024px) | Mobile (< 1024px) |
|---|---|---|
| **Hamburger Button** | Hidden (`hidden lg:flex`) | Visible on left (`lg:hidden`), triggers `MobileNavDrawer` |
| **Brand Logo** | Left aligned (`h-12 w-44 sm:h-14 sm:w-48`) | Center-left with high-res SVG priority loading |
| **Primary Nav Links** | Full horizontal bar with Mega Menu | Collapsed inside slide-over `MobileNavDrawer` |
| **Search Access** | Quick icon link to `/search` | Prominent search icon link to `/search` |
| **Account Link** | Direct link to `/account` | Moved into drawer to conserve mobile header width |
| **Wishlist Link** | Direct link to `/wishlist` with badge | Moved into drawer |
| **Cart Button** | Shopping bag with live count badge | Shopping bag with live count badge |

---

## 3. Brand Logo Treatment

- Uses official vector SVG: `/assets/brand/logos/brand-logo-primary.svg`.
- Aspect ratio is preserved with Next.js `Image` using `fill` and `object-contain object-left`.
- Fully accessible via `aria-label="KRAK & CO. Home"`.
- Keyboard accessible with `focus-visible:ring-2 focus-visible:ring-brand-maroon`.
