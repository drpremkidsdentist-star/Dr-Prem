import { Metadata } from "next";
import { HomepageStoryboard } from "@/components/sections/HomepageStoryboard";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Dr. Prem Kumar R | Pediatric & Microscopic Dentist, Yelahanka Bengaluru",
  description:
    "MDS Pediatric & Preventive Dentist practising microscope-assisted root canal and children's dentistry at Kumar's Microscopic Dental Care, Yelahanka New Town.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drpremkumar.in/",
    title: "Dr. Prem Kumar R | Pediatric & Microscopic Dentist, Yelahanka Bengaluru",
    description:
      "MDS Pediatric & Preventive Dentist practising microscope-assisted root canal and children's dentistry at Kumar's Microscopic Dental Care, Yelahanka New Town.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Dr. Prem Kumar R" }],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <h1 className="sr-only">
        Dr. Prem Kumar R — Pediatric &amp; Microscopic Dentist in Yelahanka, Bengaluru
      </h1>
      <HomepageStoryboard />
    </div>
  );
}
