export const caseStudies = [
  {
    slug: "healthcare-group-japan-caregivers",
    client: "[Client Company Name]",
    industry: "Healthcare",
    country: "Japan",
    workforceType: "Non-Technical",
    headcount: 20,
    leadTime: "6 weeks",
    challenge:
      "A care facility group in Tokyo needed 20 SSW-qualified caregivers within a tight regulatory deployment window, with minimal onboarding friction.",
    solution:
      "We sourced and shortlisted candidates from our pre-screened caregiver pool, ran JFT-Basic language readiness alongside skill verification, and managed the full SSW sponsorship paperwork.",
    result:
      "All 20 caregivers were deployed within the agreed 6-week window, with zero visa rejections and full compliance sign-off from the client's HR team.",
  },
  {
    slug: "engineering-firm-germany-technicians",
    client: "[Client Company Name]",
    industry: "Manufacturing / Engineering",
    country: "Germany",
    workforceType: "Technical",
    headcount: 10,
    leadTime: "10 weeks",
    challenge:
      "A German engineering firm required 10 CNC machine technicians with diploma-level qualifications, plus basic German language readiness for shop-floor safety compliance.",
    solution:
      "Our team ran credential verification against German recognition requirements, coordinated remote technical interviews, and delivered pre-deployment A1/A2 German training.",
    result:
      "10 technicians deployed on schedule with qualification recognition completed in advance, reducing on-site onboarding time by an estimated 3 weeks.",
  },
  {
    slug: "construction-firm-russia-bulk-order",
    client: "[Client Company Name]",
    industry: "Construction",
    country: "Russia",
    workforceType: "Non-Technical",
    headcount: 35,
    leadTime: "8 weeks",
    challenge:
      "A construction contractor needed a bulk order of welders and electricians across three project sites, with staggered deployment dates.",
    solution:
      "We ran phased sourcing and skill testing aligned to each site's start date, and coordinated documentation and work permits site by site to avoid a single compliance bottleneck.",
    result:
      "35 workers deployed across three sites on a staggered schedule with no project delays attributable to workforce availability.",
  },
  {
    slug: "it-services-germany-developers",
    client: "[Client Company Name]",
    industry: "IT & Engineering",
    country: "Germany",
    workforceType: "Technical",
    headcount: 6,
    leadTime: "12 weeks",
    challenge:
      "A German IT services company wanted to hire mid-level software developers under the EU Blue Card route but had limited internal experience with the sponsorship process.",
    solution:
      "We managed qualification recognition, Blue Card documentation, and coordinated technical interviews between the client's engineering leads and shortlisted candidates.",
    result:
      "6 developers onboarded under EU Blue Card sponsorship, with the client's HR team now using our documentation checklist as their internal template for future hires.",
  },
  {
    slug: "facilities-management-uae-bulk-order",
    client: "[Client Company Name]",
    industry: "Facilities Management",
    country: "UAE",
    workforceType: "Non-Technical",
    headcount: 40,
    leadTime: "5 weeks",
    challenge:
      "A Dubai-based facilities management company needed 40 cleaning, security, and MEP support staff for a new commercial contract, on a compressed 5-week timeline.",
    solution:
      "We ran parallel sourcing across our UAE-ready candidate pool, expedited labor card processing, and coordinated group flights aligned to the contract start date.",
    result:
      "All 40 workers deployed on time, with the client renewing the contract for two additional facilities the following quarter.",
  },
  {
    slug: "construction-saudi-arabia-engineers",
    client: "[Client Company Name]",
    industry: "Construction",
    country: "Saudi Arabia",
    workforceType: "Technical",
    headcount: 8,
    leadTime: "9 weeks",
    challenge:
      "A contractor working on a Vision 2030 infrastructure project needed 8 site engineers with verified degrees and prior Gulf project experience.",
    solution:
      "We shortlisted candidates from our engineering talent pool, verified degrees and prior project references, and managed Iqama sponsorship documentation end-to-end.",
    result:
      "8 engineers deployed within the 9-week window, with the client citing our credential verification process as faster than their previous supplier.",
  },
  {
    slug: "logistics-poland-warehouse-workers",
    client: "[Client Company Name]",
    industry: "Logistics",
    country: "Poland",
    workforceType: "Non-Technical",
    headcount: 18,
    leadTime: "7 weeks",
    challenge:
      "A logistics operator scaling a new distribution center needed 18 warehouse workers under Poland's Type D visa route, with no prior experience hiring outside the EU.",
    solution:
      "We handled Type D visa documentation and EU work permit filing end-to-end, and ran a phased onboarding schedule matched to the center's ramp-up.",
    result:
      "18 workers deployed within 7 weeks, with the client's HR lead noting our checklist became their template for the next distribution center hire.",
  },
  {
    slug: "hospitality-qatar-staff",
    client: "[Client Company Name]",
    industry: "Hospitality",
    country: "Qatar",
    workforceType: "Non-Technical",
    headcount: 22,
    leadTime: "6 weeks",
    challenge:
      "A hotel group needed 22 hospitality and MEP support staff for a property opening in Doha, with a fixed opening date that couldn't slip.",
    solution:
      "We ran sourcing and skill testing in parallel with visa processing to compress the timeline, and staged deployment two weeks ahead of the opening for onboarding.",
    result:
      "All 22 staff deployed 2 weeks before opening day, giving the property a full onboarding window with zero last-minute gaps.",
  },
  {
    slug: "care-services-israel-caregivers",
    client: "[Client Company Name]",
    industry: "Healthcare",
    country: "Israel",
    workforceType: "Non-Technical",
    headcount: 12,
    leadTime: "8 weeks",
    challenge:
      "A care services provider needed 12 experienced caregivers under the B/1 work visa route, with strict documentation standards for compliance audits.",
    solution:
      "We pre-verified work history and medical fitness for every candidate, and structured documentation specifically to pass the client's compliance audit process.",
    result:
      "12 caregivers deployed within 8 weeks, passing the client's compliance audit on the first review with no follow-up requests.",
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
