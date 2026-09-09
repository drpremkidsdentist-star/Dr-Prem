import { Suspense } from "react";
import type { Metadata } from "next";
import { SearchResultsClient } from "./SearchResultsClient";

export const metadata: Metadata = {
  title: "Search Clinical Treatments & Dental Services | Dr. Prem Kumar R",
  description:
    "Search dental treatments, symptoms, pediatric care, microscopic root canals, and clinic locations at Dr. Prem Kumar R's dental practice in Bangalore.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center">Loading search results...</div>}>
      <SearchResultsClient />
    </Suspense>
  );
}
