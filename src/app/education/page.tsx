import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, GraduationCap, Award, BookOpen, Microscope, Sparkles, CheckCircle2, MessageCircle, Phone, ArrowRight, Video, Camera } from "lucide-react";
import { StickyBookingBar } from "@/components/sections/StickyBookingBar";
import { clinicContact, whatsappUrl } from "@/lib/siteAssets";

export const metadata: Metadata = {
  title: "Clinical Education & Private Dental Mentorship | Dr. Prem Kumar R Bangalore",
  description:
    "Explore clinical workshops, hands-on masterclasses in pediatric dentistry and microscopic endodontics by Dr. Prem Kumar R (Former Asst. Professor, Ramaiah Dental College, Bangalore).",
  alternates: { canonical: "/education" },
};

const workshopsList = [
  {
    id: "pediatric-dentistry",
    title: "Comprehensive Pediatric Dentistry Workshop",
    subtitle: "Featured Hands-On Masterclass & Live Demos",
    status: "Media & Case Glimpses Available",
    badge: "Featured Masterclass",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-400/40",
    href: "/education/comprehensive-pediatric-dentistry-workshop",
    image: "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-2.jpg",
    hasMedia: true,
    description:
      "An intensive hands-on masterclass covering rubber dam isolation, pediatric crowns (zirconia & SSC), vital pulp therapy, rotary pulpectomy, and positive child behavior management.",
    highlights: [
      "Typodont hands-on crown preparation & crimping",
      "Full rubber dam isolation protocols",
      "MTA vital pulp therapy & pulpectomy workflows",
      "Includes 2 live procedure videos & photo gallery",
    ],
    ctaText: "View Workshop Media, Videos & Photos",
  },
  {
    id: "micro-endodontics",
    title: "Microscopic Endodontics & Precision RCT",
    subtitle: "Advanced Surgical Optics Masterclass",
    status: "Upcoming Cohort",
    badge: "Upcoming Batch",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
    href: whatsappUrl("Hello Dr. Prem Kumar R, I would like syllabus and registration details for the Microscopic Endodontics Masterclass."),
    isExternal: true,
    image: "/images/services/microscopic-rct.jpg",
    hasMedia: false,
    description:
      "Master the surgical operating microscope for endodontic access, finding calcified MB2 canals, ultrasonics troughing, and zero-perforation canal preparation.",
    highlights: [
      "Operating microscope focal calibration & ergonomics",
      "MB2 canal identification & complex canal scouting",
      "Ultrasonic irrigation & bioactive MTA obturation",
      "Live HD microscopic surgical feed analysis",
    ],
    ctaText: "Enquire & Request Syllabus",
  },
  {
    id: "surgical-ergonomics",
    title: "Surgical Ergonomics & Optical Alignment",
    subtitle: "Clinician Postural Health & Longevity",
    status: "Modular Workshop",
    badge: "Essential Practice",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/40",
    href: whatsappUrl("Hello Dr. Prem Kumar R, I am interested in the Surgical Ergonomics & Optical Alignment training module."),
    isExternal: true,
    image: "/images/services/laser-dentistry.jpg",
    hasMedia: false,
    description:
      "Eliminate neck and back strain through perfect optical axis alignment, indirect vision training, and ergonomically balanced operatory positioning for long surgeries.",
    highlights: [
      "Neutral spine posture & mirror manipulation",
      "Parfocality calibration for effortless magnification",
      "Camera integration & clinical documentation",
      "Fatigue reduction during complex multi-hour procedures",
    ],
    ctaText: "Enquire for Next Batch",
  },
  {
    id: "chairside-observership",
    title: "1-on-1 Private Observerships & Case Mentorship",
    subtitle: "Intensive Chairside Apprenticeship",
    status: "By Appointment",
    badge: "Private Mentorship",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/40",
    href: whatsappUrl("Hello Dr. Prem Kumar R, I am interested in enrolling for a 1-on-1 clinical observership at your Attur clinic."),
    isExternal: true,
    image: "/images/dr-prem-portrait.png",
    hasMedia: false,
    description:
      "Join Dr. Prem Kumar R at his Attur flagship clinic for private chairside observation, real-patient case reviews, and personalised clinical coaching.",
    highlights: [
      "Direct chairside observation of complex clinical cases",
      "Pre-op and post-op treatment planning deep-dives",
      "Private Q&A sessions on troubleshooting clinical hurdles",
      "Certificate of clinical observation upon completion",
    ],
    ctaText: "Apply for 1-on-1 Mentorship",
  },
];

const facultyAchievements = [
  {
    stat: "6+ Years",
    label: "Specialised Pediatric & Microscopic Practice",
  },
  {
    stat: "Former Asst. Prof",
    label: "Ramaiah Dental College & Hospital, Bangalore",
  },
  {
    stat: "350+ Doctors",
    label: "Trained in Hands-On Dental Workshops",
  },
  {
    stat: "MDS & BDS",
    label: "RGUHS Alumnus & Academic Mentor",
  },
];

export default function EducationHubPage() {
  return (
    <main className="min-h-screen pt-20 bg-[#0A2540] text-white">
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom max-w-4xl relative z-10">
          <nav className="flex items-center gap-2 text-sm text-sky-300/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Education &amp; Mentorship</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4" />
            Academic Leadership &amp; Clinical Academy
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
            Advancing Modern Dentistry Through{" "}
            <span className="italic text-accent">Mastery &amp; Mentorship</span>
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">
            Dr. Prem Kumar R brings over 6+ years of specialised clinical practice alongside his tenure as former Assistant / Associate Professor at <strong>M.S. Ramaiah Dental College &amp; Hospital, Bangalore</strong>. He conducts private clinical mentorship programs, hands-on masterclasses, and specialized workshops for dentists across India.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl("Hello Dr. Prem Kumar R, I would like details about your upcoming clinical mentorship batches and workshops.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-sky-500 transition-colors shadow-lg shadow-accent/20"
            >
              <MessageCircle className="w-4 h-4" />
              Register for Next Batch
            </a>
            <Link
              href="#workshops-catalog"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/20 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Explore Workshop Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-slate-900/60 border-b border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {facultyAchievements.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-sm"
              >
                <p className="text-2xl md:text-3xl font-bold text-sky-300 mb-1">{item.stat}</p>
                <p className="text-xs md:text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Catalog Grid */}
      <section id="workshops-catalog" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-2">
              Clinical Programs &amp; Masterclasses
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
              Explore Available <span className="italic text-sky-300">Workshops</span>
            </h2>
            <p className="text-white/75 text-sm md:text-base leading-relaxed">
              Choose a specific clinical masterclass below to explore detailed course modules, hands-on curriculum, and previous batch media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopsList.map((ws) => (
              <div
                key={ws.id}
                className="group rounded-3xl bg-slate-900/90 border border-white/15 hover:border-sky-400/60 transition-all overflow-hidden flex flex-col justify-between shadow-2xl"
              >
                <div>
                  {/* Thumbnail / Header */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <Image
                      src={ws.image}
                      alt={ws.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Badges on image */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${ws.badgeColor}`}>
                        {ws.badge}
                      </span>
                      {ws.hasMedia && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-white border border-white/20 text-xs font-medium backdrop-blur-sm">
                          <Video className="w-3.5 h-3.5 text-sky-400" />
                          <Camera className="w-3.5 h-3.5 text-emerald-400" />
                          Videos &amp; Photos
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-sky-300 mb-1">
                        {ws.subtitle}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                        {ws.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 md:p-8">
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      {ws.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {ws.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 md:p-8 pt-0">
                  {ws.isExternal ? (
                    <a
                      href={ws.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-sky-500 transition-colors border border-white/20 group/btn"
                    >
                      <span>{ws.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={ws.href}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sky-500 text-slate-950 font-bold text-sm hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20 group/btn"
                    >
                      <span>{ws.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn With Dr. Prem Section */}
      <section className="section-padding bg-white text-primary">
        <div className="container-custom max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Why Doctors Choose Dr. Prem Kumar’s Mentorship
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              Experience focused, high-yield clinical education in a state-of-the-art operatory equipped with surgical microscopes, digital radiography, and pediatric bio-restorative materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-neutral-200 p-8 bg-neutral-50 hover:border-accent/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-accent flex items-center justify-center mb-6">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                100% Magnification Focus
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Learn how to transition seamlessly from loupes or naked-eye dentistry to surgical operating microscopes with confidence and ergonomic posture.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 p-8 bg-neutral-50 hover:border-accent/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-accent flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Academic Pedigree
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Structured pedagogical curriculum honed through years of teaching undergraduate and postgraduate dental scholars at Ramaiah Dental College.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 p-8 bg-neutral-50 hover:border-accent/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-accent flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Immediate Clinical Application
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Walk away with clinical tips and tricks that can be directly applied to your private practice Monday morning to improve treatment success rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StickyBookingBar />
    </main>
  );
}
