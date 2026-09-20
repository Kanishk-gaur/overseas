import IndustryDetail from "@/components/IndustryDetail";
import CTABanner from "@/components/CTABanner";
import { getIndustry } from "@/data/industries";
import { site } from "@/lib/siteConfig";

const industry = getIndustry("it-engineering");

export const metadata = {
  title: `IT & Engineering Jobs & Workforce | ${site.name}`,
  description: industry.body,
};

export default function ITEngineeringPage() {
  return (
    <>
      <IndustryDetail industry={industry} />
      <CTABanner />
    </>
  );
}
