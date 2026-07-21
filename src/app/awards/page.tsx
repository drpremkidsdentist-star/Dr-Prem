import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Awards } from "@/components/sections/Awards";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";

export const metadata: Metadata = {
  title: "Awards & Recognition | Dr. Prem Kumar",
  description:
    "Awards, certifications, and recognition for Dr. Prem Kumar's work in microscopic dentistry in Bangalore.",
  alternates: { canonical: "/awards" },
};

export default function AwardsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-neutral-50 py-12 border-b border-neutral-200">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-primary font-medium">Awards</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Awards &{" "}
            <span className="font-serif italic text-accent">recognition</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Clinical excellence recognized by peers and trusted by families across Bangalore.
          </p>
        </div>
      </section>
      <Awards />
      <StickyBookingBar />
    </main>
  );
}
