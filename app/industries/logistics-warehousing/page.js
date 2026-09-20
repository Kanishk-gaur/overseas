import IndustryDetail from "@/components/IndustryDetail";
import CTABanner from "@/components/CTABanner";
import { getIndustry } from "@/data/industries";
import { site } from "@/lib/siteConfig";

const industry = getIndustry("logistics-warehousing");

export const metadata = {
  title: `Logistics & Warehousing Jobs & Workforce | ${site.name}`,
  description: industry.body,
};

export default function LogisticsWarehousingPage() {
  return (
    <>
      <IndustryDetail industry={industry} />
      <CTABanner />
    </>
  );
}
