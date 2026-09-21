import Image from "next/image";
import Link from "next/link";
import PageHero from "./PageHero";
import Breadcrumbs from "./Breadcrumbs";
import Icon from "./Icon";
import { workforce } from "@/data/workforce";
import { countries } from "@/data/countries";

export default function IndustryDetail({ industry }) {
  const openRoles = workforce.filter((w) => w.industry === industry.name);
  const availableCount = openRoles.reduce((sum, w) => sum + w.available, 0);
  const activeCountries = [...new Set(openRoles.map((w) => w.country))]
    .map((name) => countries.find((c) => c.name === name))
    .filter(Boolean);

  return (
    <>
      <Breadcrumbs items={[{ label: "Industries", href: "/workforce" }, { label: industry.name }]} />
      <PageHero title={`${industry.icon} ${industry.heading}`} />
      {industry.image && (
        <div className="relative h-80 w-full md:h-112">
          <Image
            src={industry.image}
            alt={industry.name}
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
            <p className="text-gray-600 leading-relaxed">{industry.body}</p>

            {openRoles.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl bg-muted p-4">
                <Icon name="clipboard-list" className="h-6 w-6 text-gold" />
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-navy">{availableCount} workers</span>{" "}
                  currently available across {openRoles.length} role
                  {openRoles.length > 1 ? "s" : ""} in {industry.name}.{" "}
                  <Link href="/workforce" className="font-semibold text-gold">
                    View availability →
                  </Link>
                </p>
              </div>
            )}

            {activeCountries.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-navy">Where We Supply This Workforce</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeCountries.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/countries/${c.slug}`}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-gray-600 hover:bg-border/60"
                    >
                      {c.flag} {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <Link href="/request-workforce" className="btn-primary !text-navy-dark bg-gold">
                Request {industry.name} Workforce
              </Link>
            </div>

            {openRoles.length > 0 && (
              <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-white">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="bg-navy text-white text-left">
                      <th className="px-4 py-3 font-semibold">Trade / Role</th>
                      <th className="px-4 py-3 font-semibold">Country</th>
                      <th className="px-4 py-3 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {openRoles.map((item) => (
                      <tr key={`${item.title}-${item.country}`} className="hover:bg-muted">
                        <td className="px-4 py-3 font-medium text-navy">{item.title}</td>
                        <td className="px-4 py-3 text-gray-600">{item.country}</td>
                        <td className="px-4 py-3 text-gray-600">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {industry.technicalRoles.length > 0 && (
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="flex items-center gap-2 font-semibold text-navy">
                  <Icon name="graduation-cap" className="h-5 w-5 text-gold" /> Technical Roles
                </h3>
                <ul className="mt-3 space-y-2">
                  {industry.technicalRoles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold">•</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {industry.nonTechnicalRoles.length > 0 && (
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="flex items-center gap-2 font-semibold text-navy">
                  <Icon name="wrench" className="h-5 w-5 text-gold" /> Non-Technical Roles
                </h3>
                <ul className="mt-3 space-y-2">
                  {industry.nonTechnicalRoles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold">•</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
