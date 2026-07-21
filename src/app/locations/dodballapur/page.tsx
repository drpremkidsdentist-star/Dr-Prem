import { Metadata } from "next";
import { ServiceAreaView } from "@/components/locations/ServiceAreaView";
import { getServiceArea } from "@/lib/serviceAreas";

const area = getServiceArea("dodballapur")!;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  keywords: area.keywords,
  alternates: { canonical: "/locations/dodballapur" },
  openGraph: {
    title: area.title,
    description: area.description,
    url: "https://www.drpremkumar.in/locations/dodballapur",
  },
};

export default function DodballapurLocationPage() {
  return <ServiceAreaView area={area} />;
}
