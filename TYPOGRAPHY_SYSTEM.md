# KRAK & CO. — TYPOGRAPHY SYSTEM SPECIFICATION (PHASE 04)

**Document:** Storefront Typography, Type Scales, Responsive Rules & Font Pairings  
**Author:** Lead Typography Specialist & Design Systems Architect  
**Date:** November 2026

---

## 1. The Dual Typography Pairing

The KRAK & CO. typography pairing marries **editorial retro elegance** with **modern geometric readability**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        KRAK & CO. TYPE PAIRING                         │
├──────────────────────────┬─────────────────────────────────────────────┤
│  DISPLAY & HEADINGS      │  Playfair Display (Serif)                   │
│                          │  • High-contrast letterforms                │
│                          │  • Retro editorial flair                    │
│                          │  • Google Fonts / SIL Open Font License     │
├──────────────────────────┼─────────────────────────────────────────────┤
│  UI & BODY INTERFACE     │  Poppins (Geometric Sans-Serif)             │
│                          │  • Exceptional x-height and readability     │
│                          │  • Clean geometry for forms, cards, tables  │
│                          │  • Google Fonts / SIL Open Font License     │
└──────────────────────────┴─────────────────────────────────────────────┘
```

### 1.1 Font Licensing & Web Performance Guarantee
- **Licensing:** Both *Playfair Display* and *Poppins* are distributed under the **SIL Open Font License 1.1** (100% free for commercial digital e-commerce use).
- **Zero Layout Shift:** Implemented via Next.js native font loader (`next/font/google`) with automatic subset preloading (`latin`), local font caching, and zero Cumulative Layout Shift (CLS).
- **Fallback Font Stacks:**
  - Display: `'Playfair Display', Georgia, Cambria, 'Times New Roman', serif`
  - Body / UI: `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

---

## 2. Complete Heading & Display Scale

All type scales maintain a consistent typographic ratio (1.25 Major Third):

| Token | Element | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|
| `font.display.2xl` | Hero Headline | `48px` (3rem) | `32px` (2rem) | 800 (Extra Bold) | 1.15 | `-0.02em` |
| `font.display.xl` | Section Title (H1) | `36px` (2.25rem)| `28px` (1.75rem)| 700 (Bold) | 1.2 | `-0.015em` |
| `font.heading.lg` | Collection Title (H2)| `28px` (1.75rem)| `24px` (1.5rem) | 700 (Bold) | 1.25 | `-0.01em` |
| `font.heading.md` | Card / Module (H3) | `22px` (1.375rem)|`20px` (1.25rem) | 600 (Semi-Bold) | 1.3 | `0` |
| `font.heading.sm` | Sub-section (H4) | `18px` (1.125rem)|`18px` (1.125rem)| 600 (Semi-Bold) | 1.35 | `0` |
| `font.heading.xs` | Drawer Header (H5)| `16px` (1rem) | `16px` (1rem) | 600 (Semi-Bold) | 1.4 | `+0.01em` |
| `font.heading.2xs`| Micro Title (H6) | `14px` (0.875rem)|`14px` (0.875rem)| 600 (Semi-Bold) | 1.4 | `+0.02em` (Uppercase)|

---

## 3. Body & Functional Interface Scale

| Token | Element | Size | Weight | Line Height | Application |
|---|---|---|---|---|---|
| `font.body.lg` | Lead Paragraph | `18px` (1.125rem) | 400 (Regular) | 1.6 | Brand story introduction, PDP highlights |
| `font.body.base`| Primary Body | `16px` (1rem) | 400 (Regular) | 1.5 | General descriptions, FAQs, policies |
| `font.body.sm` | Compact UI | `14px` (0.875rem) | 400 / 500 | 1.45 | Product card descriptions, form inputs |
| `font.body.xs` | Microcopy | `12px` (0.75rem) | 500 (Medium) | 1.4 | Breadcrumbs, pack weights, badge pills |
| `font.body.2xs`| Legal Micro | `11px` (0.6875rem)| 400 (Regular) | 1.3 | Copyright, FSSAI disclaimer |

---

## 4. Functional Commercial Typography

1. **Price Displays:** 
   - Rendered using **Tabular Numerals** (`font-variant-numeric: tabular-nums`) to prevent horizontal jitter when quantities update.
   - Large PDP Price: `24px` Bold Playfair Display / Poppins (`₹149`).
   - Card Price: `16px` Bold Poppins paired with `13px` weight indicator (`₹149  250g`).
   - Crossed-Out Compare Price: `14px` Regular with line-through in muted charcoal (`₹179`).
2. **Button Typography:**
   - Text is strictly **Poppins 15px Semi-Bold (600)** with `letter-spacing: +0.02em` for instantaneous legibility.
3. **Ratings & Social Proof:**
   - Star indicator: `14px` Bold with `font-variant-numeric: tabular-nums` (`★ 4.8 (2.3k)`).
4. **Form Labels:**
   - `14px` Medium Poppins with `#262321` Ink Black contrast.

---

## 5. Typography Specimen

```
AUTHENTIC INDIAN SNACKS — SOUTH TO NORTH
[Playfair Display 800 — 48px — Maroon #7A1C1C]

Kerala Banana Chips
[Playfair Display 700 — 28px — Ink Black #262321]

₹149  (250g)   ★ 4.8 (2,356 reviews)
[Poppins Semi-Bold / Tabular Numerals — 20px]

Crispy, golden banana chips made in traditional Kerala style 
using premium cold-pressed coconut oil. Packed fresh with nitrogen 
flushing for 90 days of guaranteed crunch.
[Poppins Regular — 15px — Line Height 1.5 — Charcoal #5A524D]

[ ADD TO CART ➔ ]
[Poppins Semi-Bold — 15px — Letter Spacing +0.02em — Cream #FFF8EE]
```

