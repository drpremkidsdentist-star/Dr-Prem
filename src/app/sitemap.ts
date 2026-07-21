import { MetadataRoute } from "next";

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
  { url: baseUrl, priority: 1, changeFrequency: "weekly" },
  { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${baseUrl}/about/dr-prem-kumar`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${baseUrl}/microscopic-dentistry`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${baseUrl}/technology`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${baseUrl}/patient-journey`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${baseUrl}/smile-gallery`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/testimonials`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${baseUrl}/knowledge-center`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/awards`, priority: 0.6, changeFrequency: "yearly" },
  { url: `${baseUrl}/media`, priority: 0.6, changeFrequency: "monthly" },
  { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/book-appointment`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/microscopic-root-canal`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/dental-implants`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/smile-design`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/pediatric-dentistry`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/cosmetic-dentistry`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/laser-dentistry`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/services/preventive-care`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/cases`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${baseUrl}/cases/microscopic-rct-transformation`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${baseUrl}/cases/implant-makeover`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${baseUrl}/cases/smile-design-before-after`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${baseUrl}/cases/pediatric-dental-care`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${baseUrl}/cases/family-dental-journey`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${baseUrl}/knowledge-center/microscopic-root-canal`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/knowledge-center/dental-implant-guide`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/knowledge-center/pediatric-dental-care`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/videos`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/videos/educational`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/videos/patient-testimonials`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/videos/procedure-demos`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${baseUrl}/locations`, priority: 0.9, changeFrequency: "monthly" },
  { url: `${baseUrl}/locations/attur`, priority: 0.9, changeFrequency: "monthly" },
  { url: `${baseUrl}/locations/yelahanka`, priority: 0.85, changeFrequency: "monthly" },
  { url: `${baseUrl}/locations/hebbal`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${baseUrl}/locations/dodballapur`, priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
