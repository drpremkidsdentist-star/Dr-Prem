import Link from "next/link";
import {
  MapPin,
  Phone,
  Navigation,
  ExternalLink,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import type { ServiceArea } from "@/lib/serviceAreas";
import { serviceAreas } from "@/lib/serviceAreas";
import { clinicContact, whatsappUrl } from "@/lib/siteAssets";
import { LocalBusinessSchema } from "@/lib/schemas";

const services = [
  "Microscopic Root Canal Treatment",
  "Pediatric Dentistry",
  "Dental Implants",
  "Smile Design",
  "Cosmetic Dentistry",
  "Preventive Care",
];

export function ServiceAreaView({ area }: { area: ServiceArea }) {
  const isFlagship = area.kind === "flagship";
  const schema = LocalBusinessSchema({
    name: isFlagship
      ? "Dr. Prem Kumar — Microscopic Dental Care (Attur)"
      : `Dr. Prem Kumar — Microscopic Dentist serving ${area.name}`,
    description: area.description,
    image: "https://www.drpremkumar.in/images/og-image.jpg",
    url: `https://www.drpremkumar.in/locations/${area.slug}`,
    telephone: clinicContact.phoneTel,
    address: {
      streetAddress: clinicContact.locations.attur.streetAddress,
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: clinicContact.locations.attur.postalCode,
      addressCountry: "IN",
    },
    geo: clinicContact.locations.attur.geo,
    openingHours: [
      "Mo-Fr 09:00-20:00",
      "Sa 10:00-18:00",
      "Su 10:00-14:00",
    ],
    priceRange: "$$",
    areaServed: [area.localityLabel, "Yelahanka", "Bangalore", "Bengaluru"],
    sameAs: [clinicContact.googleMapsUrl],
    parentOrganization: {
      name: "Dr. Prem Kumar Microscopic Dental Care",
      url: "https://www.drpremkumar.in",
    },
  });

  const others = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="container-custom">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-white">
              Locations
            </Link>
            <span>/</span>
            <span className="text-sky-300">{area.name}</span>
          </nav>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/15 border border-sky-400/25 text-sky-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4" />
            {isFlagship ? "Flagship clinic" : `Serving ${area.name}`}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            {area.h1}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
            {area.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={clinicContact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              <Navigation className="w-4 h-4" />
              Directions to Attur clinic
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              {clinicContact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="container-custom py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Why patients from {area.name} choose us
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            {isFlagship
              ? "German surgical microscopy, gentle pediatric protocols, and single-visit microscopic RCT — all under one roof in Attur Layout."
              : `You don’t need a separate clinic in ${area.name}. Our Attur Layout flagship is built for North Bangalore families who want specialist microscopic care without downtown traffic.`}
          </p>
          <ul className="space-y-3 mb-10">
            {area.landmarks.map((item) => (
              <li key={item} className="flex items-start gap-3 text-neutral-700">
                <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold text-primary mb-4">Treatments available</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {services.map((s) => (
              <div
                key={s}
                className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-primary"
              >
                {s}
              </div>
            ))}
          </div>
          <Link
            href="/book-appointment"
            className="btn-primary inline-flex items-center gap-2"
          >
            Book from {area.name}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <aside className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
            <h3 className="font-bold text-primary mb-3">Clinic NAP</h3>
            <p className="text-sm text-neutral-600 mb-1 font-medium">
              {clinicContact.addressLine}
            </p>
            <p className="text-sm text-neutral-500 mb-4">
              Flagship: Attur Layout, Yelahanka, Bangalore 560064
            </p>
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className="block text-accent font-semibold mb-2"
            >
              {clinicContact.phoneDisplay}
            </a>
            <a
              href={whatsappUrl(`Hi, I'm coming from ${area.name}. I'd like to book.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-emerald-600 hover:underline"
            >
              WhatsApp from {area.name}
            </a>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="font-bold text-primary mb-3">Also serving</h3>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/locations/${o.slug}`}
                    className="text-sm text-accent hover:underline font-medium"
                  >
                    Dentist for {o.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-sm text-neutral-600 hover:underline">
                  All Bangalore service areas →
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
