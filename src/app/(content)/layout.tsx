import type { ReactNode } from "react";
import Link from "next/link";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-parchment text-text-primary">
      {/* Content Header */}
      <header className="sticky top-0 z-40 border-b border-surface-sand bg-surface-card/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-brand-maroon">
            KRAK &amp; CO.
          </Link>
          <nav className="flex items-center gap-4 text-xs font-semibold text-text-secondary">
            <Link href="/shop" className="hover:text-brand-maroon">Shop</Link>
            <Link href="/about" className="hover:text-brand-maroon">About Us</Link>
            <Link href="/reviews" className="hover:text-brand-maroon">Reviews</Link>
            <Link href="/faq" className="hover:text-brand-maroon">FAQs</Link>
            <Link href="/contact" className="hover:text-brand-maroon">Contact</Link>
            <Link href="/cart" className="hover:text-brand-maroon">Cart</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">{children}</main>

      {/* Content Footer */}
      <footer className="border-t border-surface-sand bg-surface-cream py-8 text-center text-xs text-text-muted">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
          <Link href="/shipping-policy" className="hover:underline">Shipping Policy</Link>
          <Link href="/returns-policy" className="hover:underline">Returns &amp; Refunds</Link>
          <Link href="/cancellation-policy" className="hover:underline">Cancellation</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms &amp; Conditions</Link>
        </div>
        <p className="mt-4">© 2026 KRAK &amp; CO. Authentic Indian Snacks from South to North.</p>
      </footer>
    </div>
  );
}
