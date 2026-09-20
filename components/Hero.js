"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero3D from "./Hero3D";
import Icon from "./Icon";
import { site } from "@/lib/siteConfig";
import { countries } from "@/data/countries";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Verified Workforce Supply for Your Business —{" "}
            <span className="text-gold-light">{site.headlineCountries}</span>
          </h1>
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-white/40">
            Now sourcing for {countries.length} countries across the Gulf, Europe & Asia
          </p>
          <p className="mt-5 max-w-xl text-white/70">
            We source, screen, and deploy skilled and semi-skilled workers for
            employers abroad. From your first requirement to on-site handover, we
            manage sourcing, compliance, and visa sponsorship end-to-end.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/request-workforce" className="btn-primary">
              Request Workforce
            </Link>
            <Link href="/workforce" className="btn-secondary">
              View Available Workforce
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Icon name="check-circle" className="h-4 w-4 text-gold-light" /> Licensed Manpower Supply Agency
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="check-circle" className="h-4 w-4 text-gold-light" /> Pre-Screened, Skill-Verified Workers
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="check-circle" className="h-4 w-4 text-gold-light" /> End-to-End Visa Sponsorship
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}
