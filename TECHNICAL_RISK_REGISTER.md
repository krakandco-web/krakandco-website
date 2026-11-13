# KRAK & CO. — TECHNICAL RISK REGISTER (PHASE 01)

**Risk Assessment Date:** November 2026  
**Status:** Monitored Baseline  
**Scope:** Storefront Architecture, UX Performance, and Engineering Reliability

---

## 1. Risk Severity Matrix

| Impact \ Likelihood | Low | Medium | High |
|---|---|---|---|
| **Critical** | Low-Medium Risk | High Risk | **CRITICAL RISK** |
| **High** | Low Risk | Medium Risk | **HIGH RISK** |
| **Medium** | Low Risk | Medium Risk | Medium Risk |
| **Low** | Negligible | Low Risk | Low Risk |

---

## 2. Risk Register

### 2.1 Critical-Priority Risks

#### RISK-01: State Desynchronization Between SSR and Client Cart Storage
- **Severity:** Critical
- **Likelihood:** Medium
- **Description:** Next.js Server-Side Rendering (SSR) may produce hydration mismatch errors (`Text content did not match server-rendered HTML`) when reading initial cart or wishlist state from client-side `localStorage`.
- **Evidence:** Common failure pattern in React 18/19 Next.js App Router applications when direct `localStorage` access occurs during initial render.
- **Recommended Solution:** Implement a robust hydration guard (`useIsMounted()` hook or lazy initialization inside `useEffect`) in `CartContext` and `WishlistContext`. Render a deterministic server-rendered baseline skeleton or counter before mounting the persisted client state.

---

### 2.2 High-Priority Risks

#### RISK-02: Cumulative Layout Shift (CLS) from Retro Display Web Fonts
- **Severity:** High
- **Likelihood:** Medium
- **Description:** Loading custom fonts like *Playfair Display* and *Poppins* asynchronously can cause noticeable text reflow, FOIT (Flash of Invisible Text), and FOIC (Flash of Incorrect Color/Font), degrading Core Web Vitals and UX.
- **Evidence:** Heavily styled retro headings in hero and category arches with distinct character metrics will shift surrounding content if fallback fonts differ in size.
- **Recommended Solution:** Utilize Next.js native font optimization (`next/font/google`) with `display: 'swap'` and automated font preloading. Define variable font configurations with accurate font-display fallbacks.

#### RISK-03: Responsive Performance Bottlenecks with High-Resolution Snack Imagery
- **Severity:** High
- **Likelihood:** Medium
- **Description:** Crisp product photography and detailed snack textures (fried banana chips, murukku coils, fine sev) can severely inflate initial bundle payload and mobile memory usage if uncompressed or improperly sized.
- **Evidence:** The reference artboard showcases rich photography across category cards, product grids, hero banners, and cart thumbnails.
- **Recommended Solution:** Enforce Next.js `<Image />` component with optimized `sizes` attributes, WebP/AVIF format conversions, prioritized loading for above-the-fold hero assets, and lazy loading for lower-funnel grids.

---

### 2.3 Medium-Priority Risks

#### RISK-04: Color Contrast Accessibility Failures on Vibrant Accents
- **Severity:** Medium
- **Likelihood:** Medium
- **Description:** Using mustard yellow (`#EAA221`) or warm sand (`#F2DFBA`) as text backgrounds or button text on light cream can fail WCAG 2.1 AA 4.5:1 contrast requirements.
- **Evidence:** Indian vintage palettes frequently utilize vibrant yellows and tans which require careful foreground/background pairing.
- **Recommended Solution:** Mandate that mustard yellow is paired with deep maroon (`#6E1313`) or charcoal slate (`#1B2A3A`) for text, and deep maroon is paired with warm cream (`#FFF8EE`). Run automated contrast verification during component styling.

#### RISK-05: Product Variant Complexity & Cart Integrity
- **Severity:** Medium
- **Likelihood:** Low
- **Description:** Snack items have multiple pack size options (100g, 250g, 500g, Combo) with differing prices, SKU identifiers, and stock limits. Poor data modeling can cause price calculation errors or incorrect cart line-item aggregation.
- **Evidence:** The reference artboard shows pack selectors (`100g ₹69`, `250g ₹149`, `500g ₹279`) directly on the PDP and in cart items.
- **Recommended Solution:** Define strict TypeScript interfaces where a Cart Item uniquely identifies both `productId` and `selectedVariantId` (e.g. `kerala-banana-chips-250g`), ensuring deterministic line-item calculations.

---

### 2.4 Low-Priority Risks

#### RISK-06: Mobile Bottom Navigation Occlusion
- **Severity:** Low
- **Likelihood:** Medium
- **Description:** A fixed bottom navigation dock on mobile devices can overlap footer content, floating action buttons, or checkout actions if safe-area padding (`env(safe-area-inset-bottom)`) and spacer margins are missing.
- **Evidence:** Viewports on modern iOS Safari and Android Chrome feature native home indicator gestures.
- **Recommended Solution:** Add safe-area padding utilities and a global bottom spacer (`pb-20 md:pb-0`) to all page wrappers when the mobile dock is visible.

