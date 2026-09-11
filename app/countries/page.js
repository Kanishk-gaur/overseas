import PageHero from "@/components/PageHero";
import CountriesSection from "@/components/CountriesSection";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";
import { countries, formatCountryList } from "@/data/countries";

export const metadata = {
  title: `Countries We Supply To | ${site.name}`,
  description: `Verified workforce supply for businesses hiring in ${formatCountryList()}.`,
};

export default function CountriesPage() {
  return (
    <>
      <PageHero
        title="Countries We Supply To"
        subtitle={`Source workforce across ${countries.length} of the world's most in-demand labor markets.`}
      />
      <CountriesSection />
      <CTABanner />
    </>
  );
}
