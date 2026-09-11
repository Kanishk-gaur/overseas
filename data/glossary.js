export const glossary = [
  {
    term: "SSW (Specified Skilled Worker)",
    country: "Japan",
    definition:
      "A Japanese visa category for foreign workers in designated sectors such as caregiving, construction, and food processing. Requires passing a skills evaluation test and a Japanese language proficiency test (JFT-Basic or JLPT N4+).",
  },
  {
    term: "TITP (Technical Intern Training Program)",
    country: "Japan",
    definition:
      "A Japanese program combining work and skills training for foreign nationals, commonly used for manufacturing, construction, and agriculture roles, typically over a fixed multi-year term.",
  },
  {
    term: "Specialist/Engineer Visa",
    country: "Japan",
    definition:
      "A visa category for foreign professionals in technical, engineering, and specialist roles, requiring a relevant degree or extensive professional experience.",
  },
  {
    term: "EU Blue Card",
    country: "Germany",
    definition:
      "An EU-wide work and residence permit for highly qualified non-EU professionals, requiring a recognized degree and a qualifying job offer above a minimum salary threshold.",
  },
  {
    term: "Skilled Worker Visa",
    country: "Germany",
    definition:
      "Germany's route for workers with vocational or professional qualifications outside the EU Blue Card's higher salary threshold, requiring qualification recognition and a job offer.",
  },
  {
    term: "Qualification Recognition",
    country: "Germany",
    definition:
      "The formal process of having foreign educational and professional qualifications assessed against German standards before a work visa can be issued — often the longest step in a technical hiring timeline.",
  },
  {
    term: "Iqama",
    country: "Saudi Arabia",
    definition:
      "A residency permit issued to foreign workers in Saudi Arabia, sponsored by the employer, required alongside a work visa for legal employment and residence.",
  },
  {
    term: "Employment Visa & Labor Card",
    country: "UAE",
    definition:
      "The employment visa authorizes a foreign worker's entry and residence in the UAE; the labor card, tied to the employer's trade license and quota, authorizes them to work.",
  },
  {
    term: "Emiratisation",
    country: "UAE",
    definition:
      "UAE policy requiring companies of certain sizes to employ a minimum percentage of UAE nationals, which can affect foreign worker quotas depending on company size and sector.",
  },
  {
    term: "Type D National Visa",
    country: "Poland",
    definition:
      "Poland's national visa route for non-EU nationals taking up employment, typically combined with an EU work permit and, in some cases, a labor market test.",
  },
  {
    term: "B/1 Work Visa",
    country: "Israel",
    definition:
      "Israel's primary work visa for foreign employees, tied to an employer-held sector quota, commonly used for construction, caregiving, and agriculture roles.",
  },
  {
    term: "Employer of Record (EOR)",
    country: "General",
    definition:
      "An arrangement where we remain the legal employer for contract-staffed workers on your behalf, handling payroll and compliance while the worker performs day-to-day duties for your business.",
  },
  {
    term: "Replacement Guarantee",
    country: "General",
    definition:
      "Our commitment to replace a placed worker who does not meet the agreed job order requirements within a defined support window, as set out in your service agreement.",
  },
  {
    term: "Employer-Pays Principle",
    country: "General",
    definition:
      "The ethical recruitment standard we operate under: recruitment-related fees are billed to the hiring employer, not deducted from or charged to the worker.",
  },
];

export const getTermsByCountry = (countryName) =>
  glossary.filter((g) => g.country === countryName);
