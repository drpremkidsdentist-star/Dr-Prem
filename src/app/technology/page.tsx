import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Technology } from "@/components/sections/Technology";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";

export const metadata: Metadata = {
  title: "Advanced Dental Technology Bangalore",
  description:
    "Operating microscope, CBCT, digital smile design, and laser dentistry at Dr. Prem Kumar's clinic in Bangalore.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-white font-medium">Technology</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Technology that{" "}
            <span className="font-serif italic text-accent">sees more</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl">
            Every tool is chosen to improve diagnosis, precision, and patient comfort —
            starting with the operating microscope.
          </p>
        </div>
      </section>
      <Technology />
      <StickyBookingBar />
    </main>
  );
}
