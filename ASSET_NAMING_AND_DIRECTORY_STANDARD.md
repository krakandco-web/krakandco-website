# KRAK & CO. — ASSET NAMING & DIRECTORY STANDARD (PHASE 05)

**Document:** Digital Asset Management (DAM), Directory Topology & Naming Protocol  
**Author:** Digital Asset Management Specialist & Senior Architect  
**Date:** November 2026

---

## 1. Directory Topology

All storefront visual assets reside strictly under the public web root in `public/assets/`:

```
public/
├── favicon.svg
└── assets/
    ├── brand/
    │   ├── logos/               # Primary, horizontal, monochrome, symbol
    │   ├── icons/               # Trust badges (authentic, coconut oil, vegetarian)
    │   └── identity/            # Brand reference artboard, guidelines
    ├── illustrations/
    │   ├── south-indian/        # Gopuram, coconut palms, regional motifs
    │   ├── north-indian/        # Royal monument, palace arches, sitar motifs
    │   ├── general/             # Empty states, 404 munched matchbox
    │   ├── characters/          # Saree connoisseur, aviator uncle
    │   └── decorative/          # Sunbursts, halftone patterns, stars
    ├── products/
    │   ├── south-indian/        # Real photography for southern savouries
    │   ├── north-indian/        # Real photography for northern namkeen
    │   ├── sweets/              # Real photography for mithai & halwa
    │   ├── mixtures/            # Real photography for spiced mixtures
    │   ├── chips/               # Real photography for banana & tapioca chips
    │   └── combos/              # Real photography for gift boxes & hampers
    ├── campaigns/
    │   ├── hero/                # Seasonal & homepage hero graphics
    │   ├── regional/            # South & North Indian feature banners
    │   ├── seasonal/            # Diwali, Pongal, New Year campaigns
    │   └── promotions/          # Combos, free shipping promo graphics
    ├── backgrounds/
    │   ├── textures/            # Paper grain, halftone scrims
    │   └── patterns/            # Retro matchbox repeating patterns
    ├── editorial/               # About us founding story photos
    └── placeholders/            # High-fidelity SVG mockups for offline dev
```

---

## 2. File Naming Standard

All asset filenames follow strict lowercase kebab-case syntax:
`[domain]-[subject]-[descriptor]-[optional-state].[extension]`

### Examples:
- **Brand Logo:** `brand-logo-primary.svg`, `brand-logo-horizontal.svg`
- **Trust Badges:** `badge-authentic-recipe.svg`, `badge-pure-coconut-oil.svg`
- **Illustrations:** `illustration-gopuram.svg`, `motif-sunburst-maroon.svg`
- **Products:** `product-kerala-banana-chips-front.webp`, `product-madurai-mixture-macro.webp`
- **Banners:** `campaign-hero-maroon-desktop.webp`, `campaign-regional-south.webp`
- **Empty States:** `empty-cart-bowl.svg`, `illustration-404-munched.svg`

### Strictly Prohibited Filename Patterns:
- **NO** spaces or camelCase (`my banner 1.jpg`, `bananaChips.PNG`).
- **NO** ambiguous versioning tags (`logo-final.png`, `logo-final-v2-edit.svg`).
- **NO** random hash camera exports (`IMG_8492.JPG`, `DSC_0021.png`).

