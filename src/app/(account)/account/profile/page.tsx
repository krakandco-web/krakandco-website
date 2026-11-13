import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Profile Settings",
  description: "Update your personal details, phone number, and communication preferences.",
};

export default function ProfilePage() {
  return (
    <RoutePlaceholder
      title="Profile Settings"
      route="/account/profile"
      category="Account"
      description="Customer profile editor for managing full name, email, contact phone, and marketing notification preferences."
    />
  );
}
