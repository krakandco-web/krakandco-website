import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { collectionService, productService } from "@/services";
import {
  CategoryHero,
  CategorySubnav,
  CategoryEditorial,
  RegionalHero,
  RelatedCategoriesSection,
} from "@/components/collection";
import { ShopContainer } from "@/components/shop/ShopContainer";

interface CollectionPageProps {
  params: {
    collectionSlug: string;
  };
  searchParams?: {
    region?: string | string[];
    category?: string | string[];
    minPrice?: string;
    maxPrice?: string;
    spice?: string | string[];
    packSize?: string | string[];
    inStock?: string;
    sort?: string;
    page?: string;
  };
}

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

export default async function CollectionDetailPage({
  params,
  searchParams,
}: CollectionPageProps) {
  const collection = await collectionService.getCollectionBySlug(params.collectionSlug);

  if (!collection) {
    notFound();
  }

  const isRegionalCollection = Boolean(collection.region);
  const isCategoryCollection = Boolean(collection.category);

  // Parse filters with collection-level scope enforcement
  const filterParams = {
    // If it's a category collection, lock category to this collection's category
    category: isCategoryCollection ? collection.category : searchParams?.category,
    // If it's a regional collection, lock region to this collection's region
    region: isRegionalCollection ? collection.region : searchParams?.region,
    minPrice: searchParams?.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams?.maxPrice ? Number(searchParams.maxPrice) : undefined,
    spiceLevel: searchParams?.spice,
    packSize: searchParams?.packSize,
    inStock: searchParams?.inStock === "true",
    sort: searchParams?.sort || "featured",
    page: searchParams?.page ? Number(searchParams.page) : 1,
    limit: 12,
  };

  const filterResult = await productService.filterProducts(filterParams);

  const breadcrumbs = [
    { label: "Collections", href: "/shop" },
    { label: collection.name },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. HERO SECTION (Regional Hero or Category Hero) */}
      {isRegionalCollection ? (
        <RegionalHero
          region={collection.region!}
          title={collection.name}
          tagline={collection.shortTagline}
          description={collection.description}
          heroIllustrationUrl={collection.bannerImageUrl}
          breadcrumbs={breadcrumbs}
        />
      ) : (
        <CategoryHero
          title={collection.name}
          badge={collection.heroBadge || "AUTHENTIC RECIPES"}
          tagline={collection.shortTagline}
          description={collection.description}
          bannerImageUrl={collection.bannerImageUrl}
          themeColor={collection.themeColor}
          breadcrumbs={breadcrumbs}
        />
      )}

      {/* 2. SUBCATEGORY EXPLORATION / SHORTCUTS */}
      {collection.subcategories && collection.subcategories.length > 0 && (
        <CategorySubnav
          subcategories={collection.subcategories}
          collectionTitle={collection.name}
        />
      )}

      {/* 3. PRODUCT DISCOVERY GRID & FILTERS */}
      <section
        id="category-products"
        className="w-full py-8 sm:py-12 bg-surface-canvas scroll-mt-6"
        aria-label={`${collection.name} Products`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ShopContainer
            filterResult={filterResult}
            hideCategoryFilter={isCategoryCollection}
            hideRegionFilter={isRegionalCollection}
          />
        </div>
      </section>

      {/* 4. BRAND EDITORIAL STORYTELLING */}
      <CategoryEditorial
        title={collection.editorialTitle || "EVERY REGION HAS ITS OWN CRUNCH."}
        text={collection.editorialText || collection.description}
        themeColor={collection.themeColor}
      />

      {/* 5. RELATED CATEGORIES CROSS-DISCOVERY */}
      <RelatedCategoriesSection
        currentSlug={collection.slug}
        relatedSlugs={collection.relatedCollectionSlugs}
      />
    </div>
  );
}
