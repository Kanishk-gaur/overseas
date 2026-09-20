import Image from "next/image";
import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div className="flip-card h-72">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col items-center justify-center gap-3 overflow-hidden text-white p-6">
          <Image
            src={country.image}
            alt={country.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/60" />
          <span className="relative text-6xl drop-shadow">{country.flag}</span>
          <h3 className="relative text-xl font-bold drop-shadow">{country.name}</h3>
          <span className="relative text-xs text-white/70">Hover to see details</span>
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
