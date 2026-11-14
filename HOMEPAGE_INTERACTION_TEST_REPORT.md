# KRAK & CO. — Homepage Interaction & Functional Test Report

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 10 — Complete Homepage Development & Conversion Optimisation  
**Date:** November 2026  
**Status:** PASS (100% Functional Test Coverage)  

---

## 1. Interactive Elements Test Matrix

| Interaction | Trigger Element | Expected Action | Actual Behavior | Result |
|---|---|---|---|---|
| **Primary Hero CTA** | "Shop Now →" | Navigates to `/shop` | Routes immediately to full catalog | **PASS** |
| **Secondary Hero CTA** | "Explore Collections" | Navigates to `/collections/south-indian` | Routes to South Indian collection | **PASS** |
| **Category Card Click** | Chips & Crisps avatar | Navigates to `/collections/chips-crisps` | Opens Chips collection | **PASS** |
| **Regional Card CTA** | "Explore South Indian" | Navigates to `/collections/south-indian` | Routes to South Indian collection | **PASS** |
| **Regional Card CTA** | "Explore North Indian" | Navigates to `/collections/north-indian` | Routes to North Indian collection | **PASS** |
| **Bestsellers Quick Add**| "Add to Cart" button | Triggers cart action and toast popup | Floating green toast: "Added to Cart! 1x [Name] (250g)" | **PASS** |
| **Wishlist Toggle** | Heart icon on card | Toggles heart fill; triggers toast | Toast: "Saved to Wishlist" / "Removed from Wishlist" | **PASS** |
| **Product Detail Link** | Card title or image | Navigates to `/products/[productSlug]` | Opens corresponding PDP | **PASS** |
| **Bestsellers View All**| "View All →" | Navigates to `/shop?filter=bestsellers` | Routes to filtered catalog | **PASS** |
| **Gifting Banner CTA** | "Explore Gift Boxes" | Navigates to `/gift-boxes` | Routes to gift boxes catalog | **PASS** |
| **Bundle Card Quick Add**| "Add to Cart" on combo | Adds bundle; shows toast notification | Toast: "Bundle Added to Cart!" with price | **PASS** |
| **Brand Story CTA** | "Our Story →" | Navigates to `/about` | Opens About page | **PASS** |
| **Announcement Bar** | Prev/Next arrows | Cycles through announcements | Text transitions smoothly; pauses on hover | **PASS** |
| **Newsletter Subscribe**| Submit email in footer | Validates email; displays confirmation | Shows "Welcome to the Crunch Club! Check your inbox" | **PASS** |

