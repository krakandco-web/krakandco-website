# KRAK & CO. — UX FRICTION REGISTER & RESOLUTION LOG (PHASE 03)

**Document:** Identification of Cognitive Friction, Risk Severity & Engineering Solutions  
**Role:** Lead CRO Specialist & Usability Auditor  
**Date:** November 2026

---

## 1. Executive Summary

E-commerce friction occurs whenever a customer experiences cognitive overload, physical inconvenience, visual confusion, or financial anxiety during their journey. This register identifies the top 8 friction points for KRAK & CO. and details their UX and engineering resolutions.

---

## 2. Friction Register

| ID | Friction Vector | Severity | Affected Pages | UX / Behavioural Symptom | Architectural Resolution |
|---|---|---|---|---|---|
| **FR-01** | **Shipping Fee Shock** | **Critical** | Cart Drawer, Checkout | Customers abandon when unexpected delivery charges appear late in checkout. | Prominent Announcement Bar (`Free Shipping > ₹499`) + dynamic Free Shipping Progress Bar in the Cart Drawer + explicit ₹49 delivery fee displayed before checkout starts. |
| **FR-02** | **Food Freshness & Transit Breakage Anxiety** | **High** | PDP, Cart, Homepage | Concern that crispy savouries and banana chips will arrive crushed or stale. | Prominent "Triple-Layer Nitrogen Freshness Packaging" badge on PDP and Trust Strip; explicit 90-day shelf life disclosure; guaranteed replacement policy. |
| **FR-03** | **Forced Account Creation Friction** | **High** | Checkout (`/checkout`) | Mandatory password creation causes cart abandonment. | 100% Guest Checkout enabled; phone number collected solely for OTP verification and courier delivery tracking. |
| **FR-04** | **Regional Dialect & Spelling Search Failures** | **Medium** | Search Overlay (`SearchModal.tsx`) | Typing `chakli` or `muruku` returning "0 snacks found". | Synonym dictionary and fuzzy query matching in search service mapping transliterated terms to standardized taxonomy. |
| **FR-05** | **Variant / Pack Size Confusion** | **Medium** | PDP, Product Cards | Customers unsure how much 250g serves or which pack offers the best value. | Clear interactive pack size pills on PDP (`100g Trial`, `250g Most Popular`, `500g Family Pack — Save 10%`) with dynamic unit price display. |
| **FR-06** | **Mobile Keyboard Overlap on Address Form** | **Medium** | Checkout (`/checkout`) | Mobile virtual keyboard obscuring checkout action buttons. | Indian PIN code auto-fill (fills City & State in 1 step); floating sticky action button adjusted via safe-area CSS. |
| **FR-07** | **Ambiguity in Gift Box Contents** | **Medium** | Gift Boxes (`/collections/gift-boxes`) | Gifting buyers hesitant to buy sealed hampers without knowing exact snacks inside. | Visual "What's Inside" itemized breakdown with individual thumbnail pills showing exact weight and ingredients of every included snack. |
| **FR-08** | **Mobile Thumb Strain** | **Low-Medium** | Global Mobile View | Important conversion actions located at the top of tall mobile screens. | Persistent Mobile Bottom Dock (`Home`, `Shop`, `Categories`, `Search`, `Cart`) + Sticky Bottom Add-to-Cart bar on mobile PDP. |

