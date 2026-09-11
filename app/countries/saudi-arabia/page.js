import CountryDetail from "@/components/CountryDetail";
import CTABanner from "@/components/CTABanner";
import { getCountry } from "@/data/countries";
import { site } from "@/lib/siteConfig";

const country = getCountry("saudi-arabia");

export const metadata = {
  title: `Workforce Supply for Saudi Arabia | ${site.name}`,
  description: country.body,
};

export default function SaudiArabiaPage() {
  return (
    <>
      <CountryDetail country={country} />
      <CTABanner />
    </>
  );
}
