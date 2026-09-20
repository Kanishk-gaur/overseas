import PageHero from "@/components/PageHero";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";

export const metadata = {
  title: `Case Studies | ${site.name}`,
  description: "Real workforce orders we've fulfilled for client companies across the Gulf, Europe, and Asia, with headcounts and lead times.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Real workforce orders, real numbers — how we've solved sourcing challenges for client companies."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
      />
      <CaseStudies />
      <Testimonials />
      <CTABanner />
    </>
  );
}
