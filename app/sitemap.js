import { countries } from "@/data/countries";
import { industries } from "@/data/industries";
import { posts } from "@/data/blog";
import { site } from "@/lib/siteConfig";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/countries",
  "/industries",
  "/workforce",
  "/how-we-work",
  "/case-studies",
  "/team",
  "/blog",
  "/compliance",
  "/glossary",
  "/contact",
  "/request-workforce",
  "/find-a-job",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
];

export default function sitemap() {
  const base = site.url;
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const countryEntries = countries.map((c) => ({
    url: `${base}/countries/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryEntries = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...countryEntries, ...industryEntries, ...blogEntries];
}
