import CountryDetail from "@/components/CountryDetail";
import CTABanner from "@/components/CTABanner";
import { getCountry } from "@/data/countries";
import { site } from "@/lib/siteConfig";

const country = getCountry("germany");

export const metadata = {
  title: `Jobs in Germany | ${site.name}`,
  description: country.body,
};

export default function GermanyPage() {
  return (
    <>
      <CountryDetail country={country} />
      <CTABanner />
    </>
  );
}
