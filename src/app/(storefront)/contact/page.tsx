import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with KRAK & CO. customer support, corporate gifting, or wholesale inquiries.",
};

export default function ContactPage() {
  return (
    <RoutePlaceholder
      title="Contact Krak & Co."
      route="/contact"
      category="Content"
      description="Reach our snack concierge team via WhatsApp, Email (support@krakandco.com), Phone, or send a bulk gifting inquiry."
    />
  );
}

