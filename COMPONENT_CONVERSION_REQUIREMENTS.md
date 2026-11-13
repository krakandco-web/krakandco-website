# KRAK & CO. — COMPONENT CONVERSION REQUIREMENTS (PHASE 03)

**Document:** Behavioral Component Specifications, State Rules & Micro-Interactions  
**Author:** Lead UI Engineer & Conversion Systems Architect  
**Date:** November 2026

---

## 1. Product Card Component (`ProductCard.tsx`)

The Product Card is the primary commercial workhorse of the storefront. It must communicate product appeal, value, and social proof in under 1 second of scanning.

### 1.1 Structural Anatomy & Layout Hierarchy
```
┌───────────────────────────────────────┐
│ [BESTSELLER]              [❤️ Wishlist]│
│                                       │
│          [ SNACK PHOTO 1:1 ]          │
│                                       │
│ Kerala Banana Chips                   │
│ ₹149   250g                           │
│ ★ 4.8 (2,356)                         │
│                                       │
│ [ ADD TO CART (Maroon) ]              │
└───────────────────────────────────────┘
```

1. **Aspect Ratio:** Strictly `1:1` square container with warm biscuit cream or white backdrop and subtle retro border (`border border-sand-dark/40`).
2. **Top Badge Layer:** 
   - Left: Dynamic pill badge (`Bestseller` in red, `New` in mustard, or `10% Off` in green).
   - Right: Wishlist toggle icon button (`40×40px` tap target).
3. **Typography & Pricing Layer:**
   - Product Title: Poppins Semi-Bold 15px, 1-line truncation with ellipsis if title exceeds boundary.
   - Price & Default Pack Weight: Bold `₹149` (Maroon/Charcoal) paired with subtle grey weight indicator (`250g`).
   - Rating Star Pill: `★ 4.8` with review count in parentheses `(2.3k)`.
4. **Action Button Layer:** Solid deep maroon `Add to Cart` button.

### 1.2 Interactive States
- **Default:** Clean elevation (`shadow-sm`).
- **Hover (Desktop):** Slight card elevation (`shadow-md`), subtle photo zoom (`scale-105` over 250ms), and button background shifts to darker maroon (`#581111`).
- **Quick-Add Click:** 
  1. Button transitions to loading spinner state (300ms).
  2. Button flashes green with checkmark (`Added! ✓`) for 600ms.
  3. Cart Drawer automatically slides open with the added item highlighted.
  4. Global header cart badge increments immediately.
- **Out of Stock State:**
  - Image opacity reduced to 60%.
  - `Sold Out` badge rendered over image.
  - "Add to Cart" replaced by disabled secondary button: `Sold Out`.
- **Skeleton Loading State:** Shimmering animated rectangular boxes matching card proportions.

---

## 2. Call-to-Action (CTA) Button Hierarchy

Every screen maintains a strict, non-competing CTA hierarchy:

| Hierarchy Level | Style & Color Tokens | Usage & Purpose | Example Labels |
|---|---|---|---|
| **Primary CTA** | Solid Deep Maroon (`#7A1C1C`), white text, bold font, pill or rounded-md corners, 48px height. | The sole primary conversion action at any decision point. | `Add to Cart`, `Proceed to Checkout →`, `Pay ₹476 Securely` |
| **Secondary CTA** | Outlined or Warm Mustard Yellow (`#EAA221`), bold charcoal text, 44px height. | Alternative exploration or secondary path. | `Explore South Indian →`, `Explore Collections`, `View Details` |
| **Tertiary CTA** | Ghost button or text link with arrow, underline on hover. | Low-friction utility and micro-actions. | `View Full Cart`, `Clear All Filters`, `Write a Review` |

### 2.1 Button State Matrix
- **Hover:** Darkens by 10% with smooth 150ms transition.
- **Active / Pressed:** `scale-98` tactile micro-compression.
- **Focus:** High-contrast double focus ring (`ring-2 ring-maroon ring-offset-2`) for keyboard accessibility.
- **Disabled:** Opacity 50%, `cursor-not-allowed`, zero pointer events.
- **Loading:** Disables clicks, renders smooth spinning spinner, retains exact button width to prevent layout shift.

---

## 3. Cart Drawer Behavioral Specifications

1. **Slide-in Animation:** 250ms cubic-bezier transition from right edge; page content behind gets `backdrop-blur-sm` and 40% black overlay.
2. **Keyboard Trapping:** When drawer opens, focus is trapped inside the drawer; pressing `ESC` dismisses the drawer and returns focus to the trigger.
3. **Body Scroll Lock:** Background document scroll is locked (`overflow: hidden` on `<body>`).
4. **Free Shipping Meter Progress:**
   - Real-time animated CSS width transition on spend change.
   - Gold celebratory sparkle animation when the ₹499 threshold is crossed.
5. **Quantity Stepper Interaction:**
   - Instant optimistic UI update (number updates immediately; cart recalculates without blocking).
   - Decrementing from `1` triggers a confirmation trash prompt or item removal.

---

## 4. Search Discovery Overlay Behavioral Specifications

1. **Hotkey Binding:** Universal listener for `Cmd+K` (macOS) and `Ctrl+K` (Windows/Linux) to open.
2. **Auto-focus:** Input automatically focused upon opening.
3. **Debounced Query Execution:** Search input debounced at 200ms to eliminate redundant search calculations.
4. **Keyboard Navigation:** Arrow keys (`↓` and `↑`) allow navigating between suggested products; `Enter` opens the highlighted product or submits full search.
5. **No Results Graceful Handling:** Displays friendly retro illustration with popular search chips: `[Kerala Banana Chips]`, `[Madurai Mixture]`, `[Aloo Bhujia]`.

---

## 5. Form & Checkout Behavioral Specifications

1. **Input Fields:** Floating labels or permanent high-contrast labels; clear red asterisk for mandatory fields.
2. **PIN Code Auto-fill:** Typing a 6-digit Indian PIN code automatically queries city/state and auto-populates `City` and `State` fields.
3. **Mobile Number Formatting:** Pre-appended with `+91` flag icon; restricts input to 10 digits.
4. **Inline Validation:** Validates upon `onBlur` (never annoys users while actively typing); clear inline error messages rendered in red with exclamation icon.
5. **Sticky Mobile Action:** On mobile checkout, the "Pay ₹[Total]" button remains fixed at the bottom above the thumb zone.

