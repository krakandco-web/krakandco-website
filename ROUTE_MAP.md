# KRAK & CO. — ROUTE MAP & URL SPECIFICATION (PHASE 02)

**Document:** Storefront Routing, Access Rules & SEO Indexing Strategy  
**Framework Target:** Next.js App Router  
**Author:** Lead Frontend Architect & Systems Engineer  
**Date:** November 2026

---

## 1. Routing Strategy & Principles

The KRAK & CO. storefront URL hierarchy follows five core design principles:
1. **Semantic & Human-Readable:** Clean path segments reflecting content taxonomy (`/collections/south-indian`, `/products/kerala-banana-chips`).
2. **SEO Optimization:** Canonical URLs with descriptive keywords, avoiding redundant URL query parameters for indexed pages.
3. **Deterministic Fallbacks:** Immediate 404 boundaries for non-existent products, unknown categories, or invalid order references without application crashing.
4. **Strict Separation of Public vs. Private Routes:** Guest checkout enabled; account areas protected by authentication guards with automatic post-login redirects.
5. **No Ambiguous Matching:** Distinct prefixes (`/collections/` vs `/products/` vs `/account/`) preventing route collisions in Next.js App Router dynamic segments.

---

## 2. Complete Storefront Route Inventory

| Route Path | Component Target | Access Type | Auth Req. | Dynamic Params | SEO Indexing | Breadcrumb Path | Fallback / Error Handling |
|---|---|---|---|---|---|---|---|
| `/` | `src/app/page.tsx` | Public | None | None | `index, follow` | `Home` | Server Error Boundary |
| `/shop` | `src/app/shop/page.tsx` | Public | None | None | `index, follow` | `Home > Shop` | Empty Catalog State |
| `/collections/:slug` | `src/app/collections/[slug]/page.tsx` | Public | None | `:slug` (string) | `index, follow` | `Home > [Collection Name]` | `notFound()` if `:slug` not in taxonomy |
| `/products/:slug` | `src/app/products/[slug]/page.tsx` | Public | None | `:slug` (string) | `index, follow` | `Home > [Collection] > [Product Name]` | `notFound()` if `:slug` invalid |
| `/search` | `src/app/search/page.tsx` | Public | None | `?q=` (query) | `noindex, follow` | `Home > Search` | "No snacks found" + Bestseller recommendations |
| `/cart` | `src/app/cart/page.tsx` | Public | None | None | `noindex, nofollow` | `Home > Cart` | Empty Cart illustration + "Start Shopping" CTA |
| `/checkout` | `src/app/checkout/page.tsx` | Public/Guest | None (Guest allowed) | None | `noindex, nofollow` | Minimalist Header (No breadcrumb loop) | Redirect to `/cart` if cart is empty |
| `/order-confirmation/:orderId` | `src/app/order-confirmation/[orderId]/page.tsx` | Protected | Session / Order Token | `:orderId` (string) | `noindex, nofollow` | `Home > Order Confirmation` | Redirect to `/` if order token invalid |
| `/track-order` | `src/app/track-order/page.tsx` | Public | None | `?id=` (optional) | `index, follow` | `Home > Track Order` | "Order ID not found" with support contact |
| `/wishlist` | `src/app/wishlist/page.tsx` | Public | None (Synced locally) | None | `noindex, nofollow` | `Home > Wishlist` | Empty Wishlist state with "Discover Snacks" |
| `/account` | `src/app/account/page.tsx` | Private | Required | None | `noindex, nofollow` | `Home > Account` | Redirect to `/account/login?redirect=/account` |
| `/account/login` | `src/app/account/login/page.tsx` | Public | None | `?redirect=` | `noindex, nofollow` | `Home > Account > Login` | Redirect to `/account` if already authenticated |
| `/account/register` | `src/app/account/register/page.tsx` | Public | None | `?redirect=` | `noindex, nofollow` | `Home > Account > Register` | Redirect to `/account` if already authenticated |
| `/account/forgot-password` | `src/app/account/forgot-password/page.tsx` | Public | None | None | `noindex, nofollow` | `Home > Account > Reset Password` | Resend rate limit after 60 seconds |
| `/account/profile` | `src/app/account/profile/page.tsx` | Private | Required | None | `noindex, nofollow` | `Home > Account > Profile` | Redirect to login |
| `/account/addresses` | `src/app/account/addresses/page.tsx` | Private | Required | None | `noindex, nofollow` | `Home > Account > Addresses` | Redirect to login |
| `/account/orders` | `src/app/account/orders/page.tsx` | Private | Required | None | `noindex, nofollow` | `Home > Account > Orders` | Redirect to login; empty state if 0 orders |
| `/account/orders/:orderId` | `src/app/account/orders/[orderId]/page.tsx` | Private | Required | `:orderId` (string) | `noindex, nofollow` | `Home > Account > Orders > #:orderId` | `notFound()` if order not owned by user |
| `/about` | `src/app/about/page.tsx` | Public | None | None | `index, follow` | `Home > About Us` | Server Error Boundary |
| `/reviews` | `src/app/reviews/page.tsx` | Public | None | None | `index, follow` | `Home > Customer Reviews` | Server Error Boundary |
| `/contact` | `src/app/contact/page.tsx` | Public | None | None | `index, follow` | `Home > Contact Us` | Server Error Boundary |
| `/faq` | `src/app/faq/page.tsx` | Public | None | None | `index, follow` | `Home > FAQ` | Fallback search filter |
| `/shipping-policy` | `src/app/shipping-policy/page.tsx` | Public | None | None | `index, follow` | `Home > Shipping Policy` | Server Error Boundary |
| `/returns-policy` | `src/app/returns-policy/page.tsx` | Public | None | None | `index, follow` | `Home > Returns & Refunds` | Server Error Boundary |
| `/cancellation-policy` | `src/app/cancellation-policy/page.tsx` | Public | None | None | `index, follow` | `Home > Cancellation Policy` | Server Error Boundary |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | Public | None | None | `index, follow` | `Home > Privacy Policy` | Server Error Boundary |
| `/terms` | `src/app/terms/page.tsx` | Public | None | None | `index, follow` | `Home > Terms & Conditions` | Server Error Boundary |
| `not-found` | `src/app/not-found.tsx` | Public | None | None | `noindex, nofollow` | None | Brand 404 with bestseller recovery shortcuts |

---

## 3. Dynamic Route Parameter Validation & Error Handling

### 3.1 Invalid Product Slug Handling (`/products/:slug`)
When a user navigates to `/products/unknown-snack`:
1. Server component queries the product repository with `getProductBySlug(params.slug)`.
2. If `null` or `undefined`, the route immediately calls Next.js native `notFound()` function.
3. This triggers `src/app/not-found.tsx`, returning an HTTP 404 status code (preventing soft 404 penalties).
4. The user is presented with a branded error graphic ("Looks like someone munched this snack page!") and direct buttons to `/shop` and Bestsellers.

### 3.2 Unknown Collection Slug Handling (`/collections/:slug`)
Allowed collection slugs are strictly validated against the master taxonomy list:
- `south-indian`, `north-indian`, `chips-crisps`, `mixtures`, `savouries`, `sweets-mithai`, `pickles-sides`, `gift-boxes`, `combos`.
- Any unmapped slug triggers `notFound()`.

### 3.3 Out of Stock Product Handling
- Products with `inventoryCount: 0` remain accessible at their canonical URL (to preserve SEO equity and backlinks).
- The "Add to Cart" button is automatically swapped for a disabled `"Sold Out"` state with an optional `"Notify Me When Crunchy & Fresh"` notification trigger.

### 3.4 Missing or Tampered Order IDs (`/account/orders/:orderId` or `/order-confirmation/:orderId`)
- If the `:orderId` does not exist in the store repository or does not match the active session/guest verification token, access is denied.
- User is gracefully redirected to `/track-order` with an alert message: `"We couldn't locate order #[ID]. Please check your order ID or contact support."`

---

## 4. Canonical & Breadcrumb Generation Rules

Breadcrumbs are programmatically constructed using structured JSON-LD `BreadcrumbList` schema:

```typescript
// Breadcrumb Schema Output on /products/kerala-banana-chips
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krakandco.com" },
    { "@type": "ListItem", "position": 2, "name": "South Indian", "item": "https://krakandco.com/collections/south-indian" },
    { "@type": "ListItem", "position": 3, "name": "Kerala Banana Chips", "item": "https://krakandco.com/products/kerala-banana-chips" }
  ]
}
```

