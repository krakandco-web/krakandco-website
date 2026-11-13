import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-surface-canvas text-text-primary antialiased">
      {/* Skip to Main Content Link for Keyboard / Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-brand-maroon focus:px-4 focus:py-2.5 focus:text-xs focus:font-bold focus:text-text-inverse focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-mustard"
      >
        Skip to main content
      </a>

      {/* Global Shared Storefront Header (Announcement Bar + Nav + Mega Menu + Mobile Drawer) */}
      <Header />

      {/* Main Page Content Area */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Global Shared Storefront Footer */}
      <Footer />
    </div>
  );
}
