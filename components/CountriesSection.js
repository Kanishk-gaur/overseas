import Link from "next/link";
import { countries } from "@/data/countries";
import CountryCard from "./CountryCard";

export default function CountriesSection({ preview = false }) {
  const list = preview ? countries.slice(0, 6) : countries;

  return (
    <section className="section-y" id="countries">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Countries We Supply To</h2>
            <p className="mt-2 text-gray-600">
              Verified workforce supply across {countries.length} of the world&apos;s most
              in-demand labor markets.
            </p>
          </div>
          {preview && (
            <Link href="/countries" className="text-sm font-semibold text-gold">
              View all countries →
            </Link>
          )}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CountryCard key={c.slug} country={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
