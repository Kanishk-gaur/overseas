import IndustryDetail from "@/components/IndustryDetail";
import CTABanner from "@/components/CTABanner";
import { getIndustry } from "@/data/industries";
import { site } from "@/lib/siteConfig";

const industry = getIndustry("hospitality");

export const metadata = {
  title: `Hospitality Jobs & Workforce | ${site.name}`,
  description: industry.body,
};

export default function HospitalityPage() {
  return (
    <>
      <IndustryDetail industry={industry} />
      <CTABanner />
    </>
  );
}
