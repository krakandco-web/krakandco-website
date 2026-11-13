# KRAK & CO. — COMPONENT VISUAL SPECIFICATIONS (PHASE 04)

**Document:** Comprehensive UI Component Visual Treatment, States & Design Tokens  
**Author:** Lead UI Designer & Design Systems Architect  
**Date:** November 2026

---

## 1. Button System

All buttons maintain a tactile, high-conversion visual treatment with bold typography and clear state transitions:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        BUTTON SYSTEM SPECIFICATION                     │
├─────────────┬───────────┬───────────┬──────────────┬───────────────────┤
│ VARIANT     │ BG COLOR  │ TEXT COLOR│ BORDER       │ HOVER STATE       │
├─────────────┼───────────┼───────────┼──────────────┼───────────────────┤
│ Primary     │ #7A1C1C   │ #FFF8EE   │ None         │ #581111 (Darken)  │
│ Secondary   │ #E6AC2A   │ #262321   │ None         │ #C8830E (Amber)   │
│ Outline     │ Transparent│ #7A1C1C  │ 2px #7A1C1C  │ #7A1C1C on #FFF8EE│
│ Ghost       │ Transparent│ #262321  │ None         │ #F3E4C5 (Subtle)  │
│ Destructive │ #B52C23   │ #FFF8EE   │ None         │ #921E16           │
└─────────────┴───────────┴───────────┴──────────────┴───────────────────┘
```

### 1.1 Sizing & Dimensions
- **Large Button (Hero & Checkout):** Height `48px`, padding `12px 28px`, font size `16px` Semi-Bold, border radius `9999px` (Pill) or `8px` (`rounded-lg`).
- **Medium Button (Default & Product Card):** Height `42px`, padding `10px 20px`, font size `14px` Semi-Bold, border radius `8px`.
- **Small Button (Table & Micro actions):** Height `34px`, padding `6px 14px`, font size `13px` Medium, border radius `6px`.
- **Touch Target Safeguard:** All mobile buttons enforce a minimum clickable boundary of `44×44px`.

### 1.2 Interactive State Rules
- **Hover:** Smooth background darkening (150ms ease-out).
- **Active / Tap:** `transform: scale(0.98)` for tactile feedback.
- **Focus-Visible:** `outline: 2px solid #7A1C1C; outline-offset: 2px;` for WCAG 2.2 AA accessibility.
- **Disabled:** `opacity: 0.5; cursor: not-allowed; pointer-events: none;`.
- **Loading:** Renders centered CSS spinner in text color; button maintains exact width to prevent layout jump.

---

## 2. Form Input System

Form inputs must provide frictionless data entry with high-contrast text:
- **Default State:** Background `#FFFFFF`, border `1.5px solid #F2DFBA`, text `#262321`, height `46px`, padding `0 16px`, border radius `8px`.
- **Placeholder:** `#8C8178` (Muted warm sand).
- **Focus State:** Border `#7A1C1C`, box shadow `0 0 0 3px rgba(122, 28, 28, 0.12)`.
- **Error State:** Border `#B52C23`, box shadow `0 0 0 3px rgba(181, 44, 35, 0.15)`.
- **Helper Text & Error Messages:** Rendered directly below input (`12px Poppins`); error messages include a small red warning icon.

---

## 3. Product Card Visual Specifications

- **Container:** Pure white `#FFFFFF` surface with warm sand border `1px solid #F2DFBA/60`, rounded `12px`, overflow hidden, elevation `shadow-sm`.
- **Image Container:** Aspect ratio `1:1` square, centered padding `12px`, soft biscuit cream background `#FAF3E0/50`.
- **Wishlist Toggle:** Floating top-right circular button (`36×36px`), semi-transparent white background, border `1px solid #F2DFBA`, red heart toggle.
- **Badges:** Top-left pill badge (`Bestseller` in solid red `#B52C23` with white text, font size `11px` bold, uppercase).
- **Typography:**
  - Product Title: Poppins Semi-Bold 15px, color `#262321`, line-clamp-1.
  - Price & Weight: Deep Maroon bold `₹149` paired with regular `#8C8178` `250g`.
  - Rating: Gold star `#E6AC2A` with `4.8 (2.3k)` in `13px` Medium.
- **Button:** Solid Deep Maroon `#7A1C1C` with white text `Add to Cart`.

---

## 4. Architectural Category Arches (`CategoryArches.tsx`)

Inspired by traditional Indian biscuit tin framing and matchbox art:
- **Card Shape:** Dome / Arch-topped silhouette: `border-radius: 9999px 9999px 12px 12px` (top half perfectly curved, bottom corners subtly rounded).
- **Border:** Dual concentric border rules in warm sand `#E8D5B5` mimicking classical lithographic printing frames.
- **Background:** Warm cream `#FAF3E0` with subtle hover elevation (`hover:-translate-y-1 hover:shadow-md`).
- **Snack Visual:** Centered appetizing photograph floating within the arch.
- **Category Label:** Poppins Semi-Bold 15px, centered below the arch.

---

## 5. Overlay & Feedback Components

### 5.1 Slide-Over Cart Drawer
- **Backdrop:** Semi-transparent dark overlay (`rgba(38, 35, 33, 0.5)`) with `backdrop-filter: blur(4px)`.
- **Panel:** Warm canvas surface `#FFF8EE`, width `400px` (desktop) or `100vw` (mobile), elevation `shadow-2xl`.
- **Free Shipping Meter:** 
  - Track: Deep cream `#F3E4C5`, height `8px`, rounded `9999px`.
  - Indicator: Animated forest green gradient (`#285F49` to `#3D8B6B`), dynamic width.

### 5.2 Modals & Dialogs
- **Panel:** Pure white surface `#FFFFFF`, rounded `16px`, border `1px solid #F2DFBA`, centered in viewport with smooth scale-in animation (200ms).

### 5.3 Toast Notifications
- **Design:** Compact floating pill at bottom-right (desktop) or top-center (mobile). Deep maroon or forest green background, white text, subtle shadow, auto-dismiss in 3.5 seconds.

