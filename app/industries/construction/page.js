import IndustryDetail from "@/components/IndustryDetail";
import CTABanner from "@/components/CTABanner";
import { getIndustry } from "@/data/industries";
import { site } from "@/lib/siteConfig";

const industry = getIndustry("construction");

export const metadata = {
  title: `Construction Jobs & Workforce | ${site.name}`,
  description: industry.body,
};

export default function ConstructionPage() {
  return (
    <>
      <IndustryDetail industry={industry} />
      <CTABanner />
    </>
  );
}
