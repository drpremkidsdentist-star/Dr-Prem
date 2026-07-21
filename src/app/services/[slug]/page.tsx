import { redirect } from "next/navigation";

const legacyToNew: Record<string, string> = {
  "root-canal": "/services/microscopic-root-canal",
  implants: "/services/dental-implants",
  "smile-design": "/services/smile-design",
  pediatric: "/services/pediatric-dentistry",
  cosmetic: "/services/cosmetic-dentistry",
  laser: "/services/laser-dentistry",
  preventive: "/services/preventive-care",
};

export function generateStaticParams() {
  return Object.keys(legacyToNew).map((slug) => ({ slug }));
}

export default function LegacyServicePage({ params }: { params: { slug: string } }) {
  const target = legacyToNew[params.slug];
  if (!target) {
    redirect("/services");
  }
  redirect(target);
}
