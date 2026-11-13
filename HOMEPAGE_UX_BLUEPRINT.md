# KRAK & CO. — HOMEPAGE UX BLUEPRINT (PHASE 03)

**Document:** Comprehensive Homepage Architecture & Section-by-Section Specification  
**Visual Reference:** Approved KRAK & CO. Storefront Artboard  
**Role:** Lead Product Designer & CRO Architect  
**Date:** November 2026

---

## 1. Homepage Strategic Purpose

The KRAK & CO. homepage is the primary storytelling, trust-building, and commercial gateway for the brand. It immediately establishes:
1. **Brand Identity:** Authentic Indian snacks celebrating both South and North Indian culinary traditions.
2. **Distinctive Aesthetic:** Indian retro matchbox commercial pop-art fused with clean, modern e-commerce usability.
3. **Immediate Conversion Paths:** Rapid entry points by region, category, bestseller, or festive gifting.

---

## 2. Section-by-Section Specification

### Section 01: Announcement Bar
- **User Objective:** Learn about active promotions, coupon codes, and shipping thresholds immediately.
- **Business Objective:** Drive AOV higher by communicating the pan-India free shipping policy (`Orders Above ₹499`).
- **Content:**
  - Slide 1: `✨ Festive Snack Boxes Now Live! | Free Shipping on Orders Above ₹499`
  - Slide 2: `🚚 Authentic Flavours Delivered Fresh Across India in 3–5 Days`
- **Visual Hierarchy:** Level 4 (Subtle bar, 36px height, deep maroon background `#7A1C1C`, crisp cream text `#FFF8EE`).
- **Required Components:** `AnnouncementBar`, `RotatingTextSlider`, `NavArrows`.
- **CTA:** Optional text link (`Shop Festive Boxes →`).
- **Desktop Layout:** Full-width centered banner with left/right carousel arrows.
- **Mobile Layout:** Compact text ticker with touch swipe support.
- **Conversion Rationale:** Anchors customer expectations around free shipping right at entry.

---

### Section 02: Main Sticky Header & Navigation
- **User Objective:** Navigate to specific snack categories, access search, manage account, or view cart.
- **Business Objective:** Maximize catalog reach, provide instant search access, and maintain persistent cart visibility.
- **Content:**
  - Left: KRAK & CO. retro sign-painted brand logo.
  - Center: `Shop ▾` (Mega menu), `South Indian`, `North Indian`, `Gift Boxes`, `About`.
  - Right: Search trigger (`🔍`), Account (`👤`), Wishlist counter (`❤️`), Cart Drawer trigger (`🛒 (3)`).
- **Visual Hierarchy:** Level 2 (Sticky bar, 68px height, warm cream `#FFF8EE`, warm sand bottom border `#F2DFBA`).
- **Required Components:** `Header`, `MegaMenu`, `SearchModalTrigger`, `CartBadge`.
- **CTA:** Cart trigger button with item counter.
- **Desktop Layout:** Horizontal spread; logo left, navigation center, utilities right.
- **Mobile Layout:** Left hamburger icon (`☰`), center logo, right search + cart triggers.
- **Conversion Rationale:** Header stays sticky on scroll, ensuring a customer can open the cart or search from anywhere on the page without scrolling back to top.

---

### Section 03: Hero Section (The Core Hook)
- **User Objective:** Immediately understand what KRAK & CO. offers and feel an emotional/nostalgic connection to authentic Indian snacks.
- **Business Objective:** Communicate the core brand proposition and drive immediate traffic into the catalog.
- **Content:**
  - Headline: `AUTHENTIC INDIAN SNACKS SOUTH TO NORTH`
  - Subheadline: `Traditional recipes, premium ingredients, and irresistible crunch in every bite.`
  - Visual: Retro Indian pop-art illustrated woman in traditional saree with retro sunglasses savoring snacks, set against a maroon sunburst backdrop with stars, surrounded by appetizing, crunchy snack bowls (banana chips, murukku, mixture).
  - CTAs: Primary `Shop Now →` (Mustard yellow pill button) and Secondary `Explore Collections` (Outlined cream button).
- **Visual Hierarchy:** Level 1 (Dominant focal point, bold Playfair Display / retro display typography, high-contrast maroon `#7A1C1C` background).
- **Required Components:** `HeroBanner`, `SunburstBackdrop`, `IllustratedCharacter`, `SnackPhotoShowcase`, `Button`.
- **CTA:** Primary: `Shop Now →` (links to `/shop`). Secondary: `Explore Collections` (smooth scrolls to Category Arches).
- **Desktop Layout:** 2-column split. Left column: Headline, subhead, dual CTAs, trust statement. Right column: Large retro illustrated character and overflowing snack bowl photography.
- **Mobile Layout:** Stacked layout. Headline and subhead at top, followed by the sunburst illustration and snack bowl, with dual CTAs prominently displayed.
- **Conversion Rationale:** Creates an indelible brand memory while clearly answering *"What is this store?"* within 1.5 seconds of landing.

---

### Section 04: Trust Strip (Value Proposition Bar)
- **User Objective:** Verify food quality, safety, freshness, and shipping reliability before browsing.
- **Business Objective:** Lower perceived purchase risk and address core food-safety hesitations.
- **Content:** 5 value pillars with retro line icons:
  1. *Authentic Recipes* (Traditional, time-tested)
  2. *Premium Ingredients* (No compromise on quality)
  3. *Freshly Packed* (Crunch that lasts)
  4. *Pan India Delivery* (Direct to your doorstep)
  5. *Secure Payments* (UPI, Cards, Netbanking)
- **Visual Hierarchy:** Level 3 (Clean horizontal cream strip with subtle sand borders `#F2DFBA`).
- **Required Components:** `TrustStrip`, `ValuePillarItem`, `IconBadge`.
- **CTA:** None (Informational trust anchor).
- **Desktop Layout:** 5-column horizontal grid.
- **Mobile Layout:** Horizontal scrolling snap carousel with indicator dots, or 2x2 grid.
- **Conversion Rationale:** Directly removes top friction points regarding transit freshness and payment security.

---

### Section 05: Shop by Category (Architectural Arches)
- **User Objective:** Browse snacks by their physical form and craving type.
- **Business Objective:** Funnel users into specific product category pages with high conversion intent.
- **Content:**
  - Section Title: `✦ Shop by Category ✦`
  - 6 distinctive arch-shaped (dome-topped) cards inspired by Indian biscuit tin packaging:
    1. *Chips & Crisps* (Kerala Banana Chips)
    2. *Mixtures* (Madurai & Bombay Mixtures)
    3. *Savouries* (Murukku & Thattai)
    4. *Sweets & Mithai* (Mysore Pak & Kaju Katli)
    5. *Pickles & Sides* (Avakaya & Podi)
    6. *Gift Boxes* (Festive Hampers)
- **Visual Hierarchy:** Level 2 (Distinctive curved arch silhouettes, subtle drop shadow, hover elevation).
- **Required Components:** `CategoryArchesGrid`, `ArchCategoryCard`.
- **CTA:** Individual arch click links to `/collections/:slug`.
- **Desktop Layout:** 6-column horizontal card row.
- **Mobile Layout:** 3-column × 2-row grid or smooth horizontal touch carousel.
- **Conversion Rationale:** Unique visual shapes create high click engagement compared to generic square cards.

---

### Section 06: Regional Split Banners (South vs. North)
- **User Objective:** Choose snacks based on cultural and geographic origin.
- **Business Objective:** Highlight the core brand duality ("South to North") and celebrate regional pride.
- **Content:**
  - **Left Card: South Indian Classics**
    - Theme: Deep forest green `#1E4D2B` with gopuram temple illustration.
    - Copy: *"From Tamil Nadu, Kerala, Karnataka & beyond."*
    - Visual: Coconut oil banana chips and crisp golden murukku.
    - CTA: `Explore South Indian →` (Mustard pill button).
  - **Right Card: North Indian Favourites**
    - Theme: Warm crimson `#8B1E1E` with iconic monument illustrations.
    - Copy: *"Iconic snacks from Delhi, Punjab, Rajasthan & more."*
    - Visual: Aloo bhujia, spiced sev, and samosa crisps.
    - CTA: `Explore North Indian →` (Mustard pill button).
- **Visual Hierarchy:** Level 2 (Large twin feature banners, high-contrast cultural visuals).
- **Required Components:** `RegionalDualBanners`, `RegionalBannerCard`.
- **CTA:** `Explore South Indian →` (`/collections/south-indian`) and `Explore North Indian →` (`/collections/north-indian`).
- **Desktop Layout:** 50/50 side-by-side split grid with rounded corners and inner border framing.
- **Mobile Layout:** Vertical stack (South Indian banner on top, North Indian banner below).
- **Conversion Rationale:** Capitalizes on regional nostalgia; customers can self-segment in one tap.

---

### Section 07: Bestsellers Product Grid
- **User Objective:** Quickly find the most popular and highly rated snacks.
- **Business Objective:** Maximize conversion by leading with proven, high-velocity SKU items.
- **Content:**
  - Section Header: `✦ Bestsellers ✦` with `View All →` link.
  - Filter Tabs: `All`, `South Indian`, `North Indian`, `Gift Boxes`.
  - 5-8 Product Cards:
    - *Kerala Banana Chips* (₹149, 250g, ★ 4.8)
    - *Madurai Mixture* (₹129, 250g, ★ 4.7)
    - *Aloo Bhujia* (₹149, 250g, ★ 4.8)
    - *Ragi Murukku* (₹139, 200g, ★ 4.7)
    - *Kaju Katli* (₹349, 250g, ★ 4.9)
  - Card Features: Red `Bestseller` badge, wishlist heart, price & weight indicator, star rating, solid maroon `Add to Cart` button.
- **Visual Hierarchy:** Level 2 (Crisp white product cards on warm cream backdrop, deep maroon buttons).
- **Required Components:** `ProductCard`, `ProductGrid`, `RatingStars`, `FilterTabs`.
- **CTA:** `Add to Cart` on each card.
- **Desktop Layout:** 5-column responsive grid.
- **Mobile Layout:** 2-column grid with compact action buttons.
- **Conversion Rationale:** 1-click Add to Cart allows fast multiple-item basket building without leaving the homepage.

---

### Section 08: Gift Boxes & Combos Showcase
- **User Objective:** Find festive gifts, family assortments, or corporate hampers.
- **Business Objective:** Increase Average Order Value (AOV) through curated multi-product bundles.
- **Content:**
  - Banner Header: `Gift Boxes & Combos — Curated snack hampers for festivals, gifting and special moments.`
  - Feature Graphic: Retro illustrated man with aviators enjoying snacks beside an open retro gift hamper.
  - Featured Hampers:
    - *Classic South Combo* (₹699, Was ₹799 — 12% Off)
    - *North Indian Treat Box* (₹749, Was ₹849 — 11% Off)
    - *Festive Gift Hamper* (₹1,199, Was ₹1,499 — 20% Off)
    - *Family Combo* (₹899, Was ₹1,099 — 18% Off)
- **Visual Hierarchy:** Level 2 (Warm terracotta backdrop `#8B1E1E` with gold typography accents).
- **Required Components:** `GiftBoxesShowcase`, `ComboCard`, `DiscountBadge`.
- **CTA:** `Explore Gift Boxes →` (`/collections/gift-boxes`).
- **Desktop Layout:** Left side: Illustrated promotional teaser. Right side: 4-card combo grid.
- **Mobile Layout:** Stacked layout with horizontal swipeable combo cards.
- **Conversion Rationale:** Bundles provide clear perceived savings and solve the "what should I gift?" dilemma.

---

### Section 09: Genuine Customer Reviews & Social Proof Wall
- **User Objective:** Confirm that other snack lovers across India are genuinely satisfied with quality and taste.
- **Business Objective:** Mitigate hesitation through authentic social proof.
- **Content:**
  - Section Header: `✦ Loved by 25,000+ Snack Lovers Across India ✦`
  - Rating Badge: `★ 4.8 / 5 based on 25,346 verified reviews`.
  - Customer Testimonial Cards:
    - *"The best mixture I've had online! Tastes just like home."* — Priya S., Chennai (Verified Buyer)
    - *"Super fresh and crunchy. Packaging is top-notch."* — Arjun M., Bengaluru (Verified Buyer)
    - *"A perfect mix of South and North Indian snacks. Highly recommend!"* — Nisha R., Delhi (Verified Buyer)
- **Visual Hierarchy:** Level 3 (Clean parchment cards `#FAF3E0` with gold star ratings).
- **Required Components:** `TestimonialCarousel`, `ReviewCard`, `VerifiedBadge`.
- **CTA:** `Read All 2,356 Reviews →` (`/reviews`).
- **Desktop Layout:** 3-column review card grid with aggregated rating banner above.
- **Mobile Layout:** Single-card swipeable carousel with indicator dots.
- **Conversion Rationale:** Geographic diversity of reviewers reassures buyers in all states of reliable pan-India delivery.

---

### Section 10: Brand Story (About KRAK & CO.)
- **User Objective:** Connect with the founders, philosophy, and authentic recipe sourcing.
- **Business Objective:** Build enduring brand affinity and stand apart from mass-market industrial snack brands.
- **Content:**
  - Headline: `A snack brand that brings India together.`
  - Narrative: *"From the crispy flavours of the South to the beloved snacks of the North, KRAK & CO. celebrates India's rich snacking culture with authentic recipes, quality ingredients and a whole lot of crunch."*
  - Imagery: Retro illustration of friends bonding over tea and snacks.
- **Visual Hierarchy:** Level 3 (Editorial warm layout, cream background `#FFF8EE`).
- **Required Components:** `BrandStorySection`, `IllustratedDuoGraphic`.
- **CTA:** `Our Story →` (`/about`).
- **Desktop Layout:** 2-column layout (Left: Retro illustration; Right: Narrative copy and CTA button).
- **Mobile Layout:** Stacked layout (Illustration above narrative).
- **Conversion Rationale:** Brand storytelling shifts customer perception from generic transactional food to an emotional culinary experience.

---

### Section 11: Voluntary Newsletter / Snack Club Signup
- **User Objective:** Receive exclusive recipe drops, festive discounts, and early access to limited edition boxes.
- **Business Objective:** Capture email and WhatsApp leads for zero-CAC retention marketing.
- **Content:**
  - Headline: `Join The Crunch Club!`
  - Subhead: `Get 10% off your first order + early access to festive gift boxes.`
  - Form: Email / WhatsApp phone input with submit button.
- **Visual Hierarchy:** Level 3 (Enclosed retro matchbox border card).
- **Required Components:** `NewsletterForm`, `Input`, `Button`.
- **CTA:** `Get 10% Off →`.
- **Desktop Layout:** Centered single-card container with inline input and button.
- **Mobile Layout:** Stacked input and full-width button.
- **Conversion Rationale:** Immediate discount incentive captures first-time visitor contact details before they leave.

---

### Section 12: Footer & Trust Hub
- **User Objective:** Access customer support, order tracking, policies, FAQs, and payment verification.
- **Business Objective:** Ensure compliance, prevent bounce on legal checks, and reinforce payment security.
- **Content:**
  - Brand intro and mission.
  - Column 1: Shop Links (South Indian, North Indian, Mixtures, Crisps, Gift Boxes).
  - Column 2: Customer Care (Track Order, FAQ, Contact Us, Shipping Policy, Returns).
  - Column 3: Legal & Trust (Terms, Privacy, FSSAI Registration number).
  - Payment Badges: UPI (GPay, PhonePe, Paytm), Visa, MasterCard, RuPay, Netbanking.
- **Visual Hierarchy:** Level 4 (Warm sand `#F2DFBA` and charcoal typography `#1B2A3A`).
- **Required Components:** `Footer`, `PaymentMethodIcons`, `FSSAIBadge`.
- **CTA:** Support and tracking links.
- **Desktop Layout:** 4-column structured footer with bottom payment bar.
- **Mobile Layout:** Collapsible accordion links with payment badges at base.
- **Conversion Rationale:** Clear policies and recognized payment logos remove final checkout anxiety.

