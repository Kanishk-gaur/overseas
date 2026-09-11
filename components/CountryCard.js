import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div className="flip-card h-72">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col items-center justify-center gap-3 bg-navy text-white p-6">
          <span className="text-6xl">{country.flag}</span>
          <h3 className="text-xl font-bold">{country.name}</h3>
          <span className="text-xs text-white/60">Hover to see details</span>
        </div>
        <div className="flip-card-back flex flex-col justify-between bg-white border border-border p-6">
          <div>
            <h3 className="font-semibold text-navy">{country.heading}</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed line-clamp-4">
              {country.body}
            </p>
            <p className="mt-3 text-xs font-medium text-gray-500">
              In-demand:{" "}
              {[...country.technicalRoles, ...country.nonTechnicalRoles].slice(0, 3).join(", ")}
            </p>
          </div>
          <Link
            href={`/countries/${country.slug}`}
            className="mt-3 inline-flex text-sm font-semibold text-gold"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}
