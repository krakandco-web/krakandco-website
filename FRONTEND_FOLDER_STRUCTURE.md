# KRAK & CO. — Frontend Folder Structure & Repository Topology

**Project:** KRAK & CO. Complete Production E-Commerce Storefront  
**Phase:** 07 — Next.js Architecture, Folder Structure, Routing & Data Layer  
**Framework:** Next.js 14.2 (App Router), TypeScript (Strict Mode), Tailwind CSS 3.4  
**Date:** November 2026  

---

## 1. Directory Tree Overview

```text
krakandco/
├── .eslintrc.json                     # Strict ESLint configuration
├── .gitignore                         # Next.js and environment exclusions
├── .prettierrc                        # Standard code formatting rules
├── next.config.mjs                    # Next.js production configuration & image domains
├── package.json                       # Dependencies & script lifecycles
├── postcss.config.mjs                 # PostCSS Tailwind engine
├── tailwind.config.ts                 # Full KRAK & CO. design token palette & spacing
├── tsconfig.json                      # Strict TypeScript compiler options & `@/*` path mapping
│
├── public/                            # Static assets and brand media
│   └── assets/
│       ├── brand/                     # Logos, wordmarks, emblems, artboards
│       │   ├── identity/
│       │   │   ├── logo-krakandco-primary.svg
│       │   │   ├── emblem-krakandco-seal.svg
│       │   │   └── reference-artboard.jpg
│       │   └── badges/                # Authentic recipes, pan-India, tamper-proof
│       │       ├── badge-authentic-recipe.svg
│       │       ├── badge-premium-ingredients.svg
│       │       ├── badge-freshly-packed.svg
│       │       ├── badge-pan-india-delivery.svg
│       │       └── badge-secure-payments.svg
│       ├── illustrations/             # Regional motifs, storytelling, decorative
│       │   ├── south-indian/
│       │   │   ├── hero-eating-snack-retro.svg
│       │   │   └── illustration-gopuram.svg
│       │   ├── north-indian/
│       │   │   └── illustration-monument.svg
│       │   └── decorative/
│       │       ├── motif-kolam-corner.svg
│       │       ├── motif-sunburst-maroon.svg
│       │       └── border-matchbox-serrated.svg
│       └── products/                  # Snack category visual placeholders
│           ├── placeholder-banana-chips.svg
│           ├── placeholder-madurai-mixture.svg
│           ├── placeholder-aloo-bhujia.svg
│           ├── placeholder-ragi-murukku.svg
│           ├── placeholder-kaju-katli.svg
│           └── placeholder-gift-box.svg
│
└── src/
    ├── app/                           # Next.js App Router root & route groups
    │   ├── layout.tsx                 # Root layout with Google Fonts (Playfair & Poppins)
    │   ├── globals.css                # Base Tailwind imports & custom brand CSS
    │   ├── error.tsx                  # Global uncaught error boundary
    │   ├── not-found.tsx              # Universal 404 handler
    │   │
    │   ├── (storefront)/              # Route Group: Public shopping & checkout
    │   │   ├── layout.tsx             # Shared storefront header & announcement bar
    │   │   ├── page.tsx               # Homepage (Hero, Regional, Bestsellers, Combos)
    │   │   ├── shop/page.tsx          # Catalog Browse All
    │   │   ├── collections/
    │   │   │   └── [collectionSlug]/page.tsx  # Dynamic collection view
    │   │   ├── products/
    │   │   │   └── [productSlug]/page.tsx     # Dynamic PDP with service fetch & 404 guard
    │   │   ├── search/page.tsx        # Search results with query filtering
    │   │   ├── gift-boxes/page.tsx    # Curated festive and corporate gifting
    │   │   ├── combos/page.tsx        # Value bundles & regional discovery boxes
    │   │   ├── cart/page.tsx          # Cart page / slide-out drawer target
    │   │   ├── checkout/page.tsx      # Streamlined single-page checkout
    │   │   ├── order-confirmation/page.tsx # Post-purchase confirmation & order summary
    │   │   └── track-order/page.tsx   # Live shipment carrier tracker
    │   │
    │   ├── (account)/                 # Route Group: Customer account & self-service
    │   │   ├── layout.tsx             # Account navigation shell & session header
    │   │   ├── account/
    │   │   │   ├── page.tsx           # Account overview dashboard
    │   │   │   ├── login/page.tsx     # Customer sign-in (OTP / Password)
    │   │   │   ├── register/page.tsx  # New user onboarding
    │   │   │   ├── forgot-password/page.tsx # Password reset recovery
    │   │   │   ├── profile/page.tsx   # Profile editing & preferences
    │   │   │   ├── addresses/page.tsx # Address book & delivery pins
    │   │   │   └── orders/
    │   │   │       ├── page.tsx       # Order history & reorder triggers
    │   │   │       └── [orderId]/page.tsx # Order invoice & detailed timeline
    │   │   └── wishlist/page.tsx      # Saved favourites & move-to-cart
    │   │
    │   └── (content)/                 # Route Group: Brand storytelling & policy pages
    │       ├── layout.tsx             # Clean editorial shell with policy sub-footer
    │       ├── about/page.tsx         # Brand story, artisanal philosophy, sourcing
    │       ├── reviews/page.tsx       # Social proof wall & verified buyer ratings
    │       ├── contact/page.tsx       # Support channels, WhatsApp concierge, corporate bulk
    │       ├── faq/page.tsx           # Categorized customer FAQs
    │       ├── shipping-policy/page.tsx   # Delivery SLAs, carriers, free shipping criteria
    │       ├── returns-policy/page.tsx    # 100% Taste & Freshness guarantee
    │       ├── cancellation-policy/page.tsx # Cancellation windows & refund terms
    │       ├── privacy-policy/page.tsx    # DPDP act compliance & cookie rules
    │       └── terms/page.tsx         # Storefront service agreement & legal terms
    │
    ├── components/                    # Modular component library
    │   ├── ui/                        # Low-level primitives & route placeholders
    │   │   └── RoutePlaceholder.tsx   # Visual status card for active route verification
    │   ├── layout/                    # Header, Footer, MobileNav (Phase 08 target)
    │   ├── product/                   # ProductCard, PriceTag, WeightSelector
    │   ├── cart/                      # CartItem, Drawer, PromoBar
    │   └── common/                    # Badges, Ratings, RegionalTags
    │
    ├── types/                         # Strongly typed TypeScript domain models
    │   ├── product.ts                 # Product, Variant, Nutrition, RegionalOrigin
    │   ├── collection.ts              # Collection, RegionalClassification, VisualTheme
    │   ├── cart.ts                    # Cart, CartItem, DiscountCode, ShippingTier
    │   ├── customer.ts                # CustomerProfile, Address, AuthSession
    │   ├── order.ts                   # Order, OrderItem, TrackingTimeline, PaymentRecord
    │   ├── review.ts                  # CustomerReview, RatingSummary, AspectScore
    │   ├── search.ts                  # SearchQuery, SearchFilter, SearchResult
    │   ├── api.ts                     # APIResponse, PaginatedResponse, ServiceError
    │   └── index.ts                   # Unified type export barrel
    │
    ├── services/                      # Commerce service abstractions (swappable)
    │   ├── products/productService.ts # Product queries, filters, slugs, bestsellers
    │   ├── collections/collectionService.ts # Regional collection resolution
    │   ├── search/searchService.ts    # Instant full-text search & suggestions
    │   ├── cart/cartService.ts        # Cart calculation, shipping thresholds, tax
    │   ├── orders/orderService.ts     # Order lookups, status transitions, tracking
    │   └── index.ts                   # Service export barrel
    │
    ├── data/
    │   └── mock/                      # Isolated mock data fixtures
    │       ├── products.ts            # 12 handcrafted SKUs (South & North Indian)
    │       ├── collections.ts         # 7 curated regional and category collections
    │       ├── reviews.ts             # Verified customer testimonials
    │       └── index.ts               # Mock data export barrel
    │
    └── lib/
        └── utils.ts                   # `cn` clsx/tailwind-merge helper & currency formatters
```

---

## 2. Structural Principles

1. **Colocation & Modularity:** Everything related to a domain entity (types, services, mock fixtures) is isolated in designated folders under `src/`.
2. **Clean URL Strategy:** Route Groups `(storefront)`, `(account)`, and `(content)` organize route logic into distinct domains without introducing unsightly folder names into the public URL pathname.
3. **Safe Fallback Boundaries:** Dynamic route segments (`[collectionSlug]`, `[productSlug]`) query domain services and invoke Next.js `notFound()` on missing items, preventing runtime exceptions.
