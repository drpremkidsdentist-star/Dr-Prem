import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, User, AlertTriangle, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

const articleSlugs = ["microscopic-root-canal", "dental-implant-guide", "pediatric-dental-care"];

const articleData: Record<string, {
  title: string;
  description: string;
  content: { heading: string; text: string }[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  relatedSlug?: string;
  relatedTitle?: string;
  faqs?: { question: string; answer: string }[];
}> = {
  "microscopic-root-canal": {
    title: "The Complete Guide to Microscopic Root Canal Treatment",
    description:
      "Learn how microscopic root canal treatment offers superior precision, accuracy, and patient outcomes compared to traditional methods.",
    category: "Microscopic Dentistry",
    date: "2026-07-15",
    readTime: "8 min read",
    author: "Dr. Prem Kumar R",
    relatedSlug: "/services/microscopic-root-canal",
    relatedTitle: "Microscopic Root Canal Treatment",
    content: [
      {
        heading: "What Is Microscopic Root Canal Treatment?",
        text: "Microscopic root canal treatment uses advanced surgical operating microscopes that provide high magnification and focused illumination. This allows Dr. Prem Kumar R to see details invisible to the naked eye, enabling more precise diagnoses and treatments with minimal invasiveness.",
      },
      {
        heading: "Why Choose Microscopic Precision?",
        text: "Traditional root canal treatment relies on the dentist's unaided vision, which can miss tiny cracks, complex anatomy, or additional canals. With microscopic dentistry, we can identify and treat these issues with exceptional accuracy, reducing the risk of retreatment and ensuring better long-term outcomes.",
      },
      {
        heading: "The Procedure",
        text: "During the procedure, Dr. Prem Kumar R uses a high-powered operating microscope to carefully examine the tooth, locate all canals, and remove infected tissue with precision. The enhanced visualization allows for thorough cleaning and sealing of the root canal system in a single visit in most cases.",
      },
      {
        heading: "Benefits of Microscopic Root Canal Treatment",
        text: "Patients experience less discomfort, faster healing, and higher success rates. The precision of microscopic treatment means smaller access cavities, preservation of more natural tooth structure, and reduced risk of complications.",
      },
    ],
    faqs: [
      { question: "Is microscopic root canal treatment more expensive?", answer: "While the initial cost may be slightly higher, the precision and reduced risk of retreatment often result in better long-term value and fewer additional procedures." },
      { question: "How long does the procedure take?", answer: "Most microscopic root canal treatments are completed in 60-90 minutes in a single visit." },
    ],
  },
  "dental-implant-guide": {
    title: "Dental Implants: What You Need to Know",
    description:
      "A comprehensive guide to dental implants, including types, procedures, costs, and aftercare tips.",
    category: "Dental Implants",
    date: "2026-07-05",
    readTime: "6 min read",
    author: "Dr. Prem Kumar",
    relatedSlug: "/services/dental-implants",
    relatedTitle: "Dental Implants",
    content: [
      {
        heading: "What Are Dental Implants?",
        text: "Dental implants are artificial tooth roots made of biocompatible titanium that are surgically placed into the jawbone. They provide a strong foundation for fixed or removable replacement teeth that look, feel, and function like natural teeth.",
      },
      {
        heading: "Types of Dental Implants",
        text: "There are several types of dental implants including endosteal implants (placed in the bone), subperiosteal implants (placed under the gum but on or above the jawbone), and zygomatic implants (placed in the cheekbone for severe bone loss). Dr. Prem Kumar will recommend the best option based on your specific needs.",
      },
      {
        heading: "The Implant Procedure",
        text: "The implant procedure typically involves three stages: implant placement, osseointegration (healing period of 3-6 months), and restoration with a crown, bridge, or denture. With microscopic precision, Dr. Prem Kumar ensures optimal placement and faster healing.",
      },
      {
        heading: "Caring for Your Dental Implants",
        text: "Dental implants require the same care as natural teeth: brushing twice daily, flossing regularly, and routine dental checkups. With proper care, implants can last a lifetime.",
      },
    ],
    faqs: [
      { question: "Are dental implants painful?", answer: "Dental implant procedures are performed under local anesthesia and are generally well-tolerated. Post-operative discomfort is usually minimal." },
      { question: "How long do dental implants last?", answer: "With proper care, dental implants can last a lifetime. The implant itself is made of biocompatible titanium, while the crown typically lasts 10-15 years." },
    ],
  },
  "pediatric-dental-care": {
    title: "Pediatric Dental Care: Building Healthy Habits Early",
    description:
      "Essential tips for parents on pediatric dental care and establishing good oral hygiene habits from an early age.",
    category: "Pediatric Dentistry",
    date: "2026-06-28",
    readTime: "5 min read",
    author: "Dr. Prem Kumar",
    relatedSlug: "/services/pediatric-dentistry",
    relatedTitle: "Pediatric Dentistry",
    content: [
      {
        heading: "When to Start Dental Visits",
        text: "Children should have their first dental visit by their first birthday or within six months of their first tooth appearing. Early visits help establish good oral hygiene habits and allow for early detection of potential issues.",
      },
      {
        heading: "Making Dental Visits Positive",
        text: "Dr. Prem Kumar specializes in making dental visits a positive experience for children. Our child-friendly clinic environment, gentle approach, and use of advanced technology help children feel comfortable and reduce dental anxiety.",
      },
      {
        heading: "Preventive Care for Children",
        text: "Preventive care includes dental sealants, fluoride treatments, regular cleanings, and education on proper brushing and flossing techniques. These measures help prevent cavities and establish lifelong oral health habits.",
      },
      {
        heading: "Common Pediatric Dental Issues",
        text: "Common issues include early childhood caries (baby bottle tooth decay), thumb sucking, tongue thrusting, and misaligned teeth. Early intervention can prevent more serious problems later.",
      },
    ],
    faqs: [
      { question: "What age should children start visiting the dentist?", answer: "Children should visit the dentist by their first birthday or within six months of their first tooth appearing." },
      { question: "Are dental X-rays safe for children?", answer: "Yes, modern digital X-rays use very low radiation levels and are safe for children. Protective shielding is always used." },
    ],
  },
};

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articleData[params.slug];
  if (!article) {
    notFound();
  }
  return {
    title: `${article.title} | Knowledge Center`,
    description: article.description,
    alternates: { canonical: `/knowledge-center/${params.slug}` },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = articleData[params.slug];

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://drpremkumar.in/knowledge-center/${slug}`,
        "name": article.title,
        "description": article.description,
        "url": `https://drpremkumar.in/knowledge-center/${slug}`,
        "reviewedBy": {
          "@id": "https://drpremkumar.in/#doctor"
        },
        "lastReviewed": article.date,
        "author": {
          "@id": "https://drpremkumar.in/#doctor"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://drpremkumar.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Knowledge Center",
            "item": "https://drpremkumar.in/knowledge-center"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": `https://drpremkumar.in/knowledge-center/${slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id={`schema-article-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    <main className="min-h-screen pt-20 bg-white">
      <article className="container-custom py-8 sm:py-10">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 mb-5">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/knowledge-center" className="hover:text-accent">
            Knowledge Center
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-medium line-clamp-1">{article.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2 min-w-0">
            <span className="text-accent font-medium tracking-widest uppercase text-xs mb-2 block">
              {article.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 leading-tight">
              {article.title}
            </h1>
            <p className="text-base text-neutral-600 leading-relaxed mb-4">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-neutral-500 mb-5">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200/80 border-l-4 border-l-amber-400 p-3.5 sm:p-4 mb-8">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-900">Medical Disclaimer</p>
                  <p className="text-xs sm:text-sm text-amber-800 mt-0.5 leading-relaxed">
                    This article is for informational purposes only and does not constitute medical
                    advice. Always consult a qualified healthcare provider.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-7 sm:space-y-8">
              {article.content.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2.5 leading-snug">
                    {section.heading}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                    {section.text}
                  </p>
                </section>
              ))}
            </div>

            {article.relatedSlug && (
              <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-accent/10 border border-accent/20">
                <h3 className="font-semibold text-primary mb-1.5 flex items-center gap-2 text-sm sm:text-base">
                  <BookOpen className="w-4 h-4 text-accent" />
                  Related Service
                </h3>
                <p className="text-neutral-600 text-sm mb-3">
                  Learn more about our {article.relatedTitle} services.
                </p>
                <Link
                  href={article.relatedSlug}
                  className="text-accent font-semibold text-sm inline-flex items-center gap-1.5"
                >
                  Explore {article.relatedTitle} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">FAQ</h2>
                <div className="space-y-3">
                  {article.faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="bg-neutral-50 rounded-xl p-4 border border-neutral-100"
                    >
                      <h3 className="font-semibold text-primary text-sm sm:text-base mb-1">
                        {faq.question}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1 space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
              <h3 className="font-semibold text-primary mb-3 text-sm">About the Author</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-neutral-100 overflow-hidden shrink-0 relative">
                  <Image
                    src="/images/dr-prem-portrait.png"
                    alt="Dr. Prem Kumar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{article.author}</p>
                  <p className="text-xs text-neutral-500">Microscopic Dentist · Attur</p>
                </div>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Pediatric & microscopic dentistry for families across Yelahanka, Hebbal, and
                Bangalore.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
              <h3 className="font-semibold text-primary mb-3 text-sm">More articles</h3>
              <ul className="space-y-2">
                {articleSlugs
                  .filter((s) => s !== params.slug)
                  .map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`/knowledge-center/${slug}`}
                        className="text-accent hover:underline text-sm"
                      >
                        {articleData[slug].title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="bg-[#0A2540] text-white rounded-2xl p-5">
              <h3 className="font-semibold mb-1.5 text-sm">Ready to get started?</h3>
              <p className="text-xs text-white/75 mb-3">
                Book a consultation at our Attur clinic.
              </p>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2.5 rounded-full text-sm font-semibold min-h-10"
              >
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
    </>
  );
}
