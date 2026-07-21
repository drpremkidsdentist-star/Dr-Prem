import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/cases" },
  title: "Real Cases | Microscopic Dentistry Bangalore",
  description:
    "Explore real patient cases and smile transformations by Dr. Prem Kumar. See the results of microscopic dentistry in Bangalore.",
};

export default function CasesPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Real Cases</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Real Cases
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Explore real patient transformations and case studies. See the remarkable results achievable with microscopic dentistry under Dr. Prem Kumar&apos;s expert care.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
