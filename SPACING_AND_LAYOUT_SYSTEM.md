# KRAK & CO. — SPACING & LAYOUT SYSTEM (PHASE 04)

**Document:** Spacing Scale, Grid Architecture & Responsive Layout Hierarchy  
**Author:** Lead Design Systems Architect & UI Systems Engineer  
**Date:** November 2026

---

## 1. 8-Point Spatial Grid System

All spatial distribution, element dimensions, margins, and paddings are governed by an **8-point geometric grid** (with a 4px micro-increment for tight interface elements like badges and steppers).

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SPACING TOKEN SCALE                             │
├───────────────┬────────────┬─────────────┬─────────────────────────────┤
│ TOKEN NAME    │ PIXELS     │ REM VALUE   │ PRIMARY APPLICATION         │
├───────────────┼────────────┼─────────────┼─────────────────────────────┤
│ `space.1`     │ 4px        │ 0.25rem     │ Micro gaps, badge padding   │
│ `space.2`     │ 8px        │ 0.5rem      │ Element margins, pill gap   │
│ `space.3`     │ 12px       │ 0.75rem     │ Button vertical padding     │
│ `space.4`     │ 16px       │ 1.0rem      │ Card padding, input padding │
│ `space.5`     │ 20px       │ 1.25rem     │ Grid gaps on tablet         │
│ `space.6`     │ 24px       │ 1.5rem      │ Desktop grid gaps, gutters  │
│ `space.8`     │ 32px       │ 2.0rem      │ Module spacing, card gaps   │
│ `space.10`    │ 40px       │ 2.5rem      │ Sub-section vertical rhythm │
│ `space.12`    │ 48px       │ 3.0rem      │ Section padding (mobile)    │
│ `space.16`    │ 64px       │ 4.0rem      │ Section padding (desktop)   │
│ `space.20`    │ 80px       │ 5.0rem      │ Major section separators    │
│ `space.24`    │ 96px       │ 6.0rem      │ Hero vertical padding       │
│ `space.32`    │ 128px      │ 8.0rem      │ Footer bottom padding       │
└───────────────┴────────────┴─────────────┴─────────────────────────────┘
```

---

## 2. Layout & Container Architecture

### 2.1 Max-Width Container Hierarchy
- **Standard Container (`max-w-7xl`):** `1280px` maximum width. Used for catalog grids, reviews, account portal, and content sections. Prevents content from over-stretching on wide monitors.
- **Narrow Container (`max-w-4xl`):** `896px` maximum width. Used for editorial storytelling, policy documents, FAQ accordions, and About Us.
- **Checkout Container (`max-w-5xl`):** `1024px` maximum width. Optimizes two-column checkout layout.
- **Full-Bleed Surfaces:** Hero banner, Announcement bar, and Footer span `100vw` with interior content contained to `1280px`.

### 2.2 Responsive Page Gutters (Horizontal Margins)
- **Mobile (`< 640px`):** `16px` (`px-4`)
- **Tablet (`640px – 1024px`):** `24px` (`px-6`)
- **Desktop (`> 1024px`):** `32px` (`px-8`)

---

## 3. Responsive Breakpoints & Grid Matrix

| Breakpoint | Viewport Width | Grid Columns | Primary Layout Configuration |
|---|---|---|---|
| **Mobile S** | `320px – 374px` | 1 Column | Single-column cards, full-width buttons |
| **Mobile Standard** | `375px – 430px` | 2 Columns | 2-column product grid (`gap-3`), bottom nav dock |
| **Tablet Portrait** | `640px – 767px` | 2 Columns | 2-column product grid (`gap-4`), drawer navigation |
| **Tablet Landscape**| `768px – 1023px`| 3 Columns | 3-column product grid (`gap-5`), collapsible filter |
| **Desktop** | `1024px – 1279px`| 4 Columns | 4-column product grid (`gap-6`), sticky filter sidebar |
| **Wide Desktop** | `1280px+` | 4–5 Columns | Full desktop layout, 5-column bestsellers grid |

---

## 4. Specific Component Dimensions

- **Announcement Bar Height:** `36px`
- **Main Header Height (Desktop):** `68px` (Shrinks to `56px` on scroll)
- **Mobile Header Height:** `56px`
- **Mobile Bottom Navigation Dock Height:** `60px` (+ iOS home bar safe padding)
- **Filter Sidebar Width (Desktop):** `280px`
- **Slide-Over Cart Drawer Width:** `400px` (Desktop) / `100vw` (Mobile)
- **Product Card Internal Padding:** `16px` (`p-4`)
- **Product Image Aspect Ratio:** Strictly `1:1` square

