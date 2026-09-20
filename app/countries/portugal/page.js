import CountryDetail from "@/components/CountryDetail";
import CTABanner from "@/components/CTABanner";
import { getCountry } from "@/data/countries";
import { site } from "@/lib/siteConfig";

const country = getCountry("portugal");

export const metadata = {
  title: `Workforce Supply for Portugal | ${site.name}`,
  description: country.body,
};

export default function PortugalPage() {
  return (
    <>
      <CountryDetail country={country} />
      <CTABanner />
    </>
  );
}
