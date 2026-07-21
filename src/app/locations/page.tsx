import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { serviceAreas, bangaloreHubKeywords } from "@/lib/serviceAreas";
import { clinicContact } from "@/lib/siteAssets";

export const metadata: Metadata = {
  title: "Dental Clinics & Service Areas Bangalore | Attur, Yelahanka, Hebbal",
  description:
    "Dr. Prem Kumar’s microscopic dental clinic in Attur, Yelahanka — serving Hebbal, Doddaballapur, and families across Bangalore. Book +91 81972 80019.",
  keywords: [
    ...bangaloreHubKeywords,
    "dentist Attur",
    "dentist Yelahanka",
    "dentist Hebbal",
    "dentist Doddaballapur",
  ],
  alternates: { canonical: "/locations" },
};

const cityFame = [
  "Indiranagar",
  "Whitefield",
  "Koramangala",
  "Jayanagar",
  "Malleshwaram",
  "Rajajinagar",
];

export default function LocationsHubPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="container-custom max-w-3xl">
          <span className="text-sky-300 text-xs font-semibold uppercase tracking-widest">
            Local SEO · North Bangalore
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Locations & service areas across Bangalore
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Flagship microscopic clinic in{" "}
            <strong className="text-white">Attur, Yelahanka</strong> — with dedicated
            landing pages for Yelahanka, Hebbal, and Doddaballapur patients who want
            specialist pediatric & microscopic care without guessing where to go.
          </p>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/locations/${area.slug}`}
              className="group rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 hover:border-sky-400/50 hover:shadow-soft transition-all"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3">
                <MapPin className="w-4 h-4" />
                {area.kind === "flagship" ? "Flagship clinic" : "Service area"}
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent">
                {area.name}
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {area.intro}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Open page
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="rounded-3xl bg-neutral-50 border border-neutral-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Patients travel from across Bangalore
          </h2>
          <p className="text-neutral-600 mb-6 max-w-2xl">
            Beyond our primary North Bangalore corridors, families also visit from
            well-known neighbourhoods for microscopic RCT and kids dentistry:
          </p>
          <ul className="flex flex-wrap gap-2 mb-8">
            {cityFame.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm text-primary"
              >
                <CheckCircle className="w-3.5 h-3.5 text-sky-500" />
                {c}
              </li>
            ))}
          </ul>
          <p className="text-sm text-neutral-500 mb-4">
            Clinic address (NAP): {clinicContact.addressLine} · {clinicContact.phoneDisplay}
          </p>
          <Link href="/book-appointment" className="btn-primary inline-flex">
            Book Bangalore consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
