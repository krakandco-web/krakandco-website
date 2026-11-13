# KRAK & CO. — UX & BEHAVIOURAL PSYCHOLOGY STRATEGY (PHASE 03)

**Document:** Application of Core UX Laws, Behavioural Psychology & Ethical CRO Principles  
**Role:** Senior UX Strategist & Behavioural Researcher  
**Date:** November 2026

---

## 1. Foundational Strategy: Distinctive Branding Meets Standard Usability

A common failure mode in modern direct-to-consumer (D2C) food brands is **aesthetic over-indexing**: sacrificing basic e-commerce clarity (legibility, standard cart locations, transparent pricing) in pursuit of a flashy, idiosyncratic retro visual style.

At KRAK & CO., our core principle is:
> **"Vintage Indian Character on the Outside, Rock-Solid Conversion Usability on the Inside."**

Illustrations, matchbox framing, and sunburst motifs enrich storytelling and emotional brand connection. However, buttons, form controls, product pricing, cart interactions, and search follow proven e-commerce conventions.

---

## 2. Implementation of Conventional UX & Psychological Laws

### 2.1 Visual Hierarchy & Information Scanning
- **F-Shaped & Z-Pattern Scanning:** Key value propositions and category entry points align with natural visual scanning paths on desktop and mobile.
- **Scale & Contrast Discipline:** 
  - Product prices are rendered with high visual weight (e.g. `₹149` in bold 20px Playfair/Poppins).
  - Primary CTAs utilize deep heritage maroon (`#7A1C1C`) with stark white/cream text, generating an unmatched visual prominence on the warm cream canvas.
  - Secondary actions use transparent backgrounds with clean borders.
- **Card Scannability:** Product cards follow a uniform top-to-bottom reading hierarchy:
  `[Badge / Wishlist] ➔ [Snack Photo] ➔ [Title] ➔ [Price & Weight] ➔ [Rating] ➔ [Add to Cart Button]`.

### 2.2 Hick’s Law (Decision Time vs. Number of Choices)
- **Problem:** Overwhelming customers with 40 unstructured snacks on the homepage leads to choice paralysis and bounce.
- **Solution:** 
  - Multi-tiered categorization: Customers first choose between **South Indian** or **North Indian**, or select from **6 distinct category arches** (Chips, Mixtures, Savouries, Sweets, Pickles, Gifts).
  - Curated Bestsellers grid limited to 8 top-performing snacks by default.
  - Pack size options strictly limited to 2 or 3 standard weights (`100g`, `250g`, `500g`), avoiding dozens of confusing SKU combinations.

### 2.3 Fitts’s Law (Target Size & Distance Optimization)
- **Problem:** Tiny tap targets cause rage clicks and accidental taps, especially on mobile devices.
- **Solution:**
  - All interactive buttons, pill selectors, and menu triggers feature a minimum touch target of **44×44px** (exceeding WCAG 2.1 Level AAA requirements).
  - Mobile conversion actions are anchored in the **natural thumb zone**:
    - Sticky bottom Add-to-Cart bar on the PDP.
    - Persistent bottom navigation dock (`Home`, `Shop`, `Categories`, `Search`, `Cart`).
    - Sticky "Proceed to Checkout" button anchored at the base of the cart drawer.

### 2.4 Cognitive Fluency (Familiar Mental Models)
- **Standard Navigation Placements:** The brand logo is in the top-left (clicking returns home); the cart icon is in the top-right with an active badge counter; the search bar responds to the universal `⌘K` / `Ctrl+K` shortcut.
- **Familiar Form Behaviors:** The checkout form uses standard browser autofill attributes (`name`, `street-address`, `postal-code`, `tel`), reducing input typing time by over 60%.
- **No Experimental Navigation:** No horizontal scroll jacking or confusing non-standard gestures.

### 2.5 Social Proof & Credibility
- **Real Metrics Only:** Highlight verified customer milestones: `"Loved by 25,000+ Snack Lovers Across India"`, aggregate rating of `4.8/5 based on 2,356+ verified reviews`.
- **Geographic Authenticity:** Customer reviews feature real Indian city badges (e.g., *"Priya S., Chennai"*, *"Arjun M., Bengaluru"*, *"Nisha R., Delhi"*), establishing nationwide trust.
- **Verified Buyer Badges:** Clear green checkmarks confirming authentic verified purchases.

### 2.6 Choice Architecture & Guided Paths
- **Dual Regional Architecture:** Directly addresses the cultural duality of Indian snacking. Customers who prefer spicy South Indian savouries (coconut oil fried) are guided smoothly without having to wade through North Indian namkeen, and vice-versa.
- **Occasion-Based Grouping:** Gifting customers are channeled directly to curated, festive hampers where contents are pre-selected and pre-bundled, reducing selection anxiety.

### 2.7 Risk Reduction & Transparency
- **Food Safety & Freshness Assurance:**
  - Explicit ingredient lists with zero hidden additives.
  - Explicit cooking medium declaration (*"100% Pure Cold-Pressed Coconut Oil"* vs *"Refined Groundnut Oil"*).
  - Clear allergen warning box on every product page.
  - Guaranteed 90-day shelf life with nitrogen-flushed packaging.
- **Transparent Delivery:** Clear announcement that orders above ₹499 qualify for Free Pan-India Delivery; standard delivery fee is explicitly stated as ₹49 up-front, eliminating checkout surprise.

### 2.8 Ethical Urgency & Loss Aversion
- **Anti-Deceptive Pattern Guarantee:**
  - **NO** fake countdown timers ("Order in next 04:12 for discount!").
  - **NO** fabricated social proof popups ("Someone from Pune just bought banana chips!").
  - **NO** fake low-stock warnings when inventory is plentiful.
- **Legitimate Loss Aversion:**
  - Progress bar showing remaining amount for free shipping (`"Add ₹72 more for Free Shipping"`). This leverages natural loss aversion (customers hate paying ₹49 for shipping when they can get an additional snack for a similar amount).
  - Transparent seasonal availability (e.g. *"Festive Diwali Edition Gift Boxes — Available while stocks last"*).

### 2.9 Average Order Value (AOV) Expansion Strategy
1. **Dynamic Free Shipping Meter:** Positioned at the very top of the slide-over cart drawer with a dynamic calculation (`₹499 - current_subtotal`).
2. **Contextual 1-Click Cart Add-Ons:** When a customer's cart is at ₹380, the cart drawer recommends a complementary ₹119 or ₹129 snack (e.g., *"Add Madurai Mixture to unlock FREE shipping"*).
3. **Multi-Pack Value Architecture:**
   - 100g Trial Pack: ₹69 (Low barrier to initial trial)
   - 250g Regular Pack: ₹149 (Primary volume driver)
   - 500g Family Pack: ₹279 (Displays *"Save 10%"* pill badge)
4. **Curated Snack Combos:** Bundling 3-4 complementary snacks (e.g. *"South-North Sampler"* or *"Chai-Time Trio"*) at a 12-15% package discount.

### 2.10 Retention & Customer Lifetime Value (LTV)
1. **Frictionless Reordering:** "1-Click Reorder All" in the Account Order History instantly restores previous snack quantities to the cart.
2. **Zero-Password Mobile Login:** Secure 4-digit SMS/WhatsApp OTP login, removing forgotten password barriers.
3. **Saved Multi-Address Book:** Allows customers to save distinct addresses for `Home`, `Office`, and `Parents/Gifting`.

