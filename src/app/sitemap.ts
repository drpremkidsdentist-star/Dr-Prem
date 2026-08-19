import { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/serviceAreas";

const baseUrl = "https://www.drpremkumar.in";

const staticPages: {
  url: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}[] = [
  // —— Tier 1: Homepage ——
  { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },

  // —— Tier 2: Core Conversion Pages ——
  { url: `${baseUrl}/book-appointment`, priority: 0.95, changeFrequency: "weekly" },
  { url: `${baseUrl}/microscopic-dentistry`, priority: 0.95, changeFrequency: "weekly" },

  // —— Tier 3: Service Pages (High Commercial Intent) ——
  { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/microscopic-root-canal`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/dental-implants`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/pediatric-dentistry`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/smile-design`, priority: 0.85, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/cosmetic-dentistry`, priority: 0.85, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/laser-dentistry`, priority: 0.85, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/preventive-care`, priority: 0.8, changeFrequency: "weekly" },

  // —— Tier 4: Location Pages (Local SEO Hubs) ——
  { url: `${baseUrl}/locations`, priority: 0.95, changeFrequency: "weekly" },

  // —— Tier 5: Trust & Authority Pages ——
  { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${baseUrl}/about/dr-prem-kumar`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${baseUrl}/faq`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/testimonials`, priority: 0.75, changeFrequency: "monthly" },
  { url: `${baseUrl}/awards`, priority: 0.65, changeFrequency: "yearly" },

  // —— Tier 6: Content & Knowledge Pages ——
  { url: `${baseUrl}/knowledge-center`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/knowledge-center/microscopic-root-canal`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/knowledge-center/dental-implant-guide`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/knowledge-center/pediatric-dental-care`, priority: 0.8, changeFrequency: "weekly" },

  // —— Tier 7: Cases & Gallery ——
  { url: `${baseUrl}/cases`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/cases/microscopic-rct-transformation`, priority: 0.75, changeFrequency: "monthly" },
  { url: `${baseUrl}/cases/implant-makeover`, priority: 0.75, changeFrequency: "monthly" },
  { url: `${baseUrl}/cases/smile-design-before-after`, priority: 0.75, changeFrequency: "monthly" },
  { url: `${baseUrl}/cases/pediatric-dental-care`, priority: 0.75, changeFrequency: "monthly" },
  { url: `${baseUrl}/cases/family-dental-journey`, priority: 0.75, changeFrequency: "monthly" },
  { url: `${baseUrl}/smile-gallery`, priority: 0.75, changeFrequency: "weekly" },

  // —— Tier 8: Supporting Pages ——
  { url: `${baseUrl}/technology`, priority: 0.75, changeFrequency: "monthly" },
  { url: `${baseUrl}/patient-journey`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${baseUrl}/media`, priority: 0.6, changeFrequency: "monthly" },
  { url: `${baseUrl}/videos`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/videos/educational`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/videos/patient-testimonials`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/videos/procedure-demos`, priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locationEntries = serviceAreas.map((area) => ({
    url: `${baseUrl}/locations/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: area.kind === "flagship" ? 0.95 : 0.9,
  }));

  const staticEntries = staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [...staticEntries, ...locationEntries];
}

