import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { serviceAreas, bangaloreHubKeywords } from "@/lib/serviceAreas";
import { clinicContact } from "@/lib/siteAssets";

export const metadata: Metadata = {
  title: "All Dental Service Locations in Bangalore | Dr. Prem Kumar",
  description:
    "Dr. Prem Kumar’s microscopic dental clinic in Attur Layout, Yelahanka — serving Indiranagar, Whitefield, Koramangala, Hebbal, HSR Layout, and families across all 18 major hubs in Bangalore.",
  keywords: [
    ...bangaloreHubKeywords,
    "dentist Indiranagar",
    "dentist Koramangala",
    "dentist Whitefield",
    "dentist HSR Layout",
    "dentist Jayanagar",
  ],
  alternates: { canonical: "/locations" },
};

const regions = [
  "North",
  "Central & East",
  "South & West",
] as const;

export default function LocationsHubPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-[#0A2540] text-white py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <span className="text-sky-300 text-xs font-semibold uppercase tracking-widest">
            Hyper-Local SEO · All 18 Bangalore Hubs
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4">
            Dental Clinics & Service Hubs Across Bangalore
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            Our flagship clinic is situated on Attur Main Road in{" "}
            <strong className="text-white">Attur Layout, Yelahanka</strong>. 
            We provide dedicated local care pages for patients travelling from across 
            North, Central, East, South, and West Bangalore for specialized 30× microscopic dentistry and gentle pediatric care.
          </p>
        </div>
      </section>

      <section className="container-custom py-16">
        {regions.map((reg) => {
          const areasInRegion = serviceAreas.filter((a) => a.region === reg);
          return (
            <div key={reg} className="mb-16">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-200">
                <MapPin className="w-5 h-5 text-sky-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  {reg} Bangalore Service Hubs ({areasInRegion.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {areasInRegion.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/locations/${area.slug}`}
                    className="group rounded-3xl border border-neutral-200 bg-white p-6 hover:border-sky-400/50 hover:shadow-soft transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {area.kind === "flagship" ? "Flagship Clinic" : `${area.region} Hub`}
                        </span>
                        {area.travelNote && (
                          <span className="text-neutral-400 font-normal text-[11px] lowercase flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {area.travelNote}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {area.name}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {area.intro}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-accent">
                      <span>View Area Page</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <div className="rounded-3xl bg-neutral-50 border border-neutral-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Trusted by Patients Across All Bangalore Localities
          </h2>
          <p className="text-neutral-600 mb-6 max-w-3xl">
            Whether you are looking for non-extraction microscopic root canal treatment, fear-free kids dentistry, or 3D CBCT-guided dental implants, Dr. Prem Kumar provides world-class dental care for families across Bengaluru.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/locations/${a.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-neutral-200 hover:border-sky-400 px-3.5 py-1.5 text-xs font-medium text-primary hover:text-accent transition-all"
              >
                <CheckCircle className="w-3.5 h-3.5 text-sky-500" />
                Dentist in {a.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200">
            <p className="text-xs text-neutral-500">
              Clinic NAP: {clinicContact.addressLine} · {clinicContact.phoneDisplay}
            </p>
            <Link href="/book-appointment" className="btn-primary inline-flex text-sm">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

