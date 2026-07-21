import { Metadata } from "next";
import { ServiceAreaView } from "@/components/locations/ServiceAreaView";
import { getServiceArea } from "@/lib/serviceAreas";

const area = getServiceArea("attur")!;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  keywords: area.keywords,
  alternates: { canonical: "/locations/attur" },
  openGraph: {
    title: area.title,
    description: area.description,
    url: "https://www.drpremkumar.in/locations/attur",
  },
};

export default function AtturLocationPage() {
  return <ServiceAreaView area={area} />;
}
