import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
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
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-surface-canvas text-text-primary antialiased selection:bg-brand-mustard selection:text-text-primary">
        <div id="app-root" className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
