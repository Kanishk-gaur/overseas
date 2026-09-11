import PageHero from "@/components/PageHero";
import { site } from "@/lib/siteConfig";
import { formatCountryList } from "@/data/countries";

export const metadata = { title: `Terms & Conditions | ${site.name}` };

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" />
      <section className="section-y">
        <div className="container-x max-w-3xl space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            By using this website and submitting a workforce requirement to {site.name},
            you agree to the following terms and conditions.
          </p>
          <h2 className="text-navy font-semibold text-base pt-2">Use of Services</h2>
          <p>
            Our workforce supply services are provided to businesses hiring overseas
            workforce for {formatCountryList()}, subject to a signed service
            agreement, documentation, and candidate availability.
          </p>
          <h2 className="text-navy font-semibold text-base pt-2">No Guarantee of Timeline or Visa Approval</h2>
          <p>
            Submitting a workforce requirement does not guarantee a specific sourcing
            timeline. Final visa and work permit approval rests with the relevant
            government authority.
          </p>
          <h2 className="text-navy font-semibold text-base pt-2">Fees</h2>
          <p>
            All service charges are communicated transparently in your service
            agreement and comply with License No. {site.licenseNo} issued by{" "}
            {site.licenseAuthority}.
          </p>
          <h2 className="text-navy font-semibold text-base pt-2">Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of our services
            constitutes acceptance of the updated terms.
          </p>
        </div>
      </section>
    </>
  );
}
