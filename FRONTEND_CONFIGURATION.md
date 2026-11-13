# KRAK & CO. — FRONTEND CONFIGURATION SPECIFICATION (PHASE 06)

**Document:** Compiler Tooling, Linter Rules, Bundler Flags & CSS Configurations  
**Author:** Senior Frontend Architect & Tooling Engineer  
**Date:** November 2026

---

## 1. TypeScript Configuration (`tsconfig.json`)

TypeScript is configured with maximum type safety:
- **`strict: true`:** Enables strict null checks, strict function types, and strict property initialization.
- **`noEmit: true`:** Next.js bundler handles JavaScript transpilation; TypeScript functions purely as a type checker.
- **`moduleResolution: "bundler"`:** Modern ES module resolution matching Next.js App Router rules.
- **Path Aliasing:** `@/*` maps directly to `./src/*`, enabling clean imports across features (e.g. `@/components/ui/Button`, `@/lib/utils`).

---

## 2. Next.js Configuration (`next.config.mjs`)

- **`reactStrictMode: true`:** Enables double-render checks in development to catch side-effects and hydration issues early.
- **`poweredByHeader: false`:** Strips `x-powered-by: Next.js` header for security hygiene.
- **`images`:** Configures modern image formats (`image/avif`, `image/webp`) with responsive device breakpoints.

---

## 3. Tailwind CSS & Design Token Integration (`tailwind.config.ts`)

Directly extends Tailwind's theme with KRAK & CO. tokens:
- **Colors:**
  - `brand-maroon` (`#7A1C1C`) & `brand-maroon-dark` (`#581111`)
  - `brand-vermilion` (`#B52C23`)
  - `brand-mustard` (`#E6AC2A`) & `brand-mustard-dark` (`#C8830E`)
  - `brand-forest` (`#285F49`) & `brand-forest-dark` (`#14361E`)
  - `brand-blue` (`#244B6B`)
  - `surface-canvas` (`#FFF8EE`)
  - `surface-card` (`#FFFFFF`)
  - `surface-parchment` (`#F3E4C5`)
  - `surface-sand` (`#F2DFBA`)
  - `surface-inverse` (`#262321`)
  - `text-primary` (`#262321`), `text-secondary` (`#5A524D`), `text-muted` (`#8C8178`), `text-price` (`#7A1C1C`)
- **Font Families:**
  - `font-display`: Mapped to `var(--font-playfair)`
  - `font-body`: Mapped to `var(--font-poppins)`
- **Borders & Shadows:**
  - `rounded-arch`: `9999px 9999px 12px 12px` (Classical biscuit tin arch shape)
  - `shadow-retro`: `3px 4px 0px 0px #262321` (Solid matchbox pop-art drop shadow)

---

## 4. Code Quality & Linting (`.eslintrc.json` & `.prettierrc`)

- Extends `next/core-web-vitals` with zero suppressed warnings.
- Enforces single quotes, semi-colons, and 2-space indentation.

