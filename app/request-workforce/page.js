import PageHero from "@/components/PageHero";
import RequirementForm from "@/components/RequirementForm";
import { site } from "@/lib/siteConfig";
import { formatCountryList } from "@/data/countries";

export const metadata = {
  title: `Request Workforce | ${site.name}`,
  description: `Submit your workforce requirement for overseas hiring in ${formatCountryList()}.`,
};

export default function RequestWorkforcePage() {
  return (
    <>
      <PageHero
        title="Request Workforce"
        subtitle="Tell us your requirement and our account team will review it and get back with a sourcing timeline."
      />
      <section className="section-y">
        <div className="container-x">
          <RequirementForm />
        </div>
      </section>
    </>
  );
}
