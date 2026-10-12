import PageHero from "@/components/PageHero";
import { pageHeroImages } from "@/data/siteImages";
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
        image={pageHeroImages.workforce}
      />
      <IndustriesGrid />
      <WorkforceCategories />
      <WorkforceAvailability />
      <CTABanner />
    </>
  );
}
