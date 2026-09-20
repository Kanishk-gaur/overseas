import Icon from "./Icon";
import { countries } from "@/data/countries";

const footprint = [
  { label: "Construction Clients in Russia", icon: "hard-hat" },
  { label: "Care Facilities in Japan", icon: "stethoscope" },
  { label: "Manufacturers in Germany", icon: "factory" },
  { label: "Facilities Groups in the UAE", icon: "wrench" },
  { label: "Contractors in Saudi Arabia", icon: "hard-hat" },
  { label: "Hospitality Groups in Qatar", icon: "bed" },
  { label: "Logistics Operators in Poland", icon: "package" },
  { label: "Care Providers in Israel", icon: "stethoscope" },
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
              className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-white px-3 text-center"
            >
              <Icon name={c.icon} className="h-5 w-5 text-gold" />
              <span className="text-xs font-medium text-gray-600">{c.label}</span>
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
