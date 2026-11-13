import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";
import { collectionService } from "@/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface CollectionPageProps {
  params: {
    collectionSlug: string;
  };
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const collection = await collectionService.getCollectionBySlug(params.collectionSlug);
  if (!collection) {
    return { title: "Collection — KRAK & CO." };
  }
  return {
    title: `${collection.name} — KRAK & CO.`,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({ params }: CollectionPageProps) {
  const collection = await collectionService.getCollectionBySlug(params.collectionSlug);

  if (!collection) {
    notFound();
  }

  return (
    <RoutePlaceholder
      title={collection.name}
      route={`/collections/${params.collectionSlug}`}
      category="Storefront"
      description={`${collection.description} (${collection.shortTagline})`}
    />
  );
}

