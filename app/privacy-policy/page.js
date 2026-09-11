import PageHero from "@/components/PageHero";
import { site } from "@/lib/siteConfig";

export const metadata = { title: `Privacy Policy | ${site.name}` };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section-y">
        <div className="container-x max-w-3xl space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            {site.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy
            of client companies and candidates who use our website and workforce
            supply services. This policy explains what information we collect, how we
            use it, and the choices you have.
          </p>
          <h2 className="text-navy font-semibold text-base pt-2">Information We Collect</h2>
          <p>
            We collect the details you submit through our requirement and contact
            forms, including your company details, contact information, and workforce
            requirements — as well as candidate documentation submitted on behalf of
            workers being sourced for your order.
          </p>
          <h2 className="text-navy font-semibold text-base pt-2">How We Use Your Information</h2>
          <p>
            Your information is used solely to process your workforce requirement,
            match candidates to your job order, assist with documentation and visa
            sponsorship, and communicate with you about your order status.
          </p>
          <h2 className="text-navy font-semibold text-base pt-2">Data Sharing</h2>
          <p>
            We share candidate and company information only with relevant government
            or visa-processing authorities as required to complete a workforce
            placement. We do not sell your data.
          </p>
          <h2 className="text-navy font-semibold text-base pt-2">Contact Us</h2>
          <p>
            For questions about this policy, contact us at {site.email} or {site.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
