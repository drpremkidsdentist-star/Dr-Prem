import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BookAppointment } from "@/components/sections/BookAppointment";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  alternates: { canonical: "/book-appointment" },
  title: pageMetadata.bookAppointment.title,
  description: pageMetadata.bookAppointment.description,
};

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="bg-white pb-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-primary font-medium">Book Appointment</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-serif mb-2">
            Book an Appointment with Dr. Prem Kumar R
          </h1>
          <p className="text-neutral-600 max-w-2xl text-sm sm:text-base">
            Consultations for pediatric dental care and microscopic root canal treatments at Kumar&apos;s Microscopic Dental Care, Attur Main Road, Yelahanka New Town.
          </p>
        </div>
      </section>
      <BookAppointment />
      <StickyBookingBar />
    </main>
  );
}
