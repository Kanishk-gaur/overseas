import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/siteConfig";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy to-navy-dark">
      <Image
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy-dark/95" />
      <div className="container-x section-y relative text-center">
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
