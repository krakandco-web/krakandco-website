import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md rounded-2xl border-2 border-surface-sand bg-surface-card p-8 shadow-retro">
        <div className="flex justify-center">
          <Image
            src="/assets/illustrations/general/illustration-404-munched.svg"
            alt="404 Snack Not Found"
            width={220}
            height={160}
            priority
          />
        </div>
        <h2 className="mt-4 font-display text-2xl font-bold text-brand-maroon">
          Whoops! Snack Not Found
        </h2>
        <p className="mt-2 text-sm text-text-secondary">
          Looks like someone munched this page! The snack you are looking for might have been moved or eaten.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-pill bg-brand-maroon px-6 py-2.5 text-sm font-semibold text-text-inverse hover:bg-brand-maroon-dark focus:outline-none focus:ring-2 focus:ring-brand-maroon focus:ring-offset-2"
        >
          Return to Kitchen (Home)
        </Link>
      </div>
    </div>
  );
}
