# KRAK & CO. — Component Preview Environment Guide

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 08 — Complete Reusable UI Component System  
**Path:** `/dev/component-preview`  

---

## 1. Accessing the Component Preview

The KRAK & CO. component library includes an interactive development workbench designed for testing UI primitives, form controls, product cards, overlays, and feedback components before page assembly.

### Prerequisites:
Ensure the Next.js development server is running:
```bash
npm run dev
```

### URL:
Open your browser and navigate to:
```text
http://localhost:3000/dev/component-preview
```

---

## 2. Interactive Sections Available in Preview

1. **Button & Icon Button Primitives:**
   - Test variants (`primary`, `secondary`, `outline`, `ghost`, `destructive`, `text`).
   - Test sizes (`xs`, `sm`, `md`, `lg`).
   - Test dynamic states: `isLoading`, `disabled`, and leading/trailing icons.
2. **Badge System:**
   - Inspect brand tags, discount badges, inventory warnings, and regional labels.
3. **Typography Primitives:**
   - View `DisplayHeading`, `PageHeading`, `SectionHeadingText`, `Text`, and `Caption`.
4. **Form Components & Validation:**
   - Interactive `Input` with clear button (`✕`) and prefix search icon.
   - Dropdown `Select` with chevron indicator.
   - Interactive `Checkbox` with description copy.
   - Card-styled `RadioGroup` for payment method selection.
   - `Textarea` with live character counter.
   - Validation messages for error, warning, success, and info.
5. **Product Components:**
   - Live `ProductCard` using real mock fixture data (Kerala Banana Chips, Madurai Mixture).
   - Wishlist toggle (heart icon fill/stroke).
   - Quick Add to Cart button triggering live toast notifications.
   - Interactive Pack Size selector (`100g`, `250g`, `500g`) linked to live price calculation.
   - Quantity stepper (`- [Qty] +`) with boundary enforcement.
6. **Collection & Promotional Cards:**
   - Circular category cards with matchbox borders.
   - Regional cards: South Indian Classics (forest green) and North Indian Favourites (maroon).
   - High-contrast promotional hamper card with festive CTA.
7. **Interactive Overlays:**
   - Triggerable `Modal` dialog with Escape key and backdrop dismissal.
   - Triggerable `Drawer` slide-over with scroll lock.
   - Interactive `Accordion` with smooth disclosure and chevron flip.
   - Interactive `Tabs` with keyboard arrow support.
   - Hover and focus `Tooltip`.
8. **Feedback & States:**
   - Toast notification triggers for all 4 types (success, error, warning, info).
   - Loading spinners and animated shimmer skeletons.
   - Empty state, error state with retry, and success confirmation cards.
9. **Common Content Primitives:**
   - Cultural section headings with diamond starbursts.
   - Breadcrumb trail with chevron dividers.
   - Multi-page pagination controller.
   - Price display with tax disclaimers.

---

## 3. Production Protection

The preview page is dedicated for development inspection. It is unlinked from customer-facing navigation menus and can be gated or removed via environment flags during deployment.
