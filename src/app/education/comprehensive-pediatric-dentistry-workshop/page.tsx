import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles, BookOpen, GraduationCap, ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { WorkshopShowcase } from "@/components/sections/WorkshopShowcase";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";
import { clinicContact, whatsappUrl } from "@/lib/siteAssets";

export const metadata: Metadata = {
  title: "Comprehensive Pediatric Dentistry Workshop | Dr. Prem Kumar R Bangalore",
  description:
    "Explore photos, videos, and full curriculum from the Comprehensive Pediatric Dentistry Workshop led by Dr. Prem Kumar R (Former Asst. Professor, Ramaiah Dental College).",
  alternates: { canonical: "/education/comprehensive-pediatric-dentistry-workshop" },
};

export default function PediatricDentistryWorkshopPage() {
  return (
    <main className="min-h-screen pt-20 bg-slate-950 text-white">
      {/* Header Breadcrumbs */}
      <div className="bg-[#0A2540] border-b border-white/10 py-6">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-sky-300/80 mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/education" className="hover:text-white transition-colors">
              Education &amp; Mentorship
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium truncate">Comprehensive Pediatric Dentistry Workshop</span>
          </nav>
          <div className="flex items-center justify-between gap-4 mt-4">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Workshops &amp; Mentorship
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold">
              <GraduationCap className="w-3.5 h-3.5" />
              Accredited Masterclass
            </span>
          </div>
        </div>
      </div>

      {/* The Full Interactive Workshop Media Showcase */}
      <WorkshopShowcase />

      <StickyBookingBar />
    </main>
  );
}
