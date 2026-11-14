# KRAK & CO. — SHOP ALL TEST REPORT (PHASE 11)

**Document:** Functional, Interaction, Filter & Cross-Device Test Results  
**Brand:** KRAK & CO. — Authentic Indian Snacks  
**Date:** November 2026  

---

## 1. Test Execution Matrix

| Test ID | Test Scenario | Expected Outcome | Actual Result | Status |
|---|---|---|---|---|
| TC-01 | Initial page load (`/shop`) | Renders 8 snacks on page 1, count says "Showing 8 of 14", pagination shows 2 pages | Rendered 8 cards, count accurate, page 1 active | **PASS** |
| TC-02 | Region filter selection | Selecting "South Indian" updates URL to `?region=south-indian`, shows 8 items | URL updated, filtered accurately | **PASS** |
| TC-03 | Combined filtering | Selecting South Indian + Chips & Crisps updates URL to `?region=south-indian&category=chips-crisps`, shows 2 items | Exactly 2 items rendered (Banana chips, Tapioca chips) | **PASS** |
| TC-04 | Active chips dismissal | Clicking "×" on South Indian chip removes region filter, keeps Chips & Crisps active | Filter removed, product count updated instantly | **PASS** |
| TC-05 | Clear All action | Clicking "Clear All" resets URL to `/shop`, displays all 14 snacks | Catalog reset to full dataset | **PASS** |
| TC-06 | Sorting: Price Low to High | Selecting `price-asc` updates URL to `?sort=price-asc`, reorders items starting with lowest entry price | Correctly sorted by ascending price | **PASS** |
| TC-07 | Pagination navigation | Clicking page "2" updates URL to `?page=2`, renders remaining 6 items | Page 2 rendered items 9-14 with 200 OK | **PASS** |
| TC-08 | Mobile Filter Drawer | Clicking "Filters (N)" on 375px opens slide-in drawer, displays all accordions, body scroll locks | Drawer opens smoothly, focus trapped, close works | **PASS** |
| TC-09 | Quick Add variant dialog | Clicking "ADD TO CART" on multi-variant product opens `QuickAddModal` | Modal displays pack sizes, quantity selector, total price | **PASS** |
| TC-10 | Empty state rendering | Applying mutually exclusive filters (`North Indian` + `Pickles & Sides`) renders EmptyState | "No snacks match your filters" displayed with Clear All button | **PASS** |
| TC-11 | Production build | `npm run build` executes with zero compilation errors | Built all 30 routes successfully with exit code 0 | **PASS** |

---

## 2. Screenshot Visual Evidence

1. **Desktop Shop View (1280px):** `/tmp/shop_desktop.png` (Verified: Breadcrumbs, Header, Shortcuts, Sidebar, Toolbar, 4-Col Grid, Pagination, Discovery cross-sells).
2. **Mobile Shop View (375px):** `/tmp/shop_mobile.png` (Verified: Compact header, 2-Col Grid, Filters button with badge, touch shortcuts).
3. **Faceted Filter State:** `/tmp/shop_filtered.png` (Verified: Multi-filter combination, active chips, matching count).
4. **Empty State:** `/tmp/shop_empty_state.png` (Verified: Frown icon, recovery guidance, Clear All Filters button).
