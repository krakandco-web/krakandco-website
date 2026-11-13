import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  createPageUrl?: (page: number) => string;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  createPageUrl,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | "ellipsis")[] = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "ellipsis") {
      pages.push("ellipsis");
    }
  }

  const renderPageButton = (pageNumber: number) => {
    const isCurrent = pageNumber === currentPage;
    const buttonClasses = cn(
      "flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition-all duration-150 select-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-offset-1",
      isCurrent
        ? "bg-brand-maroon text-text-inverse shadow-xs"
        : "border border-surface-sand bg-surface-card text-text-primary hover:border-brand-maroon/50"
    );

    if (createPageUrl) {
      return (
        <Link
          key={pageNumber}
          href={createPageUrl(pageNumber)}
          aria-current={isCurrent ? "page" : undefined}
          className={buttonClasses}
        >
          {pageNumber}
        </Link>
      );
    }

    return (
      <button
        key={pageNumber}
        type="button"
        onClick={() => onPageChange?.(pageNumber)}
        aria-current={isCurrent ? "page" : undefined}
        className={buttonClasses}
      >
        {pageNumber}
      </button>
    );
  };

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-1.5", className)}
    >
      {/* Previous Button */}
      {createPageUrl ? (
        <Link
          href={hasPrev ? createPageUrl(currentPage - 1) : "#"}
          aria-disabled={!hasPrev}
          tabIndex={!hasPrev ? -1 : undefined}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg border border-surface-sand bg-surface-card text-text-primary transition-colors",
            !hasPrev && "opacity-40 pointer-events-none"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </Link>
      ) : (
        <button
          type="button"
          disabled={!hasPrev}
          onClick={() => onPageChange?.(currentPage - 1)}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg border border-surface-sand bg-surface-card text-text-primary transition-colors",
            !hasPrev && "opacity-40 cursor-not-allowed"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}

      {/* Page Numbers */}
      {pages.map((p, idx) =>
        p === "ellipsis" ? (
          <span
            key={`ellipsis-${idx}`}
            className="flex h-9 w-7 items-center justify-center text-text-muted"
          >
            …
          </span>
        ) : (
          renderPageButton(p)
        )
      )}

      {/* Next Button */}
      {createPageUrl ? (
        <Link
          href={hasNext ? createPageUrl(currentPage + 1) : "#"}
          aria-disabled={!hasNext}
          tabIndex={!hasNext ? -1 : undefined}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg border border-surface-sand bg-surface-card text-text-primary transition-colors",
            !hasNext && "opacity-40 pointer-events-none"
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <button
          type="button"
          disabled={!hasNext}
          onClick={() => onPageChange?.(currentPage + 1)}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg border border-surface-sand bg-surface-card text-text-primary transition-colors",
            !hasNext && "opacity-40 cursor-not-allowed"
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </nav>
  );
}
