import { site } from "@/lib/siteConfig";
import { whyChooseUs } from "@/data/services";

const values = [
  {
    icon: "🛡️",
    title: "Compliance First",
    body: "Every placement is built around documentation and visa sponsorship that will hold up to audit, not just paperwork that gets a worker on a plane.",
  },
  {
    icon: "🔍",
    title: "Verified, Not Assumed",
    body: "Credentials, trade certificates, and work history are checked before a candidate is ever shortlisted for your job order.",
  },
  {
    icon: "⚡",
    title: "Speed With Accountability",
    body: "We quote realistic lead times and stand behind them with a dedicated account manager for every order.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    body: "We measure success in repeat orders and renewed contracts, not one-off placements.",
  },
];

const certifications = [
  { label: `Licensed Agency — No. ${site.licenseNo}` },
  { label: "Registered with [License Authority Name]" },
  { label: "GDPR-Aware Data Handling" },
  { label: "ISO-Aligned Documentation Process" },
];

export default function About({ preview = false }) {
  return (
    <section className="section-y">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Who We Are</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {site.name} is a government-registered overseas manpower supply agency
            helping businesses across the Gulf, Europe, and Asia build reliable
            workforces. We maintain a pre-screened talent pool of skilled and
            semi-skilled workers and manage sourcing, compliance, and visa
            sponsorship on behalf of our client companies.
          </p>
          {!preview && (
            <>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our team manages the complete supply cycle for you — candidate
                sourcing, skill matching, documentation, visa sponsorship,
                pre-deployment training, and ongoing account support — so your HR
                and procurement teams can focus on running your business, not
                chasing paperwork.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-white p-5">
                  <h3 className="font-semibold text-navy">Mission</h3>
                  <p className="mt-1.5 text-sm text-gray-600">
                    To give employers a safe, transparent, and reliable way to
                    source overseas workforce, while giving skilled workers access
                    to dignified employment abroad.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-white p-5">
                  <h3 className="font-semibold text-navy">Vision</h3>
                  <p className="mt-1.5 text-sm text-gray-600">
                    To become the most trusted overseas manpower supply partner for
                    businesses hiring across the Gulf, Europe, and Asia.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="rounded-2xl bg-navy p-8 text-white">
          <h3 className="font-semibold text-lg">Why Partner With Us</h3>
          <ul className="mt-4 space-y-3">
            {whyChooseUs.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                <span className="mt-0.5 text-gold-light">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!preview && (
        <>
          <div className="container-x mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 rounded-2xl border border-border bg-white p-6 md:p-8">
              <h3 className="font-semibold text-navy">Our Talent Base</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Our workforce pool is sourced primarily from India — a market that
                produces one of the world&apos;s largest annual pipelines of
                engineering graduates (B.Tech / B.E.), ITI and polytechnic-trained
                technicians, and experienced trade workers across construction,
                manufacturing, and hospitality.
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                That gives client companies a dual advantage: a deep bench of
                degree-qualified technical talent for roles like software
                development and mechanical engineering, alongside a large,
                experienced pool of trade-certified non-technical workers — sourced,
                screened, and documented through a single supply relationship.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold text-navy">Our Story</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {site.name} was founded to close the gap between employers abroad
                struggling to fill skilled and semi-skilled roles, and a large,
                underutilized talent base back home. What started as single-role
                placements has grown into a full-service supply operation running
                dedicated country desks across the Gulf, Europe, and Asia.
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Today we support both bulk workforce orders for industrial and
                construction clients, and precision hiring for technical and IT
                roles — backed by an in-house documentation and compliance team.
              </p>
            </div>
          </div>

          <div className="container-x mt-16">
            <h3 className="text-xl font-bold text-navy">What Guides Our Work</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border bg-white p-5">
                  <span className="text-2xl">{v.icon}</span>
                  <h4 className="mt-3 text-sm font-semibold text-navy">{v.title}</h4>
                  <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container-x mt-16">
            <div className="flex flex-wrap justify-center gap-3 rounded-2xl bg-muted p-6">
              {certifications.map((c) => (
                <span
                  key={c.label}
                  className="rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-gray-600"
                >
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
