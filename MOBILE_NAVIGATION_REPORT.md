# KRAK & CO. — Mobile Navigation & Drawer Implementation Report

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 09 — Global Storefront Layout, Header, Navigation, Mega Menu & Footer  
**Location:** `src/components/navigation/MobileNavDrawer.tsx`  

---

## 1. Mobile Drawer Architecture

Mobile screen real estate is maximized by condensing secondary and tertiary links inside a slide-over drawer accessible via the hamburger icon (`Menu` from `lucide-react`):

- **Placement:** Left slide-in (`placement="left"`).
- **Width:** Responsive (100% on viewports < 400px; `max-w-md` on viewports ≥ 400px).
- **Body Lock:** Automatically locks body scrolling (`overflow: hidden`) when open, preventing background page jump.

---

## 2. Drawer Content Hierarchy

1. **Brand Header:** Full vector logo (`brand-logo-primary.svg`) and close button (`✕`).
2. **Search Box Input:** Direct affordance linking into `/search` with search icon.
3. **Core Shopping Links:**
   - Shop All Snacks (`/shop`)
   - South Indian Classics (`/collections/south-indian`) with "Coconut Oil" badge
   - North Indian Favourites (`/collections/north-indian`) with "Rich Spices" badge
   - Festive Gift Boxes (`/gift-boxes`)
   - Snack Combos & Trial Boxes (`/combos`)
4. **Interactive Category Accordion:**
   - Smooth dropdown revealing Chips & Crisps, Mixtures & Namkeen, Murukku & Savouries, Sweets & Mithai, and Pickles & Sides.
5. **Customer Care & Account Area:**
   - My Account & Orders (`/account`)
   - My Wishlist (`/wishlist`)
   - Track Your Order (`/track-order`)
   - WhatsApp & Support (`/contact`)
6. **Sticky Footer:**
   - Free shipping indicator ("Free Shipping on Orders Above ₹499!").
