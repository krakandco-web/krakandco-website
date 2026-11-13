# KRAK & CO. — EXISTING FEATURE MATRIX (PHASE 01)

**Audit Status:** Baseline Pre-Implementation Assessment  
**Repository State:** Greenfield Workspace  
**Date:** November 2026

| # | Feature / Screen | Current Status | Existing Files | Issues / Gaps | Recommended Action |
|---|---|---|---|---|---|
| **01** | **Global Layout & Navigation** | Not implemented | None | Header, announcement bar, navigation links, and footer missing. | Scaffold in Phase 02 & Phase 03 with Next.js layout and shared navigation shell. |
| **02** | **Mobile Bottom Navigation** | Not implemented | None | Mobile thumb-friendly dock absent. | Implement in Phase 03 / Phase 25 with sticky viewport dock. |
| **03** | **Homepage Hero Banner** | Not implemented | None | Sunburst backdrop, retro illustration, headline, and dual CTAs missing. | Build in Phase 05 using approved artboard reference visual assets. |
| **04** | **Value Proposition Strip** | Not implemented | None | 5 trust icons (Authentic, Premium, Fresh, Delivery, Payment) missing. | Build in Phase 05 as reusable trust feature component. |
| **05** | **Shop by Category (Arches)** | Not implemented | None | 6 architectural dome cards missing. | Build in Phase 06 with custom CSS arch border-radius and hover animations. |
| **06** | **Regional Split Banners** | Not implemented | None | South Indian Classics (Green) & North Indian Favourites (Red) banners missing. | Build in Phase 07 with dual graphic cards. |
| **07** | **Bestsellers Product Grid** | Not implemented | None | Product card, quick add-to-cart, star rating, pack indicators missing. | Build in Phase 08 & Phase 09 with filter tabs and responsive grid. |
| **08** | **Gift Boxes & Combos Banner**| Not implemented | None | Gifting curation banner, hampers display, combo pricing missing. | Build in Phase 10 with promotional badges. |
| **09** | **Social Proof & Testimonials**| Not implemented | None | 25,000+ customer rating badge, verified buyer quotes missing. | Build in Phase 11 with regional testimonial cards. |
| **10** | **Product Catalog (PLP / Shop)**| Not implemented | None | `/shop` route, category filtering, price sorting, grid layout missing. | Implement in Phase 14 with Next.js dynamic routes (`/category/[slug]`). |
| **11** | **Product Detail Page (PDP)** | Not implemented | None | `/product/[slug]` route, pack size pills, quantity stepper, trust badges missing. | Implement in Phase 15 with image gallery and ingredient tabs. |
| **12** | **Slide-Over Cart Drawer** | Not implemented | None | Cart state, slide-over drawer, free-shipping progress meter missing. | Implement in Phase 12 (State) & Phase 13 (Drawer UI). |
| **13** | **Dedicated Cart Page** | Not implemented | None | `/cart` route, itemized table, subtotal and shipping calculations missing. | Implement in Phase 13. |
| **14** | **Instant Search & Discovery** | Not implemented | None | Real-time search modal, keyword chips, search results missing. | Implement in Phase 16 with autocomplete and instant preview. |
| **15** | **Customer Reviews System** | Not implemented | None | Star breakdown chart (5★ to 1★), verified review list missing. | Implement in Phase 17 with review submission modal. |
| **16** | **Checkout: Address Stage** | Not implemented | None | 3-step checkout stepper, address selector, new address form missing. | Implement in Phase 18 with standard/express delivery selection. |
| **17** | **Checkout: Payment Stage** | Not implemented | None | UPI (GPay/PhonePe/QR), Card, Netbanking, COD options missing. | Implement in Phase 19 with validation and order calculation. |
| **18** | **Order Confirmation Page** | Not implemented | None | Success celebration, order summary, printable receipt missing. | Implement in Phase 20 (`/order-success/[id]`). |
| **19** | **Live Order Tracking** | Not implemented | None | 5-stage shipment stepper (Placed ➔ Packed ➔ Shipped ➔ Delivery ➔ Done) missing. | Implement in Phase 21 (`/track`). |
| **20** | **Customer Account Hub** | Not implemented | None | `/account` dashboard, profile overview, navigation tabs missing. | Implement in Phase 23. |
| **21** | **Order History View** | Not implemented | None | Past order list, status chips, invoice download trigger missing. | Implement in Phase 23. |
| **22** | **Wishlist Management** | Not implemented | None | Wishlist context, heart toggle, saved item drawer/page missing. | Implement in Phase 22 (`/wishlist`). |
| **23** | **About Us Story Page** | Not implemented | None | `/about` brand narrative, retro illustration showcase missing. | Implement in Phase 24. |
| **24** | **Interactive FAQ Accordion** | Not implemented | None | Categorized FAQ accordions (Shipping, Products, Shelf-life) missing. | Implement in Phase 24 (`/faqs`). |
| **25** | **Legal & Policy Suite** | Not implemented | None | Shipping, Returns, Cancellation, Terms, Privacy pages missing. | Implement in Phase 24 (`/policies/[slug]`). |
| **26** | **Custom 404 Error Screen** | Not implemented | None | Branded retro "Snack Not Found" error page missing. | Implement in Phase 26 (`not-found.tsx`). |

