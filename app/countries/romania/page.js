import CountryDetail from "@/components/CountryDetail";
import CTABanner from "@/components/CTABanner";
import { getCountry } from "@/data/countries";
import { site } from "@/lib/siteConfig";

const country = getCountry("romania");

export const metadata = {
  title: `Workforce Supply for Romania | ${site.name}`,
  description: country.body,
};

export default function RomaniaPage() {
  return (
    <>
      <CountryDetail country={country} />
      <CTABanner />
    </>
  );
}
