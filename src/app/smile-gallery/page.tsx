import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SmileGallery } from "@/components/sections/SmileGallery";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";

export const metadata: Metadata = {
  title: "Smile Gallery | Before & After Bangalore",
  description:
    "Real smile transformations by Dr. Prem Kumar — implants, smile design, root canal, and pediatric care in Bangalore.",
  alternates: { canonical: "/smile-gallery" },
};

export default function SmileGalleryPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-white font-medium">Smile Gallery</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Smile{" "}
            <span className="font-serif italic text-accent">gallery</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl">
            Before-and-after results that show what microscopic precision can deliver.
          </p>
        </div>
      </section>
      <SmileGallery />
      <StickyBookingBar />
    </main>
  );
}
