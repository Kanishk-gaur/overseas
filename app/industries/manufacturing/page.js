import IndustryDetail from "@/components/IndustryDetail";
import CTABanner from "@/components/CTABanner";
import { getIndustry } from "@/data/industries";
import { site } from "@/lib/siteConfig";

const industry = getIndustry("manufacturing");

export const metadata = {
  title: `Manufacturing Jobs & Workforce | ${site.name}`,
  description: industry.body,
};

export default function ManufacturingPage() {
  return (
    <>
      <IndustryDetail industry={industry} />
      <CTABanner />
    </>
  );
}
