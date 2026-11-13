# KRAK & CO. — Next.js Route Implementation & Sitemap Mapping

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 07 — Next.js Architecture, Folder Structure, Routing & Data Layer  
**Framework:** Next.js 14.2 App Router  
**Status:** All 29 routes fully registered, typed, and operational  

---

## 1. Route Group Overview

Next.js App Router route groups organize our codebase into three logical zones without altering browser URLs:

| Route Group | Path Prefix | Purpose | Layout Characteristics |
|---|---|---|---|
| `(storefront)` | `/` | Core commerce catalog, product discovery, shopping cart, and checkout | Features primary announcement bar, brand logo, mega-menu links, search bar, and cart badge |
| `(account)` | `/account`, `/wishlist` | Customer authentication, self-service dashboard, saved addresses, order history | Lightweight account header with profile links, authentication state guard |
| `(content)` | `/about`, `/reviews`, `/policies` | Brand heritage, trust proof, customer support, and legal compliance | Editorial-focused layout with reading column and legal sub-footer links |

---

## 2. Complete Storefront Route Catalog

| URL Path | File System Path | Rendering Strategy | Description / Intent |
|---|---|---|---|
| `/` | `src/app/(storefront)/page.tsx` | Static (`○`) | Homepage: Hero, Category Badges, Regional Showcases, Bestsellers, Gift Boxes |
| `/shop` | `src/app/(storefront)/shop/page.tsx` | Static (`○`) | Master Catalog: Complete list of all authentic snacks with filter chips |
| `/collections/[collectionSlug]` | `src/app/(storefront)/collections/[collectionSlug]/page.tsx` | Dynamic (`ƒ`) | Regional / Category collections (`south-indian`, `north-indian`, `mixtures`, etc.) |
| `/products/[productSlug]` | `src/app/(storefront)/products/[productSlug]/page.tsx` | Dynamic (`ƒ`) | Product Detail Page: Pricing, weight variants, spice meter, regional story |
| `/search` | `src/app/(storefront)/search/page.tsx` | Dynamic (`ƒ`) | Full-text search and keyword suggestion results |
| `/gift-boxes` | `src/app/(storefront)/gift-boxes/page.tsx` | Static (`○`) | Festive gift boxes and corporate hampers |
| `/combos` | `src/app/(storefront)/combos/page.tsx` | Static (`○`) | Curated value snack boxes and regional trial combos |
| `/cart` | `src/app/(storefront)/cart/page.tsx` | Static (`○`) | Dedicated cart page and drawer fallback |
| `/checkout` | `src/app/(storefront)/checkout/page.tsx` | Static (`○`) | Single-page streamlined checkout flow |
| `/order-confirmation` | `src/app/(storefront)/order-confirmation/page.tsx` | Static (`○`) | Post-purchase confirmation, order ID, and dispatch ETA |
| `/track-order` | `src/app/(storefront)/track-order/page.tsx` | Static (`○`) | Multi-carrier live package tracker |
| `/account` | `src/app/(account)/account/page.tsx` | Static (`○`) | Account dashboard: Quick stats, recent orders, addresses |
| `/account/login` | `src/app/(account)/account/login/page.tsx` | Static (`○`) | Customer sign in (Phone OTP & Password) |
| `/account/register` | `src/app/(account)/account/register/page.tsx` | Static (`○`) | New user account creation & welcome reward |
| `/account/forgot-password` | `src/app/(account)/account/forgot-password/page.tsx` | Static (`○`) | Password recovery via OTP/email |
| `/account/profile` | `src/app/(account)/account/profile/page.tsx` | Static (`○`) | Profile information, phone verification, preferences |
| `/account/addresses` | `src/app/(account)/account/addresses/page.tsx` | Static (`○`) | Address book with PIN code auto-fill |
| `/account/orders` | `src/app/(account)/account/orders/page.tsx` | Static (`○`) | Order history with 1-click reorder |
| `/account/orders/[orderId]` | `src/app/(account)/account/orders/[orderId]/page.tsx` | Dynamic (`ƒ`) | Detailed order breakdown, tax invoice, and item timeline |
| `/wishlist` | `src/app/(account)/wishlist/page.tsx` | Static (`○`) | Saved snacks and one-click bulk transfer to cart |
| `/about` | `src/app/(content)/about/page.tsx` | Static (`○`) | Brand story, artisanal recipes, founder message |
| `/reviews` | `src/app/(content)/reviews/page.tsx` | Static (`○`) | 25,000+ verified customer reviews & photo gallery |
| `/contact` | `src/app/(content)/contact/page.tsx` | Static (`○`) | Customer support, WhatsApp hotline, corporate bulk inquiry |
| `/faq` | `src/app/(content)/faq/page.tsx` | Static (`○`) | Categorized FAQs (Shelf life, Delivery, Ingredients) |
| `/shipping-policy` | `src/app/(content)/shipping-policy/page.tsx` | Static (`○`) | Shipping SLAs, metro delivery, free shipping criteria |
| `/returns-policy` | `src/app/(content)/returns-policy/page.tsx` | Static (`○`) | 100% Taste & Freshness guarantee |
| `/cancellation-policy` | `src/app/(content)/cancellation-policy/page.tsx` | Static (`○`) | Order cancellation rules prior to dispatch |
| `/privacy-policy` | `src/app/(content)/privacy-policy/page.tsx` | Static (`○`) | Data protection, DPDP act, cookie policies |
| `/terms` | `src/app/(content)/terms/page.tsx` | Static (`○`) | Terms of service and conditions of sale |

---

## 3. Dynamic Route Parameter Handling

Dynamic routes in Next.js 14 use typed params:

```typescript
// Example: src/app/(storefront)/products/[productSlug]/page.tsx
interface ProductPageProps {
  params: {
    productSlug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await productService.getBySlug(params.productSlug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — KRAK & CO.`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await productService.getBySlug(params.productSlug);
  if (!product) {
    notFound(); // Triggers Next.js not-found.tsx boundary
  }
  // Render PDP
}
```

This guarantees seamless 404 handling without unhandled exceptions or flash of empty content.
