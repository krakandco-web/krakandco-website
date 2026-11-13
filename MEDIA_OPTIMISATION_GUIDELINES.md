# KRAK & CO. — MEDIA OPTIMISATION GUIDELINES (PHASE 05)

**Document:** Asset Compression, Format Standardization & Digital Performance Budgets  
**Author:** Lead Frontend Performance Engineer & Digital Asset Specialist  
**Date:** November 2026

---

## 1. Digital Performance Budgets

To achieve sub-second page loads on Indian mobile networks (4G/5G), all media assets adhere to strict payload limits:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PAYLOAD BUDGET REGISTRY                         │
├──────────────────────┬─────────────┬─────────────┬─────────────────────┤
│ ASSET CATEGORY       │ FORMAT      │ TARGET SIZE │ MAXIMUM CEILING     │
├──────────────────────┼─────────────┼─────────────┼─────────────────────┤
│ Vector Logos & Icons │ SVG         │ 1 KB – 3 KB │ 5 KB                │
│ Product Card Photos  │ WebP / AVIF │ 25 KB – 40 KB│ 50 KB               │
│ PDP Gallery Images   │ WebP / AVIF │ 60 KB – 90 KB│ 120 KB              │
│ Regional Banners     │ WebP / SVG  │ 40 KB – 70 KB│ 90 KB               │
│ Hero Banner Graphic  │ WebP / SVG  │ 80 KB – 120 KB│ 150 KB             │
└──────────────────────┴─────────────┴─────────────┴─────────────────────┘
```

---

## 2. Format Selection Protocol

1. **Scalable Vector Graphics (SVG):** Mandatory for all logos, brand emblems, trust badges, decorative starbursts, architectural motifs, and UI illustrations. SVGs must be run through an SVGO optimizer to strip XML metadata, comments, and unused defs.
2. **WebP & AVIF:** Mandatory for all photographic product assets and lifestyle imagery. AVIF provides ~30% higher compression efficiency than WebP for high-texture snacks (banana chips, fried sev).
3. **JPEG:** Reserved strictly as a legacy fallback for browsers lacking WebP/AVIF support.
4. **PNG:** Restricted to situations requiring lossless raster alpha transparency.

---

## 3. Automated Next.js Media Pipeline Integration

During upcoming frontend scaffolding, image assets will be served using `next/image`:
- **Format Negotiation:** Next.js automatically inspects the client's `Accept` HTTP header and delivers AVIF or WebP accordingly.
- **Responsive Sizing Definition:**
  ```tsx
  <Image
    src="/assets/products/kerala-banana-chips.webp"
    alt="Fresh crispy Kerala banana chips fried in cold-pressed coconut oil"
    width={400}
    height={400}
    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
    loading="lazy"
  />
  ```
- **EXIF Stripping:** All camera metadata, GPS tags, and color profiles are automatically stripped during asset optimization.

