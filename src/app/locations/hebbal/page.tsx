import { Metadata } from "next";
import { ServiceAreaView } from "@/components/locations/ServiceAreaView";
import { getServiceArea } from "@/lib/serviceAreas";

const area = getServiceArea("hebbal")!;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  keywords: area.keywords,
  alternates: { canonical: "/locations/hebbal" },
  openGraph: {
    title: area.title,
    description: area.description,
    url: "https://www.drpremkumar.in/locations/hebbal",
  },
};

export default function HebbalLocationPage() {
  return <ServiceAreaView area={area} />;
}
