# KRAK & CO. — ICONOGRAPHY & MOTION SPECIFICATIONS (PHASE 04)

**Document:** Iconography Standards, Micro-Interactions & Motion Timing System  
**Author:** Lead UI Motion Designer & Systems Engineer  
**Date:** November 2026

---

## 1. Iconography Architecture

To ensure aesthetic harmony and fast bundle sizes, KRAK & CO. standardizes on **Lucide React** paired with custom SVG cultural motifs.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ICON SYSTEM SPECIFICATION                       │
├─────────────────┬───────────┬──────────────┬───────────────────────────┤
│ SIZE TOKEN      │ DIMENSIONS│ STROKE WIDTH │ APPLICATION               │
├─────────────────┼───────────┼──────────────┼───────────────────────────┤
│ `icon.xs`       │ 14×14px   │ 1.75px       │ Rating stars, badge tags  │
│ `icon.sm`       │ 18×18px   │ 1.75px       │ Breadcrumbs, stepper +/-  │
│ `icon.md`       │ 20×20px   │ 2.0px        │ Header search, account    │
│ `icon.lg`       │ 24×24px   │ 2.0px        │ Cart trigger, mobile dock │
│ `icon.xl`       │ 32×32px   │ 2.0px        │ Trust strip value pillars │
└─────────────────┴───────────┴──────────────┴───────────────────────────┘
```

### 1.1 Icon Rules
- **Style:** Clean, geometric line icons with softened corner caps.
- **Color Inheritance:** Icons inherit `currentColor` by default.
- **Accessibility:** All standalone icon buttons must include an explicit `aria-label` (e.g. `aria-label="Open Shopping Cart with 3 items"`).

---

## 2. Motion System & Easing Curves

Motion is applied purposefully to guide attention and provide confirmation—never as distracting ornamentation.

### 2.1 Standard Timing Tokens
- `motion.instant`: `100ms` (Checkbox toggle, button active tap)
- `motion.fast`: `150ms` (Button hover, tooltip fade, dropdown menu)
- `motion.normal`: `250ms` (Cart drawer slide-in, modal scale-in, accordion expansion)
- `motion.slow`: `350ms` (Hero background carousel, image gallery crossfade)

### 2.2 Standard Easing Functions
- **Decelerate / Ease-Out (`cubic-bezier(0.16, 1, 0.3, 1)`):** Standard for entering elements (cart drawer, modal entrance).
- **Accelerate / Ease-In (`cubic-bezier(0.7, 0, 0.84, 0)`):** Standard for exiting elements.
- **Spring Tactile (`cubic-bezier(0.34, 1.56, 0.64, 1)`):** Subtle bounce for badge increments and heart wishlist toggles.

### 2.3 Key Micro-Interactions
1. **Product Card Hover:** `transform: translateY(-4px)` over 200ms with subtle shadow expansion (`shadow-sm` ➔ `shadow-md`).
2. **Cart Drawer Slide-In:** Translates from `translateX(100%)` to `translateX(0)` over 250ms.
3. **Free Shipping Progress Bar:** Smooth width transition (`transition: width 400ms cubic-bezier(0.16, 1, 0.3, 1)`).

### 2.4 Accessibility: Reduced Motion Support
When `prefers-reduced-motion: reduce` is detected via system settings:
- All transform and sliding animations are replaced by instantaneous opacity fades (50ms).
- Infinite looping tickers are paused.

