import IndustryDetail from "@/components/IndustryDetail";
import CTABanner from "@/components/CTABanner";
import { getIndustry } from "@/data/industries";
import { site } from "@/lib/siteConfig";

const industry = getIndustry("facilities-management");

export const metadata = {
  title: `Facilities Management Jobs & Workforce | ${site.name}`,
  description: industry.body,
};

export default function FacilitiesManagementPage() {
  return (
    <>
      <IndustryDetail industry={industry} />
      <CTABanner />
    </>
  );
}
