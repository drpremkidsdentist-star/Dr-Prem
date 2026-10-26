import Link from "next/link";
import {
  MapPin,
  Phone,
  Navigation,
  ExternalLink,
  CheckCircle,
  Clock,
  ShieldCheck,
  Building2,
  Calendar,
} from "lucide-react";
import type { ServiceArea } from "@/lib/serviceAreas";
import { serviceAreas } from "@/lib/serviceAreas";
import { clinicContact } from "@/lib/siteAssets";

const services = [
  "Microscopic Root Canal Treatment",
  "Specialist Pediatric Dentistry",
  "CBCT-Guided Dental Implants",
  "Digital Smile Design & Veneers",
  "Laser & Minimally Invasive Dentistry",
  "Preventive Oral Health Checkups",
];

export function ServiceAreaView({
  area,
  clinicUrl,
}: {
  area: ServiceArea;
  clinicUrl?: string;
}) {
  const isFlagship = area.kind === "flagship";
  const othersInRegion = serviceAreas.filter(
    (a) =>
      a.region === area.region &&
      a.slug !== area.slug &&
      !["kogilu", "kodigehalli", "devanahalli", "doddaballapur"].includes(a.slug)
  );

  const targetClinicUrl =
    clinicUrl || `https://kumarsdentistry.in/locations/${area.slug === "sahakara-nagar" ? "sahakar-nagar" : area.slug}`;

  return (
    <article className="min-h-screen bg-neutral-50 pt-20">
      {/* Prominent Visit/Book at the clinic banner */}
      <div className="bg-sky-900 border-b border-sky-800 text-white py-3.5 px-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-sky-300 shrink-0" />
            <span>
              Clinic entity: <strong>Kumar&apos;s Microscopic Dental Care</strong> (Attur Main Road, Yelahanka New Town)
            </span>
          </div>
          <a
            href={targetClinicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-white font-semibold text-xs hover:bg-accent/90 transition-colors shadow-sm shrink-0"
          >
            Visit/Book at the Clinic
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-6">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Service Area Hub · North Bengaluru</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl leading-tight">
            Microscopic &amp; Pediatric Dental Care for{" "}
            <span className="font-serif italic text-accent">{area.name}</span>
          </h1>

          <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
            {area.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={targetClinicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              <Calendar className="w-4 h-4" />
              Visit / Book at the Clinic
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={clinicContact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 text-sm font-semibold"
            >
              <Navigation className="w-4 h-4" />
              Get Directions from {area.name}
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
              Why patients from {area.name} visit Dr. Prem Kumar R
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              {isFlagship
                ? "Our practice in Attur Layout, Yelahanka is equipped with surgical operating microscopes, low-radiation digital imaging, and specialized pediatric treatment rooms."
                : `Families from ${area.name} consult Dr. Prem Kumar R for specialized pediatric dental care and microscopic root canal treatments. Travelling via ${area.travelNote ?? "North Bengaluru express corridors"} provides access to microscope-assisted tooth preservation.`}
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
        </div>

        <aside className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Practice Timings
            </h3>
            <div className="space-y-3 text-sm text-neutral-600">
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span>Monday – Saturday</span>
                <span className="font-semibold text-primary">10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span>Sunday</span>
                <span className="font-semibold text-primary">10:00 AM – 6:00 PM</span>
              </div>
              <div className="pt-2 text-xs text-neutral-500">
                Appointment consultations scheduled in advance for optimal treatment time.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-2">Book at the Clinic</h3>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              Appointments, examinations, and diagnostic procedures are hosted at Kumar&apos;s Microscopic Dental Care, Attur Main Road, Yelahanka.
            </p>
            <a
              href={targetClinicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center inline-flex items-center gap-2 py-3 text-sm"
            >
              Visit/Book at the Clinic
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {othersInRegion.length > 0 && (
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                Nearby North Bengaluru Hubs
              </h4>
              <div className="flex flex-wrap gap-2">
                {othersInRegion.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/locations/${r.slug}`}
                    className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-700 transition-colors"
                  >
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>
    </article>
  );
}
