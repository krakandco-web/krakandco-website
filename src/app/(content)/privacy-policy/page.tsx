import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How KRAK & CO. collects, safeguards, and respects your personal and payment data.",
};

export default function PrivacyPolicyPage() {
  return (
    <RoutePlaceholder
      title="Privacy Policy"
      route="/privacy-policy"
      category="Content"
      description="Data handling terms, PCI-DSS payment compliance via RBI-approved payment gateways, cookie usage policies, and customer consent controls under Indian Digital Personal Data Protection (DPDP) Act."
    />
  );
}
