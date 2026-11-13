# KRAK & CO. — Server and Client Component Boundary Architecture

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 07 — Next.js Architecture, Folder Structure, Routing & Data Layer  
**Framework:** Next.js 14.2 App Router  

---

## 1. Architectural Strategy

In Next.js App Router, components are **Server Components by default**. This architecture maximizes initial page load speeds, minimizes client JavaScript payload, enables streaming SSR, and ensures search engine crawlers index complete, fully populated HTML.

Client Components (`"use client"`) are used deliberately and pushed down to the leaves of the component tree.

```text
[Page (Server Component)]
  ├── Fetches Data via Service (No Client JS)
  ├── Generates Static / Dynamic HTML
  └── Passes Props to Interactive Leaves
        ├── [ProductWeightSelector ("use client")]
        ├── [AddToCartButton ("use client")]
        └── [CartSlideOverDrawer ("use client")]
```

---

## 2. Component Responsibility Matrix

| Component Type | Rendering Mode | Rationale & Responsibilities |
|---|---|---|
| **Root Layouts (`layout.tsx`)** | Server Component | Emits HTML `<head>`, Google font classes, meta tags, and root container without client bundle overhead. |
| **Route Group Layouts** | Server Component | Storefront header layout, account layout, policy sub-footer layout. |
| **Page Route Handlers (`page.tsx`)** | Server Component | Direct asynchronous service calls, SEO metadata generation, `notFound()` guards. |
| **Catalog Grids & Product Cards** | Server Component | Renders product title, image, price, rating stars, and dietary badges with 0kB JavaScript. |
| **Weight Variant Selector** | Client Component | User selection state for pack size (`100g`, `250g`, `500g`); dynamically updates displayed price and SKU. |
| **Add to Cart & Quantity Stepper** | Client Component | Updates client cart context / local storage, triggers slide-over drawer animation. |
| **Cart Drawer / Slide-Over** | Client Component | State management for drawer open/close, item quantity updates, coupon input, checkout redirect. |
| **Live Search Input & Suggestions** | Client Component | Debounced search queries, live dropdown rendering, keyboard arrow navigation. |
| **Filter & Sort Drawer (Mobile)** | Client Component | Mobile drawer sheet toggle, price slider, and active filter chip toggling. |
| **Checkout Form & Payment Tabs** | Client Component | Dynamic input validation (PIN code, phone number), payment mode selection (UPI/Card/COD). |

---

## 3. Boundary Rules & Guidelines

1. **Never Make a Page `"use client"` Unless Inevitable:** All `page.tsx` files should remain Server Components. If interactivity is required, wrap the interactive subsection in a client component and pass server-fetched data as serializable props.
2. **Serializable Props Only:** Data passed across the Server-to-Client boundary must be JSON-serializable (plain objects, arrays, strings, numbers, booleans). No class instances or functions with closures.
3. **Optimistic UI Updates:** Client leaves handling cart mutations should provide immediate visual feedback (e.g. badge incrementing) before state reconciliation.
4. **Third-Party Providers:** Any context providers (e.g. CartProvider, AuthProvider) must be isolated in a dedicated client wrapper:
   ```typescript
   // src/components/providers/ClientProviders.tsx
   "use client";
   export function ClientProviders({ children }: { children: React.ReactNode }) {
     return <CartProvider>{children}</CartProvider>;
   }
   ```
