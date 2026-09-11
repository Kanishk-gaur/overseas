const categories = [
  "Construction Clients in Russia",
  "Care Facilities in Japan",
  "Manufacturers in Germany",
  "Facilities Groups in the UAE",
  "Contractors in Saudi Arabia",
  "Hospitality Groups in Qatar",
  "Logistics Operators in Poland",
  "Care Providers in Israel",
];

export default function PartnerLogos() {
  return (
    <section className="section-y bg-muted">
      <div className="container-x text-center">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">
          Businesses We&apos;ve Supplied Workforce To
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-gray-600">
          We partner with licensed employers and facilities across the Gulf, Europe,
          and Asia to ensure every workforce placement is safe, compliant, and
          legitimate.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((c) => (
            <div
              key={c}
              className="flex h-24 items-center justify-center rounded-xl border border-dashed border-border bg-white px-3 text-center text-xs font-medium text-gray-500"
            >
              {c}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-400">Client logos coming soon</p>
      </div>
    </section>
  );
}
