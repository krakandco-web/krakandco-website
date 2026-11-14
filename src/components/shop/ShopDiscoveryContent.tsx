import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gift, MapPin } from "lucide-react";

export function ShopDiscoveryContent() {
  return (
    <section aria-label="Explore Regional Collections" className="mt-16 pt-12 border-t border-surface-sand space-y-8">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-maroon">
          Looking for a Specific Taste Journey?
        </h3>
        <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
          Explore curated regional assortments crafted according to centuries of South Indian and North Indian culinary traditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* South Indian Banner */}
        <Link
          href="/collections/south-indian"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-forest/30 bg-brand-forest p-6 text-text-inverse shadow-xs transition-all hover:shadow-card hover:-translate-y-0.5"
        >
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1 rounded bg-brand-mustard/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-mustard">
              <MapPin className="h-3 w-3" />
              <span>South Indian Classics</span>
            </span>
            <h4 className="font-display text-xl font-bold text-brand-mustard">
              Kerala &amp; Tamil Nadu Heritage
            </h4>
            <p className="text-xs text-surface-parchment/90 leading-relaxed max-w-sm">
              Kettle-fried banana chips, authentic ribbon pakoda, and aromatic filter coffee companions.
            </p>
          </div>
          <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-brand-mustard">
            <span>Explore South Indian</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        {/* North Indian Banner */}
        <Link
          href="/collections/north-indian"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-maroon/30 bg-brand-maroon p-6 text-text-inverse shadow-xs transition-all hover:shadow-card hover:-translate-y-0.5"
        >
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1 rounded bg-brand-mustard/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-mustard">
              <MapPin className="h-3 w-3" />
              <span>North Indian Favourites</span>
            </span>
            <h4 className="font-display text-xl font-bold text-brand-mustard">
              Delhi, Punjab &amp; Bikaner Heritage
            </h4>
            <p className="text-xs text-surface-parchment/90 leading-relaxed max-w-sm">
              Crispy moth dal bhujia, royal kaju katli, and tangy Bombay mixtures with whole roasted spices.
            </p>
          </div>
          <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-brand-mustard">
            <span>Explore North Indian</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>

      {/* Gifting Callout */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-brand-mustard/30 bg-surface-parchment/50 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-mustard/20 text-brand-maroon">
            <Gift className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display text-base font-bold text-brand-maroon">
              Festive, Wedding &amp; Corporate Gift Hampers
            </h4>
            <p className="font-sans text-xs text-text-secondary mt-0.5">
              Customised snack tins and assortment boxes with personalised greetings and bulk discounts.
            </p>
          </div>
        </div>

        <Link
          href="/gift-boxes"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-brand-maroon px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-text-inverse hover:bg-brand-maroon-dark transition-colors"
        >
          <span>View Gift Boxes</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}

