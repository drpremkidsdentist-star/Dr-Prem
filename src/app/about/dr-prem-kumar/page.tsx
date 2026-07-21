import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PersonSchema } from "@/lib/schemas";
import { clinicContact, siteImages } from "@/lib/siteAssets";
import { areaServedCities } from "@/lib/serviceAreas";

export const metadata: Metadata = {
  title: "About Dr. Prem Kumar | MDS Pediatric & Microscopic Dentist Bangalore",
  description:
    "Dr. Prem Kumar R — MDS Pediatric & Preventive Dentistry. Microscopic RCT and kids dentistry for Attur, Yelahanka, Hebbal, Doddaballapur & Bangalore.",
  keywords: [
    "Dr Prem Kumar R",
    "MDS pediatric dentist Bangalore",
    "microscopic dentist Attur",
    "kids dentist Yelahanka",
  ],
  alternates: { canonical: "/about/dr-prem-kumar" },
};

const personLd = PersonSchema({
  name: "Dr. Prem Kumar R",
  jobTitle: "MDS Pediatric & Preventive Dentist · Microscopic Dentistry",
  description:
    "Specialist in pediatric dentistry and magnification-guided root canal treatment at Attur Layout, Yelahanka, Bangalore — serving Hebbal, Doddaballapur, and North Bangalore.",
  image: `https://www.drpremkumar.in${siteImages.doctorPortrait}`,
  url: "https://www.drpremkumar.in/about/dr-prem-kumar",
  sameAs: [clinicContact.googleMapsUrl],
  worksFor: {
    name: "Dr. Prem Kumar Microscopic Dental Care",
    url: "https://www.drpremkumar.in",
  },
});

const credentials = [
  "MDS — Pediatric & Preventive Dentistry",
  "Microscopic dentistry / magnification-guided endodontics",
  "Fear-free behaviour guidance for children",
  "Formerly Associate Professor (Ramaiah)",
  `Clinic NAP: ${clinicContact.addressLine}`,
];

export default function AboutDrPremKumarPage() {
  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Dr. Prem Kumar</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
              About Dr. Prem Kumar R
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
              Dr. Prem Kumar is a trusted microscopic and pediatric dentist in Bangalore,
              practising at our flagship clinic in Attur Layout, Yelahanka. Families from
              Hebbal, Doddaballapur (Dodballapur), and across North Bangalore visit for
              fear-free kids care and precision root canal treatment under the operating
              microscope.
            </p>

            <h2 className="text-xl font-bold text-primary mb-3">Credentials & expertise</h2>
            <ul className="space-y-2 mb-8">
              {credentials.map((item) => (
                <li key={item} className="text-neutral-700 text-sm sm:text-base pl-4 border-l-2 border-sky-400">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-primary mb-3">Areas we serve</h2>
            <ul className="flex flex-wrap gap-2 mb-10">
              {areaServedCities.map((city) => (
                <li
                  key={city}
                  className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm text-primary"
                >
                  {city}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/locations/attur" className="btn-primary min-h-12 justify-center">
                Visit Attur clinic
              </Link>
              <Link
                href="/book-appointment"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-primary hover:border-accent"
              >
                Book appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
