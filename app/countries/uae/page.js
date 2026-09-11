import CountryDetail from "@/components/CountryDetail";
import CTABanner from "@/components/CTABanner";
import { getCountry } from "@/data/countries";
import { site } from "@/lib/siteConfig";

const country = getCountry("uae");

export const metadata = {
  title: `Workforce Supply for the UAE | ${site.name}`,
  description: country.body,
};

export default function UaePage() {
  return (
    <>
      <CountryDetail country={country} />
      <CTABanner />
    </>
  );
}
