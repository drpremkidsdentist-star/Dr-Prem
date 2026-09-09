"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles, MapPin, Stethoscope, HelpCircle, ArrowRight, Phone, Calendar, X } from "lucide-react";
import { searchCatalog, SearchItem } from "@/lib/searchData";
import { clinicContact } from "@/lib/siteAssets";
import { cn } from "@/lib/utils";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const quickTags = [
  "Root Canal",
  "Kids Dentist",
  "Dental Implants",
  "Aligners",
  "Attur Clinic",
  "Laser",
  "Tooth Pain",
  "Cost",
];

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setActiveCategory("All");
    }
  }, [open]);

  const rawResults = React.useMemo(() => {
    if (!query.trim()) return [];
    return searchCatalog(query);
  }, [query]);

  const filteredResults = React.useMemo(() => {
    if (activeCategory === "All") return rawResults;
    return rawResults.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());
  }, [rawResults, activeCategory]);

  const handleSelect = (item: SearchItem) => {
    onOpenChange(false);
    router.push(item.href);
  };

  const handleFullSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onOpenChange(false);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search treatments, symptoms, and locations"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4"
    >
      {/* Backdrop */}
      <div
        onClick={() => onOpenChange(false)}
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md transition-opacity animate-in fade-in-0 duration-200"
      />

      {/* Dialog Window */}
      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-neutral-200/80 transition-all animate-in fade-in-0 zoom-in-95 duration-200 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <form onSubmit={handleFullSearch} className="relative flex items-center border-b border-neutral-100 px-4 py-3.5 bg-neutral-50/50">
          <Search className="size-5 text-accent shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search treatments, symptoms (e.g., toothache, kids dentist, RCT cost)..."
            className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-neutral-400 hover:text-neutral-700 rounded-md transition-colors mr-1"
              aria-label="Clear query"
            >
              <X className="size-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="text-xs font-semibold px-2 py-1 rounded bg-neutral-200/80 text-neutral-600 hover:bg-neutral-300 transition-colors"
          >
            ESC
          </button>
        </form>

        {/* Quick Filter Tags (when results exist) */}
        {rawResults.length > 0 && (
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-neutral-100 bg-white overflow-x-auto text-xs">
            {["All", "Treatment", "Symptom", "Location", "FAQ"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-2.5 py-1 rounded-full font-medium transition-colors whitespace-nowrap",
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Results / Empty View */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 space-y-2">
          {query.trim() === "" ? (
            <div className="py-6 px-2 text-center">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-sky-50 text-accent mb-3">
                <Sparkles className="size-6" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                What can Dr. Prem Kumar help you with today?
              </h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto">
                Search treatments, pediatric dental concerns, locations in North Bangalore, or pricing questions.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-1.5 max-w-lg mx-auto">
                {quickTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-sky-50 hover:text-accent font-medium text-neutral-700 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-sm font-medium text-neutral-800">
                No matching results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Try searching for &ldquo;Root Canal&rdquo;, &ldquo;Pediatric&rdquo;, or &ldquo;Attur&rdquo;, or speak directly to the clinic doctor.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={`tel:${clinicContact.phoneTel}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="size-3.5" /> Call Dr. Prem Clinic
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 px-2">
                Top Matches ({filteredResults.length})
              </p>
              {filteredResults.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="group flex items-start justify-between gap-3 p-3 rounded-xl hover:bg-sky-50/70 border border-transparent hover:border-sky-200/60 cursor-pointer transition-all"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
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
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-accent transition-colors truncate">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="shrink-0 pt-1 text-neutral-400 group-hover:text-accent transition-colors">
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Quick Actions */}
        <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <MapPin className="size-3 text-accent" /> Yelahanka New Town, Bangalore
            </span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <span className="hidden sm:inline">Rating: ★ 4.9 (250+ reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700 hover:text-accent font-medium transition-colors"
            >
              <Phone className="size-3" /> Call
            </a>
            <button
              type="button"
              onClick={() => {
                onOpenChange(false);
                router.push("/book-appointment");
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              <Calendar className="size-3" /> Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
