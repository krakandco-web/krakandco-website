# KRAK & CO. — Error Handling & Validation Architecture

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 07 — Next.js Architecture, Folder Structure, Routing & Data Layer  
**Framework:** Next.js 14.2 App Router  

---

## 1. Error Boundary Hierarchy

KRAK & CO. enforces a tiered error-handling system that isolates failures without crashing the entire application:

```mermaid
graph TD
    App[Next.js App Root] --> RootError[Global error.tsx Boundary]
    RootError --> StorefrontGroup["(storefront) Route Group"]
    RootError --> AccountGroup["(account) Route Group"]
    RootError --> ContentGroup["(content) Route Group"]

    StorefrontGroup --> NotFound[Global not-found.tsx 404 Handler]
    StorefrontGroup --> DynamicPDP[products/[productSlug]/page.tsx]
    DynamicPDP -->|Invalid Slug| NotFound
```

### 1.1 Global Error Boundary (`src/app/error.tsx`)
- Client Component listening for uncaught React rendering and runtime exceptions.
- Displays a culturally styled error card with a retry trigger (`reset()`) and a link back to `/shop`.
- Prevents raw stack traces from leaking to end users in production.

### 1.2 Global 404 Not Found Boundary (`src/app/not-found.tsx`)
- Renders when a user visits a non-existent URL or when a dynamic route invokes `notFound()`.
- Styled with warm vintage brand aesthetics, a friendly headline ("Oops! That snack seems to be out of the tin"), and navigation buttons to Return Home or Browse Shop.

---

## 2. Dynamic Route Validation Pattern

Dynamic segments (`[collectionSlug]`, `[productSlug]`, `[orderId]`) strictly validate existence before rendering:

```typescript
// Pattern used across all dynamic pages
const item = await service.getBySlug(params.slug);

if (!item) {
  notFound(); // Immediately hands off to src/app/not-found.tsx
}
```

This prevents `undefined` property access errors and guarantees standard HTTP 404 status codes for search engine crawlers.

---

## 3. Form Validation Architecture (Phase 08 Preparation)

For forms (Checkout, Address Book, Customer Login, Contact Inquiries):
1. **Schema Validation:** Lightweight validation rules for Indian PIN codes (6 digits `^[1-9][0-9]{5}$`), 10-digit mobile numbers (`^[6-9]\d{9}$`), and valid email formats.
2. **Instant Field-Level Feedback:** Inline error microcopy displayed under each field in `brand-terracotta` without requiring full form submission.
3. **Safe Server Action Envelopes:** All form submissions return structured `APIResponse<T>` envelopes containing `{ success: boolean; data?: T; error?: { code: string; message: string } }`.
