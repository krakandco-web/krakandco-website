# KRAK & CO. — CONSOLIDATED DESIGN SYSTEM REFERENCE (PHASE 04)

**Document:** Master Design System Reference & Implementation Blueprint  
**Status:** Approved for Implementation Planning  
**Brand:** KRAK & CO. — Authentic Indian Snacks (South to North)  
**Date:** November 2026

---

## 1. System Overview & The 80/20 Aesthetic Ratio

The KRAK & CO. design system synthesizes **vintage Indian matchbox and commercial lithographic graphics (20%)** with **high-conversion, accessible, modern e-commerce engineering (80%)**.

Every visual decision preserves readability, touch accessibility, and transaction transparency while honoring the cultural pride and nostalgic joy of Indian tea-time crunch.

---

## 2. Master System Index

| Specification Area | Source Document | Key Implementation Takeaway |
|---|---|---|
| **Brand Identity** | [BRAND_VISUAL_GUIDELINES.md](file:///Users/Apple/Desktop/krakandco/BRAND_VISUAL_GUIDELINES.md) | Playful, bold, culturally rooted, nostalgic yet contemporary. |
| **Colour System** | [COLOUR_SYSTEM.md](file:///Users/Apple/Desktop/krakandco/COLOUR_SYSTEM.md) | Deep Maroon (`#7A1C1C`), Warm Cream (`#FFF8EE`), Mustard (`#E6AC2A`), Forest Green (`#285F49`). |
| **Typography** | [TYPOGRAPHY_SYSTEM.md](file:///Users/Apple/Desktop/krakandco/TYPOGRAPHY_SYSTEM.md) | Display: *Playfair Display* (SIL OFL); UI & Body: *Poppins* (SIL OFL); Tabular numerals for prices. |
| **Spacing & Grid** | [SPACING_AND_LAYOUT_SYSTEM.md](file:///Users/Apple/Desktop/krakandco/SPACING_AND_LAYOUT_SYSTEM.md) | 8-point geometric scale, max container `1280px`, touch targets `≥ 44×44px`. |
| **Components** | [COMPONENT_VISUAL_SPECIFICATION.md](file:///Users/Apple/Desktop/krakandco/COMPONENT_VISUAL_SPECIFICATION.md) | Architectural category arches, 1:1 square product cards, slide-over cart drawer. |
| **Illustrations** | [ILLUSTRATION_GUIDELINES.md](file:///Users/Apple/Desktop/krakandco/ILLUSTRATION_GUIDELINES.md) | Saree lady with sunglasses, aviator uncle, gopurams, palace arches; never used in place of real food photos. |
| **Photography** | [PRODUCT_PHOTOGRAPHY_GUIDELINES.md](file:///Users/Apple/Desktop/krakandco/PRODUCT_PHOTOGRAPHY_GUIDELINES.md) | Clean 1:1 appetizing food photography showing golden edges, spices, and packaging. |
| **Iconography & Motion**| [ICONOGRAPHY_AND_MOTION.md](file:///Users/Apple/Desktop/krakandco/ICONOGRAPHY_AND_MOTION.md) | Lucide React line icons (1.75px–2px stroke), smooth 250ms cubic-bezier transitions, reduced motion support. |
| **Accessibility** | [ACCESSIBILITY_DESIGN_STANDARDS.md](file:///Users/Apple/Desktop/krakandco/ACCESSIBILITY_DESIGN_STANDARDS.md) | WCAG 2.2 AA compliant contrast (13.8:1 text contrast), focus rings, skip-to-content, ARIA live regions. |
| **Design Tokens** | [DESIGN_TOKENS_SPECIFICATION.md](file:///Users/Apple/Desktop/krakandco/DESIGN_TOKENS_SPECIFICATION.md) | Centralized token registry with seamless Tailwind CSS configuration mapping. |

---

## 3. Governance & Contribution Rules

1. **Token Invariance:** No arbitrary one-off HEX codes or pixel values in components; all styling must consume defined design tokens.
2. **Photography Primacy:** Product cards and details MUST showcase actual food photography.
3. **Contrast Enforcement:** Mustard Yellow (`#E6AC2A`) must never be used for body text on cream backdrops.

