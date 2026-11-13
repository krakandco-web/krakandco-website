# KRAK & CO. — COLOUR SYSTEM SPECIFICATION (PHASE 04)

**Document:** Complete Colour Palette, Semantic Token Architecture & Accessibility Audit  
**Author:** Lead Design Systems Architect & Visual Designer  
**Date:** November 2026

---

## 1. Master Brand Palette

The KRAK & CO. colour system is anchored in traditional Indian lithographic ink pigments: vermilion kumkum red, ceremonial mustard turmeric, hand-pressed coconut leaf green, vintage indigo blue, and warm bakery cream.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            MASTER COLOUR MATRIX                             │
├───────────────────┬───────────┬─────────────┬───────────────────────────────┤
│ TOKEN NAME        │ HEX CODE  │ RGB         │ ROLE & APPLICATION            │
├───────────────────┼───────────┼─────────────┼───────────────────────────────┤
│ Deep Maroon       │ #7A1C1C   │ 122, 28, 28 │ Primary Brand, Hero, Buttons  │
│ Vermilion Red     │ #B52C23   │ 181, 44, 35 │ Brand Accent, Alert, Badges   │
│ Mustard Yellow    │ #E6AC2A   │ 230, 172, 42│ Secondary Brand, Star Ratings │
│ Forest Green      │ #285F49   │ 40, 95, 73  │ South Indian Theme, Freshness │
│ Vintage Blue      │ #244B6B   │ 36, 75, 107 │ Corporate Gifting, Secondary  │
│ Warm Biscuit Cream│ #FFF8EE   │ 255, 248, 238│ Main Page Canvas / Background│
│ Vintage Cream     │ #F3E4C5   │ 243, 228, 197│ Surface / Card Backdrop      │
│ Warm Sand         │ #F2DFBA   │ 242, 223, 186│ Border, Dividers, Neutral     │
│ Ink Black         │ #262321   │ 38, 35, 33  │ Primary High-Contrast Text    │
│ Charcoal Slate    │ #1B2A3A   │ 27, 42, 58  │ Deep UI Contrast, Footers     │
└───────────────────┴───────────┴─────────────┴───────────────────────────────┘
```

---

## 2. Semantic Token Architecture

### 2.1 Surface & Background Tokens
- `color.surface.canvas`: `#FFF8EE` (Primary page background; warm, non-glare, comforting).
- `color.surface.card`: `#FFFFFF` or `#FFFDF9` (High-contrast pure background for product cards).
- `color.surface.parchment`: `#F3E4C5` (Secondary surface for review cards, testimonial blocks).
- `color.surface.elevated`: `#FFFFFF` with drop shadow (`shadow-md`).
- `color.surface.hero`: `#7A1C1C` (Deep heritage maroon gradient).
- `color.surface.south`: `#1E4D2B` / `#285F49` (South Indian regional collection header).
- `color.surface.north`: `#8B1E1E` / `#B52C23` (North Indian regional collection header).
- `color.surface.inverse`: `#262321` (Ink Black surface for footers and dark overlays).
- `color.surface.input`: `#FFFFFF` (Clear white for form fields with `#F2DFBA` borders).

### 2.2 Typography & Text Tokens
- `color.text.primary`: `#262321` (Ink Black — 13.8:1 contrast on `#FFF8EE`, ultra-readable).
- `color.text.secondary`: `#5A524D` (Warm muted charcoal for descriptions and subtitles).
- `color.text.muted`: `#8C8178` (Helper text, packaging notes, breadcrumbs).
- `color.text.inverse`: `#FFF8EE` (Crisp cream text on maroon buttons and dark headers).
- `color.text.price`: `#7A1C1C` (Deep maroon bold price emphasis).
- `color.text.link`: `#7A1C1C` with underline hover transition to `#581111`.

### 2.3 Functional & Status Tokens
- `color.status.success`: `#285F49` (Forest green for free shipping unlocked, in-stock badges).
- `color.status.error`: `#B52C23` (Vermilion red for form validation errors, card payment failure).
- `color.status.warning`: `#D97706` (Amber for low-stock alerts, allergen cautions).
- `color.status.info`: `#244B6B` (Vintage blue for shipping notifications, tracking stages).
- `color.status.rating`: `#E6AC2A` (Mustard gold for star review icons).
- `color.status.discount`: `#B52C23` (Badge: `"15% OFF"`, `"Save ₹30"`).

---

## 3. WCAG 2.2 AA Contrast Compliance Audit

| Pairing Combination | Foreground | Background | Contrast Ratio | WCAG 2.2 AA Result | Usage Guideline |
|---|---|---|---|---|---|
| **Ink Black on Canvas** | `#262321` | `#FFF8EE` | **13.84 : 1** | **PASS (AAA)** | Primary body text, headings, form labels |
| **Deep Maroon on Canvas**| `#7A1C1C` | `#FFF8EE` | **9.12 : 1** | **PASS (AAA)** | Section titles, links, price highlights |
| **Cream Text on Maroon** | `#FFF8EE` | `#7A1C1C` | **9.12 : 1** | **PASS (AAA)** | Primary CTA buttons, Hero banner headings |
| **Muted Charcoal on Canvas**| `#5A524D` | `#FFF8EE` | **5.41 : 1** | **PASS (AA)** | Secondary descriptions, microcopy |
| **Forest Green on Canvas**| `#285F49` | `#FFF8EE` | **5.32 : 1** | **PASS (AA)** | In-stock tags, South Indian badges |
| **Mustard Yellow on Canvas**| `#E6AC2A` | `#FFF8EE` | **1.86 : 1** | **FAIL (DO NOT USE)**| Must NEVER be used for small text on cream |
| **Ink Black on Mustard** | `#262321` | `#E6AC2A` | **7.44 : 1** | **PASS (AAA)** | Mustard buttons MUST have dark Ink Black text |

### 3.1 Strict Design System Enforcement Rule
- **Mustard Yellow (`#E6AC2A`)** is strictly an **accent, badge backdrop, or decorative fill**. It must NEVER be used for readable text on light backgrounds.
- All primary buttons must pair **Deep Maroon (`#7A1C1C`)** with **Cream (`#FFF8EE`)** or **Mustard (`#E6AC2A`)** with **Ink Black (`#262321`)**.

