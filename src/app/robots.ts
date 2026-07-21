import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/", "/api/"],
      crawlDelay: 1,
    },
    sitemap: "https://www.drpremkumar.in/sitemap.xml",
    host: "https://www.drpremkumar.in",
  };
}
