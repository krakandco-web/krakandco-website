# KRAK & CO. — PAGE-SPECIFIC UX SPECIFICATIONS (PHASE 03)

**Document:** Granular UX & Interaction Specifications for All Major Storefront Pages  
**Author:** Lead E-commerce Architect & CRO Specialist  
**Date:** November 2026

---

## 1. Shop All & Category Pages (`/shop`, `/collections/:slug`)

### 1.1 Structural Hierarchy
- **Header:** Sticky main header with active navigation indicator.
- **Breadcrumbs:** `Home > Categories > [Category Name]` (e.g. `Home > Categories > Mixtures & Namkeen`).
- **Category Banner:**
  - Arch-topped title header displaying category name (e.g. `Mixtures (12 products)`).
  - Short 1-2 sentence culinary description.
- **Discovery Controls Bar:**
  - Left: "Filter" button with active filter counter pill (e.g. `Filters (2)`).
  - Center: Active filter chips with one-click remove (`[South Indian ✕] [Spicy ✕] [Clear All]`).
  - Right: "Sort By" dropdown (`Popularity`, `Price: Low to High`, `Price: High to Low`, `Rating`, `Newest`).
- **Layout Split:**
  - **Desktop (`> 1024px`):** Left sticky sidebar (280px) for filters; right 3-column product grid.
  - **Mobile (`< 1024px`):** Full-width 2-column product grid; filters contained in a slide-up bottom drawer.
- **Product Card Content:** Image, bestseller badge, title, pack size/price indicator (`₹149 250g`), star rating (`★ 4.8 (2.3k)`), solid maroon `Add to Cart` button.
- **Empty State (Zero Filter Matches):** Friendly snack illustration with *"No crunchy snacks match your exact filters. Try clearing a filter or explore our Bestsellers below."* + `Reset Filters` button.

---

## 2. Regional Collection Pages (`/collections/south-indian`, `/north-indian`)

### 2.1 Regional Identity & Visual Customization
Both pages maintain the core KRAK & CO. layout and typography, but feature **distinct cultural visual cues**:

| Element | South Indian Classics (`/collections/south-indian`) | North Indian Favourites (`/collections/north-indian`) |
|---|---|---|
| **Theme Color** | Deep Forest Green (`#1E4D2B`) | Deep Terracotta Crimson (`#8B1E1E`) |
| **Hero Illustration** | Temple Gopuram, Coconut Palms, Kathakali motif | Royal Palace Arch, Monument, Sitar motif |
| **Headline** | `AUTHENTIC SOUTH INDIAN CLASSICS` | `ICONIC NORTH INDIAN FAVOURITES` |
| **Subhead** | Traditional recipes from Kerala, Tamil Nadu, Karnataka & Andhra. | Beloved namkeen & sweets from Delhi, Rajasthan, Punjab & Gujarat. |
| **Key Cooking Medium** | Pure Cold-Pressed Coconut Oil & Sesame Oil | Desi Ghee & Pure Groundnut Oil |
| **Archetype Snacks** | Kerala Banana Chips, Madurai Mixture, Ragi Murukku | Aloo Bhujia, Ratlami Sev, Mathri, Kaju Katli |
| **Cross-Link Bridge** | *"Craving spicy Delhi namkeen? Explore North Indian →"* | *"Love coconut oil banana chips? Explore South Indian →"* |

---

## 3. Product Detail Page (`/products/:slug`)

### 3.1 Above-the-Fold Layout (Desktop 50/50 Split)
- **Left Column: Photography & Visual Trust (Sticky):**
  - High-res main image with hover zoom.
  - 4-photo thumbnail carousel (Packaging front, macro crunch texture, tea-time pairing, ingredients plate).
  - Floating `Bestseller` badge and `100% Vegetarian` green dot icon.
- **Right Column: Purchase Engine:**
  - Breadcrumb: `Home > South Indian > Kerala Banana Chips`.
  - Product Title: `Kerala Banana Chips` (Playfair Display 28px).
  - Social Proof Rating: `★ 4.8` `(2,356 verified reviews)` with jump-link to reviews tab.
  - Short Description: *"Crispy, golden banana chips made in traditional Kerala style using premium cold-pressed coconut oil."*
  - Price Display: `₹149` (Bold 24px).
  - **Pack Size Selector Pills (Interactive):**
    - `[ 100g — ₹69 ]`
    - `[ 250g — ₹149 (Most Popular) ]` *(Active selected state with maroon border)*
    - `[ 500g — ₹279 (Save 10%) ]`
  - **Quantity Stepper & Action Controls:**
    - Stepper: `[ - ]` `[ 1 ]` `[ + ]` (Touch target 44px).
    - Primary CTA: `Add to Cart` (Full-width solid deep maroon button `#7A1C1C` with white text).
    - Wishlist Heart Toggle.
  - **Trust Badges Row:**
    - 🌿 *No Preservatives*
    - 📜 *Authentic Recipe*
    - 💥 *Crispy & Fresh Guaranteed*
    - 🥥 *Fried in Pure Coconut Oil*
  - **Delivery PIN Code Check:** Input field with `Check Delivery Date` (e.g. *"Enter PIN for delivery estimate: 3–5 days"*).

### 3.2 Below-the-Fold Tabs & Content
- **Tab 1: Ingredients & Nutrition:** Complete ingredients table, calories, fat, protein, carbs, and explicit allergen declarations.
- **Tab 2: Storage & Shelf Life:** Storage guidelines (airtight container, dry place) and 90-day expiry guarantee.
- **Tab 3: Verified Customer Reviews:** Rating breakdown bar chart (5★ to 1★) and customer photos.
- **Frequently Bought Together:** Snack pairing bundle (e.g. *"Buy Banana Chips + Madurai Mixture together for ₹260 (Save ₹18)"*).
- **Related Snacks Carousel:** 4 complementary snack cards.

### 3.3 Mobile PDP Adaptation
- Top swipeable image carousel with indicator dots.
- Compact variant pill selector.
- **Sticky Bottom Action Bar:** Persistent fixed bar showing `₹149` on left and full-width `Add to Cart` on right.

---

## 4. Search Discovery Overlay (`SearchModal.tsx`)

### 4.1 Interaction Architecture
- Triggered by clicking header Search icon (`🔍`) or typing `⌘K` / `Ctrl+K`.
- Lightbox overlay with semi-transparent backdrop blur.
- Input autofocuses instantly with placeholder: *"Search crispy snacks, savouries, sweets..."*.
- As user types:
  - **0 Characters:** Displays `Recent Searches` chips and `Trending Snacks` (Banana Chips, Madurai Mixture, Gift Hampers).
  - **1–2 Characters:** Suggests category and collection matches (`South Indian Classics`, `Mixtures`).
  - **3+ Characters:** Renders real-time matching product cards with image thumbnail, title, price, and instant `+ Quick Add` button.
- Pressing `Enter` redirects to full `/search?q=[query]` page.

---

## 5. Cart Experience (Drawer & Dedicated Page)

### 5.1 Slide-Over Cart Drawer (Primary Funnel)
- Slides in smoothly from right (380px desktop, 100% width mobile).
- **Header:** `Your Cart (3 items)` with close `✕` button.
- **Free Shipping Progress Meter (Gamified):**
  - Progress bar dynamically calculated: `₹499 - Subtotal`.
  - Under ₹499: `🚚 Add ₹72 more to unlock FREE Pan-India Shipping!`.
  - ₹499 and above: `🎉 You've unlocked FREE Shipping!`.
- **Line Items List:**
  - Thumbnail, Title, Pack Size (`250g`), Unit Price (`₹149`).
  - Quantity controls: `[ - ]` `[ 1 ]` `[ + ]`.
  - Trash can icon for item removal.
- **Cart Cross-Sell Snack (AOV Expansion):**
  - Single compact card: *"Pair with Madurai Mixture (250g) for ₹129"* `[+ Add]`.
- **Footer Summary Card:**
  - Subtotal: `₹427`
  - Estimated Shipping: `₹49` (or `FREE`)
  - Total: `₹476`
  - Primary CTA: `Proceed to Checkout →` (Full-width maroon button).
  - Secondary Link: `View Full Cart`.

### 5.2 Dedicated Cart Page (`/cart`)
- Used for comprehensive order review, coupon code entry, and delivery notes.
- Itemized table with product photos, variant weights, line totals.
- Coupon code input with `Apply` button (validates real coupons like `CRUNCH10`).

---

## 6. High-Conversion 3-Step Checkout (`/checkout`)

### 6.1 Distraction-Free Header
The global navigation header is replaced by a minimal checkout header:
- Left: KRAK & CO. logo (returns to `/cart`).
- Center: 3-step progress stepper:
  `1. Delivery Address` ➔ `2. Delivery Options` ➔ `3. Payment`
- Right: Secure 256-Bit SSL badge.

### 6.2 Step 1: Delivery Address
- For returning users: Select from saved address cards (`Home`, `Office`) with `+ Add New Address`.
- For guest users: Clean single-column form:
  - Full Name, Mobile Number (for delivery updates).
  - PIN Code (Auto-fills City & State).
  - Flat / House No, Street Address, Landmark.
- CTA: `Continue to Delivery Options →`.

### 6.3 Step 2: Delivery Options
- **Option A: Standard Delivery (3–5 Business Days)** — `₹49` (or `FREE` for orders > ₹499).
- **Option B: Express Air Delivery (1–2 Business Days)** — `₹99`.
- CTA: `Continue to Payment →`.

### 6.4 Step 3: Payment Method
- **UPI (Recommended — Fastest & Zero Convenience Fee):**
  - Instant App Deep-Links: `Google Pay`, `PhonePe`, `Paytm`.
  - Or enter UPI ID (VPA) with verify button.
  - Or scan instant QR Code on desktop.
- **Credit / Debit Cards:**
  - Visa, MasterCard, RuPay.
  - Card number, expiry, CVV with auto-formatting and bank logo detection.
- **Netbanking:** Major Indian banks dropdown.
- **Cash on Delivery (COD):** Available for orders under ₹2,000 (adds ₹30 verification fee).
- Sticky CTA: `Pay ₹[Total] Securely →`.

---

## 7. Customer Account & Order Tracking

### 7.1 My Account Dashboard (`/account`)
- Clean customer greeting: *"Namaste, [Name]!"*.
- Quick-action grid: `My Orders`, `Saved Addresses`, `Wishlist`, `Account Settings`, `Logout`.
- Active Order Snippet: Current shipment in transit with quick tracking link.

### 7.2 Live Order Tracking (`/track-order`)
- Search by Order ID (e.g. `KRAK-8492`) and phone number.
- **5-Stage Visual Timeline:**
  1. `Order Placed` (Timestamp, green check)
  2. `Packed & Freshness Sealed` (Timestamp, green check)
  3. `Shipped with [Courier Name]` (Courier tracking link)
  4. `Out for Delivery`
  5. `Delivered to Doorstep`
- Support trigger: *"Need assistance with this shipment? Chat with us on WhatsApp"*.

