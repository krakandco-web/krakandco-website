# KRAK & CO. — STOREFRONT SITEMAP (PHASE 02)

**Document:** Storefront Sitemap & Page Architecture  
**Author:** Lead Information Architect & UX Strategist  
**Brand:** KRAK & CO. (Authentic Indian Snacks — South to North)  
**Date:** November 2026  
**Status:** Approved Architecture Blueprint

---

## 1. Executive Summary & Page Inventory

The KRAK & CO. e-commerce storefront consists of **33 structured pages and view controllers** categorized into 5 operational domains:
1. **Main Storefront & Catalog (9 pages)**
2. **Shopping & Checkout Funnel (5 pages/views)**
3. **Customer Account Portal (9 pages)**
4. **Brand, Community & Support (4 pages)**
5. **Policies & Utility (6 pages)**

---

## 2. Complete Storefront Page Definitions

### A. Main Storefront & Discovery

#### 01. Homepage (`/`)
- **Purpose:** Brand storytelling, primary traffic landing, seasonal campaign spotlight, category routing, and instant trust establishment.
- **Primary Audience:** First-time snack buyers, returning repeat customers, festive gift shoppers.
- **Main User Intent:** Explore snack range, understand brand authenticity, discover bestsellers, find regional specialties.
- **Primary CTA:** "Shop Now" / "Explore Collections".
- **Secondary CTA:** "Explore South Indian" / "Explore North Indian" / "Explore Gift Boxes".
- **Entry Points:** Direct navigation, search engine homepage ranking, social media campaigns, marketing emails.
- **Exit Points:** Category pages, regional collection pages, product detail pages, search modal, cart drawer.
- **Related Pages:** `/collections/south-indian`, `/collections/north-indian`, `/shop`, `/collections/gift-boxes`, `/about`.
- **Navigation Visibility:** Persistent top logo link and mobile bottom navigation "Home" tab.
- **Mobile Behaviour:** Stacked hero with sunburst visual, swipeable category cards, compact regional banners, sticky bottom nav.
- **SEO Relevance:** Critical (High authority brand keywords: "authentic Indian snacks online", "South Indian snacks", "North Indian snacks").
- **Required Data:** Hero banner settings, 6 category arch items, regional spotlight data, bestseller products array (8 items), gift combos teaser, verified customer reviews (featured 3).

#### 02. Shop All Catalog (`/shop`)
- **Purpose:** Complete browsable inventory of all snacks, mixtures, sweets, and gift sets.
- **Primary Audience:** Exploratory shoppers seeking variety across all product lines.
- **Main User Intent:** View full product catalog, filter by multiple attributes, sort by price or popularity.
- **Primary CTA:** "Add to Cart" (per product card).
- **Secondary CTA:** "Filter & Sort" / "Quick View".
- **Entry Points:** Header "Shop" link, footer catalog links, homepage CTA buttons.
- **Exit Points:** Product detail pages (`/products/:slug`), category pages, cart drawer.
- **Related Pages:** `/collections/south-indian`, `/collections/north-indian`, `/collections/:slug`.
- **Navigation Visibility:** Main navigation dropdown item and mobile drawer menu.
- **Mobile Behaviour:** 2-column card layout, sticky filter/sort action bar, slide-up filter sheet.
- **SEO Relevance:** High (Targeting "buy Indian snacks online", "order namkeen online").
- **Required Data:** Full product array, category taxonomies, active filter counts, pagination/infinite scroll cursor.

#### 03. South Indian Collection (`/collections/south-indian`)
- **Purpose:** Dedicated regional showcase celebrating authentic southern recipes (Kerala, Tamil Nadu, Karnataka, Andhra).
- **Primary Audience:** Customers seeking traditional southern savouries fried in coconut oil or sesame oil.
- **Main User Intent:** Discover authentic Kerala banana chips, Madurai mixture, ragi murukku, thattai, ribbon pakoda.
- **Primary CTA:** "Add to Cart".
- **Secondary CTA:** "Explore Mixtures" / "Explore Crisps".
- **Entry Points:** Header "South Indian" link, homepage green regional banner, search queries.
- **Exit Points:** Product detail pages, North Indian collection link, cart drawer.
- **Related Pages:** `/products/kerala-banana-chips`, `/products/madurai-mixture`, `/products/ragi-murukku`.
- **Navigation Visibility:** Top-level main navigation bar and homepage primary banner.
- **Mobile Behaviour:** Heritage green header theme with gopuram graphics, 2-column product grid.
- **SEO Relevance:** Very High ("authentic Kerala banana chips", "Madurai mixture buy online", "South Indian murukku").
- **Required Data:** South Indian curated product array, regional story badge, category sub-filters.

#### 04. North Indian Collection (`/collections/north-indian`)
- **Purpose:** Dedicated regional showcase celebrating northern snack traditions (Delhi, Rajasthan, Punjab, Gujarat).
- **Primary Audience:** Customers looking for iconic namkeen, sev, bhujia, mathri, and traditional sweets.
- **Main User Intent:** Buy authentic aloo bhujia, Ratlami sev, besan ladoo, kaju katli, spiced mathri.
- **Primary CTA:** "Add to Cart".
- **Secondary CTA:** "View Sweets" / "View Savouries".
- **Entry Points:** Header "North Indian" link, homepage red regional banner, search queries.
- **Exit Points:** Product detail pages, South Indian collection link, cart drawer.
- **Related Pages:** `/products/aloo-bhujia`, `/products/bombay-mixture`, `/products/kaju-katli`.
- **Navigation Visibility:** Top-level main navigation bar and homepage primary banner.
- **Mobile Behaviour:** Warm crimson theme with royal monument graphics, 2-column product grid.
- **SEO Relevance:** Very High ("order aloo bhujia online", "authentic ratlami sev", "North Indian namkeen").
- **Required Data:** North Indian curated product array, regional heritage text, sub-filters.

#### 05. Category Listing (`/collections/:collectionSlug`)
- **Purpose:** Targeted listing for specific snack categories (Chips & Crisps, Mixtures, Savouries, Sweets, Pickles).
- **Primary Audience:** Purpose-driven shoppers with a clear snack type preference.
- **Main User Intent:** Compare varieties within a single category (e.g., comparing 4 types of mixtures).
- **Primary CTA:** "Add to Cart".
- **Secondary CTA:** Pack size selector pill.
- **Entry Points:** Homepage arched category cards, header "Shop by Category" dropdown, breadcrumb links.
- **Exit Points:** Product detail pages, related categories, cart drawer.
- **Related Pages:** Sibling category pages, `/shop`.
- **Navigation Visibility:** Header mega dropdown and footer category columns.
- **Mobile Behaviour:** Arch-themed banner header, horizontal subcategory pills, 2-column grid.
- **SEO Relevance:** High ("Indian chips and crisps", "traditional Indian mixtures", "mithai sweets delivery").
- **Required Data:** Category metadata (title, banner graphic, description), filtered products array.

#### 06. Search Results (`/search`)
- **Purpose:** Keyword-driven product discovery with intelligent matching across names, ingredients, and regions.
- **Primary Audience:** Shoppers with explicit intent (e.g., "coconut oil chips", "ragi", "sugar free").
- **Main User Intent:** Quickly find and purchase a specific snack without browsing broad categories.
- **Primary CTA:** "Add to Cart" on matching results.
- **Secondary CTA:** "Clear Search" / "Explore Bestsellers" if no results found.
- **Entry Points:** Header search icon, search modal overlay submit, mobile search tab.
- **Exit Points:** Product detail pages, home (if zero results).
- **Related Pages:** `/shop`, `/collections/south-indian`, `/collections/north-indian`.
- **Navigation Visibility:** Header search icon and mobile bottom dock "Search" icon.
- **Mobile Behaviour:** Sticky search query input with clear button, instant live filtering.
- **SEO Relevance:** Low (set to `noindex, follow` to prevent search result duplicate indexing).
- **Required Data:** Search query string, filtered products array, matching categories suggestions, zero-state recommendations.

#### 07. Individual Product Detail (`/products/:productSlug`)
- **Purpose:** Primary conversion page with complete product story, photography, pack variants, nutrition, and purchase actions.
- **Primary Audience:** High-intent shoppers evaluating a specific snack.
- **Main User Intent:** Inspect ingredients, select pack size (100g/250g/500g), check price, verify fresh guarantee, add to cart.
- **Primary CTA:** "Add to Cart" (Solid deep maroon button).
- **Secondary CTA:** "Buy Now" / "Add to Wishlist" (Heart icon).
- **Entry Points:** Any product card link, search results, direct shared URLs, marketing campaign links.
- **Exit Points:** Cart drawer, checkout, related product cards, category breadcrumb.
- **Related Pages:** Sibling category products, paired combo suggestions.
- **Navigation Visibility:** Contextual via breadcrumbs (`Home > South Indian > Kerala Banana Chips`).
- **Mobile Behaviour:** Swipeable photo carousel, sticky bottom bar with price and "Add to Cart" button, accordion tabs for nutrition/ingredients.
- **SEO Relevance:** Critical (Rich Product Schema with price, ratings, availability, ingredients).
- **Required Data:** Full product record (images, variant SKUs, pack sizes, prices, ingredients, allergens, shelf life, trust badges, verified reviews).

#### 08. Gift Boxes (`/collections/gift-boxes`)
- **Purpose:** High-AOV curated gift hampers for festivals (Diwali, Pongal, Rakhi), weddings, and corporate gifting.
- **Primary Audience:** Gift buyers, corporate purchasers, festive family shoppers.
- **Main User Intent:** Select premium packaged assorted snack and sweet boxes with custom greeting options.
- **Primary CTA:** "Add to Cart" / "Customize Box".
- **Secondary CTA:** "Inquire Corporate Bulk Order".
- **Entry Points:** Main navigation "Gift Boxes", homepage gift hampers banner, seasonal ads.
- **Exit Points:** Product detail page, corporate contact form, cart drawer.
- **Related Pages:** `/collections/combos`, `/contact`.
- **Navigation Visibility:** Primary top-level navigation item.
- **Mobile Behaviour:** Premium gold/maroon visual framing, contents breakdown preview, 1-column card focus.
- **SEO Relevance:** High ("Indian snack gift hampers", "Diwali snack gift box", "corporate snack gifts India").
- **Required Data:** Gift boxes product array, box contents list, festive packaging tags.

#### 09. Snack Combos (`/collections/combos`)
- **Purpose:** Value-packed snack bundles pairing complementary items (e.g., "Chai-Time Combo", "South-North Sampler").
- **Primary Audience:** Value-seeking customers, families, office snack stocking.
- **Main User Intent:** Save on bundled favorites with single-click purchasing.
- **Primary CTA:** "Add Combo to Cart".
- **Secondary CTA:** "View Included Items".
- **Entry Points:** Header Shop dropdown, cart drawer upsells, product page cross-sells.
- **Exit Points:** Cart drawer, individual product details.
- **Related Pages:** `/shop`, `/collections/gift-boxes`.
- **Navigation Visibility:** Sub-navigation under Shop.
- **Mobile Behaviour:** Savings badge highlight (`Save 15%`), visual bundle composition tags.
- **SEO Relevance:** Medium ("snack combo offers", "mixed namkeen bundles").
- **Required Data:** Combo products array with bundle savings calculations and bundled item references.

---

### B. Shopping & Checkout Funnel

#### 10. Cart Drawer (Global Slide-Over Component)
- **Purpose:** Instant, frictionless cart access without page reload, driving AOV through the free shipping threshold meter.
- **Primary Audience:** Any user adding an item or clicking the header cart icon.
- **Main User Intent:** Review added items, adjust quantities, see remaining spend for free shipping, proceed to checkout.
- **Primary CTA:** "Proceed to Checkout →" (Primary button).
- **Secondary CTA:** "View Full Cart" / "Continue Shopping".
- **Entry Points:** Header cart trigger, mobile dock cart icon, automatic slide-in on product "Add to Cart".
- **Exit Points:** `/checkout`, `/cart`, or dismiss back to current page.
- **Related Pages:** `/cart`, `/checkout`.
- **Navigation Visibility:** Header badge counter and mobile bottom dock.
- **Mobile Behaviour:** Slide-up bottom sheet or full-width slide-over drawer with backdrop blur.
- **SEO Relevance:** None (Client-side interactive overlay).
- **Required Data:** Active cart line items, subtotal, shipping fee calculation, dynamic free-shipping progress (`₹500 - subtotal`).

#### 11. Dedicated Cart Page (`/cart`)
- **Purpose:** Comprehensive cart review for customers who prefer a full-page overview before proceeding to payment.
- **Primary Audience:** High-order-volume shoppers, corporate buyers, customers applying discount coupons.
- **Main User Intent:** Inspect line items, enter coupon code, verify shipping estimate, review order notes.
- **Primary CTA:** "Proceed to Checkout →".
- **Secondary CTA:** "Continue Shopping" / "Save for Later".
- **Entry Points:** Cart drawer "View Full Cart" link, direct URL.
- **Exit Points:** `/checkout`, `/shop`.
- **Related Pages:** `/checkout`, `/wishlist`.
- **Navigation Visibility:** Secondary link in cart drawer.
- **Mobile Behaviour:** Vertical stacked product rows with sticky bottom checkout summary card.
- **SEO Relevance:** Noindex (`noindex, nofollow`).
- **Required Data:** Cart store state, coupon validation service, recommended snack add-ons (cross-sells).

#### 12. Checkout (`/checkout`)
- **Purpose:** Low-friction, high-conversion 3-stage purchase completion (1. Address → 2. Delivery Options → 3. Payment).
- **Primary Audience:** Customers ready to transact.
- **Main User Intent:** Select delivery address, choose delivery speed (Standard vs Express), pay via UPI, Card, or Netbanking.
- **Primary CTA:** "Pay ₹[Total] →" / "Place Order".
- **Secondary CTA:** "Back to Shipping" / "Apply Coupon".
- **Entry Points:** Cart drawer, cart page.
- **Exit Points:** `/order-confirmation/:orderId`, `/cart` (if cancelled).
- **Related Pages:** `/shipping-policy`, `/terms`.
- **Navigation Visibility:** Minimalist checkout header (Logo + Secure SSL badge only, no distractive header links).
- **Mobile Behaviour:** Single-column accordion steps, sticky bottom payment bar, auto-fill address support.
- **SEO Relevance:** Noindex (`noindex, nofollow`).
- **Required Data:** User profile, saved addresses, delivery fee rules, GST breakdown, active payment methods (UPI, Cards, Netbanking).

#### 13. Order Confirmation (`/order-confirmation/:orderId`)
- **Purpose:** Celebrate purchase, reassure customer, provide order receipt, and establish clear delivery expectations.
- **Primary Audience:** Customer immediately following successful payment.
- **Main User Intent:** Confirm payment success, review order ID and delivery timeline, save receipt.
- **Primary CTA:** "Track Your Order →" (Links to `/track-order?id=[orderId]`).
- **Secondary CTA:** "Continue Shopping" / "Download Invoice".
- **Entry Points:** Successful payment redirect from checkout.
- **Exit Points:** `/track-order`, `/shop`, `/account/orders`.
- **Related Pages:** `/track-order`, `/account/orders/:orderId`.
- **Navigation Visibility:** None (Post-transaction landing).
- **Mobile Behaviour:** Celebratory snack graphic, itemized summary accordion, 1-click WhatsApp order update opt-in.
- **SEO Relevance:** Noindex (`noindex, nofollow`).
- **Required Data:** Order record (items, quantities, pack sizes, shipping address, payment status, tracking ID).

#### 14. Live Order Tracking (`/track-order`)
- **Purpose:** Real-time visibility into order shipment progress across 5 stages.
- **Primary Audience:** Existing customers tracking an active order.
- **Main User Intent:** Check expected delivery date, courier tracking link, and dispatch status.
- **Primary CTA:** "Track Order" (Input submit).
- **Secondary CTA:** "Contact Support" / "Reorder Snacks".
- **Entry Points:** Order confirmation CTA, tracking emails/SMS, header account menu, footer link.
- **Exit Points:** Courier partner portal, customer support, homepage.
- **Related Pages:** `/account/orders`, `/contact`.
- **Navigation Visibility:** Footer customer care column and Account menu.
- **Mobile Behaviour:** Vertical 5-step stepper with animated green progress indicators.
- **SEO Relevance:** Low (Utility page, indexed for branded "Krak and co order tracking").
- **Required Data:** Order tracking service (Order ID, current milestone, timestamp, courier name, tracking URL).

---

### C. Customer Account Portal

#### 15. Customer Login (`/account/login`)
- **Purpose:** Secure customer authentication via OTP / Email password.
- **Primary Audience:** Returning customers logging in to view order history or use saved addresses.
- **Main User Intent:** Log in quickly without password friction (Phone OTP or Email).
- **Primary CTA:** "Sign In" / "Send OTP".
- **Secondary CTA:** "Create an Account" / "Forgot Password?".
- **Entry Points:** Header account icon, checkout login prompt.
- **Exit Points:** `/account`, `/checkout`, `/account/register`.
- **Related Pages:** `/account/register`, `/account/forgot-password`.
- **Navigation Visibility:** Header account icon (when unauthenticated).
- **Mobile Behaviour:** Centered card, native keyboard auto-fill for OTP/credentials.
- **SEO Relevance:** Noindex (`noindex, nofollow`).
- **Required Data:** Auth state, session token, redirect target parameter.

#### 16. Customer Registration (`/account/register`)
- **Purpose:** New customer sign-up with welcome perks (e.g., 10% off first order).
- **Primary Audience:** First-time buyers creating an account.
- **Main User Intent:** Register name, phone, email, and password.
- **Primary CTA:** "Create Account".
- **Secondary CTA:** "Already have an account? Sign In".
- **Entry Points:** Login page link, checkout guest registration option.
- **Exit Points:** `/account`, `/shop`.
- **Related Pages:** `/account/login`, `/privacy-policy`.
- **Navigation Visibility:** Accessible via login modal/page.
- **Mobile Behaviour:** Clean single-column form with clear validation feedback.
- **SEO Relevance:** Noindex (`noindex, nofollow`).
- **Required Data:** Form registration handler, welcome coupon generation.

#### 17. Forgot Password (`/account/forgot-password`)
- **Purpose:** Password reset workflow via verified email or SMS OTP.
- **Primary Audience:** Users unable to access their account.
- **Main User Intent:** Receive reset link or verification code.
- **Primary CTA:** "Send Reset Link".
- **Secondary CTA:** "Back to Sign In".
- **Entry Points:** Login screen link.
- **Exit Points:** `/account/login`.
- **Related Pages:** `/account/login`.
- **Navigation Visibility:** None.
- **Mobile Behaviour:** Focused single-field form.
- **SEO Relevance:** Noindex (`noindex, nofollow`).
- **Required Data:** Password reset service.

#### 18. My Account Dashboard (`/account`)
- **Purpose:** Centralized hub showing recent order status, saved addresses, wishlist summary, and account shortcuts.
- **Primary Audience:** Authenticated customers.
- **Main User Intent:** Check latest order, navigate to addresses, review wishlist.
- **Primary CTA:** "View All Orders".
- **Secondary CTA:** "Manage Addresses" / "Logout".
- **Entry Points:** Header account icon (when logged in).
- **Exit Points:** Account sub-pages, `/shop`.
- **Related Pages:** `/account/orders`, `/account/addresses`, `/wishlist`.
- **Navigation Visibility:** Header account dropdown.
- **Mobile Behaviour:** Card grid with icon badges and quick-action rows.
- **SEO Relevance:** Noindex (`noindex, nofollow`).
- **Required Data:** Customer profile, recent order snippet, default address.

#### 19. Profile Settings (`/account/profile`)
- **Purpose:** Edit personal information (Name, Email, Phone number, Communication preferences).
- **Primary Audience:** Authenticated users updating details.
- **Main User Intent:** Update contact details or password.
- **Primary CTA:** "Save Changes".
- **Secondary CTA:** "Change Password".
- **Entry Points:** Account dashboard menu.
- **Exit Points:** `/account`.
- **Related Pages:** `/account`.
- **Navigation Visibility:** Account side navigation.
- **Mobile Behaviour:** Native input formatting.
- **SEO Relevance:** Noindex.
- **Required Data:** User profile state.

#### 20. Saved Addresses (`/account/addresses`)
- **Purpose:** Manage delivery address book (Home, Office, Other) for seamless checkout.
- **Primary Audience:** Frequent buyers maintaining multiple shipping locations.
- **Main User Intent:** Add, edit, or delete delivery addresses; set default address.
- **Primary CTA:** "+ Add New Address".
- **Secondary CTA:** "Edit" / "Delete" (per address card).
- **Entry Points:** Account dashboard, checkout address step.
- **Exit Points:** `/account`, `/checkout`.
- **Related Pages:** `/checkout`.
- **Navigation Visibility:** Account side navigation.
- **Mobile Behaviour:** Card stack with touch-friendly edit/delete action triggers.
- **SEO Relevance:** Noindex.
- **Required Data:** Array of saved addresses with default indicator.

#### 21. Order History (`/account/orders`)
- **Purpose:** Chronological record of all past and active orders with reorder capabilities.
- **Primary Audience:** Returning customers reviewing past purchases.
- **Main User Intent:** Review order items, reorder favorites, download invoices.
- **Primary CTA:** "Reorder" / "View Order Details".
- **Secondary CTA:** "Track Order".
- **Entry Points:** Account menu, order confirmation page.
- **Exit Points:** `/account/orders/:orderId`, `/cart`.
- **Related Pages:** `/account/orders/:orderId`, `/track-order`.
- **Navigation Visibility:** Account navigation.
- **Mobile Behaviour:** Order cards with status pills (`Delivered`, `Shipped`, `In Transit`).
- **SEO Relevance:** Noindex.
- **Required Data:** Customer order collection array with pagination.

#### 22. Individual Order Details (`/account/orders/:orderId`)
- **Purpose:** Granular breakdown of a specific order including line items, shipping address, payment method, and tax invoice.
- **Primary Audience:** Customer inspecting a past or in-transit order.
- **Main User Intent:** Inspect invoice, verify items received, trigger reorder or support.
- **Primary CTA:** "Reorder Entire Basket".
- **Secondary CTA:** "Download Invoice (PDF)" / "Need Help?".
- **Entry Points:** Order history list, confirmation page.
- **Exit Points:** `/account/orders`, `/cart`, `/contact`.
- **Related Pages:** `/track-order`, `/contact`.
- **Navigation Visibility:** None (Contextual).
- **Mobile Behaviour:** Itemized list with thumbnail images, totals breakdown, and tracking link.
- **SEO Relevance:** Noindex.
- **Required Data:** Full order schema matching `:orderId`.

#### 23. Customer Wishlist (`/wishlist`)
- **Purpose:** Curated repository of saved snack items for future purchase.
- **Primary Audience:** Shoppers planning future orders or festive gifting.
- **Main User Intent:** Move saved snacks into active cart.
- **Primary CTA:** "Move to Cart" (Solid maroon button).
- **Secondary CTA:** "Remove" / "Share Wishlist".
- **Entry Points:** Header heart icon, product card heart toggle.
- **Exit Points:** Cart drawer, product detail pages.
- **Related Pages:** `/shop`, `/cart`.
- **Navigation Visibility:** Header heart icon with badge count.
- **Mobile Behaviour:** 2-column card grid with instant "Move to Cart" trigger.
- **SEO Relevance:** Noindex (`noindex, nofollow`).
- **Required Data:** Wishlist state array synchronized with local storage and account.

---

### D. Brand, Community & Support

#### 24. About Us (`/about`)
- **Purpose:** Deep brand storytelling, founding philosophy, artisanal snack recipes, sourcing transparency, and retro pop-art culture.
- **Primary Audience:** Brand enthusiasts, foodies, first-time visitors seeking authenticity reassurance.
- **Main User Intent:** Learn who makes KRAK & CO., why coconut oil is used for banana chips, and regional culinary roots.
- **Primary CTA:** "Explore Our Snacks →" (Links to `/shop`).
- **Secondary CTA:** "Read Customer Reviews".
- **Entry Points:** Header "About Us" link, footer, homepage "Our Story" banner.
- **Exit Points:** `/shop`, `/reviews`, `/collections/south-indian`, `/collections/north-indian`.
- **Related Pages:** `/reviews`, `/shop`.
- **Navigation Visibility:** Header main navigation and footer.
- **Mobile Behaviour:** Editorial storytelling format, retro illustrations, founding timeline.
- **SEO Relevance:** Medium-High ("About KRAK & CO.", "authentic Indian snack brand story").
- **Required Data:** Brand narrative content, artisanal process highlights, founders' note.

#### 25. Customer Reviews Wall (`/reviews`)
- **Purpose:** Comprehensive social proof showcase featuring 25,000+ customer testimonials, ratings breakdown, and verified buyer snack photos.
- **Primary Audience:** Cautious prospective buyers seeking third-party validation.
- **Main User Intent:** Read unfiltered feedback from real snack buyers across India.
- **Primary CTA:** "Shop Our Bestsellers →".
- **Secondary CTA:** "Write a Review".
- **Entry Points:** Homepage reviews section, footer, product page reviews link.
- **Exit Points:** Product detail pages, `/shop`.
- **Related Pages:** Sibling product pages, `/about`.
- **Navigation Visibility:** Footer and homepage testimonial links.
- **Mobile Behaviour:** Interactive star distribution chart (5★ to 1★), filter by snack type, verified buyer cards.
- **SEO Relevance:** High (Review schema rich snippets for Google search).
- **Required Data:** Aggregated rating score (4.8/5), star distribution counts, verified reviews array.

#### 26. Contact Us (`/contact`)
- **Purpose:** Direct communication channel for customer support, bulk/corporate gifting inquiries, and feedback.
- **Primary Audience:** Customers needing order support, business buyers requesting corporate hampers.
- **Main User Intent:** Submit support ticket, find customer care email/WhatsApp, ask about bulk pricing.
- **Primary CTA:** "Send Message" (Form submit).
- **Secondary CTA:** "Chat on WhatsApp" (Direct external link).
- **Entry Points:** Footer customer service column, order tracking page, help prompts.
- **Exit Points:** Homepage, FAQ.
- **Related Pages:** `/faq`, `/track-order`.
- **Navigation Visibility:** Footer utility navigation.
- **Mobile Behaviour:** Clean contact form with one-tap WhatsApp integration button.
- **SEO Relevance:** Medium ("Krak and Co customer care", "contact snack supplier").
- **Required Data:** Support contact details, inquiry form submission endpoint.

#### 27. Frequently Asked Questions (`/faq`)
- **Purpose:** Self-service resolution of common questions regarding delivery timelines, ingredients, shelf life, and ordering.
- **Primary Audience:** Pre-purchase and post-purchase customers with operational inquiries.
- **Main User Intent:** Find immediate answers without contacting customer support.
- **Primary CTA:** "Still have questions? Contact Us".
- **Secondary CTA:** "Start Shopping".
- **Entry Points:** Header help prompts, footer customer care links, checkout help links.
- **Exit Points:** `/contact`, `/shipping-policy`, `/shop`.
- **Related Pages:** `/shipping-policy`, `/returns-policy`, `/contact`.
- **Navigation Visibility:** Footer customer care column.
- **Mobile Behaviour:** Categorized accordion tabs with instant search filter.
- **SEO Relevance:** High (FAQ Schema structured data for search engines).
- **Required Data:** FAQ question-answer database categorized into Shipping, Products, Storage, and Payments.

---

### E. Policies & Utility Pages

#### 28. Shipping & Delivery Policy (`/shipping-policy`)
- **Purpose:** Complete transparency regarding delivery timelines (3-5 days Standard, 1-2 days Express), shipping fees (₹49 or Free > ₹499), and pan-India coverage.
- **Primary Audience:** Customers verifying delivery feasibility before purchasing.
- **Main User Intent:** Check if their PIN code is serviced and when snacks will arrive.
- **Primary CTA:** "Start Shopping →".
- **Secondary CTA:** "Track Your Order".
- **Entry Points:** Cart drawer, checkout shipping step, footer.
- **Exit Points:** `/shop`, `/checkout`.
- **Navigation Visibility:** Footer legal & help menu.
- **Mobile Behaviour:** Clean readable typography with clear delivery timeline tables.
- **SEO Relevance:** Medium.
- **Required Data:** Policy text, courier partners, dispatch timelines.

#### 29. Returns & Refund Policy (`/returns-policy`)
- **Purpose:** Clear terms regarding perishable food item returns, damaged package replacements, and refund processing.
- **Primary Audience:** Customers needing reassurance on freshness guarantees or dealing with transit damage.
- **Main User Intent:** Understand policy on transit damage, missing items, or quality claims.
- **Primary CTA:** "Report an Issue / Contact Us".
- **Secondary CTA:** "Read FAQs".
- **Entry Points:** Checkout guarantee badges, footer.
- **Exit Points:** `/contact`, `/faq`.
- **Navigation Visibility:** Footer legal menu.
- **Mobile Behaviour:** Clear highlighted alert boxes explaining replacement guarantee.
- **SEO Relevance:** Medium.
- **Required Data:** Return eligibility criteria, refund timeline (3-5 business days).

#### 30. Cancellation Policy (`/cancellation-policy`)
- **Purpose:** Explain window for order cancellation prior to dispatch.
- **Primary Audience:** Customers wishing to modify or cancel an order immediately after checkout.
- **Main User Intent:** Cancel order within dispatch cutoff.
- **Primary CTA:** "Go to My Orders".
- **Secondary CTA:** "Contact Support".
- **Entry Points:** Order confirmation email/page, footer.
- **Exit Points:** `/account/orders`, `/contact`.
- **Navigation Visibility:** Footer legal menu.
- **Mobile Behaviour:** Focused readable document.
- **SEO Relevance:** Low.
- **Required Data:** Cancellation rules and cut-off windows.

#### 31. Privacy Policy (`/privacy-policy`)
- **Purpose:** Compliance with data protection regulations regarding customer data, phone numbers, and payment details.
- **Primary Audience:** Privacy-conscious shoppers.
- **Main User Intent:** Verify how personal and payment information is stored and protected.
- **Primary CTA:** "Accept & Continue".
- **Entry Points:** Checkout footer, registration form, main footer.
- **Exit Points:** Homepage.
- **Navigation Visibility:** Footer legal menu.
- **Mobile Behaviour:** Structured readable legal text.
- **SEO Relevance:** Low.
- **Required Data:** Standard compliant privacy statements.

#### 32. Terms & Conditions (`/terms`)
- **Purpose:** Commercial terms of service for purchasing snacks on KRAK & CO.
- **Primary Audience:** General legal compliance.
- **Main User Intent:** Review store terms, pricing, and liability limitations.
- **Primary CTA:** "Return to Shop".
- **Entry Points:** Checkout agreement link, footer.
- **Exit Points:** Homepage.
- **Navigation Visibility:** Footer legal menu.
- **Mobile Behaviour:** Structured legal document.
- **SEO Relevance:** Low.
- **Required Data:** Standard commercial terms of sale.

#### 33. Custom 404 Error Screen (Global Fallback)
- **Purpose:** Delightful recovery experience for broken or outdated links with brand humor ("Looks like someone munched this page!").
- **Primary Audience:** Lost visitors on invalid URLs.
- **Main User Intent:** Recover navigation and discover active snack categories.
- **Primary CTA:** "Back to Homepage" (Solid maroon button).
- **Secondary CTA:** "Explore Bestsellers".
- **Entry Points:** Any non-matching route.
- **Exit Points:** `/`, `/shop`, `/collections/south-indian`.
- **Navigation Visibility:** None (Automatic error boundary).
- **Mobile Behaviour:** Retro illustrated character with empty snack bowl, 1-tap return button.
- **SEO Relevance:** Non-indexed (`404 HTTP status`).
- **Required Data:** 4 featured bestseller snack shortcuts for recovery.

