"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search as SearchIcon, X, Sparkles, ArrowRight } from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/mock/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Breadcrumb } from "@/components/common/Breadcrumb";

const TRENDING_SEARCHES = [
  "Banana Chips",
  "Aloo Bhujia",
  "Madurai Mixture",
  "Murukku",
  "Kaju Katli",
  "Tapioca Chips",
  "Mysore Pak",
  "Pickle",
];

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const [searchTerm, setSearchTerm] = useState(searchParams?.q || "");

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return MOCK_PRODUCTS;

    return MOCK_PRODUCTS.filter((product) => {
      const matchName = product.name.toLowerCase().includes(term);
      const matchCategory = product.primaryCategory.toLowerCase().includes(term);
      const matchRegion = product.region.toLowerCase().includes(term);
      const matchTags = product.tags.some((t) => t.toLowerCase().includes(term));
      const matchDesc = product.shortDescription.toLowerCase().includes(term);
      return matchName || matchCategory || matchRegion || matchTags || matchDesc;
    });
  }, [searchTerm]);

  return (
    <div className="w-full bg-surface-canvas min-h-screen py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Search" }]} />

        {/* Search Header & Input */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-mustard/40 bg-brand-mustard/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-maroon-dark">
            <Sparkles className="h-3.5 w-3.5 text-brand-mustard-dark" />
            <span>Find Your Favourite Crunch</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-text-primary">
            Search Authentic Snacks
          </h1>

          {/* Search Input Box */}
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search banana chips, bhujia, murukku, mithai..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border-2 border-surface-sand bg-surface-card pl-12 pr-12 py-3.5 text-sm sm:text-base font-medium text-text-primary shadow-xs focus:border-brand-maroon focus:outline-none"
              autoFocus
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-text-muted hover:text-text-primary"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Trending Searches Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
              Trending:
            </span>
            {TRENDING_SEARCHES.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSearchTerm(tag)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  searchTerm.toLowerCase() === tag.toLowerCase()
                    ? "bg-brand-maroon text-text-inverse font-bold"
                    : "bg-surface-card border border-surface-sand text-text-secondary hover:border-brand-maroon hover:text-brand-maroon"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter & Grid */}
        <div className="space-y-6 pt-4 border-t border-surface-sand">
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-text-muted">
              {searchTerm ? (
                <span>
                  Showing {filteredProducts.length} results for &ldquo;
                  <strong className="text-text-primary">{searchTerm}</strong>&rdquo;
                </span>
              ) : (
                <span>Showing All {filteredProducts.length} Authentic Snacks</span>
              )}
            </h2>

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="text-xs font-semibold text-brand-maroon hover:underline"
              >
                Reset Search
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-3xl border border-surface-sand bg-surface-card p-12 text-center max-w-md mx-auto space-y-4 my-8 shadow-xs">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface-sand/60 text-text-muted">
                <SearchIcon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary">
                No matching snacks found
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We couldn&apos;t find anything matching &ldquo;{searchTerm}&rdquo;. Try searching for &ldquo;chips&rdquo;, &ldquo;mixture&rdquo;, or &ldquo;bhujia&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-maroon px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-text-inverse"
              >
                <span>Browse All Products</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
