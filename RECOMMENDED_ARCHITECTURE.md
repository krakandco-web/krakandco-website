# KRAK & CO. — RECOMMENDED TECHNICAL ARCHITECTURE (PHASE 01)

**Architectural Specification**  
**Framework Selection:** Next.js (App Router) + TypeScript + Tailwind CSS  
**Target Environment:** Node.js 18+ (Verified with Node v26.5.0)  
**Date:** November 2026

---

## 1. Architectural Foundations

### 1.1 Core Stack Justification
Following the project requirements and explicit framework directive, the recommended architecture is built on:
- **Framework:** **Next.js 14/15 (App Router)**
  - Server-Side Rendering (SSR) & Static Site Generation (SSG) for fast indexing and high-converting performance.
  - Built-in image optimization (`next/image`) for snack photography.
  - Native font optimization (`next/font/google`) for zero-layout-shift vintage typography.
- **Language:** **TypeScript 5.x** with `strict: true` for enterprise-grade type safety across product variants, cart state, and checkout flows.
- **Styling:** **Tailwind CSS 3.4+** paired with custom design tokens representing the approved KRAK & CO. color palette, retro borders, drop shadows, and typography.
- **Iconography:** **Lucide React** for lightweight, consistent, accessible iconography.

---

## 2. Directory & Folder Structure

```
krakandco/
├── public/
│   ├── images/
│   │   ├── products/        # High-res snack images (banana chips, mixture, etc.)
│   │   ├── categories/      # Arch category visual assets
│   │   ├── banners/         # Regional story banners (South & North Indian)
│   │   ├── branding/        # Logo, retro illustrated characters, stamps
│   │   └── badges/          # Trust badges (authentic, vegetarian, fresh)
│   └── favicon.ico
├── src/
│   ├── app/                 # Next.js App Router root
│   │   ├── layout.tsx       # Root layout (Fonts, Providers, Header, Footer, Bottom Nav)
│   │   ├── page.tsx         # Storefront Homepage
│   │   ├── shop/            # Catalog listing (/shop)
│   │   │   └── page.tsx
│   │   ├── category/        # Dynamic category routes (/category/[slug])
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── product/         # Dynamic product detail (/product/[slug])
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── cart/            # Dedicated cart overview (/cart)
│   │   │   └── page.tsx
│   │   ├── checkout/        # 3-step checkout (/checkout)
│   │   │   └── page.tsx
│   │   ├── order-success/   # Order confirmation & receipt (/order-success/[id])
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── track/           # Live shipment tracking timeline (/track)
│   │   │   └── page.tsx
│   │   ├── account/         # Customer account hub (/account)
│   │   │   └── page.tsx
│   │   ├── wishlist/        # Saved items (/wishlist)
│   │   │   └── page.tsx
│   │   ├── about/           # Brand story & heritage (/about)
│   │   │   └── page.tsx
│   │   ├── faqs/            # FAQs accordion (/faqs)
│   │   │   └── page.tsx
│   │   ├── policies/        # Legal & shipping policies (/policies/[slug])
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── not-found.tsx    # Branded 404 page
│   │   └── globals.css      # Design tokens, vintage utilities, font classes
│   ├── components/
│   │   ├── ui/              # Reusable atomic primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Drawer.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Stepper.tsx
│   │   │   └── RatingStars.tsx
│   │   ├── layout/          # Structural layout components
│   │   │   ├── AnnouncementBar.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── MobileBottomNav.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Breadcrumbs.tsx
│   │   ├── home/            # Homepage feature modules
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── ValuePropsStrip.tsx
│   │   │   ├── CategoryArches.tsx
│   │   │   ├── RegionalSplitBanners.tsx
│   │   │   ├── BestsellersGrid.tsx
│   │   │   ├── GiftBoxesShowcase.tsx
│   │   │   └── SocialProofReviews.tsx
│   │   ├── product/         # Product discovery & details
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── PackSizeSelector.tsx
│   │   │   ├── ProductAttributes.tsx
│   │   │   └── ProductFilters.tsx
│   │   ├── cart/            # Cart & checkout components
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── CartItemRow.tsx
│   │   │   ├── FreeShippingMeter.tsx
│   │   │   └── OrderSummaryCard.tsx
│   │   └── search/          # Search overlay
│   │       ├── SearchModal.tsx
│   │       └── SearchResultsList.tsx
│   ├── context/             # React Context global state
│   │   ├── CartContext.tsx
│   │   ├── WishlistContext.tsx
│   │   └── UIContext.tsx     # Modals, drawer controls, mobile menu
│   ├── data/                # Typed mock datasets (API-ready)
│   │   ├── products.ts      # South & North Indian snack catalogs
│   │   ├── categories.ts    # Categories with arch images & metadata
│   │   ├── reviews.ts       # Verified reviews and distribution data
│   │   ├── policies.ts      # Shipping, returns, privacy policy contents
│   │   └── faqs.ts          # FAQ categories & Q&A content
│   ├── types/               # Domain TypeScript interfaces
│   │   ├── product.ts
│   │   ├── cart.ts
│   │   ├── order.ts
│   │   ├── review.ts
│   │   └── user.ts
│   ├── hooks/               # Custom React hooks
│   │   ├── useCart.ts
│   │   ├── useWishlist.ts
│   │   ├── useDebounce.ts
│   │   └── useIsMounted.ts
│   └── lib/                 # Utility functions
│       ├── utils.ts         # cn() class merger
│       ├── formatters.ts    # Currency (₹), weight formatting
│       └── constants.ts     # Free shipping threshold (₹499), delivery rates
├── tailwind.config.ts       # Design tokens (colors, fonts, radii)
├── tsconfig.json            # Strict TypeScript configuration
└── next.config.mjs          # Next.js optimization configuration
```

---

## 3. Design Token Architecture (Tailwind Integration)

```typescript
// tailwind.config.ts token mapping
export const themeColors = {
  maroon: {
    DEFAULT: '#7A1C1C',
    dark: '#581111',
    light: '#9E2A2A',
    surface: '#6E1313'
  },
  cream: {
    DEFAULT: '#FFF8EE',
    light: '#FFFFFF',
    dark: '#F5EBD7',
    parchment: '#FAF3E0'
  },
  mustard: {
    DEFAULT: '#EAA221',
    dark: '#C8830E',
    light: '#F5B84A'
  },
  forest: {
    DEFAULT: '#1E4D2B',
    dark: '#14361E',
    light: '#2E6E40'
  },
  sand: {
    DEFAULT: '#F2DFBA',
    dark: '#E2C798',
    light: '#FAF1DE'
  },
  charcoal: {
    DEFAULT: '#1B2A3A',
    muted: '#4A5568'
  }
};
```

---

## 4. State Management Strategy

1. **Lightweight & Persistent:** No heavyweight external libraries (e.g. Redux) needed for storefront scale.
2. **Context + LocalStorage:**
   - `CartContext`: Handles `addItem`, `removeItem`, `updateQuantity`, `clearCart`, computed `subtotal`, `itemsCount`, and `freeShippingThresholdRemaining`.
   - `WishlistContext`: Handles `toggleWishlist`, `isInWishlist`, and persistence.
   - `UIContext`: Controls global slide-over drawer states (`isCartOpen`, `isSearchOpen`, `isMobileNavOpen`).
3. **Hydration Protection:** State synchronization is guarded via `useIsMounted()` to prevent React SSR hydration mismatches.

---

## 5. Data & Service Layer Boundaries

- **Separation of Concerns:** Components must never contain hardcoded product details or business rules.
- **Typed Service Abstraction:** All mock data functions (`getProductById()`, `getProductsByCategory()`, `searchProducts()`) return strict TypeScript interfaces matching eventual REST/GraphQL endpoints.
- **API Replaceability:** Swapping mock data for a live headless backend (e.g., Shopify, Medusa, or custom Node/Python backend) requires updating only the files inside `src/data/` or `src/lib/api/` without altering UI components.

---

## 6. Testing & Quality Assurance Strategy

1. **Static Analysis:** TypeScript 5 strict mode + ESLint Next.js configuration.
2. **Component Isolation:** Modular, self-contained components with explicit prop contracts.
3. **Cross-Device Validation:** Continuous verification on standard mobile (375px), tablet (768px), and desktop (1440px) viewports.
4. **Accessibility Auditing:** Semantic HTML, ARIA modal dialog traps, and color contrast verification.

