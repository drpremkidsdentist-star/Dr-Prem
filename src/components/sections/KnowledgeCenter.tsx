"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, User, ArrowRight, BookOpen, Microscope, Baby, Stethoscope } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function KnowledgeCenter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { icon: Microscope, name: "Microscopic Dentistry", count: 12 },
    { icon: Baby, name: "Pediatric Dentistry", count: 8 },
    { icon: Stethoscope, name: "Preventive Care", count: 10 },
    { icon: BookOpen, name: "General Dental Health", count: 15 },
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
    },
  ];

  return (
    <section id="knowledge-center" className="section-padding bg-white">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Knowledge Center
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Expert{" "}
            <span className="font-serif italic text-accent">Insights</span> & Education
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Stay informed with the latest insights on dental health, microscopic dentistry,
            and advanced treatments from Dr. Prem Kumar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-accent hover:shadow-soft transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <category.icon className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-primary text-sm mb-1">{category.name}</h3>
              <p className="text-xs text-neutral-500">{category.count} articles</p>
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-primary">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
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
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-neutral-500">
                    <User className="w-3 h-3" />
                    {article.author}
                  </span>
                  <Link
                    href={`#article-${article.id}`}
                    className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link href="#knowledge-center" className="btn-secondary">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
