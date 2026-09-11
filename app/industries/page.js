import PageHero from "@/components/PageHero";
import IndustriesGrid from "@/components/IndustriesGrid";
import IndustryBreakdown from "@/components/IndustryBreakdown";
import WorkforceCategories from "@/components/WorkforceCategories";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";
import { formatCountryList } from "@/data/countries";

export const metadata = {
  title: `Industries We Supply | ${site.name}`,
  description: `We supply workforce across construction, manufacturing, healthcare, hospitality, IT & engineering, and agriculture in ${formatCountryList()}.`,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Supply"
        subtitle="Our workforce supply spans multiple sectors, matched to each country's labor demand."
      />
      <IndustriesGrid />
      <WorkforceCategories />
      <IndustryBreakdown />
      <CTABanner />
    </>
  );
}
