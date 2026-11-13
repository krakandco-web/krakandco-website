# KRAK & CO. — ACCESSIBILITY DESIGN STANDARDS (PHASE 04)

**Document:** Inclusive Design, WCAG 2.2 Level AA Compliance & Assistive Technology Standards  
**Author:** Lead Accessibility (a11y) Auditor & Design Systems Architect  
**Date:** November 2026

---

## 1. Accessibility Policy & Target Standard

KRAK & CO. is engineered from the ground up to achieve **WCAG 2.2 Level AA compliance** across all digital touchpoints. Accessibility is treated as an architectural foundation, not a post-launch cosmetic patch.

---

## 2. Core WCAG 2.2 AA Compliance Requirements

### 2.1 Color Contrast Ratios (Rule 1.4.3 & 1.4.11)
- **Normal Text (< 18pt / 24px):** Minimum contrast ratio of **4.5 : 1**.
  - Ink Black `#262321` on Cream `#FFF8EE` = **13.84 : 1** (Exceeds Level AAA).
  - Deep Maroon `#7A1C1C` on Cream `#FFF8EE` = **9.12 : 1** (Exceeds Level AAA).
- **Large Text (≥ 18pt / 24px):** Minimum contrast ratio of **3.0 : 1**.
- **UI Components & Graphical Controls:** Minimum contrast ratio of **3.0 : 1** against adjacent backgrounds.
- **Strict Color-Blindness Constraint:** Colour is never the sole indicator of status or validity. Form errors always pair red borders with an exclamation icon and written explanatory text.

### 2.2 Focus Indicators & Keyboard Navigation (Rule 2.4.7 & 2.4.11)
- **High-Contrast Focus Ring:** All interactive elements feature a visible double focus ring: `outline: 2px solid #7A1C1C; outline-offset: 2px;`.
- **No Keyboard Traps:** Modals and slide-over drawers trap focus internally while active, and dismiss cleanly on `Escape`, returning focus to the initiating button.
- **Skip to Main Content:** A hidden anchor at the top of the DOM reveals on first `Tab` press, allowing screen reader and keyboard users to bypass global navigation directly to `<main id="main-content">`.

### 2.3 Touch Target Sizing (Rule 2.5.8)
- Every interactive element (buttons, pack size selector pills, quantity steppers, mobile bottom dock tabs) maintains a physical tap area of at least **44 × 44 CSS pixels**.

### 2.4 Semantic HTML & Screen Reader Architecture
- **Semantic Structure:** Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` landmarks.
- **Dynamic Cart Announcements:** When a user adds an item or updates quantity, an off-screen `aria-live="polite"` region announces: `"Added Kerala Banana Chips 250g to cart. Cart total is now ₹476 with free shipping unlocked."`
- **Icon Button Labels:** Every icon-only button contains an unambiguous `aria-label` (e.g. `aria-label="Add Kerala Banana Chips to wishlist"`).
- **Image Alternative Text:** All snack photography includes descriptive alt text detailing the food, oil, and packaging (e.g. `alt="Freshly fried golden Kerala banana chips in a ceramic snack bowl"`).

