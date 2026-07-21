import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { MicroscopicDentistry } from "@/components/sections/MicroscopicDentistry";
import { Technology } from "@/components/sections/Technology";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";

export const metadata: Metadata = {
  title: "Microscopic Dentistry Bangalore | Dr. Prem Kumar",
  description:
    "Discover the future of dentistry with microscopic dentistry. Precision, accuracy, and superior outcomes with Dr. Prem Kumar in Bangalore.",
  alternates: { canonical: "/microscopic-dentistry" },
};

export default function MicroscopicDentistryPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-white font-medium">Microscopic Dentistry</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Microscopic Dentistry in{" "}
            <span className="font-serif italic text-accent">Bangalore</span>
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
            Experience the future of dental care with surgical microscopes up to 30×
            magnification. Dr. Prem Kumar delivers precision treatments with superior accuracy
            and calmer recoveries.
          </p>
          <Link href="/book-appointment" className="btn-primary inline-flex gap-2">
            Book a consultation
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
      <MicroscopicDentistry />
      <Technology />
      <StickyBookingBar />
    </main>
  );
}
