# KRAK & CO. — PAGE PRIORITY & IMPLEMENTATION MATRIX (PHASE 02)

**Document:** Business Value Tiering, UX Objectives & Implementation Sequencing  
**Author:** Lead E-commerce Architect & Product Manager  
**Date:** November 2026

---

## 1. Page Prioritization Tiering

To maximize development velocity and ensure high conversion foundations, all 33 storefront pages and modules are tiered into three strategic levels based on commercial impact:

---

## 2. Tier 1: Revenue-Critical Funnel

These pages directly drive customer acquisition, basket formation, and transaction completion. Any degradation here directly impacts Gross Merchandise Value (GMV).

| View / Page | Commercial Objective | Main UX Objective | Key Interactions | Required Components | Success Metrics |
|---|---|---|---|---|---|
| **Homepage (`/`)** | Brand positioning, initial collection routing, discovery | Instant visual delight, clear regional choice, trust establishment | Banner clicks, category arch selection, 1-click cart adds | HeroBanner, CategoryArches, RegionalBanners, BestsellersGrid | Bounce rate < 35%, Homepage-to-PDP click rate > 45% |
| **Product Detail (`/products/:slug`)** | Primary conversion engine, pack size upsell | Eliminating purchase hesitation; transparent ingredients/nutrition | Pack size pill selection, quantity stepper, add-to-cart | ProductGallery, PackSizeSelector, TrustBadges, NutritionTabs | Add-to-cart rate > 12%, variant selection engagement > 60% |
| **Cart Drawer & Page (`/cart`)** | AOV expansion via Free Shipping meter, cross-sell | Frictionless item modification, transparent delivery cost calculation | Quantity increments, cross-sell snack add, proceed to checkout | FreeShippingMeter, CartItemRow, SubtotalSummaryCard | Cart-to-checkout progression > 65%, AOV > ₹550 |
| **Checkout (`/checkout`)** | Transaction completion, friction elimination | High-trust, low-anxiety 3-step checkout with instant Indian payment methods | Address selection, delivery speed pick, UPI / Card payment | AddressCard, DeliveryOptions, UPIPaymentForm, StickyPayBar | Checkout completion rate > 75%, payment failure rate < 3% |
| **Regional Collections (`/collections/south-indian`, `/north-indian`)** | High-intent regional snack exploration | Cultural immersion, regional pride, curated exploration | Subcategory filtering, sorting, quick add-to-cart | RegionalHeroBanner, ProductGrid, FilterSidebar | Category page depth > 3.2 pages per session |
| **Category Listing (`/collections/:slug`)** | Form-specific comparison (Mixtures, Crisps, Sweets) | Rapid side-by-side snack comparison | Multi-filter toggles, price sorting | ProductFilters, ProductCard, Pagination | Filter usage > 30% |
| **Instant Search (`/search`)** | Capturing high-intent keyword traffic | Instant query resolution with zero dead-ends | Live keystroke suggestions, quick add-to-cart | SearchModal, LiveResultGrid, TypoCorrection | Search-to-purchase conversion > 18% |

---

## 3. Tier 2: Customer Retention & Purchase Confidence

These pages build trust, reduce pre-purchase anxiety, encourage repeat ordering, and drive festive gifting.

| View / Page | Commercial Objective | Main UX Objective | Key Interactions | Required Components | Success Metrics |
|---|---|---|---|---|---|
| **Gift Boxes & Combos (`/collections/gift-boxes`, `/combos`)** | AOV expansion through curated bundles & festive gifting | Clear presentation of bundle contents and perceived savings | Hamper preview, custom greeting note, bulk inquiry | GiftHamperCard, BundleSavingsBadge, ContentsPills | Gift box share of GMV > 25% during festive seasons |
| **Customer Reviews (`/reviews`)** | Social proof, risk mitigation | Third-party credibility through genuine verified buyer feedback | Rating filter, photo review inspection, direct snack purchase | RatingBreakdownChart, VerifiedReviewCard, PhotoModal | Review reading rate > 25% of PDP visits |
| **Order Tracking (`/track-order`)** | Post-purchase reassurance, reducing "Where is my order?" (WISMO) tickets | Real-time shipment transparency across 5 stages | Order ID lookup, courier tracking redirect | ShipmentTimelineStepper, CourierDetailsCard | Reduction in support ticket volume by > 50% |
| **Customer Account & Orders (`/account`, `/account/orders`)** | Lifetime Value (LTV) maximization, frictionless reordering | Seamless access to past snack favorites and saved addresses | 1-click reorder, invoice download, address management | OrderHistoryTable, AddressBookManager, ProfileCard | Reorder rate > 30% within 45 days |
| **Wishlist (`/wishlist`)** | Saving intent for future purchases / festive seasons | Easy retrieval and one-tap migration to active cart | Move-to-cart, remove item, share list | WishlistGrid, MoveToCartButton | Wishlist-to-cart conversion > 20% |

---

## 4. Tier 3: Brand, Support & Compliance

These pages establish legitimacy, satisfy statutory e-commerce regulations, and provide emergency assistance.

| View / Page | Commercial Objective | Main UX Objective | Key Interactions | Required Components | Success Metrics |
|---|---|---|---|---|---|
| **About Us (`/about`)** | Brand equity, recipe heritage, authenticity proof | Engaging editorial storytelling with vintage illustrations | Timeline reading, recipe philosophy inspection | HeritageStoryBlock, SourcingMap, FounderNote | Time on page > 1.5 minutes |
| **FAQs (`/faq`)** | Friction elimination, customer self-service | Immediate answer retrieval for shelf-life, shipping, and ingredients | Accordion toggle, topic category filter | AccordionGroup, TopicPillSelector | Self-service resolution > 70% |
| **Contact Us (`/contact`)** | Customer care accessibility, corporate bulk leads | Easy inquiry submission via form or 1-tap WhatsApp | Form submit, WhatsApp link click | ContactForm, WhatsAppButton, SupportInfo | Lead response time < 2 hours |
| **Policy Suite (Shipping, Returns, Terms, Privacy)** | Legal compliance, FSSAI transparency | Clear, readable, honest policies without deceptive legalese | Section navigation, return eligibility check | PolicyDocumentViewer, TableSummary | Low bounce rate on checkout policy links |
| **Custom 404 Error (`not-found.tsx`)** | Traffic retention from broken or outdated links | Friendly recovery with popular snack shortcuts | Click back to home, click bestseller | RetroIllustration, BestsellerShortcuts | Traffic recovery rate > 60% |

---

## 5. Recommended Implementation Roadmap & Phased Sequencing

Based on technical dependencies and the commercial priority tiering, the implementation must proceed in the following order:

```
[Phase 03: Scaffolding & Design System Tokens]
                    │
                    ▼
[Phase 04: UI Primitives (Button, Badge, Card, Stepper, Modal)]
                    │
                    ▼
[Phase 05: Navigation Shell & Global Layout (Header, Footer, Mobile Dock)]
                    │
                    ▼
[Phase 06: Data Layer & Typed Models (Products, Categories, Reviews)]
                    │
                    ▼
[Phase 07: Global Commerce State (CartContext, WishlistContext)]
                    │
                    ▼
[Phase 08-11: Homepage Modules (Hero, Arches, Regional Banners, Bestsellers)]
                    │
                    ▼
[Phase 12-13: Cart Drawer & Free Shipping Progress Engine]
                    │
                    ▼
[Phase 14-15: Discovery & Product Detail Page (PDP)]
                    │
                    ▼
[Phase 16-17: Instant Search Engine & Customer Reviews]
                    │
                    ▼
[Phase 18-20: 3-Step High-Conversion Checkout & Order Confirmation]
                    │
                    ▼
[Phase 21-23: Order Tracking & Customer Account Portal]
                    │
                    ▼
[Phase 24-26: Support, Policies, Mobile Polish & Final QA]
```

