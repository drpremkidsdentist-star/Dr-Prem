"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Clock, IndianRupee, CheckCircle, UserCheck, HeartPulse, ShieldAlert, Stethoscope, Sparkles, Zap, Microscope, Baby, Shield, Smile } from "lucide-react";
import Link from "next/link";
import { SchemaMarkup } from "@/components/layout/SchemaMarkup";
import { BookAppointment } from "@/components/sections/BookAppointment";

const serviceIcons = {
  sparkles: Sparkles,
  zap: Zap,
  microscope: Microscope,
  baby: Baby,
  shield: Shield,
  smile: Smile,
} as const;

export type ServiceIconName = keyof typeof serviceIcons;

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface RelatedItem {
  title: string;
  href: string;
}

export interface ServicePageData {
  slug: string;
  name: string;
  shortName: string;
  heroTagline: string;
  iconName: ServiceIconName;
  // AEO direct answer block (40-80 words)
  directAnswer: string;
  // Expanded explanation
  expanded: string[];
  whyImportant: string[];
  benefits: string[];
  whoNeeds: string[];
  risks: string[];
  recovery: string;
  costRange: string;
  duration: string;
  doctorInsight: string;
  faqs: ServiceFAQ[];
  relatedCases: RelatedItem[];
  relatedArticles: RelatedItem[];
  // schema support
  procedurePreparation?: string;
  procedureFollowup?: string;
}

function SectionHeading({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
  const hasAccent = accent && title.includes(accent);
  const parts = hasAccent ? title.split(accent) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
        {hasAccent ? (
          <>
            {parts[0]}
            <span className="font-serif italic text-accent">{accent}</span>
            {parts.slice(1).join(accent)}
          </>
        ) : (
          title
        )}
      </h2>
    </motion.div>
  );
}

function ListBlock({ items, icon: Icon = CheckCircle }: { items: string[]; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="flex items-start gap-4"
        >
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon className="w-4 h-4 text-accent" />
          </div>
          <span className="text-neutral-600 leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

function FaqAccordion({ faqs }: { faqs: ServiceFAQ[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div ref={ref} className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-soft"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left"
          >
            <span className="font-semibold text-primary pr-8">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-5"
            >
              <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function RelatedLinks({ title, items }: { title: string; items: RelatedItem[] }) {
  return (
    <div>
      <h4 className="text-lg font-bold text-primary mb-5">{title}</h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center gap-3 text-neutral-600 hover:text-accent transition-colors"
            >
              <ArrowRightSmall />
              <span className="border-b border-transparent group-hover:border-accent transition-colors">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArrowRightSmall() {
  return (
    <svg
      className="w-4 h-4 text-accent flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ServicePage({ data, clinicUrl }: { data: ServicePageData; clinicUrl?: string }) {
  const Icon = serviceIcons[data.iconName] ?? Sparkles;
  const url = `https://drpremkumar.in/services/${data.slug}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.name,
      description: data.directAnswer,
      provider: { "@type": "Person", name: "Dr. Prem Kumar R" },
      serviceType: "Dental Service",
      url,
      areaServed: { "@type": "City", name: "Bangalore" },
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: data.name,
      description: data.directAnswer,
      howPerformed: data.expanded.join(" "),
      preparation: data.procedurePreparation,
      recoveryTime: data.recovery,
      followup: data.procedureFollowup,
    },
  ];

  return (
    <main className="bg-neutral-50">
      <SchemaMarkup schemas={schemas} />

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              All Services
            </Link>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/15 backdrop-blur-sm border border-accent/30 text-white/90 text-sm font-medium mb-8">
              <Icon className="w-4 h-4 text-accent" />
              {data.heroTagline}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              {data.name}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
            >
              {data.heroTagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {clinicUrl ? (
                <a
                  href={clinicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2"
                >
                  Book at the Clinic
                  <ArrowRightSmall />
                </a>
              ) : (
                <Link href="#book-appointment" className="btn-primary text-lg px-10 py-5">
                  Book {data.shortName}
                  <ArrowRightSmall />
                </Link>
              )}
              <Link
                href="#faq"
                className="inline-flex items-center gap-2 px-8 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View FAQs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AEO Direct Answer */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                Quick Answer
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-medium text-primary leading-relaxed">
              {data.directAnswer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Snapshot stats */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatCard icon={Clock} label="Duration" value={data.duration} />
            <StatCard icon={IndianRupee} label="Cost Range" value={data.costRange} />
            <StatCard icon={Stethoscope} label="Recovery" value={data.recovery} />
          </div>
        </div>
      </section>

      {/* Expanded explanation + Why important */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading eyebrow="Overview" title={`Understanding ${data.shortName}`} accent={data.shortName} />
            <div className="space-y-5">
              {data.expanded.map((para, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-neutral-600 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Why It Matters" title="Why It's Important" accent="Important" />
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
              <ListBlock items={data.whyImportant} icon={HeartPulse} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionHeading eyebrow="Benefits" title="Key Benefits" accent="Benefits" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-neutral-100 hover:shadow-soft hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <p className="text-neutral-700 leading-relaxed font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs + Risks */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading eyebrow="Candidates" title="Who Needs It" accent="Needs" />
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
              <ListBlock items={data.whoNeeds} icon={UserCheck} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Considerations" title="Risks & Precautions" accent="Precautions" />
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
              <ListBlock items={data.risks} icon={ShieldAlert} />
            </div>
          </div>
        </div>
      </section>

      {/* Recovery + Cost + Duration */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionHeading eyebrow="What To Expect" title="Recovery, Cost & Duration" accent="Duration" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard icon={Clock} title="Procedure Duration" body={data.duration} />
            <InfoCard icon={IndianRupee} title="Cost Range (INR)" body={data.costRange} />
            <InfoCard icon={Stethoscope} title="Recovery Time" body={data.recovery} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-white rounded-3xl p-8 md:p-10 border border-neutral-100 max-w-3xl mx-auto"
          >
            <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <Stethoscope className="w-6 h-6 text-accent" />
              Recovery Guidance
            </h4>
            <p className="text-neutral-600 leading-relaxed">{data.recovery}</p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Insight */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Doctor&apos;s Insight
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              From Dr. Prem Kumar R
            </h2>
            <div className="relative">
              <span className="absolute -top-6 -left-2 text-8xl text-accent/30 font-serif">&ldquo;</span>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed italic relative z-10">
                {data.doctorInsight}
              </p>
            </div>
            <div className="mt-10 inline-flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                <UserCheck className="w-7 h-7 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Dr. Prem Kumar R</p>
                <p className="text-white/60 text-sm">MDS Pediatric &amp; Microscopic Dentist, Bangalore</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services + Articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading eyebrow="Explore More" title="Related Services & Guides" accent="Guides" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <RelatedLinks title="Related Treatments" items={data.relatedCases} />
            <RelatedLinks title="Related Articles" items={data.relatedArticles} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" accent="Questions" />
          <FaqAccordion faqs={data.faqs} />
        </div>
      </section>

      <BookAppointment />
    </main>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">{label}</p>
      <p className="text-lg font-semibold text-primary">{value}</p>
    </motion.div>
  );
}

function InfoCard({ icon: Icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="p-8 rounded-3xl bg-white border border-neutral-100 hover:shadow-soft transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-lg font-bold text-primary mb-3">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{body}</p>
    </motion.div>
  );
}
