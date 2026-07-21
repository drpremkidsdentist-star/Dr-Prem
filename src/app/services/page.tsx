import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";
import { siteImages } from "@/lib/siteAssets";

export const metadata: Metadata = {
  title: "Services | Microscopic Dentist Bangalore",
  description:
    "Comprehensive dental services including root canal treatment, dental implants, smile design, pediatric dentistry, cosmetic dentistry, and laser dentistry in Bangalore.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    href: "/services/microscopic-root-canal",
    title: "Microscopic Root Canal",
    desc: "Single-visit precision RCT with 30× magnification for lasting tooth preservation.",
    image: siteImages.microscope,
  },
  {
    href: "/services/dental-implants",
    title: "Dental Implants",
    desc: "Permanent tooth replacement planned with CBCT and microscopic placement.",
    image: siteImages.youngAdult,
  },
  {
    href: "/services/smile-design",
    title: "Smile Design",
    desc: "Digital smile previews and ultra-thin ceramics for natural aesthetics.",
    image: siteImages.teenager,
  },
  {
    href: "/services/pediatric-dentistry",
    title: "Pediatric Dentistry",
    desc: "Gentle, fear-free care for children with microscopic early detection.",
    image: siteImages.logo,
  },
  {
    href: "/services/cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    desc: "Whitening, veneers, and bonding refined under surgical magnification.",
    image: siteImages.youngAdult,
  },
  {
    href: "/services/laser-dentistry",
    title: "Laser Dentistry",
    desc: "Minimally invasive soft-tissue care with faster healing and less discomfort.",
    image: siteImages.microscope,
  },
  {
    href: "/services/preventive-care",
    title: "Preventive Care",
    desc: "Cleanings, checkups, and education to keep every generation smile-ready.",
    image: siteImages.doctorPortrait,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-white section-padding">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-primary font-medium">Services</span>
          </nav>

          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Comprehensive dental care tailored to your needs — from microscopic root canals to
              complete smile makeovers at our Attur, Yelahanka clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:border-accent/40 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-primary">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h2 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-appointment" className="btn-primary">
              Book Appointment
              <ArrowRight className="ml-2 size-5" />
            </Link>
            <Link href="/microscopic-dentistry" className="btn-secondary">
              Explore microscopic care
            </Link>
          </div>
        </div>
      </section>
      <StickyBookingBar />
    </main>
  );
}
