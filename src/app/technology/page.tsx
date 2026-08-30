import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Microscope, Eye, ShieldCheck, Sparkles, Zap, ArrowRight } from "lucide-react";
import { MicroscopicDentistry } from "@/components/sections/MicroscopicDentistry";
import { Technology } from "@/components/sections/Technology";
import { MicroscopicLensSimulator } from "@/components/sections/MicroscopicLensSimulator";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";

export const metadata: Metadata = {
  title: "Advanced Dental Technology & Operating Microscope | Dr. Prem Kumar R",
  description:
    "Explore our precision clinical technology: Surgical Operating Microscopes, Digital CBCT, Soft-Tissue Diode Lasers, and CAD/CAM Smile Design at Dr. Prem Kumar R's Bangalore clinic.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-sky-300/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-white font-medium">Technology &amp; Microscope</span>
          </nav>
          
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Microscope className="w-4 h-4" />
            Precision Clinical Infrastructure
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
            Technology That{" "}
            <span className="italic text-accent">Sees Beyond The Visible</span>
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">
            Every instrument in our Attur–Yelahanka clinic is carefully selected to eliminate guesswork, preserve natural tooth structure, and ensure maximum comfort — headlined by our surgical operating microscope suites.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/book-appointment" className="btn-primary inline-flex items-center gap-2">
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#microscope-suite"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Explore Microscope Suite
            </Link>
          </div>
        </div>
      </section>

      {/* Microscopic Suite Anchor */}
      <div id="microscope-suite" className="scroll-mt-20">
        <MicroscopicDentistry />
      </div>

      {/* Interactive Simulator */}
      <MicroscopicLensSimulator />

      {/* Full 5-Pillar Technology Breakdown */}
      <Technology />

      <StickyBookingBar />
    </main>
  );
}
