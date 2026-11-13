import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Create an Account",
  description: "Join KRAK & CO. to unlock member rewards, order tracking, and exclusive festive drops.",
};

export default function RegisterPage() {
  return (
    <RoutePlaceholder
      title="Create Account"
      route="/account/register"
      category="Account"
      description="Quick registration form with Phone/Email verification, welcome gift bonus, and instant account activation."
    />
  );
}
