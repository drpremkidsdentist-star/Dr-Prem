import Link from "next/link";
import {
  MapPin,
  Phone,
  Navigation,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Clock,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import type { ServiceArea } from "@/lib/serviceAreas";
import { serviceAreas } from "@/lib/serviceAreas";
import { clinicContact, whatsappUrl } from "@/lib/siteAssets";
import { LocalBusinessSchema } from "@/lib/schemas";

const services = [
  "Microscopic Root Canal Treatment (30× Zeiss)",
  "Specialist Pediatric Dentistry",
  "CBCT-Guided Dental Implants",
  "Digital Smile Design & Veneers",
  "Laser & Minimally Invasive Dentistry",
  "Preventive Oral Health Checkups",
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
    priceRange: "₹₹₹",
    areaServed: [area.localityLabel, "Yelahanka", "Bangalore", "Bengaluru"],
    sameAs: [clinicContact.googleMapsUrl],
    parentOrganization: {
      name: "Dr. Prem Kumar Microscopic Dental Care",
      url: "https://www.drpremkumar.in",
    },
  });

  const othersInRegion = serviceAreas.filter(
    (a) => a.region === area.region && a.slug !== area.slug
  );
  const otherRegions = serviceAreas.filter((a) => a.region !== area.region);

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

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-400/15 border border-sky-400/25 text-sky-200 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              {isFlagship ? "Flagship Clinic" : `${area.region} Bangalore Hub`}
            </span>
            {area.travelNote && (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-400/25 text-emerald-200 text-xs font-medium">
                <Clock className="w-3.5 h-3.5" />
                {area.travelNote}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl leading-tight">
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
              Get Directions from {area.name}
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call {clinicContact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="container-custom py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Why patients from {area.name} travel to Dr. Prem Kumar
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              {isFlagship
                ? "Our flagship clinic in Attur Layout, Yelahanka is equipped with German Zeiss operating microscopes, low-radiation digital imaging, and specialized pediatric treatment rooms."
                : `Patients from ${area.name} choose Dr. Prem Kumar because standard dental clinics often lack 30× surgical microscopes required for root canal preservation. Travelling a few minutes via ${area.travelNote ?? "Bangalore express corridors"} gives you specialist care that saves natural teeth.`}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {area.landmarks.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3.5 text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Specialized Treatments for {area.name} Residents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((s) => (
                <div
                  key={s}
                  className="rounded-xl border border-neutral-200 bg-white shadow-xs p-4 text-sm font-semibold text-primary flex items-center justify-between"
                >
                  <span>{s}</span>
                  <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Localized FAQ Accordion for Generative AI & Voice Search */}
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-6 md:p-8">
            <div className="flex items-center gap-2 text-sky-600 font-semibold text-sm mb-2">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Local SEO & Clinical FAQs for {area.name}
            </h3>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-5 border border-neutral-200">
                <h4 className="font-bold text-primary mb-2">
                  Is Dr. Prem Kumar accessible for patients in {area.name}?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Yes! Our clinic in Attur Layout, Yelahanka is convenient for {area.name} patients ({area.travelNote ?? "short drive via main arterial roads"}). We reserve priority slots for out-of-neighborhood patients.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-neutral-200">
                <h4 className="font-bold text-primary mb-2">
                  Why choose 30× microscopic dentistry over general dental clinics?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Microscopic dentistry magnifies tooth anatomy 30 times, enabling Dr. Prem Kumar to find hidden root canals and micro-fractures missed by the naked eye. This ensures a 98%+ success rate and painless single-visit RCT.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-neutral-200">
                <h4 className="font-bold text-primary mb-2">
                  How can I schedule a consultation from {area.name}?
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Click the button below or call +91 81972 80019. You can also message us directly on WhatsApp to pick a convenient appointment time.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/book-appointment"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
            >
              Book Consultation from {area.name}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
            <h3 className="font-bold text-primary text-lg mb-3">Clinic Address & NAP</h3>
            <p className="text-sm text-neutral-700 mb-1 font-semibold">
              Dr. Prem Kumar Dental Clinic
            </p>
            <p className="text-sm text-neutral-600 mb-1">
              {clinicContact.addressLine}
            </p>
            <p className="text-sm text-neutral-500 mb-4">
              Attur Layout, Yelahanka, Bangalore 560064
            </p>
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className="block text-accent font-bold text-base mb-3"
            >
              {clinicContact.phoneDisplay}
            </a>
            <a
              href={whatsappUrl(`Hi Dr. Prem Kumar, I am booking from ${area.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-2.5 rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <span>WhatsApp from {area.name}</span>
            </a>
          </div>

          {/* Regional Hub Navigation */}
          {othersInRegion.length > 0 && (
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="font-bold text-primary mb-3">
                Other {area.region} Bangalore Hubs
              </h3>
              <ul className="space-y-2.5">
                {othersInRegion.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/locations/${o.slug}`}
                      className="text-sm text-accent hover:underline font-medium inline-flex items-center gap-1.5"
                    >
                      <MapPin className="w-3.5 h-3.5 text-sky-500" />
                      Dentist for {o.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h3 className="font-bold text-primary mb-3">All Bangalore Locations</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {otherRegions.slice(0, 8).map((o) => (
                <Link
                  key={o.slug}
                  href={`/locations/${o.slug}`}
                  className="text-xs font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  {o.name}
                </Link>
              ))}
            </div>
            <Link
              href="/locations"
              className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1"
            >
              View all 18 Bangalore service hubs →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

