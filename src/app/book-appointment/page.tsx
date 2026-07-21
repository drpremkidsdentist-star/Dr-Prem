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
      <section className="bg-white pb-8">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-primary font-medium">Book Appointment</span>
          </nav>
        </div>
      </section>
      <BookAppointment />
      <StickyBookingBar />
    </main>
  );
}
