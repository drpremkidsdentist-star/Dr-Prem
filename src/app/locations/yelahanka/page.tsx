import { Metadata } from "next";
import { ServiceAreaView } from "@/components/locations/ServiceAreaView";
import { getServiceArea } from "@/lib/serviceAreas";

const area = getServiceArea("yelahanka")!;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  keywords: area.keywords,
  alternates: { canonical: "/locations/yelahanka" },
  openGraph: {
    title: area.title,
    description: area.description,
    url: "https://www.drpremkumar.in/locations/yelahanka",
  },
};

export default function YelahankaLocationPage() {
  return <ServiceAreaView area={area} />;
}
