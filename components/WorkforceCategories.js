"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { workforceCategories } from "@/data/workforceCategories";
import { trackImages } from "@/data/siteImages";

export default function WorkforceCategories({ preview = false }) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Two Workforce Tracks, One Supply Chain
          </h2>
          <p className="mt-2 text-gray-600">
            Whether you need B.Tech-qualified engineers or trade-certified tradespeople,
            we run a dedicated sourcing track built around how each is actually
            qualified and verified.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {workforceCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group overflow-hidden rounded-2xl border ${
                cat.id === "technical"
                  ? "border-navy/15 bg-navy text-white"
                  : "border-border bg-white"
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={trackImages[cat.id]}
                  alt={cat.title}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative p-6 md:p-8">
                <span
                  className={`-mt-12 flex h-12 w-12 items-center justify-center rounded-xl shadow-lg md:-mt-14 ${
                    cat.id === "technical" ? "bg-navy" : "bg-white"
                  }`}
                >
                  <Icon
                    name={cat.icon}
                    className={`h-6 w-6 ${cat.id === "technical" ? "text-gold-light" : "text-navy"}`}
                  />
                </span>
                <h3 className={`mt-3 text-xl font-bold ${cat.id === "technical" ? "text-white" : "text-navy"}`}>
                  {cat.title}
                </h3>
                <p className={`mt-1 text-sm font-medium ${cat.id === "technical" ? "text-gold-light" : "text-gold"}`}>
                  {cat.tagline}
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${cat.id === "technical" ? "text-white/70" : "text-gray-600"}`}>
                  {cat.description}
                </p>

                {!preview && (
                  <>
                    <ul className="mt-5 space-y-2">
                      {cat.examples.map((ex) => (
                        <li
                          key={ex}
                          className={`flex items-start gap-2 text-sm ${
                            cat.id === "technical" ? "text-white/80" : "text-gray-600"
                          }`}
                        >
                          <span className={cat.id === "technical" ? "text-gold-light" : "text-gold"}>•</span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`mt-5 rounded-xl p-4 text-xs leading-relaxed ${
                        cat.id === "technical" ? "bg-white/10 text-white/70" : "bg-muted text-gray-500"
                      }`}
                    >
                      <p>
                        <span className="font-semibold">Qualification basis:</span>{" "}
                        {cat.qualificationBasis}
                      </p>
                      <p className="mt-1.5">
                        <span className="font-semibold">Common visa routes:</span> {cat.idealFor}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
