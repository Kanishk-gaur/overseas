import PageHero from "@/components/PageHero";
import About from "@/components/About";
import RecruitmentFlowChart from "@/components/RecruitmentFlowChart";
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
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
      />
      <About />
      <RecruitmentFlowChart />
      <TeamGrid />
      <CTABanner />
    </>
  );
}
