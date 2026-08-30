import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { clinicContact } from "@/lib/siteAssets";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center pt-28 pb-16 px-4">
      <div className="max-w-md w-full text-center">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-xs uppercase tracking-wider mb-4">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 font-serif">
          Page Not Found
        </h1>
        <p className="text-neutral-600 mb-8 leading-relaxed text-sm sm:text-base">
          The page you are looking for might have been moved, removed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href={`tel:${clinicContact.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-primary hover:border-accent text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Clinic
          </a>
        </div>
      </div>
    </main>
  );
}
