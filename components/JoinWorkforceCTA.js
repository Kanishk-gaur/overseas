import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/siteConfig";

export default function JoinWorkforceCTA() {
  return (
    <section className="section-y bg-white">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
            Grow With Us
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy md:text-4xl">
            Join Our Skilled Workforce and Build Your Future
          </h2>
          <p className="mt-5 max-w-xl text-gray-600">
            Become part of {site.name} and unlock verified overseas job
            opportunities, regular income, and professional training. Whether
            you&apos;re skilled or semi-skilled, we&apos;ll help you succeed
            with trust and transparency.
          </p>
          <Link href="/find-a-job" className="btn-primary mt-8 inline-flex">
            Apply Now
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/apply-worker.png"
            alt="Skilled tradesman ready to join our overseas workforce, surrounded by his tools"
            width={1145}
            height={1374}
            loading="lazy"
            className="h-auto w-full max-w-[380px] object-contain sm:max-w-[440px]"
          />
        </div>
      </div>
    </section>
  );
}
