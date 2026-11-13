import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your KRAK & CO. account for 1-click checkout and order history.",
};

export default function LoginPage() {
  return (
    <RoutePlaceholder
      title="Customer Sign In"
      route="/account/login"
      category="Account"
      description="Authentication portal supporting Phone OTP login and Email & Password sign in with seamless guest checkout handoff."
    />
  );
}

