// Every local photo slot on the site. To change a photo, replace the file in
// public/images/ with one of the same name — see IMAGE_PROMPTS.md.
import about1 from "@/public/images/home/about-1.jpg";
import about2 from "@/public/images/home/about-2.jpg";
import about3 from "@/public/images/home/about-3.jpg";
import trackTechnical from "@/public/images/home/track-technical.jpg";
import trackNonTechnical from "@/public/images/home/track-non-technical.jpg";
import step1 from "@/public/images/home/step-1.jpg";
import step2 from "@/public/images/home/step-2.jpg";
import step3 from "@/public/images/home/step-3.jpg";
import step4 from "@/public/images/home/step-4.jpg";
import step5 from "@/public/images/home/step-5.jpg";
import step6 from "@/public/images/home/step-6.jpg";
import step7 from "@/public/images/home/step-7.jpg";
import gallery1 from "@/public/images/home/gallery-1.jpg";
import gallery2 from "@/public/images/home/gallery-2.jpg";
import gallery3 from "@/public/images/home/gallery-3.jpg";
import gallery4 from "@/public/images/home/gallery-4.jpg";
import gallery5 from "@/public/images/home/gallery-5.jpg";
import gallery6 from "@/public/images/home/gallery-6.jpg";
import testimonialsBg from "@/public/images/home/testimonials-bg.jpg";
import ctaBg from "@/public/images/home/cta-bg.jpg";

import pageAbout from "@/public/images/pages/about.jpg";
import pageRequestWorkforce from "@/public/images/pages/request-workforce.jpg";
import pageFindAJob from "@/public/images/pages/find-a-job.jpg";
import pageWorkforce from "@/public/images/pages/workforce.jpg";
import pageContact from "@/public/images/pages/contact.jpg";
import pageCompliance from "@/public/images/pages/compliance.jpg";
import pageBlog from "@/public/images/pages/blog.jpg";
import pageCaseStudies from "@/public/images/pages/case-studies.jpg";
import pageHowWeWork from "@/public/images/pages/how-we-work.jpg";
import pageTeam from "@/public/images/pages/team.jpg";
import pageGlossary from "@/public/images/pages/glossary.jpg";
import pageCountries from "@/public/images/pages/countries.jpg";

import blogJapanSsw from "@/public/images/blog/japan-ssw.jpg";
import blogGermanyVisa from "@/public/images/blog/germany-visa.jpg";
import blogRussiaDocuments from "@/public/images/blog/russia-documents.jpg";
import blogBulkOrders from "@/public/images/blog/bulk-orders.jpg";
import blogCommonMistakes from "@/public/images/blog/common-mistakes.jpg";
import blogUaeVisa from "@/public/images/blog/uae-visa.jpg";
import blogPolandVisa from "@/public/images/blog/poland-visa.jpg";
import blogIsraelB1 from "@/public/images/blog/israel-b1.jpg";
import blogTechnicalVsNonTechnical from "@/public/images/blog/technical-vs-non-technical.jpg";

import caseJapanCaregivers from "@/public/images/case-studies/japan-caregivers.jpg";
import caseGermanyTechnicians from "@/public/images/case-studies/germany-technicians.jpg";
import caseRussiaConstruction from "@/public/images/case-studies/russia-construction.jpg";
import caseGermanyDevelopers from "@/public/images/case-studies/germany-developers.jpg";
import caseUaeFacilities from "@/public/images/case-studies/uae-facilities.jpg";
import caseSaudiEngineers from "@/public/images/case-studies/saudi-engineers.jpg";
import casePolandWarehouse from "@/public/images/case-studies/poland-warehouse.jpg";
import caseQatarHospitality from "@/public/images/case-studies/qatar-hospitality.jpg";
import caseIsraelCaregivers from "@/public/images/case-studies/israel-caregivers.jpg";

export const aboutImages = { main: about1, team: about2, documents: about3 };

// Keyed by workforceCategories id
export const trackImages = {
  technical: trackTechnical,
  "non-technical": trackNonTechnical,
};

// Same order as processSteps in data/services.js
export const processStepImages = [step1, step2, step3, step4, step5, step6, step7];

export const galleryImages = [
  { src: gallery1, label: "Welding & Fabrication", span: "col-span-2 row-span-2" },
  { src: gallery2, label: "Healthcare & Nursing", span: "row-span-2" },
  { src: gallery3, label: "Electrical" },
  { src: gallery4, label: "Hospitality" },
  { src: gallery5, label: "Warehouse & Logistics", span: "col-span-2" },
  { src: gallery6, label: "Construction", span: "col-span-2" },
];

export const backgroundImages = { testimonials: testimonialsBg, cta: ctaBg };

export const pageHeroImages = {
  about: pageAbout,
  requestWorkforce: pageRequestWorkforce,
  findAJob: pageFindAJob,
  workforce: pageWorkforce,
  contact: pageContact,
  compliance: pageCompliance,
  blog: pageBlog,
  caseStudies: pageCaseStudies,
  howWeWork: pageHowWeWork,
  team: pageTeam,
  glossary: pageGlossary,
  countries: pageCountries,
};

// Keyed by post slug in data/blog.js
export const blogCoverImages = {
  "japan-ssw-employer-sponsorship-2026": blogJapanSsw,
  "germany-work-visa-sponsorship-guide": blogGermanyVisa,
  "documents-checklist-hiring-workers-russia": blogRussiaDocuments,
  "bulk-workforce-orders-what-employers-should-know": blogBulkOrders,
  "common-mistakes-employers-overseas-hiring": blogCommonMistakes,
  "uae-employment-visa-labor-card-guide": blogUaeVisa,
  "poland-type-d-visa-eu-work-permit": blogPolandVisa,
  "israel-b1-work-visa-guide": blogIsraelB1,
  "technical-vs-non-technical-hiring-guide": blogTechnicalVsNonTechnical,
};

// Keyed by case study slug in data/caseStudies.js
export const caseStudyImages = {
  "healthcare-group-japan-caregivers": caseJapanCaregivers,
  "engineering-firm-germany-technicians": caseGermanyTechnicians,
  "construction-firm-russia-bulk-order": caseRussiaConstruction,
  "it-services-germany-developers": caseGermanyDevelopers,
  "facilities-management-uae-bulk-order": caseUaeFacilities,
  "construction-saudi-arabia-engineers": caseSaudiEngineers,
  "logistics-poland-warehouse-workers": casePolandWarehouse,
  "hospitality-qatar-staff": caseQatarHospitality,
  "care-services-israel-caregivers": caseIsraelCaregivers,
};
