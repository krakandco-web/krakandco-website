# KRAK & CO. — ENVIRONMENT VARIABLES DOCUMENTATION (PHASE 06)

**Document:** Environment Configuration, Security Rules & Client vs Server Variables  
**Author:** Lead Security & Frontend Systems Engineer  
**Date:** November 2026

---

## 1. Security Architecture & Rules

1. **Client-Side Variables:** Only variables prefixed with `NEXT_PUBLIC_` are bundled into client-side JavaScript.
2. **Zero Secret Leakage:** Private credentials (e.g. database URLs, payment gateway webhook secrets, merchant private keys) must NEVER use the `NEXT_PUBLIC_` prefix.
3. **No Hardcoded Values:** Default values are defined in `.env.example` and `.env.local`. Real production secrets must be set in the production deployment environment.

---

## 2. Environment Variables Inventory

| Variable Name | Exposure | Required? | Default / Example Value | Description |
|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public (Client) | Yes | `http://localhost:3000` | Canonical store URL for OpenGraph and metadata. |
| `NEXT_PUBLIC_STORE_NAME` | Public (Client) | Yes | `"KRAK & CO."` | Store branding display name. |
| `NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD` | Public (Client) | Yes | `499` | Minimum subtotal in INR to qualify for Free Pan-India Delivery. |
| `NEXT_PUBLIC_STANDARD_SHIPPING_FEE` | Public (Client) | Yes | `49` | Flat shipping fee in INR for orders below the threshold. |
| `NEXT_PUBLIC_EXPRESS_SHIPPING_FEE` | Public (Client) | Yes | `99` | Premium fee in INR for 1–2 day express metro delivery. |
| `NEXT_PUBLIC_WHATSAPP_SUPPORT_NUMBER` | Public (Client) | Yes | `"+919876543210"` | Customer care WhatsApp deep-link number. |
| `NEXT_PUBLIC_CURRENCY_SYMBOL` | Public (Client) | Yes | `"₹"` | Currency glyph (Indian Rupee). |

---

## 3. Configuration Template (`.env.example`)
```bash
# Public Client Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STORE_NAME="KRAK & CO."
NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD=499
NEXT_PUBLIC_STANDARD_SHIPPING_FEE=49
NEXT_PUBLIC_EXPRESS_SHIPPING_FEE=99
NEXT_PUBLIC_WHATSAPP_SUPPORT_NUMBER="+919876543210"
NEXT_PUBLIC_CURRENCY_SYMBOL="₹"

# Private Server Variables (Future Backend Integration)
# PAYMENT_GATEWAY_KEY_ID=
# PAYMENT_GATEWAY_KEY_SECRET=
```

