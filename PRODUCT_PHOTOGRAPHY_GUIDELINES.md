# KRAK & CO. — PRODUCT PHOTOGRAPHY GUIDELINES (PHASE 04)

**Document:** Commercial Food Photography Standards, Asset Specifications & Display Rules  
**Author:** Lead Food Art Director & E-Commerce Visual Specialist  
**Date:** November 2026

---

## 1. Photography Philosophy: Irresistible & Authentic Crunch

In packaged food e-commerce, the photograph is the customer's primary sensory touchpoint. The photography must convey:
- **Immediate Crunch & Freshness:** Golden frying edges, coarse sea salt flakes, visible curry leaves, cracked black pepper.
- **Recipe Authenticity:** True-to-life colors (golden turmeric yellow, deep chili red, rich roasted chickpea flour).
- **Zero Deception:** The actual product inside the bag must look identical to the imagery on screen.

---

## 2. Product Image Categories & Shot List

Every snack SKU maintains a standardized 4-image gallery:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        STANDARDIZED SHOT LIST                          │
├─────────┬───────────────────────┬──────────────────────────────────────┤
│ SHOT #  │ NAME                  │ COMPOSITION & PURPOSE                │
├─────────┼───────────────────────┼──────────────────────────────────────┤
│ Shot 01 │ Hero Product Bowl     │ Symmetrical 1:1 shot of snack bowl   │
│         │ (Listing Card Primary)│ overflowing with fresh crunch        │
├─────────┼───────────────────────┼──────────────────────────────────────┤
│ Shot 02 │ Retail Packaging      │ Crisp front-facing view of the       │
│         │                       │ nitrogen-sealed matte pouch/tin box  │
├─────────┼───────────────────────┼──────────────────────────────────────┤
│ Shot 03 │ Macro Crunch Texture  │ Extreme close-up showing golden oil  │
│         │                       │ sheen, spices, and crisp ridges      │
├─────────┼───────────────────────┼──────────────────────────────────────┤
│ Shot 04 │ Chai-Time Pairing     │ Lifestyle context with brass filter  │
│         │ (Serving Context)     │ coffee or kulhad tea accompaniment   │
└─────────┴───────────────────────┴──────────────────────────────────────┘
```

---

## 3. Technical Photography Specifications

### 3.1 Aspect Ratio & Framing
- **Standard Aspect Ratio:** Strictly `1:1` square (`1000×1000px` master; `400×400px` for listing cards).
- **Product Margin:** Snack bowl or packaging occupies exactly 75%–80% of the canvas, leaving 10%–12% breathing room on all sides.

### 3.2 Lighting & Color Calibration
- **Lighting Style:** Warm, directional natural daylight (5200K–5600K) with soft diffusion. 
- **Highlights:** Subtle specular highlights on fried edges to demonstrate fresh frying in cold-pressed coconut or groundnut oil.
- **Backgrounds:** Clean, neutral warm biscuit cream (`#FAF3E0`) or pure white (`#FFFFFF`) with a soft contact drop shadow (`rgba(38, 35, 33, 0.08)`). No busy distracting table cloths.

### 3.3 Digital Delivery & Compression
- **Format:** Next-gen **WebP** and **AVIF** formats generated dynamically via Next.js `<Image />`.
- **Quality Setting:** 85% compression balance (sub-45KB per thumbnail for sub-second mobile loading).
- **Responsive Sizes:** `sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"`.

---

## 4. Anti-Fabrication & Food Integrity Standards
- **Real Ingredients Only:** Product images must accurately reflect actual ingredients. Never retouch out natural imperfections or misrepresent size.
- **Accurate Fill Levels:** Bowls and packs must accurately depict the true serving proportions and weights (e.g. 100g vs 250g vs 500g).

