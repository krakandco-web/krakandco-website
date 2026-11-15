import React from "react";
import Link from "next/link";
import { Star, ShieldCheck, CheckCircle2, ArrowRight, ThumbsUp } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews & Social Proof — KRAK & CO.",
  description:
    "Read verified reviews from over 25,000 snack lovers across India. Rated 4.8 / 5 for authenticity, crispness, and zero palm oil promise.",
};

const VERIFIED_REVIEWS = [
  {
    id: "rev_1",
    author: "Ananya Iyer",
    city: "Chennai, Tamil Nadu",
    product: "Kerala Banana Chips (250g)",
    rating: 5,
    date: "2 days ago",
    comment:
      "Hands down the best banana chips I've tasted outside Kerala! You can genuinely smell the pure cold-pressed coconut oil the moment you unseal the pouch. Super thin, perfectly salted, and shatteringly crispy.",
  },
  {
    id: "rev_2",
    author: "Rahul Verma",
    city: "New Delhi",
    product: "Crispy Aloo Bhujia (250g)",
    rating: 5,
    date: "1 week ago",
    comment:
      "The hint of dried mint and amchur makes this aloo bhujia 10x better than commercial supermarket brands. Plus, zero palm oil means no sticky aftertaste. My evening chai is incomplete without this.",
  },
  {
    id: "rev_3",
    author: "Deepa Sundaram",
    city: "Coimbatore, Tamil Nadu",
    product: "Madurai Special Mixture (250g)",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Real Madurai temple street flavor! The roasted garlic pods and curry leaves add such an intense aroma. Crispness holds up great in the resealable pouch.",
  },
  {
    id: "rev_4",
    author: "Vikram Singhania",
    city: "Jaipur, Rajasthan",
    product: "Royal Bikaneri Bhujia (250g)",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "As someone born in Bikaner, I am very picky about bhujia. KRAK & CO. got the moth bean flour and black pepper ratio spot on. Authentic heat, great crunch.",
  },
  {
    id: "rev_5",
    author: "Meera Nair",
    city: "Kochi, Kerala",
    product: "Traditional Soft Ghee Mysore Pak (250g)",
    rating: 5,
    date: "1 month ago",
    comment:
      "Melt-in-mouth texture with authentic aroma of pure cow ghee! It was so fresh, not dry or overly sugary like regular mithai shops. Ordered two more boxes for family.",
  },
  {
    id: "rev_6",
    author: "Siddharth Rao",
    city: "Bengaluru, Karnataka",
    product: "Ragi Sesame Murukku (200g)",
    rating: 5,
    date: "1 month ago",
    comment:
      "Hard to find ragi snacks that are this crunchy and delicious without palm oil. Very light on the stomach and loved by both my kids and grandparents.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="w-full bg-surface-canvas min-h-screen py-6 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        <Breadcrumb items={[{ label: "Customer Reviews" }]} />

        {/* Rating Hero Summary */}
        <div className="rounded-3xl border border-surface-sand bg-surface-card p-6 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xs">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-mustard/40 bg-brand-mustard/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-maroon-dark">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-forest" />
            <span>100% Verified Buyer Feedback</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-primary">
              Loved by 25,000+ Snack Lovers
            </h1>
            <p className="font-sans text-xs sm:text-sm text-text-secondary max-w-lg mx-auto leading-relaxed font-normal">
              Real reviews from real homes across India. Here is why our authentic South and North Indian snacks have earned a 4.8 / 5 average rating.
            </p>
          </div>

          {/* Rating Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-surface-sand max-w-2xl mx-auto">
            <div className="space-y-1">
              <span className="font-display text-4xl font-extrabold text-brand-maroon">4.8</span>
              <div className="flex justify-center text-brand-mustard">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-mustard" />
                ))}
              </div>
              <span className="text-[11px] text-text-muted block">Overall Average Rating</span>
            </div>

            <div className="space-y-1">
              <span className="font-display text-4xl font-extrabold text-brand-forest">96%</span>
              <span className="text-xs font-bold text-text-primary block">5-Star Ratings</span>
              <span className="text-[11px] text-text-muted block">Exceptional Crunch & Taste</span>
            </div>

            <div className="space-y-1">
              <span className="font-display text-4xl font-extrabold text-brand-maroon">89%</span>
              <span className="text-xs font-bold text-text-primary block">Repeat Customers</span>
              <span className="text-[11px] text-text-muted block">Monthly Tea-Time Stockups</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-surface-sand pb-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-text-primary">
              Latest Verified Reviews
            </h2>
            <span className="text-xs text-text-muted">Showing 6 Featured Testimonials</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERIFIED_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl border border-surface-sand bg-surface-card p-6 space-y-4 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-brand-mustard">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand-mustard text-brand-mustard" />
                      ))}
                    </div>
                    <span className="text-[11px] text-text-muted font-medium">{rev.date}</span>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed font-normal italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-sand/80 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-text-primary">{rev.author}</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-forest shrink-0" />
                  </div>
                  <p className="text-[11px] text-text-muted">{rev.city}</p>
                  <span className="inline-block rounded bg-brand-maroon/5 px-2 py-0.5 text-[10px] font-bold text-brand-maroon">
                    {rev.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to Shop */}
        <div className="rounded-3xl bg-brand-maroon text-text-inverse p-8 text-center space-y-4 shadow-md">
          <h2 className="font-display text-2xl font-bold">Ready to Taste the Crunch?</h2>
          <p className="text-xs sm:text-sm text-surface-parchment/90 max-w-md mx-auto leading-relaxed">
            Order fresh, 100% palm-oil-free Indian snacks today. Delivered right to your doorstep.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-mustard px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-maroon-dark hover:bg-brand-mustard-light transition-all shadow-sm"
            >
              <span>Shop All Snacks</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
