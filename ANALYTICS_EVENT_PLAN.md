# KRAK & CO. — ANALYTICS EVENT PLAN & EXPERIMENTATION FRAMEWORK (PHASE 03)

**Document:** Conversion Analytics Measurement, Telemetry Events & A/B Testing Blueprint  
**Author:** Lead Conversion Analyst & Data Architect  
**Date:** November 2026

---

## 1. Analytics Architecture & Event Taxonomy

To ensure data-driven decision making once the storefront is live, all key interactions follow the **GA4 / E-commerce Standard Event Schema**.

---

## 2. Core Conversion Telemetry Events

| Metric Name | Event Name | Trigger Location | Recommended Event Properties | Business Meaning & Why It Matters |
|---|---|---|---|---|
| **View Item List** | `view_item_list` | Homepage Bestsellers, Collection pages, Category pages | `item_list_id`, `item_list_name`, `items: [{ item_id, item_name, price, item_category, item_variant }]` | Measures product impression volume and card visibility across catalog surfaces. |
| **Select Item** | `select_item` | Click on any product card or arch | `item_list_name`, `item_id`, `item_name`, `position` | Tracks which snacks attract the highest organic interest and card click-through rate (CTR). |
| **View Item (PDP)** | `view_item` | Product Detail Page load | `item_id`, `item_name`, `price`, `item_category`, `item_region`, `spice_level`, `cooking_medium` | Baseline denominator for PDP-to-Cart conversion rate. |
| **Pack Size Selected**| `select_variant`| PDP pack size pill toggle | `item_id`, `pack_size`, `price`, `previous_pack_size` | Identifies whether customers prefer trial sizes (100g) or family value packs (500g). |
| **Add to Cart** | `add_to_cart` | Click "Add to Cart" (Card or PDP) | `item_id`, `item_name`, `price`, `quantity`, `pack_size`, `source: "pdp" \| "card_quick_add"` | Primary conversion action; measures purchase intent and quick-add efficiency. |
| **Remove from Cart**| `remove_from_cart`| Click trash icon in Cart Drawer | `item_id`, `item_name`, `price`, `quantity` | Pinpoints product dissatisfaction or cart value trimming. |
| **View Cart** | `view_cart` | Cart Drawer or `/cart` page open | `cart_subtotal`, `items_count`, `free_shipping_remaining` | Measures cart engagement and monitors free shipping threshold effectiveness. |
| **Threshold Crossed**| `free_shipping_unlocked` | Cart subtotal reaches ≥ ₹499 | `cart_subtotal`, `items_count` | Evaluates if the gamified progress bar successfully pushes order totals over ₹499. |
| **Begin Checkout** | `begin_checkout` | Click "Proceed to Checkout" | `cart_subtotal`, `items_count`, `coupon_applied` | Indicates transition from browsing/curating to active purchasing. |
| **Add Shipping Info**| `add_shipping_info`| Checkout Step 1 completion | `shipping_tier: "standard" \| "express"`, `delivery_pin`, `city`, `state` | Identifies regional drop-offs and delivery fee friction. |
| **Add Payment Info** | `add_payment_info` | Checkout Step 2 completion | `payment_type: "upi" \| "card" \| "netbanking" \| "cod"` | Tracks payment preference adoption (especially UPI vs Cards in India). |
| **Purchase** | `purchase` | Payment success redirect | `transaction_id`, `value`, `shipping`, `tax`, `coupon`, `items: [...]` | Gross Merchandise Value (GMV) realization; primary revenue metric. |
| **Search Initiated** | `search` | Search overlay input submit | `search_term`, `results_count` | Reveals unmet snack cravings, regional dialect terms, and catalog gaps. |
| **Wishlist Toggle** | `add_to_wishlist` | Heart icon click | `item_id`, `item_name`, `action: "add" \| "remove"` | Captures latent purchase intent for future marketing re-engagement. |

---

## 3. High-Leverage A/B Testing Hypotheses

Once baseline traffic is established, the following structured experiments should be conducted:

### Test 1: Homepage Hero Primary CTA Wording
- **Hypothesis:** Changing *"Shop Now"* to *"Explore Snacks South to North"* will increase homepage-to-catalog click-through by > 12% by emphasizing regional curiosity.
- **Variant A (Control):** `Shop Now →`
- **Variant B:** `Explore Snacks South to North →`
- **Primary Metric:** Hero CTA Click-Through Rate.

### Test 2: Free Shipping Threshold Display in Cart
- **Hypothesis:** Presenting the remaining amount dynamically (e.g. *"Add ₹72 more for Free Shipping"*) will drive higher AOV than a static text banner (*"Free shipping on orders above ₹499"*).
- **Variant A (Static):** Static text label.
- **Variant B (Dynamic Progress Bar):** Animated visual meter with dynamic rupee calculation.
- **Primary Metric:** Average Order Value (AOV) and % of carts reaching ≥ ₹499.

### Test 3: Product Card Quick-Add vs. View Options
- **Hypothesis:** Enabling 1-click "Add to Cart" defaulting to the popular 250g pack will increase add-to-cart rate by > 15% compared to forcing customers onto the PDP.
- **Variant A (Direct Add):** 1-Click `Add to Cart` (defaults to 250g).
- **Variant B (Modal Selector):** Opens a quick-select pack size modal before adding.
- **Primary Metric:** Homepage-to-Cart Conversion Rate and items per transaction.

