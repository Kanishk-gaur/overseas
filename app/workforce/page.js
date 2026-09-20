import PageHero from "@/components/PageHero";
import WorkforceCategories from "@/components/WorkforceCategories";
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
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
      />
      <WorkforceCategories preview />
      <WorkforceAvailability />
      <CTABanner />
    </>
  );
}
