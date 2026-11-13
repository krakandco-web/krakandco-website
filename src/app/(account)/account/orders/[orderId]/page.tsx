import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

interface OrderDetailPageProps {
  params: {
    orderId: string;
  };
}

export async function generateMetadata({
  params,
}: OrderDetailPageProps): Promise<Metadata> {
  return {
    title: `Order #${params.orderId}`,
    description: `Details and item breakdown for order #${params.orderId}`,
  };
}

export default function OrderDetailPage({ params }: OrderDetailPageProps) {
  return (
    <RoutePlaceholder
      title={`Order #${params.orderId}`}
      route={`/account/orders/${params.orderId}`}
      category="Account"
      description={`Detailed order invoice view, carrier tracking progress, itemized price breakdown, and return/help actions for order #${params.orderId}.`}
    />
  );
}

