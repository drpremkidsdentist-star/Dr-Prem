import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Award, GraduationCap, Microscope, HeartHandshake, Phone, Calendar, MapPin, CheckCircle2, Star } from "lucide-react";
import { clinicContact, siteImages } from "@/lib/siteAssets";
import { areaServedCities } from "@/lib/serviceAreas";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Dr. Prem Kumar R | Best Pediatric & Microscopic Dentist Bangalore",
  description:
    "Meet Dr. Prem Kumar R – MDS Pediatric & Preventive Dentistry, Ex-faculty at M.S. Ramaiah Dental College. Pioneer in 25x microscopic root canals & fear-free kids dentistry in Yelahanka, Bangalore.",
  keywords: [
    "Dr Prem Kumar R",
    "Dr Prem Kumar dentist",
    "Dr Prem Kumar dentist Bangalore",
    "dr prem kumar r dentist",
    "kumars microscopic dental care",
    "MDS pediatric dentist Bangalore",
    "best pediatric dentist Bangalore",
    "microscopic dentist Yelahanka",
    "microscopic root canal Bangalore",
    "dentist in Attur Yelahanka",
    "Ramaiah dental college dentist",
  ],
  alternates: { canonical: "/about/dr-prem-kumar" },
};

const structuredDoctorSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Person", "Physician"],
      "@id": "https://drpremkumar.in/about/dr-prem-kumar#doctor",
      name: "Dr. Prem Kumar R",
      givenName: "Prem Kumar",
      familyName: "R",
      honorificPrefix: "Dr.",
      jobTitle: "MDS Pediatric & Preventive Dentist | Microscopic Dentistry Specialist",
      description:
        "Bangalore's specialist pediatric & microscopic dentist with 6+ years of clinical experience, former academic faculty at M.S. Ramaiah Dental College & Hospital, specializing in painless single-visit root canals and fear-free kids dental care.",
      image: "https://drpremkumar.in/images/dr-prem-portrait.png",
      url: "https://drpremkumar.in/about/dr-prem-kumar",
      telephone: clinicContact.phoneTel,
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "M.S. Ramaiah Dental College & Hospital, Bangalore",
        url: "https://msrdc.ac.in",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "MDS in Pediatric and Preventive Dentistry",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "BDS - Bachelor of Dental Surgery",
        },
      ],
      knowsAbout: [
        "Microscopic Pediatric Dentistry",
        "Microscopic Root Canal Treatment (RCT)",
        "Nitrous Oxide Inhalation Sedation",
        "Aesthetic Zirconia Pediatric Crowns",
        "Vital Pulp Therapy & MTA Pulpotomy",
        "Dental Implants & 3D Guided Surgery",
        "Digital Smile Design & Clear Aligners",
      ],
      sameAs: [
        clinicContact.googleMapsUrl,
        "https://www.instagram.com/kumarsmicroscopicdentalcare",
        "https://www.youtube.com/@kumarsmicroscopicdentalcare",
      ],
      worksFor: {
        "@type": ["Dentist", "MedicalBusiness"],
        "@id": "https://drpremkumar.in/#clinic",
        name: "Kumar's Microscopic Dental Care | Dr. Prem Kumar R",
        url: "https://drpremkumar.in",
        hasMap: clinicContact.googleMapsUrl,
        telephone: clinicContact.phoneTel,
        address: {
          "@type": "PostalAddress",
          streetAddress: clinicContact.locations.attur.streetAddress,
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560064",
          addressCountry: "IN",
        },
      },
    },
  ],
};

const quickFacts = [
  {
    icon: GraduationCap,
    title: "Postgraduate Academic Pedigree",
    desc: "BDS, MDS in Pediatric & Preventive Dentistry from prestigious M.S. Ramaiah Dental College & Hospital, Bangalore.",
  },
  {
    icon: Award,
    title: "Former Academic Faculty",
    desc: "Former Assistant Professor at Ramaiah Dental College, training postgraduates in micro-endodontics and child psychology.",
  },
  {
    icon: Microscope,
    title: "25× Surgical Microscope Precision",
    desc: "Treats teeth under German surgical operating microscopes, achieving 98%+ root canal success rates and saving natural teeth.",
  },
  {
    icon: HeartHandshake,
    title: "Fear-Free Pediatric Protocol",
    desc: "Specialized in non-pharmacological behavior guidance, gentle distraction, and laughing gas sedation for zero-trauma dental visits.",
  },
];

const directAnswers = [
  {
    q: "Who is Dr. Prem Kumar R?",
    a: "Dr. Prem Kumar R is Bangalore's leading pediatric dentist and microscopic dentistry specialist. Practicing at Kumar's Microscopic Dental Care in Attur Main Road, Yelahanka New Town, he holds an MDS in Pediatric & Preventive Dentistry and was formerly an Assistant Professor at M.S. Ramaiah Dental College.",
  },
  {
    q: "What makes Dr. Prem Kumar's treatments microscopic?",
    a: "Dr. Prem Kumar performs root canals and restorative procedures using high-magnification surgical operating microscopes (up to 25× zoom) with shadowless coaxial LED illumination. This illuminates hidden canals and micro-fractures that conventional naked-eye dentistry misses.",
  },
  {
    q: "Can Dr. Prem Kumar treat children who are anxious or terrified of dentists?",
    a: "Yes. Dr. Prem Kumar's pediatric practice is built around fear-free child psychology. Using gentle acclimatization, painless numbing protocols, nitrous oxide conscious sedation, and positive reinforcement, children enjoy happy, fear-free visits.",
  },
  {
    q: "Where is Dr. Prem Kumar's clinic located in Bangalore?",
    a: "Kumar's Microscopic Dental Care is located at No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore 560064. The clinic serves patients from Attur, Yelahanka, Hebbal, Sahakara Nagar, Jakkur, Doddaballapur, and across North Bangalore.",
  },
];

export default function AboutDrPremKumarPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDoctorSchema) }}
      />

      <div className="container-custom">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>/</li>
            <li className="text-neutral-900 font-semibold">Dr. Prem Kumar R</li>
          </ol>
        </nav>

        {/* Hero Section with Doctor Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-accent text-xs font-bold">
              <Star className="size-3.5 fill-accent text-accent" />
              <span>4.9★ Rated Specialist · 250+ Verified Reviews</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight leading-tight">
              Dr. Prem Kumar R
              <span className="block text-lg sm:text-xl md:text-2xl font-sans font-semibold text-accent mt-2">
                BDS, MDS (Pediatric & Preventive Dentistry) | Microscopic Dentist Bangalore
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Dr. Prem Kumar R is an acclaimed pediatric dentistry specialist, microscopic endodontics clinician, and former faculty member at the prestigious <strong>M.S. Ramaiah Dental College & Hospital</strong>, Bangalore.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              At his flagship practice, <strong>Kumar&apos;s Microscopic Dental Care</strong> on Attur Main Road, Yelahanka New Town, Dr. Prem Kumar bridges the gap between state-of-the-art 25× surgical operating microscopes and empathetic, trauma-free child psychology—delivering painless root canals, biological tooth preservation, and confident smiles for Bangalore families.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className={cn(buttonVariants(), "rounded-full px-6 py-3 text-sm font-bold shadow-md")}
              >
                <Calendar className="size-4 mr-2" />
                Book Consultation with Dr. Prem
              </Link>
              <a
                href={`tel:${clinicContact.phoneTel}`}
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-5 py-3 text-sm font-bold")}
              >
                <Phone className="size-4 mr-2 text-accent" />
                Call +91 81972 80019
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-sky-50 to-neutral-100 ring-1 ring-neutral-200">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={siteImages.doctorPortrait}
                  alt="Dr. Prem Kumar R, MDS Pediatric Dentist and Microscopic Dentistry Specialist Bangalore"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4 bg-primary text-white text-center">
                <p className="text-sm font-bold">Dr. Prem Kumar R, MDS</p>
                <p className="text-xs text-sky-200">MDS Pediatric Dentistry · Ramaiah Alumnus</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Clinical Distinction */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Clinical Authority</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
              Why Families & Doctors Choose Dr. Prem Kumar R
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.title}
                  className="rounded-2xl p-6 bg-neutral-50 border border-neutral-200/80 shadow-soft hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex size-12 items-center justify-center rounded-xl bg-white shadow-sm text-accent mb-4">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                      {fact.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {fact.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AEO / GEO Direct Answer Box (Optimized for Featured Snippets, Siri, Google Assistant & ChatGPT) */}
        <div className="mb-20 rounded-3xl bg-neutral-900 text-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold mb-3">
              <CheckCircle2 className="size-3.5 text-accent" /> Answer Engine & Voice Search Fact Box (AEO/GEO)
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Direct Answers to Common Queries About Dr. Prem Kumar R
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Structured clinical facts verified for patients, voice search queries, and AI assistants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {directAnswers.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl bg-white/5 p-5 border border-white/10 backdrop-blur-sm space-y-2"
              >
                <h3 className="text-sm sm:text-base font-bold text-sky-200 flex items-start gap-2">
                  <span className="text-accent font-serif text-lg leading-none">Q.</span>
                  {item.q}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-5 border-l border-sky-500/30">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas Served in North Bangalore */}
        <div className="mb-16 rounded-2xl bg-sky-50/60 border border-sky-100 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <MapPin className="size-5 text-accent" />
                Serving Bangalore Families Across North Bangalore
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-xl">
                Conveniently located on Attur Main Road with dedicated patient parking, serving families from:
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {areaServedCities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-700 border border-neutral-200/80 shadow-xs"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
              <Link
                href="/locations/attur"
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full text-xs font-bold justify-center")}
              >
                Attur Clinic Directions
              </Link>
              <Link
                href="/book-appointment"
                className={cn(buttonVariants(), "rounded-full text-xs font-bold justify-center shadow-sm")}
              >
                Book with Dr. Prem
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
