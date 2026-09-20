import IndustryDetail from "@/components/IndustryDetail";
import CTABanner from "@/components/CTABanner";
import { getIndustry } from "@/data/industries";
import { site } from "@/lib/siteConfig";

const industry = getIndustry("agriculture");

export const metadata = {
  title: `Agriculture Jobs & Workforce | ${site.name}`,
  description: industry.body,
};

export default function AgriculturePage() {
  return (
    <>
      <IndustryDetail industry={industry} />
      <CTABanner />
    </>
  );
}
