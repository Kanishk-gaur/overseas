export const site = {
  name: "[Company Name]",
  url: "https://example.com", // replace with your real production domain
  tagline: "Verified Overseas Workforce Supply Across the Gulf, Europe & Asia",
  headlineCountries: "Russia, Japan, Germany & Beyond",
  phone: "[Phone Number]",
  phoneHref: "tel:+00000000000",
  whatsapp: "[WhatsApp Number]",
  whatsappHref: "https://wa.me/00000000000",
  email: "[Email Address]",
  address: "[Full Address]",
  hours: "Monday–Saturday, 9:00 AM – 6:00 PM",
  licenseNo: "[License No.]",
  licenseAuthority: "[License Authority Name]",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z", // replace with real embed URL
};

export const companyMegaMenu = [
  { name: "About Us", href: "/about", desc: "Our story, values & talent base" },
  { name: "How We Work", href: "/how-we-work", desc: "Technical & non-technical hiring tracks" },
  { name: "Our Team", href: "/team", desc: "Country desks & account managers" },
  { name: "Case Studies", href: "/case-studies", desc: "Real workforce orders & results" },
  { name: "Compliance & Certifications", href: "/compliance", desc: "Licensing, ethics & verification standards" },
  { name: "Visa & Compliance Glossary", href: "/glossary", desc: "Plain-language visa term definitions" },
];

export const servicesMegaMenu = [
  {
    heading: "Workforce Sourcing",
    href: "/services#sourcing",
    items: [
      "Skilled Worker Sourcing",
      "Semi-Skilled Worker Sourcing",
      "Executive/Professional Sourcing",
    ],
  },
  {
    heading: "Compliance & Visa",
    href: "/services#compliance",
    items: ["Visa Sponsorship Processing", "Work Permit Facilitation", "Document Attestation"],
  },
  {
    heading: "Workforce Readiness",
    href: "/services#readiness",
    items: [
      "Language Training",
      "Pre-Deployment Orientation",
      "Skill Certification Verification",
    ],
  },
  {
    heading: "Client Support",
    href: "/services#support",
    items: ["Dedicated Account Management", "Bulk Deployment & Replacement Guarantee"],
  },
];

export const mainNav = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/about", mega: "company" },
  { name: "Services", href: "/services", mega: "services" },
  { name: "Countries", href: "/countries", mega: "countries" },
  { name: "Industries", href: "/industries", mega: "industries" },
  { name: "Workforce", href: "/workforce" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Our Team", href: "/team" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Available Workforce", href: "/workforce" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Compliance & Certifications", href: "/compliance" },
    { name: "Visa & Compliance Glossary", href: "/glossary" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};
