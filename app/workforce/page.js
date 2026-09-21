import PageHero from "@/components/PageHero";
import IndustriesGrid from "@/components/IndustriesGrid";
import WorkforceCategories from "@/components/WorkforceCategories";
import WorkforceAvailability from "@/components/WorkforceAvailability";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";
import { formatCountryList } from "@/data/countries";

export const metadata = {
  title: `Workforce & Industries | ${site.name}`,
  description: `Browse workforce available for deployment by industry and category across ${formatCountryList()} — construction, manufacturing, healthcare, IT, and hospitality.`,
};

export default function WorkforcePage() {
  return (
    <>
      <PageHero
        title="Workforce & Industries"
        subtitle="Browse workforce by industry and category, or the full availability table — and submit your requirement even if your trade isn't listed."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
      />
      <IndustriesGrid />
      <WorkforceCategories />
      <WorkforceAvailability />
      <CTABanner />
    </>
  );
}
