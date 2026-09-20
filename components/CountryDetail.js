import Image from "next/image";
import Link from "next/link";
import PageHero from "./PageHero";
import Breadcrumbs from "./Breadcrumbs";
import Icon from "./Icon";
import { workforce } from "@/data/workforce";
import { caseStudies } from "@/data/caseStudies";
import { posts } from "@/data/blog";
import { getTermsByCountry } from "@/data/glossary";

export default function CountryDetail({ country }) {
  const openRoles = workforce.filter((w) => w.country === country.name);
  const availableCount = openRoles.reduce((sum, w) => sum + w.available, 0);
  const caseStudy = caseStudies.find((cs) => cs.country === country.name);
  const relatedPosts = posts.filter((p) => p.countries?.includes(country.name));
  const relatedTerms = getTermsByCountry(country.name);

  return (
    <>
      <Breadcrumbs items={[{ label: "Countries", href: "/countries" }, { label: country.name }]} />
      <PageHero title={`${country.flag} ${country.heading}`} />
      {country.image && (
        <div className="relative h-80 w-full md:h-112">
          <Image
            src={country.image}
            alt={country.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}
      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-gray-600 leading-relaxed">{country.body}</p>
            <p className="mt-4 text-sm font-medium text-gray-500">
              Visa route: {country.visaNote}
              {relatedTerms.length > 0 && (
                <>
                  {" · "}
                  <Link href="/glossary" className="font-semibold text-gold">
                    See visa term definitions →
                  </Link>
                </>
              )}
            </p>

            {openRoles.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl bg-muted p-4">
                <Icon name="clipboard-list" className="h-6 w-6 text-gold" />
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-navy">{availableCount} workers</span>{" "}
                  currently available across {openRoles.length} role
                  {openRoles.length > 1 ? "s" : ""} for {country.name}.{" "}
                  <Link href="/workforce" className="font-semibold text-gold">
                    View availability →
                  </Link>
                </p>
              </div>
            )}

            <div className="mt-8">
              <Link href="/request-workforce" className="btn-primary !text-navy-dark bg-gold">
                Request Workforce for {country.name}
              </Link>
            </div>

            {caseStudy && (
              <div className="mt-10 rounded-2xl border border-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  Case Study
                </p>
                <h3 className="mt-1 font-semibold text-navy">{caseStudy.client}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {caseStudy.result}
                </p>
                <Link
                  href="/case-studies"
                  className="mt-3 inline-flex text-sm font-semibold text-gold"
                >
                  See all case studies →
                </Link>
              </div>
            )}

            {relatedPosts.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold text-navy">
                  Related Guides for {country.name}
                </h3>
                <ul className="mt-3 space-y-2">
                  {relatedPosts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-sm font-medium text-gold hover:underline"
                      >
                        {p.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="flex items-center gap-2 font-semibold text-navy">
                <Icon name="graduation-cap" className="h-5 w-5 text-gold" /> Technical Roles
              </h3>
              <ul className="mt-3 space-y-2">
                {country.technicalRoles.map((role) => (
                  <li key={role} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-gold">•</span> {role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="flex items-center gap-2 font-semibold text-navy">
                <Icon name="wrench" className="h-5 w-5 text-gold" /> Non-Technical Roles
              </h3>
              <ul className="mt-3 space-y-2">
                {country.nonTechnicalRoles.map((role) => (
                  <li key={role} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-gold">•</span> {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
