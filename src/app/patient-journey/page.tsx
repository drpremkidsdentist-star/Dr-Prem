import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";

export const metadata: Metadata = {
  title: "Patient Journey | Microscopic Dentistry Bangalore",
  description:
    "From consultation to aftercare — your step-by-step journey with Dr. Prem Kumar in Bangalore.",
  alternates: { canonical: "/patient-journey" },
};

export default function PatientJourneyPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-neutral-50 py-12 border-b border-neutral-200">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-primary font-medium">Patient Journey</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Your journey to a{" "}
            <span className="font-serif italic text-accent">healthier smile</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Clear steps, honest plans, and microscopic precision at every stage of care.
          </p>
        </div>
      </section>
      <PatientJourney />
      <StickyBookingBar />
    </main>
  );
}
