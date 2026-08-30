import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { About } from "@/components/sections/About";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";

export const metadata: Metadata = {
  title: "About Dr. Prem Kumar R | MDS Pediatric & Microscopic Dentist Bangalore",
  description:
    "Meet Dr. Prem Kumar R — MDS Pediatric & Preventive Dentistry (Ramaiah Dental College), formerly Associate Professor at Ramaiah. Precision microscopic dentistry in Attur, Yelahanka, Bangalore.",
  keywords: [
    "about Dr Prem Kumar R",
    "microscopic dentist Bangalore",
    "pediatric dentist Bangalore",
    "dentist Attur Yelahanka",
    "pediatric dentist North Bangalore",
  ],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-neutral-50 py-12 border-b border-neutral-200">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-primary font-medium">About</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About{" "}
            <span className="font-serif italic text-accent">Dr. Prem Kumar R</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mb-8">
            Pediatric and microscopic dental specialist combining academic excellence with calm, compassionate chair-side care in Attur, Yelahanka New Town.
          </p>
          <Link href="/about/dr-prem-kumar" className="btn-primary inline-flex gap-2">
            Full Doctor Profile
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
      <About />
      <StickyBookingBar />
    </main>
  );
}
