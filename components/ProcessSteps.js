"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { processSteps } from "@/data/services";
import { processStepImages } from "@/data/siteImages";

export default function ProcessSteps({ title = "How It Works" }) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">{title}</h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
          <div className="space-y-10 md:space-y-14">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="relative grid gap-4 pl-12 md:grid-cols-2 md:items-center md:gap-20 md:pl-0"
              >
                <span className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy-dark md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  {i + 1}
                </span>
                <div
                  className={`group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ${
                    i % 2 === 0 ? "" : "md:order-2"
                  }`}
                >
                  <Image
                    src={processStepImages[i]}
                    alt={step.title}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 45vw, 85vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={i % 2 === 0 ? "" : "md:text-right"}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
