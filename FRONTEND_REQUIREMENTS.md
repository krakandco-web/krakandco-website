# KRAK & CO. — FRONTEND REQUIREMENTS SPECIFICATION (PHASE 01)

**Document Version:** 1.0.0  
**Status:** Approved for Implementation Planning  
**Target Platform:** Web (Desktop, Tablet, Mobile Responsive)  
**Primary Framework:** Next.js (App Router, TypeScript, Tailwind CSS)

---

## 1. Business Context & Objectives

### 1.1 Brand Essence
- **Brand:** **KRAK & CO.**
- **Proposition:** Authentic Indian Snacks — South to North.
- **Product Range:** Traditional recipes, premium ingredients, irresistible crunch:
  - South Indian Specialties: Kerala Banana Chips (coconut oil fried), Madurai Mixture, Ragi Murukku, Thattai, Mysore Pak.
  - North Indian Favorites: Aloo Bhujia, Ratlami Sev, Mathri, Kaju Katli, Besan Ladoo, Samosa chips.
  - Gift Boxes & Hampers: Festive Diwali/Pongal collections, corporate gifting, family combo packs.
- **Personality:** Playful, nostalgic, bold, youthful, culturally rooted, and contemporary.

### 1.2 Core Business Goals
1. **Drive High Conversion:** Clear visual hierarchy, frictionless "Add to Cart", and streamlined checkout.
2. **Promote Regional Exploration:** Clear navigational duality between South Indian and North Indian snack heritages.
3. **Average Order Value (AOV) Expansion:** Visual free shipping threshold meter (₹499/₹500 cutoff), pack size upsells (100g, 250g, 500g), and curated combo gift hampers.
4. **Establish Brand Credibility:** Social proof highlights ("Loved by 25,000+ snack lovers"), verified buyer reviews, and trust badges (No Preservatives, Authentic Recipe, Freshly Packed).

---

## 2. Customer-Facing Features & Functional Requirements

### 2.1 Navigation & Global Shell
- **Announcement Bar:** Rotational or marquee bar with offer alerts (`"Festive Snack Boxes Now Live! | Free Shipping on Orders Above ₹499"`).
- **Global Header (Sticky):**
  - KRAK & CO. retro sign-painted brand logo.
  - Category navigation dropdown (Chips & Crisps, Mixtures, Savouries, Sweets & Mithai, Pickles, Gift Boxes).
  - Regional quick routes: `South Indian`, `North Indian`, `Gift Boxes`, `About`.
  - Action utilities: Live Search toggle, Account icon, Wishlist counter, and Cart Drawer trigger with badge counter.
- **Mobile Bottom Navigation Bar:**
  - Fixed, thumb-accessible bar: Home, Shop, Categories, Search, Cart.
- **Footer Suite:**
  - Regional heritage story, quick links, newsletter signup, payment method badges, trust indicators, copyright, and social links.

### 2.2 Homepage Sections (from Approved Reference Artboard)
1. **Hero Banner:** Sunburst maroon gradient backdrop, retro illustrated female character with snack bowl, bold title (`AUTHENTIC INDIAN SNACKS SOUTH TO NORTH`), dual CTAs (`Shop Now`, `Explore Collections`), and floating snack bowl photography.
2. **Value Proposition Strip:** 5 trust pillars with iconography:
   - *Authentic Recipes* (Traditional, time-tested)
   - *Premium Ingredients* (No compromise on quality)
   - *Freshly Packed* (Crunch that lasts)
   - *Pan India Delivery* (Direct to doorstep)
   - *Secure Payments* (UPI, Cards, Netbanking)
3. **Shop by Category:** 6 distinctive architectural arch-shaped cards:
   - Chips & Crisps
   - Mixtures
   - Savouries
   - Sweets & Mithai
   - Pickles & Sides
   - Gift Boxes
4. **Regional Dual Banners:**
   - *South Indian Classics:* Forest green theme, temple gopuram graphic, regional specialties.
   - *North Indian Favourites:* Warm crimson/terracotta theme, monument graphics, iconic snacks.
5. **Bestsellers Grid:** Filterable snack grid with dynamic pack sizes, star ratings, review count, price, and instant "Add to Cart".
6. **Curated Gift Boxes & Combos Showcase:** Festive and corporate hampers with retro illustrated character and combo discount badges.
7. **Social Proof & Testimonials:** Rating summary (`4.8/5 from 25,000+ lovers`), verified customer quotes with geographic distribution (Chennai, Bengaluru, Delhi, Mumbai).

### 2.3 Product Catalog & Discovery
- **Category Listing Page:** Dynamic breadcrumbs, item counters, sorting criteria (Popularity, Price: Low to High, Price: High to Low, Rating, Newest), and multi-attribute filters (Dietary, Region, Pack Size, Spice Level).
- **Search System:** Real-time search modal with recent search chips, popular keyword suggestions, and live matching product cards with direct "Add to Cart".

### 2.4 Product Detail Page (PDP)
- **Visual Presentation:** Multi-angle photography gallery with thumbnail switcher and zoom.
- **Variant Selector:** Interactive pack size pills (e.g., `100g @ ₹69`, `250g @ ₹149`, `500g @ ₹279`).
- **Cart Add & Stepper:** Increment/decrement quantity controls with stock validation.
- **Trust Badges:** *100% Vegetarian*, *No Preservatives*, *Authentic Regional Recipe*, *Crispy & Fresh Guarantee*.
- **Content Tabs:** Ingredients, Nutritional Facts, Storage Instructions, Allergen Warnings, and Customer Reviews.

### 2.5 Shopping Cart Experience
- **Cart Slide-Over Drawer:** Real-time slide-over drawer accessible from any page.
- **Free Shipping Threshold Bar:** Dynamic calculation displaying remaining amount required for free shipping (`"Add ₹72 more for Free Shipping"`).
- **Cart Management:** In-drawer quantity updates, item removal, and subtotal calculation.
- **Dedicated Cart Page:** Full-page cart overview with cross-sell snack recommendations.

### 2.6 Checkout Flow
- **3-Step Linear Progress:** 1. Address → 2. Payment → 3. Confirmation.
- **Address Management:** Saved address card selector, active address highlight, and new address modal.
- **Delivery Speed Options:**
  - Standard Delivery (3–5 business days, ₹49 or Free above ₹499)
  - Express Delivery (1–2 business days, ₹99)
- **Payment Method Selector:**
  - UPI (Instant GPay, PhonePe, Paytm, QR) — prominently recommended
  - Credit / Debit Cards (Visa, MasterCard, RuPay)
  - Netbanking (Major Indian banks)
  - Wallets / Cash on Delivery (COD)
- **Order Summary:** Itemized breakdown, GST breakdown, discount coupon input, and sticky payment CTA.

### 2.7 Post-Purchase & Account
- **Order Confirmation:** Clean invoice summary, order reference number, estimated delivery window, and print/download button.
- **Live Order Tracking:** 5-phase visual timeline:
  `Order Placed` ➔ `Packed` ➔ `Shipped` ➔ `Out for Delivery` ➔ `Delivered`
- **Customer Account Portal:** Order history, active orders, saved delivery addresses, wishlist items, and account settings.

### 2.8 Informational & Policy Pages
- About Us (Brand story, heritage, quality commitment).
- Shipping & Delivery Policy.
- Returns & Refund Policy.
- Cancellation Policy.
- Terms & Conditions.
- Privacy Policy.
- Comprehensive FAQs (Interactive accordion).

---

## 3. Shopping Journey & Conversion Architecture

```
[ Homepage / Ad / Direct ]
           │
           ├──► [ Category Arches / Regional Banners ]
           │               │
           │               ▼
           ├──► [ Product Listing Page (PLP) ]
           │               │
           │               ▼
           └──► [ Product Detail Page (PDP) ]
                           │
                 (1-Click Add to Cart)
                           │
                           ▼
               [ Slide-Over Cart Drawer ]
            (Free Shipping Meter Upsell)
                           │
                           ▼
             [ 3-Step Streamlined Checkout ]
          (Address ➔ Delivery ➔ UPI/Card Pay)
                           │
                           ▼
          [ Order Confirmation & Receipt ]
                           │
                           ▼
        [ Post-Purchase Tracking & Reorder ]
```

---

## 4. Responsive & Device Requirements

| Breakpoint | Target Devices | Layout Specifications |
|---|---|---|
| **Mobile (`< 640px`)** | iPhone, Android handsets | Single-column stack, sticky bottom navigation bar, touch-friendly 44px+ tap targets, drawer-based filters. |
| **Tablet (`640px – 1024px`)** | iPads, Android tablets | 2-column product grid, collapsable filter panels, optimized navigation bar. |
| **Desktop (`> 1024px`)** | Laptops, high-res monitors | 4-column product grid, sticky sidebar filters, mega-menu dropdowns, slide-over cart drawer. |

---

## 5. Accessibility (a11y) & UX Principles

1. **Contrast Standards:** Strict WCAG 2.1 AA compliant text contrast. Maroon `#7A1C1C` on Cream `#FFF8EE` yields a contrast ratio of > 10:1 (well above the 4.5:1 minimum).
2. **Keyboard Navigation:** Full focus ring visibility, logical tab indexing across cards, modal traps, and skip-to-content anchors.
3. **Screen Reader Support:** Semantic HTML5 (`header`, `main`, `nav`, `section`, `article`, `footer`), explicit `aria-label` tags for icon-only buttons, and live region announcements for cart updates.
4. **Form Usability:** Clear inline error messages, pre-formatted Indian PIN code inputs, and auto-complete hints.

