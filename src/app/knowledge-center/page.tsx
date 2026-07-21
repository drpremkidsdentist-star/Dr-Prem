import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  BookOpen,
  Microscope,
  Baby,
  Stethoscope,
  ArrowRight,
  Clock,
  Calendar,
  User,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge-center" },
  title: "Knowledge Center | Microscopic Dentistry Insights Bangalore",
  description:
    "Expert insights, articles, and educational content about microscopic and pediatric dentistry from Dr. Prem Kumar.",
};

const categories = [
  { icon: Microscope, name: "Microscopic Dentistry", count: 12, slug: "microscopic-dentistry" },
  { icon: Baby, name: "Pediatric Dentistry", count: 8, slug: "pediatric-dentistry" },
  { icon: Stethoscope, name: "Preventive Care", count: 10, slug: "preventive-care" },
  { icon: BookOpen, name: "General Dental Health", count: 15, slug: "general-dental-health" },
];

const articles = [
  {
    id: 1,
    title: "The Complete Guide to Microscopic Root Canal Treatment",
    excerpt:
      "Discover how microscopic dentistry is revolutionizing root canal treatments with unprecedented precision and better outcomes.",
    category: "Microscopic Dentistry",
    date: "2026-07-15",
    readTime: "8 min read",
    author: "Dr. Prem Kumar",
    image: "/images/articles/microscopic-rct.jpg",
    slug: "microscopic-root-canal",
  },
  {
    id: 2,
    title: "When Should Your Child First Visit the Dentist?",
    excerpt:
      "Learn about the importance of early dental visits and how to make your child's first dental experience positive and fear-free.",
    category: "Pediatric Dentistry",
    date: "2026-07-10",
    readTime: "5 min read",
    author: "Dr. Prem Kumar",
    image: "/images/articles/pediatric-first-visit.jpg",
    slug: "pediatric-dental-care",
  },
  {
    id: 3,
    title: "Dental Implants vs. Bridges: Which Is Right for You?",
    excerpt:
      "A comprehensive comparison of dental implants and dental bridges to help you make an informed decision about tooth replacement.",
    category: "Dental Implants",
    date: "2026-07-05",
    readTime: "6 min read",
    author: "Dr. Prem Kumar",
    image: "/images/articles/implants-vs-bridges.jpg",
    slug: "dental-implant-guide",
  },
  {
    id: 4,
    title: "The Science Behind Digital Smile Design",
    excerpt:
      "Explore how digital smile design technology allows you to preview your new smile before any treatment begins.",
    category: "Smile Design",
    date: "2026-06-28",
    readTime: "7 min read",
    author: "Dr. Prem Kumar",
    image: "/images/articles/digital-smile-design.jpg",
    slug: "digital-smile-design",
  },
];

export default function KnowledgeCenterPage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="container-custom py-8 sm:py-10 md:py-12">
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-5">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-medium">Knowledge Center</span>
        </nav>

        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 block">
            Knowledge Center
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 leading-tight">
            Expert <span className="font-serif italic text-accent">Insights</span> & Education
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Stay informed with the latest insights on dental health, microscopic dentistry, and
            advanced treatments from Dr. Prem Kumar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {categories.map((category) => (
            <div
              key={category.name}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-100 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-accent/10 flex items-center justify-center">
                <category.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-primary text-xs sm:text-sm mb-0.5">
                {category.name}
              </h3>
              <p className="text-[11px] text-neutral-500">{category.count} articles</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-soft hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-400"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[11px] font-medium text-primary">
                  {article.category}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-3 text-[11px] text-neutral-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-primary text-sm sm:text-base mb-2 line-clamp-2 group-hover:text-accent">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 text-[11px] text-neutral-500 truncate">
                    <User className="w-3 h-3 shrink-0" />
                    {article.author}
                  </span>
                  <Link
                    href={`/knowledge-center/${article.slug}`}
                    className="text-accent text-xs sm:text-sm font-semibold inline-flex items-center gap-1 shrink-0"
                  >
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/book-appointment" className="btn-primary inline-flex min-h-11">
            Book a Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
