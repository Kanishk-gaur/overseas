import PageHero from "@/components/PageHero";
import { site } from "@/lib/siteConfig";

export const metadata = { title: `Disclaimer | ${site.name}` };

export default function DisclaimerPage() {
  return (
    <>
      <PageHero title="Disclaimer" />
      <section className="section-y">
        <div className="container-x max-w-3xl space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            {site.name} does not guarantee specific sourcing timelines and charges no
            fees beyond those legally permitted under applicable recruitment
            regulations. Client companies are advised to review all service agreements
            independently.
          </p>
          <p>
            We are a licensed agency, registered under {site.licenseAuthority}, License
            No. {site.licenseNo}. Every candidate we supply is screened and verified
            before deployment, in line with our stated compliance process.
          </p>
          <p>
            Workforce availability, processing timelines, and country-specific
            requirements listed on this website are subject to change based on
            candidate availability and government regulations. Please confirm current
            details with your account manager before finalizing a workforce order.
          </p>
        </div>
      </section>
    </>
  );
}
