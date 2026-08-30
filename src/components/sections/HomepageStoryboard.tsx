"use client";

import dynamic from "next/dynamic";
import { ScrollStoryStage } from "./ScrollStoryStage";
import { KidsStorySection } from "./KidsStorySection";
import { AdultStorySection } from "./AdultStorySection";
import { FamilyStorySection } from "./FamilyStorySection";
import { AtturLocationSection } from "./AtturLocationSection";
import { StickyBookingBar } from "./StickyBookingBar";
import { ScrollProgressTracker } from "@/components/ui/ScrollProgressTracker";

const MicroscopicLensSimulator = dynamic(
  () =>
    import("./MicroscopicLensSimulator").then((m) => m.MicroscopicLensSimulator),
  { ssr: false }
);
const BeforeAfterSlider = dynamic(
  () => import("./BeforeAfterSlider").then((m) => m.BeforeAfterSlider),
  { ssr: false }
);
const MicroscopicDentistry = dynamic(() =>
  import("./MicroscopicDentistry").then((m) => m.MicroscopicDentistry)
);
const Technology = dynamic(() => import("./Technology").then((m) => m.Technology));
const EducationMentorship = dynamic(() =>
  import("./EducationMentorship").then((m) => m.EducationMentorship)
);
const Testimonials = dynamic(() =>
  import("./Testimonials").then((m) => m.Testimonials)
);
const InteractiveScheduler = dynamic(
  () => import("./InteractiveScheduler").then((m) => m.InteractiveScheduler),
  { ssr: false }
);
const FAQ = dynamic(() => import("./FAQ").then((m) => m.FAQ));

export function HomepageStoryboard() {
  return (
    <div className="bg-[#0A2540] text-white relative">
      <ScrollProgressTracker />
      <ScrollStoryStage />
      <KidsStorySection />
      <AdultStorySection />
      <FamilyStorySection />
      <MicroscopicLensSimulator />
      <BeforeAfterSlider />
      <MicroscopicDentistry />
      <Technology />
      <EducationMentorship />
      <AtturLocationSection />
      <Testimonials />
      <InteractiveScheduler />
      <FAQ />
      <StickyBookingBar />
    </div>
  );
}
