import CountryDetail from "@/components/CountryDetail";
import CTABanner from "@/components/CTABanner";
import { getCountry } from "@/data/countries";
import { site } from "@/lib/siteConfig";

const country = getCountry("uk");

export const metadata = {
  title: `Workforce Supply for the United Kingdom | ${site.name}`,
  description: country.body,
};

export default function UkPage() {
  return (
    <>
      <CountryDetail country={country} />
      <CTABanner />
    </>
  );
}
