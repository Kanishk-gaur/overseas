import IndustryDetail from "@/components/IndustryDetail";
import CTABanner from "@/components/CTABanner";
import { getIndustry } from "@/data/industries";
import { site } from "@/lib/siteConfig";

const industry = getIndustry("healthcare");

export const metadata = {
  title: `Healthcare Jobs & Workforce | ${site.name}`,
  description: industry.body,
};

export default function HealthcarePage() {
  return (
    <>
      <IndustryDetail industry={industry} />
      <CTABanner />
    </>
  );
}
