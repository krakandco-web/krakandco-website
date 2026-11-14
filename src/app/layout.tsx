import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "KRAK & CO. — Authentic Indian Snacks: South to North",
  description:
    "Traditional recipes, premium ingredients, and irresistible crunch in every bite. Discover authentic Kerala banana chips, Madurai mixture, Bikaneri bhujia, and festive gift boxes.",
  keywords: [
    "Indian snacks",
    "Kerala banana chips",
    "Madurai mixture",
    "Aloo bhujia",
    "South Indian snacks",
    "North Indian namkeen",
    "Festive gift boxes",
    "KRAK and CO",
  ],
  authors: [{ name: "KRAK & CO." }],
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#7A1C1C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600..900;1,600..900&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface-canvas text-text-primary antialiased selection:bg-brand-mustard selection:text-text-primary">
        <div id="app-root" className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
