# KRAK & CO. — CENTRALIZED DESIGN TOKENS SPECIFICATION (PHASE 04)

**Document:** Universal Design Tokens & Tailwind CSS Theme Integration  
**Author:** Lead Design Systems Architect & Senior Frontend Engineer  
**Date:** November 2026

---

## 1. Single Source of Truth: Token Architecture

Design tokens represent the atomic visual values of KRAK & CO. They provide a predictable, maintainable contract between design specifications and implementation code.

---

## 2. Complete Design Token Registry

### 2.1 Color Tokens
```json
{
  "color": {
    "brand": {
      "maroon": { "value": "#7A1C1C", "description": "Primary brand color, primary CTAs, active states" },
      "maroon-dark": { "value": "#581111", "description": "Primary CTA hover and pressed states" },
      "vermilion": { "value": "#B52C23", "description": "Vibrant accent, bestseller badges, error states" },
      "mustard": { "value": "#E6AC2A", "description": "Secondary brand color, star ratings, alert highlights" },
      "forest": { "value": "#285F49", "description": "South Indian collection theme, success indicators" },
      "blue": { "value": "#244B6B", "description": "Corporate gifting accents, informational alerts" }
    },
    "surface": {
      "canvas": { "value": "#FFF8EE", "description": "Main page canvas backdrop" },
      "card": { "value": "#FFFFFF", "description": "Elevated white surface for product cards" },
      "parchment": { "value": "#F3E4C5", "description": "Secondary surface for testimonials and banners" },
      "sand": { "value": "#F2DFBA", "description": "Subtle borders, dividers, architectural frame rules" },
      "inverse": { "value": "#262321", "description": "Dark surfaces and contrast headers" }
    },
    "text": {
      "primary": { "value": "#262321", "description": "High-contrast primary body and headings" },
      "secondary": { "value": "#5A524D", "description": "Muted descriptions and secondary subtitles" },
      "muted": { "value": "#8C8178", "description": "Helper copy, breadcrumbs, placeholder text" },
      "inverse": { "value": "#FFF8EE", "description": "Light text on dark and maroon surfaces" },
      "price": { "value": "#7A1C1C", "description": "Prominent price emphasis" }
    }
  }
}
```

### 2.2 Typography Tokens
```json
{
  "font": {
    "family": {
      "display": { "value": "var(--font-playfair), Georgia, serif" },
      "body": { "value": "var(--font-poppins), -apple-system, sans-serif" }
    },
    "size": {
      "2xs": { "value": "0.6875rem", "pixels": "11px" },
      "xs": { "value": "0.75rem", "pixels": "12px" },
      "sm": { "value": "0.875rem", "pixels": "14px" },
      "base": { "value": "1.0rem", "pixels": "16px" },
      "lg": { "value": "1.125rem", "pixels": "18px" },
      "xl": { "value": "1.25rem", "pixels": "20px" },
      "2xl": { "value": "1.5rem", "pixels": "24px" },
      "3xl": { "value": "1.75rem", "pixels": "28px" },
      "4xl": { "value": "2.25rem", "pixels": "36px" },
      "5xl": { "value": "3.0rem", "pixels": "48px" }
    },
    "weight": {
      "regular": { "value": "400" },
      "medium": { "value": "500" },
      "semibold": { "value": "600" },
      "bold": { "value": "700" },
      "extrabold": { "value": "800" }
    }
  }
}
```

### 2.3 Border Radius Tokens
```json
{
  "radius": {
    "none": { "value": "0px" },
    "sm": { "value": "4px" },
    "md": { "value": "8px", "description": "Standard buttons, inputs, cards" },
    "lg": { "value": "12px", "description": "Product cards, modal containers" },
    "xl": { "value": "16px", "description": "Feature banners, notification dialogs" },
    "full": { "value": "9999px", "description": "Pill buttons, badges, quantity steppers" },
    "arch": { "value": "9999px 9999px 12px 12px", "description": "Distinctive architectural category arches" }
  }
}
```

### 2.4 Box Shadow Tokens
```json
{
  "shadow": {
    "sm": { "value": "0 1px 2px 0 rgba(38, 35, 33, 0.05)" },
    "md": { "value": "0 4px 6px -1px rgba(38, 35, 33, 0.08), 0 2px 4px -2px rgba(38, 35, 33, 0.04)" },
    "lg": { "value": "0 10px 15px -3px rgba(38, 35, 33, 0.10), 0 4px 6px -4px rgba(38, 35, 33, 0.05)" },
    "2xl": { "value": "0 25px 50px -12px rgba(38, 35, 33, 0.25)", "description": "Cart drawer and modal drop shadows" }
  }
}
```

---

## 3. Tailwind CSS Integration Code Mapping

In future scaffolding phases, these tokens directly translate into `tailwind.config.ts`:

```typescript
// Proposed Tailwind Config Blueprint
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: { DEFAULT: '#7A1C1C', dark: '#581111' },
          vermilion: '#B52C23',
          mustard: '#E6AC2A',
          forest: '#285F49',
          blue: '#244B6B',
        },
        surface: {
          canvas: '#FFF8EE',
          card: '#FFFFFF',
          parchment: '#F3E4C5',
          sand: '#F2DFBA',
          inverse: '#262321',
        },
        text: {
          primary: '#262321',
          secondary: '#5A524D',
          muted: '#8C8178',
          inverse: '#FFF8EE',
          price: '#7A1C1C',
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-poppins)', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        arch: '9999px 9999px 12px 12px',
      }
    }
  }
}
```

