import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const caseSlugs = ["case-1", "case-2", "case-3"];

const caseData: Record<string, { title: string; description: string }> = {
  "case-1": {
    title: "Complete Smile Transformation",
    description:
      "A remarkable transformation using microscopic dentistry techniques for a full smile makeover.",
  },
  "case-2": {
    title: "Root Canal with Microscope",
    description:
      "Precision root canal treatment performed with surgical microscope for optimal results.",
  },
  "case-3": {
    title: "Dental Implant Restoration",
    description:
      "Full mouth restoration with dental implants achieving natural-looking results.",
  },
};

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseItem = caseData[params.slug];
  if (!caseItem) {
    notFound();
  }
  return {
    title: `${caseItem.title} | Real Cases | Dr. Prem Kumar`,
    description: caseItem.description,
  };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const caseItem = caseData[params.slug];

  if (!caseItem) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/cases" className="hover:text-accent transition-colors">Cases</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">{caseItem.title}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {caseItem.title}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {caseItem.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
