import Link from "next/link";
import { site } from "@/lib/siteConfig";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-navy to-navy-dark">
      <div className="container-x section-y text-center">
        <h2 className="text-white text-2xl md:text-4xl font-bold">
          Ready to Build Your Overseas Workforce?
        </h2>
        <p className="mt-3 text-white/70 max-w-xl mx-auto">
          Join businesses that source reliable, verified workforce across the Gulf,
          Europe, and Asia through {site.name}.
        </p>
        <Link href="/request-workforce" className="btn-primary mt-6 inline-flex">
          Request Workforce →
        </Link>
      </div>
    </section>
  );
}
