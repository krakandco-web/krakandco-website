# KRAK & CO. — Global Storefront Layout Implementation

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 09 — Global Storefront Layout, Header, Navigation, Mega Menu & Footer  
**Framework:** Next.js 14.2 App Router  
**Target:** `src/app/(storefront)/layout.tsx`  
**Date:** November 2026  

---

## 1. Architectural Strategy

The global storefront layout wraps all commercial customer-facing routes (`/`, `/shop`, `/collections/*`, `/products/*`, `/search`, `/gift-boxes`, `/combos`, `/cart`, `/checkout`, `/order-confirmation`, `/track-order`).

It provides a unified, persistent brand shell while remaining a **React Server Component** at the root:

```text
src/app/(storefront)/layout.tsx (Server Component)
├── Accessible Skip-to-Content Link (#main-content)
├── <Header /> (Sticky Brand Header + Announcement Bar + Mega Menu + Mobile Drawer)
├── <main id="main-content" className="flex-1">
│     └── {children} (Page content streams here)
└── <Footer /> (Brand Trust Signals + Nav Columns + Crunch Club Newsletter)
```

---

## 2. Key Layout Principles

1. **Zero Layout Duplication:** No individual storefront page contains its own header or footer. The layout establishes a single source of truth.
2. **Sticky Navigation Shell:** The main navigation bar stays fixed to the top of the viewport (`sticky top-0 z-40 bg-surface-card/95 backdrop-blur-md`) as users scroll through catalogs, guaranteeing instant access to cart, search, and mega-menu categories.
3. **No Horizontal Overflow:** The root wrapper enforces `min-h-screen flex flex-col bg-surface-canvas text-text-primary antialiased` with bounded maximum container widths (`max-w-7xl`).
4. **Dynamic Sticky Footer Behavior:** On short pages (e.g. Empty States, Order Confirmation), the footer stays anchored to the bottom of the viewport via `flex-1` expansion on `<main>`. On long catalog pages, it remains at the natural end of the document flow.
5. **Decoupled Account & Content Experience:** The customer account portal (`(account)`) and editorial policy legal pages (`(content)`) retain their specialized layout shells established in Phase 07, ensuring purpose-built UI without layout bloat.
