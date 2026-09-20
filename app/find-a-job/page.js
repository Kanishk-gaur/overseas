import PageHero from "@/components/PageHero";
import FindJobForm from "@/components/FindJobForm";
import Icon from "@/components/Icon";
import { jobCategories } from "@/data/jobCategories";
import { site } from "@/lib/siteConfig";

const categoryIcons = {
  construction: "hard-hat",
  "electrical-mep": "zap",
  "plumbing-hvac": "droplets",
  "welding-fabrication": "flame",
  "carpentry-masonry": "hammer",
  "heavy-equipment": "truck",
  manufacturing: "factory",
  "cnc-machine-operation": "cog",
  "quality-control": "search",
  "warehousing-logistics": "package",
  "driving-transport": "car",
  "hospitality-hotel": "bed",
  "housekeeping-cleaning": "sparkles",
  "food-beverage": "utensils-crossed",
  "culinary-kitchen": "chef-hat",
  "healthcare-nursing": "stethoscope",
  caregiving: "heart-handshake",
  "agriculture-farming": "wheat",
  "food-processing": "box",
  "security-services": "shield-check",
  "retail-sales": "shopping-bag",
  "admin-clerical": "folder",
  "it-software": "code",
  engineering: "compass",
  "oil-gas-facilities": "fuel",
};

export const metadata = {
  title: `Find a Job Overseas | ${site.name}`,
  description:
    "Apply for verified overseas job opportunities across construction, healthcare, hospitality, IT, and 20+ more categories. Submit your resume and get matched with employers in the Gulf, Europe, and Asia.",
};

export default function FindJobPage() {
  return (
    <>
      <PageHero
        title="Find a Job Overseas"
        subtitle="Apply once and get matched with verified employers across the Gulf, Europe, and Asia. Tell us your skills, upload your resume, and our team will take it from there."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="section-y">
        <div className="container-x">
          <h2 className="text-center text-lg font-semibold text-navy">
            We're Hiring Across 25 Job Categories
          </h2>
          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {jobCategories.map((c) => (
              <div
                key={c.id}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-white p-3 text-center"
              >
                <Icon name={categoryIcons[c.id]} className="h-5 w-5 text-gold" />
                <span className="text-xs font-medium text-navy">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-muted">
        <div className="container-x">
          <h2 className="text-center text-lg font-semibold text-navy">Submit Your Application</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-gray-600">
            It takes about 5 minutes. Have your resume and, if possible, a recent photo ready
            before you start.
          </p>
          <div className="mt-8">
            <FindJobForm />
          </div>
        </div>
      </section>
    </>
  );
}
