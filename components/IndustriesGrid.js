import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
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
            <Link
              key={ind.name}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col items-center gap-2 overflow-hidden rounded-xl border border-border bg-white text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-1.5 right-1.5 rounded-full bg-white/90 p-1.5 shadow">
                  <Icon name={ind.icon} className="h-4 w-4 text-navy" />
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 px-5 pb-5">
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
            </Link>
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
