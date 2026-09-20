import PageHero from "@/components/PageHero";
import TeamGrid from "@/components/TeamGrid";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";

export const metadata = {
  title: `Our Team | ${site.name}`,
  description: "Meet the sourcing consultants and country desk experts behind your workforce order.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Experienced consultants managing your workforce order from requirement to deployment."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
      />
      <TeamGrid />
      <CTABanner />
    </>
  );
}
