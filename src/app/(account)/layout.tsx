import type { ReactNode } from "react";
import Link from "next/link";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-parchment text-text-primary">
      {/* Account Header */}
      <header className="sticky top-0 z-40 border-b border-surface-sand bg-surface-card/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-brand-maroon">
            KRAK &amp; CO.
          </Link>
          <nav className="flex items-center gap-4 text-xs font-semibold text-text-secondary">
            <Link href="/shop" className="hover:text-brand-maroon">Shop</Link>
            <Link href="/account" className="hover:text-brand-maroon">My Account</Link>
            <Link href="/wishlist" className="hover:text-brand-maroon">Wishlist</Link>
            <Link href="/cart" className="hover:text-brand-maroon">Cart</Link>
          </nav>
        </div>
      </header>

      {/* Main Account Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">{children}</main>

      {/* Account Footer */}
      <footer className="border-t border-surface-sand bg-surface-cream py-6 text-center text-xs text-text-muted">
        <p>© 2026 KRAK &amp; CO. All rights reserved. Customer Account Portal.</p>
      </footer>
    </div>
  );
}
