import React from "react";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight } from "lucide-react";
import { MOCK_REVIEWS } from "@/data/mock/reviews";

export function ReviewsSection() {
  return (
    <section aria-labelledby="reviews-heading" className="py-12 sm:py-16 bg-surface-parchment/40 border-y border-surface-sand/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Total Verified Stat */}
        <div className="text-center mb-10">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="text-brand-mustard text-xs">✦</span>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-maroon">
              VERIFIED TASTE TESTIMONIALS
            </span>
            <span className="text-brand-mustard text-xs">✦</span>
          </div>

          <h2
            id="reviews-heading"
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-maroon"
          >
            Loved by 25,000+ Snack Lovers Across India
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5 text-brand-mustard">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand-mustard text-brand-mustard" />
              ))}
            </div>
            <span className="font-sans text-sm font-bold text-text-primary">4.8 / 5.0</span>
            <span className="text-xs text-text-muted">(25,346 verified reviews)</span>
          </div>
        </div>

        {/* 3 Testimonial Cards matching Reference Artboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-2xl border border-surface-sand bg-surface-card p-6 shadow-xs transition-all hover:shadow-card hover:border-brand-maroon/30"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-brand-mustard mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-mustard text-brand-mustard" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-xs sm:text-sm text-text-secondary italic leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-5 pt-4 border-t border-surface-sand/60 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-xs font-bold text-text-primary flex items-center gap-1">
                    <span>{review.authorName}</span>
                    <span className="font-normal text-text-muted">• {review.authorCity}</span>
                  </h4>
                  <span className="text-[10px] text-text-muted">
                    Reviewed {review.productName}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-brand-forest">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>Verified Buyer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Reviews Link */}
        <div className="mt-8 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-maroon hover:text-brand-maroon-dark hover:underline underline-offset-4"
          >
            <span>Read all 25,346 Customer Reviews</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
