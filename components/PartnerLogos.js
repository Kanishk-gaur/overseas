import Image from "next/image";
import Icon from "./Icon";
import { countries } from "@/data/countries";
import { caseStudyImages } from "@/data/siteImages";

const footprint = [
  { label: "Construction Clients in Russia", icon: "hard-hat", image: caseStudyImages["construction-firm-russia-bulk-order"] },
  { label: "Care Facilities in Japan", icon: "stethoscope", image: caseStudyImages["healthcare-group-japan-caregivers"] },
  { label: "Manufacturers in Germany", icon: "factory", image: caseStudyImages["engineering-firm-germany-technicians"] },
  { label: "Facilities Groups in the UAE", icon: "wrench", image: caseStudyImages["facilities-management-uae-bulk-order"] },
  { label: "Contractors in Saudi Arabia", icon: "hard-hat", image: caseStudyImages["construction-saudi-arabia-engineers"] },
  { label: "Hospitality Groups in Qatar", icon: "bed", image: caseStudyImages["hospitality-qatar-staff"] },
  { label: "Logistics Operators in Poland", icon: "package", image: caseStudyImages["logistics-poland-warehouse-workers"] },
  { label: "Care Providers in Israel", icon: "stethoscope", image: caseStudyImages["care-services-israel-caregivers"] },
];

export default function PartnerLogos() {
  return (
    <section className="section-y bg-muted">
      <div className="container-x text-center">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">
          Where We&apos;ve Supplied Workforce
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-gray-600">
          We partner with licensed employers and facilities across the Gulf, Europe,
          and Asia to ensure every workforce placement is safe, compliant, and
          legitimate.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {footprint.map((c) => (
            <div
              key={c.label}
              className="group relative h-36 overflow-hidden rounded-xl sm:h-44"
            >
              <Image
                src={c.image}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1.5 p-3 text-center">
                <Icon name={c.icon} className="h-5 w-5 text-gold-light" />
                <span className="text-xs font-medium text-white">{c.label}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400">
          Active across {countries.length} countries — client logos published with permission as agreements are finalized.
        </p>
      </div>
    </section>
  );
}
