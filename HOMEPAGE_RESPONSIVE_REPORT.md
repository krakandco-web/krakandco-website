# KRAK & CO. — Homepage Responsive & Multi-Viewport Test Report

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 10 — Complete Homepage Development & Conversion Optimisation  
**Date:** November 2026  

---

## 1. Viewport Audit Matrix

The completed homepage was inspected across all target device resolutions:

| Viewport Width | Target Device | Layout Highlights & Adaptive Behavior | Result |
|---|---|---|---|
| **320px – 375px** | Small Mobile (iPhone SE) | Single-column Hero (headline first, retro woman centered below), 2-col category grid, 2-col product cards with full-width CTA buttons. | **PASS** |
| **375px – 430px** | Standard Mobile (iPhone 14/15, Galaxy S23) | Hero display text scaled cleanly (`text-3xl`), 2-col trust bar, 2-col product cards, full-width combo banners. | **PASS** |
| **768px – 1023px** | Tablet (iPad portrait) | 3-column category grid, 3-column product cards, side-by-side regional cards (`South Indian` & `North Indian`), 3-col review cards. | **PASS** |
| **1024px – 1279px** | Small Desktop / Laptop | Full 12-col split Hero (woman on left, headline center, snack platter right), 6-col category avatar row, 5-col product card grid. | **PASS** |
| **1280px – 1440px+**| Large Desktop | Centered `max-w-7xl` container constraints, generous whitespace, sharp vector graphics, sticky header with mega menu. | **PASS** |

---

## 2. Mobile Ergonomics & Touch Controls

1. **Touch Target Sizing:**
   - Primary "Shop Now" button on hero: 50px height with comfortable finger padding.
   - "Add to Cart" buttons on product cards: 38px–42px height spanning 100% of card width.
   - Category avatar circles: 96px diameter (`h-24 w-24`), easy to tap without precision aiming.
2. **Horizontal Overflow Prevention:**
   - Root wrapper explicitly enforces `overflow-x-hidden`.
   - Grid columns break cleanly into 2 columns on mobile instead of forcing awkward horizontal scroll bars.
3. **No Hidden Content on Mobile:**
   - Critical conversion CTAs, pricing, ratings, and dietary badges remain fully visible on mobile without requiring mouse hover states.
