import { site } from "@/lib/siteConfig";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
