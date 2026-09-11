import PageHero from "@/components/PageHero";
import BlogList from "@/components/BlogList";
import { site } from "@/lib/siteConfig";
import { formatCountryList } from "@/data/countries";

export const metadata = {
  title: `Blog & Guides | ${site.name}`,
  description: `Guides on visa sponsorship, compliance, and bulk workforce hiring for employers in ${formatCountryList()}.`,
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Latest Updates & Guides" subtitle="Practical guides for employers sourcing overseas workforce." />
      <BlogList />
    </>
  );
}
