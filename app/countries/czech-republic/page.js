import CountryDetail from "@/components/CountryDetail";
import CTABanner from "@/components/CTABanner";
import { getCountry } from "@/data/countries";
import { site } from "@/lib/siteConfig";

const country = getCountry("czech-republic");

export const metadata = {
  title: `Workforce Supply for the Czech Republic | ${site.name}`,
  description: country.body,
};

export default function CzechRepublicPage() {
  return (
    <>
      <CountryDetail country={country} />
      <CTABanner />
    </>
  );
}
