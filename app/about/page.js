import PageHero from "@/components/PageHero";
import About from "@/components/About";
import TeamGrid from "@/components/TeamGrid";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";
import { formatCountryList } from "@/data/countries";

export const metadata = {
  title: `About Us | ${site.name}`,
  description: `Learn about our mission, vision, and why businesses trust us to supply verified workforce for ${formatCountryList()}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A government-registered overseas manpower supply agency dedicated to safe, transparent workforce sourcing."
      />
      <About />
      <TeamGrid />
      <CTABanner />
    </>
  );
}
