# KRAK & CO. — Component Responsive Design & Viewport Test Report

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 08 — Complete Reusable UI Component System  
**Date:** November 2026  

---

## 1. Viewport Matrix Tested

All components in the KRAK & CO. library were inspected across mobile, tablet, and desktop viewports on the local preview workbench:

| Device Category | Target Viewport | Breakpoint | Focus Areas Tested | Result |
|---|---|---|---|---|
| **Compact Mobile** | 320px – 360px | Base | Text wrapping, button padding, quantity stepper layout, category pills | **PASS** |
| **Standard Mobile** | 375px – 430px | `sm` | Product cards in 2-column grids, radio options, drawer slide-in | **PASS** |
| **Tablet Portrait** | 768px | `md` | Form 2-column layouts, promo card horizontal stacking | **PASS** |
| **Desktop / Laptop**| 1024px – 1280px| `lg` | Category avatar row, 3-column product cards, modal dialog sizing | **PASS** |
| **Wide Desktop** | 1440px+ | `xl` | Container centering (`max-w-7xl`), max content readability | **PASS** |

---

## 2. Key Responsive Behaviors Implemented

### 2.1 ProductCard
- **Mobile (320px – 640px):**
  - Maintains legible 1-line clamped title.
  - Price and pack size stay on a single baseline row.
  - "Add to Cart" button spans full width with 38px touch target height.
  - Rating stars downscale gracefully to `text-[11px]`.
- **Desktop (1024px+):**
  - Smooth card lift on hover (`-translate-y-0.5`, `shadow-card`).
  - Image scaling on hover (`group-hover:scale-105`) with clipped overflow.

### 2.2 Category & Collection Cards
- **CategoryCard:**
  - Avatars scale from 80px (`h-20 w-20`) on mobile to 96px (`h-24 w-24`) on desktop.
  - Horizontally wraps with flexible gap spacing.
- **CollectionCard:**
  - Padding adapts from `p-6` on mobile to `p-8` on desktop.
  - Background decorative SVG stays anchored to bottom-right corner without overlapping text copy.

### 2.3 Form Fields & Radios
- Radio groups support vertical stack on mobile and horizontal inline flex on tablet/desktop.
- Input fields use 14px font (`text-sm`), preventing automatic iOS Safari zoom-in on focus.

### 2.4 Drawers & Modals
- Drawer occupies 100% width on screens under 480px, switching to `max-w-md` (448px) on tablet/desktop.
- Modals respect `p-4` gutters on mobile and expand up to `max-w-lg` (512px) on desktop with centered positioning.

