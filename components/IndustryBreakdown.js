import Link from "next/link";
import Icon from "./Icon";
import { industries } from "@/data/industries";
import { workforce } from "@/data/workforce";
import { countries } from "@/data/countries";

export default function IndustryBreakdown() {
  return (
    <section className="section-y bg-muted">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Industry-by-Industry Availability
          </h2>
          <p className="mt-2 text-gray-600">
            Where we currently have workforce ready to deploy, by sector.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {industries.map((ind) => {
            const rows = workforce.filter((w) => w.industry === ind.name);
            const total = rows.reduce((sum, w) => sum + w.available, 0);
            const activeCountries = [...new Set(rows.map((w) => w.country))]
              .map((name) => countries.find((c) => c.name === name))
              .filter(Boolean);

            return (
              <div
                key={ind.name}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <span className="rounded-lg bg-muted p-2">
                    <Icon name={ind.icon} className="h-5 w-5 text-navy" />
                  </span>
                  <div>
                    <Link href={`/industries/${ind.slug}`} className="font-semibold text-navy hover:text-gold">
                      {ind.name}
                    </Link>
                    <p className="text-sm text-gray-500">{ind.roles}</p>
                    {activeCountries.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {activeCountries.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/countries/${c.slug}`}
                            className="rounded-full bg-muted px-2 py-0.5 text-xs text-gray-600 hover:bg-border/60"
                          >
                            {c.flag} {c.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="shrink-0 text-center sm:text-right">
                  <p className="text-2xl font-bold text-navy">{total}</p>
                  <p className="text-xs text-gray-500">workers available</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link href="/workforce" className="font-semibold text-gold">
            View the full availability table →
          </Link>
        </div>
      </div>
    </section>
  );
}
