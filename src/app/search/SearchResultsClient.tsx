"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight, Phone, Calendar, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { searchCatalog, searchableCatalog, SearchItem } from "@/lib/searchData";
import { clinicContact } from "@/lib/siteAssets";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SearchResultsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [inputQuery, setInputQuery] = React.useState(initialQuery);
  const [activeCategory, setActiveCategory] = React.useState("All");

  React.useEffect(() => {
    setInputQuery(initialQuery);
  }, [initialQuery]);

  const results = React.useMemo(() => {
    if (!inputQuery.trim()) {
      return searchableCatalog;
    }
    return searchCatalog(inputQuery);
  }, [inputQuery]);

  const filteredResults = React.useMemo(() => {
    if (activeCategory === "All") return results;
    return results.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());
  }, [results, activeCategory]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(inputQuery.trim())}`);
    } else {
      router.push(`/search`);
    }
  };

  const categories = ["All", "Treatment", "Symptom", "Location", "Doctor", "FAQ"];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-neutral-50/50">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-neutral-900 font-semibold">Search Results</li>
          </ol>
        </nav>

        {/* Search Header Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0A2540] via-[#0E3359] to-[#0A2540] text-white p-6 sm:p-10 shadow-xl relative overflow-hidden mb-8">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold mb-3 backdrop-blur-sm">
              <Sparkles className="size-3.5 text-accent" /> Clinical Search Engine
            </span>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              {inputQuery ? (
                <>
                  Search Results for <span className="text-accent">&ldquo;{inputQuery}&rdquo;</span>
                </>
              ) : (
                "Search Treatments, Symptoms & Services"
              )}
            </h1>
            <p className="text-sm text-sky-100/90 mt-2">
              Find microscopic endodontics, pediatric dental treatments, clinic locations, and expert patient guides by Dr. Prem Kumar R.
            </p>

            {/* In-page Search Bar */}
            <form onSubmit={handleSearchSubmit} className="mt-6 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="Search root canals, kids dentistry, implants, Attur clinic..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-neutral-900 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <button
                type="submit"
                className={cn(buttonVariants(), "rounded-xl px-5 py-3 min-h-[44px]")}
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Category Filters & Match Count */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-200/80">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap",
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/70"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-xs font-semibold text-neutral-500">
            Showing {filteredResults.length} {filteredResults.length === 1 ? "result" : "results"}
          </span>
        </div>

        {/* Results Grid */}
        {filteredResults.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-neutral-200/70 shadow-sm">
            <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-sky-50 text-accent mb-4">
              <Search className="size-7" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              No exact matches found for &ldquo;{inputQuery}&rdquo;
            </h3>
            <p className="text-sm text-neutral-500 max-w-md mx-auto mt-1.5">
              Please check your spelling, try broader terms (e.g. &ldquo;root canal&rdquo;, &ldquo;kids&rdquo;, &ldquo;aligners&rdquo;), or contact Dr. Prem Kumar&apos;s team directly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${clinicContact.phoneTel}`}
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
              >
                <Phone className="size-4 mr-2" />
                Call +91 81972 80019
              </a>
              <Link href="/book-appointment" className={cn(buttonVariants(), "rounded-full")}>
                <Calendar className="size-4 mr-2" />
                Book Consultation
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredResults.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-2xl p-5 border border-neutral-200/70 shadow-sm hover:shadow-md hover:border-sky-300/80 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span
                      className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full",
                        item.category === "Treatment" && "bg-sky-100 text-sky-800",
                        item.category === "Symptom" && "bg-amber-100 text-amber-800",
                        item.category === "Location" && "bg-emerald-100 text-emerald-800",
                        item.category === "Doctor" && "bg-indigo-100 text-indigo-800",
                        item.category === "FAQ" && "bg-purple-100 text-purple-800",
                        item.category === "Guide" && "bg-blue-100 text-blue-800"
                      )}
                    >
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                      <CheckCircle2 className="size-3" /> Available
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent group-hover:underline"
                  >
                    {item.actionText || "View Details"}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/book-appointment"
                    className="text-[11px] font-semibold text-neutral-500 hover:text-neutral-900"
                  >
                    Book slot
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Booking & Location Callout */}
        <div className="mt-14 rounded-2xl bg-white p-6 sm:p-8 border border-neutral-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-neutral-900">
              Need immediate dental assistance or consultation?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="size-3.5 text-accent" />
              Attur Main Road, Yelahanka New Town, Bangalore · 4.9★ Google Rated
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full text-xs font-bold")}
            >
              <Phone className="size-3.5 mr-1.5" />
              Call Doctor
            </a>
            <Link
              href="/book-appointment"
              className={cn(buttonVariants(), "rounded-full text-xs font-bold shadow-sm")}
            >
              <Calendar className="size-3.5 mr-1.5" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
