import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/siteConfig";
import { backgroundImages } from "@/data/siteImages";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy to-navy-dark">
      <Image
        src={backgroundImages.cta}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy-dark/85" />
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
