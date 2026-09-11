import PageHero from "@/components/PageHero";
import WorkforceAvailability from "@/components/WorkforceAvailability";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";

export const metadata = {
  title: `Available Workforce | ${site.name}`,
  description: "Browse workforce currently available for deployment across the Gulf, Europe, and Asia — construction, healthcare, manufacturing, IT, and hospitality.",
};

export default function WorkforcePage() {
  return (
    <>
      <PageHero
        title="Available Workforce"
        subtitle="Browse workforce categories ready for deployment — or submit your requirement even if your trade isn't listed."
      />
      <WorkforceAvailability />
      <CTABanner />
    </>
  );
}
