# CATEGORY SEO & METADATA SPECIFICATION

## KRAK & CO. — Next.js E-Commerce Storefront
**Phase 13 Deliverable — Search Engine Optimisation & Indexation Strategy**

---

## 1. Metadata Generation Architecture

In Next.js App Router, metadata is generated dynamically on the server via `generateMetadata()` in `src/app/(storefront)/collections/[collectionSlug]/page.tsx`:

```typescript
export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const collection = await collectionService.getCollectionBySlug(params.collectionSlug);
  if (!collection) {
    return { title: "Collection Not Found — KRAK & CO." };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const canonicalUrl = `${siteUrl}/collections/${collection.slug}`;

  return {
    title: collection.metaTitle || `${collection.name} — KRAK & CO.`,
    description: collection.metaDescription || collection.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: collection.metaTitle || collection.name,
      description: collection.metaDescription || collection.description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: collection.bannerImageUrl,
          width: 800,
          height: 600,
          alt: collection.name,
        },
      ],
    },
  };
}
```

---

## 2. Category Metadata Inventory

| Category Slug | Canonical URL | Meta Title | Meta Description |
|---|---|---|---|
| `chips-crisps` | `https://krakandco.in/collections/chips-crisps` | Artisanal Indian Chips & Crisps Online — KRAK & CO. | Buy authentic Kerala banana chips fried in 100% cold-pressed coconut oil, crispy spiced tapioca chips, and masala wafers. 100% palm oil free. |
| `murukku-savouries` | `https://krakandco.in/collections/murukku-savouries` | Traditional Murukku & Savouries Online — KRAK & CO. | Buy handmade ragi murukku, melt-in-mouth butter murukku, and crispy North Indian methi mathri online. Authentic, fresh, and palm oil free. |
| `mixtures-namkeen` | `https://krakandco.in/collections/mixtures-namkeen` | Traditional Indian Mixtures & Namkeen — KRAK & CO. | Order Madurai special spicy mixture, crispy aloo bhujia, and royal Bikaneri bhujia online. Hand-blended with whole spices and zero palm oil. |
| `sweets-mithai` | `https://krakandco.in/collections/sweets-mithai` | Authentic Indian Sweets & Mithai Online — KRAK & CO. | Order royal kaju katli, melt-in-mouth ghee Mysore pak, and artisanal festive sweets online. Prepared with 100% pure desi ghee. |
| `pickles-sides` | `https://krakandco.in/collections/pickles-sides` | Authentic Regional Indian Pickles Online — KRAK & CO. | Shop Andhra Avakaya raw mango pickle and North Indian sun-cured pickles online. Hand-pounded spices, wood-pressed oils, zero chemical preservatives. |

---

## 3. Canonical URLs & Duplicate Content Prevention

Facetted navigation systems frequently create thousands of thin, duplicated URLs (e.g., `?region=south-indian&spice=Mild&sort=price-asc`).

### SEO Canonical Protocol:
1. Every category page explicitly declares its self-referential canonical URL pointing to the **clean, un-parameterized category path** (`/collections/[slug]`).
2. Search crawlers indexing parameter variations consolidate link equity back to the primary canonical URL.
3. Pagination links (`?page=2`) retain standard search engine indexation while preserving category scope.

---

## 4. Structured Data (Schema.org)

Each collection page provides semantic HTML markup structured for:
* **BreadcrumbList**: Root `Home` → `Collections` → Current Category.
* **CollectionPage & ItemList**: Machine-readable JSON-LD readiness for product listing schema.
* **Semantic Heading Hierarchy**:
  - `<h1>`: Category Title (e.g. `CHIPS & CRISPS`)
  - `<h2>`: Subcategory Exploration, Product Filters, Category Culinary Heritage, Related Categories
  - `<h3>`: Product Card Titles, Value Pillars, Related Category Names

