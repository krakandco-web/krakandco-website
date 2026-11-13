# KRAK & CO. — NAVIGATION ARCHITECTURE (PHASE 02)

**Document:** Navigation Hierarchy, Menus, & Viewport Systems  
**Author:** Lead Information Architect & UX Strategist  
**Date:** November 2026  
**Reference Alignment:** Approved Storefront Artboard (KRAK & CO.)

---

## 1. Executive Summary

Navigation in an e-commerce food storefront must balance **instant product accessibility** with **cultural discovery**. Customers arrive with distinct mental models:
1. **Regional Searchers:** Looking specifically for Southern snacks (e.g., authentic coconut-oil banana chips) or Northern savouries (e.g., spicy Ratlami sev).
2. **Category Searchers:** Looking for broad food types (Mixtures, Savouries, Crisps, Sweets, Gift Boxes).
3. **Occasion & Gift Searchers:** Looking for festive hampers and combos.
4. **Impulse Buyers:** Drawn directly to Bestsellers and flash offers.

The KRAK & CO. navigation architecture establishes a multi-tiered system that addresses all four mental models across desktop, tablet, and mobile devices without cognitive clutter.

---

## 2. Desktop Navigation Architecture

### 2.1 Announcement Bar (Top Tier)
- **Visual Design:** Deep heritage maroon background (`#7A1C1C`), crisp warm cream typography (`#FFF8EE`), subtle gold separator bars.
- **Content Rotation:**
  - Slide 1: `✨ Festive Snack Boxes Now Live! | Free Shipping on Orders Above ₹499`
  - Slide 2: `🚚 Authentic Flavours Delivered Fresh Across India in 3–5 Days`
  - Slide 3: `🎁 Corporate & Bulk Snack Hampers Available — Inquire Today`
- **Interactions:** Subtle auto-rotation (6-second interval) with manual `<` `>` arrows and pause-on-hover accessibility.

### 2.2 Main Navigation Bar (Header)
Sticky header with warm cream background (`#FFF8EE`), subtle bottom border in warm sand (`#F2DFBA`), and shadow-on-scroll.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  [KRAK & CO. LOGO]    Shop ▾   South Indian   North Indian   Gift Boxes   About   [🔍] [👤] [❤️ (0)] [🛒 (3)]  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Element Inventory:
1. **Brand Logo (Left):**
   - Retro sign-painted bold typography with drop shadow.
   - Links directly to `/`.
   - Dimensions: 140px width × 44px height.
2. **Primary Navigation Links (Center-Left):**
   - **Shop ▾:** Interactive dropdown menu (detailed below).
   - **South Indian:** Direct link to `/collections/south-indian` (Green accent highlight).
   - **North Indian:** Direct link to `/collections/north-indian` (Maroon accent highlight).
   - **Gift Boxes:** Direct link to `/collections/gift-boxes` (Gold festive badge: `Festive`).
   - **About:** Direct link to `/about`.
3. **Utility Actions (Right):**
   - **Search Trigger (🔍):** Opens full-screen search modal with keyboard shortcut indicator (`⌘K` / `Ctrl+K`).
   - **Customer Account (👤):** Unauthenticated: Links to `/account/login`. Authenticated: Opens dropdown with `My Orders`, `Saved Addresses`, `Wishlist`, `Sign Out`.
   - **Wishlist Counter (❤️):** Displays saved snack count; links to `/wishlist`.
   - **Cart Trigger (🛒):** Displays active item counter badge (e.g., `3`) and subtotal on hover; clicking opens the slide-over Cart Drawer.

### 2.3 The "Shop" Navigation Menu

To avoid visual overload while offering complete discovery, the Shop dropdown is organized into a **3-column structured menu**:

```
┌───────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       SHOP KRAK & CO.                                         │
├──────────────────────────┬─────────────────────────────┬──────────────────────────────────────┤
│  BY COLLECTION           │  BY CATEGORY                │  FEATURED REGIONS                    │
├──────────────────────────┼─────────────────────────────┼──────────────────────────────────────┤
│  • Shop All Snacks       │  • Chips & Crisps           │  🌿 South Indian Classics            │
│  • Bestsellers 🔥        │  • Murukku & Savouries      │     Kerala, Tamil Nadu, Karnataka    │
│  • New Crunchy Arrivals  │  • Mixtures & Namkeen       │                                      │
│  • Snack Combos (Save)   │  • Traditional Sweets       │  🏮 North Indian Favourites          │
│  • Gift Hampers 🎁       │  • Pickles & Chutneys       │     Delhi, Rajasthan, Punjab         │
└──────────────────────────┴─────────────────────────────┴──────────────────────────────────────┘
```

#### Why This Structure Wins:
- It respects customer intent: users browse either by **snack form** (Mixture vs Chips) or by **regional origin** (South vs North).
- Column 3 features visual thumbnail cards that tease regional specialties, reinforcing brand storytelling directly in the menu.

---

## 3. Mobile Navigation Architecture

Mobile users account for over 70% of Indian e-commerce snack purchases. Mobile navigation requires **instant thumb-reachability** and zero friction.

### 3.1 Mobile Header (Top)
- **Sticky compact bar:**
  - Left: Hamburger Menu trigger (`☰`).
  - Center: KRAK & CO. compact logo.
  - Right: Search icon (`🔍`) and Cart icon with badge counter (`🛒 (3)`).

### 3.2 Mobile Slide-Over Navigation Drawer (Left)
Triggered by the hamburger icon:
- **Header:** "Namaste! Welcome to KRAK & CO." with quick Login/Register status.
- **Quick Links:**
  - `🔥 Bestsellers` (Red pill highlight)
  - `🌿 South Indian Snacks` (Green badge)
  - `🏮 North Indian Snacks` (Maroon badge)
  - `🎁 Gift Hampers & Combos` (Festive icon)
- **Accordion Categories:**
  - `Chips & Crisps`
  - `Mixtures & Namkeen`
  - `Murukku & Savouries`
  - `Traditional Sweets`
  - `Pickles & Sides`
- **Secondary Links:**
  - About Our Story
  - Track Active Order
  - Customer Reviews (4.8★)
  - Help & FAQs
  - Contact Us
- **Footer:** Direct WhatsApp Customer Support button (`Chat on WhatsApp`).

### 3.3 Mobile Bottom Dock (Persistent Sticky Navigation)
As showcased in the approved artboard, a fixed thumb-accessible bottom dock ensures 1-tap navigation across the primary conversion funnel:

```
┌────────────────────────────────────────────────────────┐
│   [🏠]         [🛍️]         [🗂️]         [🔍]      [🛒 (3)] │
│   Home         Shop      Categories     Search     Cart    │
└────────────────────────────────────────────────────────┘
```

#### Why Bottom Navigation is Mandatory for KRAK & CO.:
1. **Ergonomic Thumb Zone:** Critical navigation items remain within one-handed thumb reach regardless of phone height.
2. **Instant Cart Visibility:** Customers can check their cart balance and free-shipping progress without scrolling back to the top.
3. **Dedicated Categories Tab:** Triggers a bottom sheet showing the 6 iconic arch categories with one tap.

---

## 4. Footer Information Architecture

The footer serves as the safety net for secondary navigation, trust reinforcement, and compliance:

```
┌───────────────────────────────────────────────────────────────────────────────────────────────┐
│ [LOGO] KRAK & CO.                     SHOP                 ABOUT & HELP         LEGAL & TRUST │
│ Authentic Indian Snacks               • South Indian       • Our Story          • Shipping    │
│ South to North.                       • North Indian       • Customer Reviews   • Returns     │
│ Traditional recipes, fresh crunch.    • Mixtures           • Track Order        • Privacy     │
│ [Instagram] [YouTube] [WhatsApp]      • Chips & Crisps     • FAQ & Support      • Terms       │
│                                       • Gift Boxes         • Contact Us         • FSSAI Lic.  │
├───────────────────────────────────────────────────────────────────────────────────────────────┤
│ 💳 WE ACCEPT: UPI (GPay, PhonePe, Paytm) | Visa | MasterCard | RuPay | Netbanking             │
│ © 2026 KRAK & CO. All Rights Reserved. Crafted with pride in India.                          │
└───────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Navigation State & Interaction Rules

| Trigger | Action | Target View | Animation / Timing |
|---|---|---|---|
| **Click "Shop ▾"** | Open Mega Menu | Dropdown under header | Slide down + fade in (150ms) |
| **Click "Cart (3)"** | Open Slide-Over Drawer | Right-hand drawer | Slide in from right (250ms cubic-bezier) |
| **Click "Search" (🔍)**| Open Search Overlay | Modal overlay | Fade in + auto-focus input (100ms) |
| **Click Hamburger (☰)**| Open Mobile Menu | Left drawer | Slide in from left (200ms) |
| **Click "Categories"** | Open Mobile Sheet | Bottom sheet | Slide up from bottom (200ms) |
| **Click Heart (❤️)** | Navigate | `/wishlist` | Instant route transition |
| **Scroll Down (>120px)**| Minimize Header | Sticky compact header | Smooth height transition (68px ➔ 56px) |

