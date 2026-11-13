# KRAK & CO. — DEPENDENCY REGISTER & AUDIT (PHASE 06)

**Document:** Complete Dependency Registry, Justifications & Redundancy Audit  
**Author:** Lead Build Tooling Engineer & Systems Architect  
**Date:** November 2026

---

## 1. Production Dependencies (`dependencies`)

| Package Name | Installed Version | Architectural Purpose & Justification | Redundancy Assessment |
|---|---|---|---|
| `next` | `14.2.15` | Core application framework; provides App Router, SSR, SSG, image optimization (`next/image`), and zero-CLS font loading (`next/font`). | **Essential** |
| `react` | `18.3.1` | Core UI rendering engine; component lifecycle, hooks, and Concurrent Mode. | **Essential** |
| `react-dom` | `18.3.1` | DOM renderer for React. | **Essential** |
| `lucide-react`| `0.453.0` | Comprehensive, consistent, accessible SVG icon library matching the design system requirements. | **Essential** |

---

## 2. Development Dependencies (`devDependencies`)

| Package Name | Installed Version | Architectural Purpose & Justification | Redundancy Assessment |
|---|---|---|---|
| `typescript` | `5.6.3` | Static type checker for strict type safety across e-commerce domain models and component props. | **Essential** |
| `@types/node` | `20.17.0` | TypeScript definitions for Node.js runtime and environment APIs. | **Essential** |
| `@types/react` | `18.3.12` | TypeScript definitions for React elements, hooks, and synthetic events. | **Essential** |
| `@types/react-dom`| `18.3.1` | TypeScript definitions for React DOM methods. | **Essential** |
| `tailwindcss` | `3.4.14` | Utility-first CSS engine configured with KRAK & CO. design tokens, custom colors, and arch borders. | **Essential** |
| `postcss` | `8.4.47` | Tool for transforming CSS with JavaScript plugins. | **Essential** |
| `autoprefixer` | `10.4.20` | PostCSS plugin to parse CSS and add vendor prefixes for cross-browser compatibility. | **Essential** |
| `eslint` | `8.57.1` | Pluggable linting utility for JavaScript and TypeScript. | **Essential** |
| `eslint-config-next`| `14.2.15` | ESLint configuration for Next.js enforcing Core Web Vitals and React hook rules. | **Essential** |

---

## 3. Redundancy & Lean Architecture Guarantee

- **Zero Heavyweight External Dependencies:** 
  - State management uses native React Context with custom hooks (`useCart`, `useWishlist`), avoiding Redux or MobX.
  - Class name merging uses a clean, 6-line native TypeScript utility in `src/lib/utils.ts`, avoiding extra packages like `clsx` or `tailwind-merge`.
  - Date and currency formatting uses native `Intl.NumberFormat("en-IN")`, avoiding heavy libraries like Moment.js or Lodash.
- **Total Production Package Count:** 4 core dependencies.
- **Total Development Package Count:** 9 dependencies.

