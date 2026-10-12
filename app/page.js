import Hero from "@/components/Hero";
import HeroTeamStrip from "@/components/HeroTeamStrip";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import WorkforceCategories from "@/components/WorkforceCategories";
import CountriesSection from "@/components/CountriesSection";
import IndustriesGrid from "@/components/IndustriesGrid";
import WorkforceAvailability from "@/components/WorkforceAvailability";
import JoinWorkforceCTA from "@/components/JoinWorkforceCTA";
import ProcessSteps from "@/components/ProcessSteps";
import WorkforceGallery from "@/components/WorkforceGallery";
import Testimonials from "@/components/Testimonials";
import PartnerLogos from "@/components/PartnerLogos";
import FAQ from "@/components/FAQ";
import NewsletterSignup from "@/components/NewsletterSignup";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroTeamStrip />
      <StatsBar />
      <About preview />
      <WorkforceCategories preview />
      <CountriesSection preview />
      <IndustriesGrid preview />
      <WorkforceAvailability preview />
      <JoinWorkforceCTA />
      <ProcessSteps />
      <WorkforceGallery />
      <Testimonials />
      <PartnerLogos />
      <FAQ />
      <NewsletterSignup />
      <CTABanner />
    </>
  );
}
