import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset your KRAK & CO. account password.",
};

export default function ForgotPasswordPage() {
  return (
    <RoutePlaceholder
      title="Reset Password"
      route="/account/forgot-password"
      category="Account"
      description="Self-service password recovery flow via registered email or SMS verification code."
    />
  );
}

