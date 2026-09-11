import PageHero from "@/components/PageHero";
import Glossary from "@/components/Glossary";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";

export const metadata = {
  title: `Visa & Compliance Glossary | ${site.name}`,
  description:
    "Plain-language definitions for SSW, TITP, EU Blue Card, Iqama, Type D visa, B/1 visa, and other terms referenced across our country guides.",
};

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        title="Visa & Compliance Glossary"
        subtitle="Quick reference for the visa categories and terms your HR and legal teams will encounter."
      />
      <Glossary />
      <CTABanner />
    </>
  );
}
