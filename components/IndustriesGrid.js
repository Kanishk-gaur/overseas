import Link from "next/link";
import { industries } from "@/data/industries";

export default function IndustriesGrid({ preview = false }) {
  return (
    <section className="section-y bg-muted">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Industries We Supply Workforce To
          </h2>
          <p className="mt-2 text-gray-600">
            Our workforce supply spans multiple sectors across the Gulf, Europe, and
            Asia, matched to each country&apos;s labor demand.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-white p-5 text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl">{ind.icon}</span>
              <span className="text-sm font-semibold text-navy">{ind.name}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  ind.type === "Technical"
                    ? "bg-navy/10 text-navy"
                    : ind.type === "Mixed"
                      ? "bg-gray-200 text-gray-600"
                      : "bg-gold/15 text-gold"
                }`}
              >
                {ind.type}
              </span>
              {!preview && <span className="text-xs text-gray-500">{ind.roles}</span>}
            </div>
          ))}
        </div>

        {preview && (
          <div className="mt-8">
            <Link href="/industries" className="font-semibold text-gold">
              View All Industries →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
