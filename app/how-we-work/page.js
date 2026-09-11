import PageHero from "@/components/PageHero";
import HowWeWork from "@/components/HowWeWork";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";

export const metadata = {
  title: `How We Work | ${site.name}`,
  description:
    "Our dual-track workforce supply process for technical and non-technical hiring, plus the engagement models we support — from requirement to deployment.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        title="How We Work"
        subtitle="A dual-track sourcing process built for technical and non-technical hiring — plus the engagement models we support."
      />
      <HowWeWork />
      <FAQ />
      <CTABanner />
    </>
  );
}
