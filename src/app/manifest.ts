import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Prem Kumar - Microscopic Dentist Bangalore",
    short_name: "Dr. Prem Kumar",
    description:
      "World-class microscopic dentistry in Bangalore. Advanced technology, premium dental care by Dr. Prem Kumar.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0A2540",
    orientation: "portrait",
    categories: ["health", "medical", "lifestyle"],
    lang: "en-IN",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
