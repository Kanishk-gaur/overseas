"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/services";

export default function ProcessSteps({ title = "How It Works" }) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">{title}</h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
          <div className="space-y-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col gap-3 pl-12 md:w-1/2 md:pl-0 md:pr-10 ${
                  i % 2 === 0 ? "md:ml-0 md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy-dark md:top-0 ${
                    i % 2 === 0 ? "md:-right-4 md:left-auto" : "md:-left-4"
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className="font-semibold text-navy">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
