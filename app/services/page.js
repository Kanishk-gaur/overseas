import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";

export const metadata = {
  title: `Our Services | ${site.name}`,
  description:
    "End-to-end workforce supply services: candidate sourcing and screening, visa sponsorship, language training, and dedicated account support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Complete workforce supply support — from candidate sourcing to ongoing account management."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
      />
      <Services />
      <ProcessSteps />
      <FAQ />
      <CTABanner />
    </>
  );
}
