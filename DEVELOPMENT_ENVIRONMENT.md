# KRAK & CO. — DEVELOPMENT ENVIRONMENT SPECIFICATION (PHASE 06)

**Document:** Frontend Development Environment, Tooling & Setup Protocol  
**Author:** Senior Frontend Architect & Build Tooling Engineer  
**Date:** November 2026

---

## 1. Technology Stack Overview

Following the Phase 01 architectural audit and explicit client direction, KRAK & CO. storefront is built on a modern, institutional-grade Next.js App Router foundation:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CORE TECHNOLOGY STACK                           │
├──────────────────────┬─────────────────────────────┬───────────────────┤
│ LAYER                │ TECHNOLOGY                  │ VERSION           │
├──────────────────────┼─────────────────────────────┼───────────────────┤
│ Framework            │ Next.js (App Router)        │ 14.2.15           │
│ Language             │ TypeScript (Strict Mode)    │ 5.6.3             │
│ UI Runtime           │ React & React DOM           │ 18.3.1            │
│ Styling Engine       │ Tailwind CSS & Autoprefixer │ 3.4.14            │
│ Font Optimization    │ next/font/google            │ Native Next.js    │
│ Iconography          │ Lucide React                │ 0.453.0           │
│ Code Quality         │ ESLint & Next Core Web Vitals│ 8.57.1           │
│ Node Runtime         │ Node.js                     │ v26.5.0           │
│ Package Manager      │ npm                         │ 11.17.0           │
└──────────────────────┴─────────────────────────────┴───────────────────┘
```

---

## 2. Setup & Installation Instructions

### 2.1 Prerequisites
- Node.js `v18.17+` (v26 LTS verified).
- Git version control initialized.

### 2.2 Fresh Installation
```bash
# Clone or navigate to the workspace
cd /Users/Apple/Desktop/krakandco

# Install dependencies cleanly
npm install

# Run TypeScript type-checking
npm run typecheck

# Run ESLint validation
npm run lint

# Start the local development server (runs on port 3000)
npm run dev
```

---

## 3. Development Scripts Inventory

| Command | Action | Operational Purpose |
|---|---|---|
| `npm run dev` | Next.js Dev Server | Runs fast development server with Hot Module Replacement (HMR) at `http://localhost:3000`. |
| `npm run build` | Production Compiler | Compiles optimized static assets, runs type-checking, and generates SSR/SSG bundles. |
| `npm run start` | Production Server | Serves the optimized production build locally. |
| `npm run typecheck` | TypeScript Engine | Runs `tsc --noEmit` across all `.ts` and `.tsx` files in strict mode. |
| `npm run lint` | ESLint Validator | Checks code against Next.js Core Web Vitals and React best practices. |

---

## 4. Hot Module Replacement (HMR) & Error Reporting

- **Fast Refresh:** Next.js Fast Refresh is active; edits in `.tsx`, `.ts`, and `globals.css` reflect in the browser within < 200ms without state loss.
- **Client Error Boundary:** Configured in `src/app/error.tsx` to catch runtime rendering errors and present a branded recovery view.
- **404 Not Found Boundary:** Configured in `src/app/not-found.tsx` with retro snack illustrations and recovery routes.

