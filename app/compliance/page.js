import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Icon from "@/components/Icon";
import { site } from "@/lib/siteConfig";

export const metadata = {
  title: `Compliance & Certifications | ${site.name}`,
  description:
    "Our licensing, ethical recruitment commitments, candidate verification standards, data protection practices, and worker welfare policies.",
};

const pillars = [
  {
    icon: "file-text",
    title: "Licensing & Registration",
    body: `${site.name} is registered and licensed under ${site.licenseAuthority}, License No. ${site.licenseNo}. Our licensing status and registration documents are available to client companies on request as part of your service agreement onboarding.`,
  },
  {
    icon: "handshake",
    title: "Ethical Recruitment Commitment",
    body: "We operate under the Employer-Pays Principle: recruitment-related fees are billed to the hiring company, never deducted from or charged to the worker. This is a non-negotiable standard across every country desk we operate.",
  },
  {
    icon: "search",
    title: "Candidate Verification Standards",
    body: "Every candidate undergoes identity verification, education and experience document checks, a medical fitness examination, and — where applicable — police clearance, before being shortlisted for a client job order.",
  },
  {
    icon: "lock",
    title: "Data Protection & Confidentiality",
    body: "Candidate and client information is collected only for the purposes of sourcing, documentation, and visa sponsorship, and is shared only with relevant government or visa-processing authorities. We do not sell personal data.",
  },
  {
    icon: "shield",
    title: "Replacement Guarantee",
    body: "If a placed worker does not meet the agreed job order requirements within the support window defined in your service agreement, we source a replacement at no additional sourcing fee.",
  },
  {
    icon: "phone",
    title: "Worker Welfare & Grievance Redressal",
    body: "Deployed workers have a direct channel back to their country desk for concerns during their contract term, and we coordinate with the client's HR team on resolution — part of our post-deployment support commitment.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        title="Compliance & Certifications"
        subtitle="The standards we hold every workforce order to, from licensing through post-deployment support."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="section-y">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                <Icon name={p.icon} className="h-6 w-6 text-navy" />
              </span>
              <h3 className="mt-3 font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="container-x mt-10 rounded-2xl bg-muted p-6 text-center">
          <p className="text-sm text-gray-600">
            Have a specific compliance question for your legal or procurement team?{" "}
            <Link href="/contact" className="font-semibold text-gold">
              Talk to our compliance desk →
            </Link>{" "}
            or see our{" "}
            <Link href="/glossary" className="font-semibold text-gold">
              visa & compliance glossary
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
