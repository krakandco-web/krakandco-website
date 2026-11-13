# KRAK & CO. — Reusable Component Library Inventory

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 08 — Complete Reusable UI Component System  
**Framework:** Next.js 14.2 App Router, TypeScript 5.6.3, Tailwind CSS 3.4  
**Date:** November 2026  

---

## 1. Inventory Summary

Total components implemented: **34 production components** organized across 6 modular directories under `src/components/`:

| Category | Component Count | Rendering Strategy | Primary Locations |
|---|---|---|---|
| **Core UI Primitives** | 12 | RSC / RCC (Selective) | `src/components/ui/` |
| **Form Components** | 7 | RSC / RCC (Controlled) | `src/components/forms/` |
| **Product Components** | 7 | RSC / RCC (Interactivity) | `src/components/product/` |
| **Collection Components** | 3 | Server Components | `src/components/collection/` |
| **Feedback Components** | 4 | RCC (Context / Alerts) | `src/components/feedback/` |
| **Shared Content Primitives** | 5 | Server Components | `src/components/common/` |
| **Development Workbench** | 1 | Client Component | `src/app/dev/component-preview/` |

---

## 2. Complete Component Manifest

### 2.1 Core UI Primitives (`src/components/ui/`)

| Component | File Path | Rendering Mode | Description & Variants |
|---|---|---|---|
| `Button` | `src/components/ui/Button.tsx` | RSC / RCC | Primary, secondary, outline, ghost, destructive, text. Sizes: `xs`, `sm`, `md`, `lg`. Supports loading spinner, icons, fullWidth. |
| `IconButton` | `src/components/ui/IconButton.tsx` | RSC / RCC | Square icon action buttons. Mandatory accessible `aria-label`. Sizes: `xs`, `sm`, `md`, `lg`. |
| `Badge` | `src/components/ui/Badge.tsx` | RSC | Cultural tag badge. Variants: `default`, `brand`, `secondary`, `success`, `warning`, `error`, `discount`, `new`, `out-of-stock`. |
| `Separator` | `src/components/ui/Separator.tsx` | RSC | Horizontal and vertical dividers. Variants: `solid`, `dashed`, `vintage`. |
| `DisplayHeading` | `src/components/ui/Typography.tsx` | RSC | Hero title component using Playfair Display, 4xl-6xl font size. |
| `PageHeading` | `src/components/ui/Typography.tsx` | RSC | Standard page header using Playfair Display, 2xl-4xl font size. |
| `SectionHeadingText` | `src/components/ui/Typography.tsx` | RSC | Section title using Playfair Display, xl-2xl font size. |
| `Text` | `src/components/ui/Typography.tsx` | RSC | Body paragraph with `sm`, `base`, `lg` sizes and semantic color tones. |
| `Caption` | `src/components/ui/Typography.tsx` | RSC | Small helper and disclaimer copy in Poppins font. |
| `Spinner` | `src/components/ui/Spinner.tsx` | RSC | Accessible SVG circular loading indicator with reduced-motion support. |
| `Skeleton` | `src/components/ui/Skeleton.tsx` | RSC | Pulse shimmer loaders: `rect`, `circle`, `text`, and full `product-card`. |
| `Modal` | `src/components/ui/Modal.tsx` | Client Component | Accessible dialog overlay with backdrop blur, Esc listener, and body scroll lock. |
| `Drawer` | `src/components/ui/Drawer.tsx` | Client Component | Slide-over drawer with left/right placement, Esc dismissal, and sticky footer. |
| `Accordion` | `src/components/ui/Accordion.tsx` | Client Component | Expandable FAQ disclosures with smooth animated chevron and single/multi expansion. |
| `Tabs` | `src/components/ui/Tabs.tsx` | Client Component | Accessible tabbed panels with keyboard arrow navigation and underline/pills variants. |
| `Tooltip` | `src/components/ui/Tooltip.tsx` | Client Component | Keyboard-focused and mouse-hover tooltip bubble with Esc dismiss. |

### 2.2 Form Components (`src/components/forms/`)

| Component | File Path | Rendering Mode | Description & Capabilities |
|---|---|---|---|
| `Input` | `src/components/forms/Input.tsx` | RSC / RCC | Styled text/email/password/tel input with prefix icons, suffix icons, and clear button. |
| `Select` | `src/components/forms/Select.tsx` | RSC / RCC | Custom styled dropdown with chevron icon and native accessibility support. |
| `Checkbox` | `src/components/forms/Checkbox.tsx` | RSC / RCC | Checkbox with custom brand check icon, description label, and indeterminate state. |
| `RadioGroup` | `src/components/forms/RadioGroup.tsx` | RSC / RCC | Accessible radiogroup with custom card-style selectors, descriptions, and badges. |
| `Textarea` | `src/components/forms/Textarea.tsx` | RSC / RCC | Multi-line textarea with character counter and resize controls. |
| `FormField` | `src/components/forms/FormField.tsx` | RSC | Layout wrapper providing label, asterisk required mark, helper text, and validation message. |
| `ValidationMessage`| `src/components/forms/ValidationMessage.tsx`| RSC | Semantic status message: `error`, `success`, `warning`, `info` with icons. |

### 2.3 Product Components (`src/components/product/`)

| Component | File Path | Rendering Mode | Description & Capabilities |
|---|---|---|---|
| `ProductImage` | `src/components/product/ProductImage.tsx` | RSC | Next.js image wrapper with fixed aspect ratios (`square`, `portrait`, `video`) and fallback. |
| `ProductPrice` | `src/components/product/ProductPrice.tsx` | RSC | Indian Rupee formatting (`₹`), compare-at strikethrough, and discount percentage badge. |
| `ProductRating` | `src/components/product/ProductRating.tsx` | RSC | Star rating with numeric value and verified review count. Renders only with real data. |
| `ProductBadge` | `src/components/product/ProductBadge.tsx` | RSC | Product status tags: `bestseller`, `new`, `festive`, `out-of-stock`, `discount`. |
| `QuantitySelector` | `src/components/product/QuantitySelector.tsx` | Client Component | Stepper with decrement/increment buttons, min/max bounds, and accessible number input. |
| `VariantSelector` | `src/components/product/VariantSelector.tsx` | Client Component | Pack size selector (`100g`, `250g`, `500g`) with instant price preview and active styling. |
| `ProductCard` | `src/components/product/ProductCard.tsx` | Client Component | High-conversion card matching approved visual reference with Wishlist toggle and Quick Add. |

### 2.4 Collection Components (`src/components/collection/`)

| Component | File Path | Rendering Mode | Description & Capabilities |
|---|---|---|---|
| `CategoryCard` | `src/components/collection/CategoryCard.tsx` | RSC | Circular image avatar card with matchbox-inspired border and category link. |
| `CollectionCard` | `src/components/collection/CollectionCard.tsx` | RSC | Regional hero card (South Indian Classics vs North Indian Favourites) with artwork and CTA. |
| `PromotionalCard` | `src/components/collection/PromotionalCard.tsx`| RSC | High-contrast festive hamper banner with Kolam background and gold CTA button. |

### 2.5 Feedback Components (`src/components/feedback/`)

| Component | File Path | Rendering Mode | Description & Capabilities |
|---|---|---|---|
| `ToastProvider` & `useToast` | `src/components/feedback/Toast.tsx` | Client Component | Non-intrusive floating toast notifications with auto-dismiss timers and accessible live region. |
| `EmptyState` | `src/components/feedback/EmptyState.tsx` | RSC | Friendly zero-data screen with icon/illustration and primary/secondary CTAs. |
| `ErrorState` | `src/components/feedback/ErrorState.tsx` | RSC | Customer-facing error card with explanation, retry button, and browse fallback. |
| `SuccessState` | `src/components/feedback/SuccessState.tsx` | RSC | Positive action confirmation with checkmark icon and next-step links. |

### 2.6 Shared Content Primitives (`src/components/common/`)

| Component | File Path | Rendering Mode | Description & Capabilities |
|---|---|---|---|
| `Container` | `src/components/common/Container.tsx` | RSC | Standardized container with responsive paddings and `sm` to `xl` width constraints. |
| `SectionHeading` | `src/components/common/SectionHeading.tsx` | RSC | Cultural section header with diamond starburst eyebrow, title, and action link. |
| `Breadcrumb` | `src/components/common/Breadcrumb.tsx` | RSC | Accessible `<nav>` breadcrumb hierarchy with chevron dividers. |
| `Pagination` | `src/components/common/Pagination.tsx` | RSC / RCC | Accessible page navigation with ellipsis, previous/next controls, and URL generator support. |
| `PriceDisplay` | `src/components/common/PriceDisplay.tsx` | RSC | Standalone price label with tax disclosure and discount calculation. |
