"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { caseStudies } from "@/data/caseStudies";

const typeFilters = ["All", "Technical", "Non-Technical"];

export default function CaseStudies() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [countryFilter, setCountryFilter] = useState("All");
  const countryOptions = ["All", ...new Set(caseStudies.map((cs) => cs.country))];

  const list = caseStudies.filter(
    (cs) =>
      (typeFilter === "All" || cs.workforceType === typeFilter) &&
      (countryFilter === "All" || cs.country === countryFilter)
  );

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Case Studies</h2>
          <p className="mt-2 text-gray-600">
            A closer look at how we&apos;ve solved real workforce orders for client
            companies across technical and non-technical roles.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="flex gap-2">
            {typeFilters.map((f) => (
              <button
                key={f}
                onClick={() => setTypeFilter(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  typeFilter === f
                    ? "bg-navy text-white"
                    : "bg-muted text-gray-600 hover:bg-border/60"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-gray-600 outline-none focus:border-gold"
          >
            {countryOptions.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "All Countries" : c}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {list.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-white p-6 md:p-7"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-navy px-2.5 py-1 text-xs font-semibold text-white">
                  {cs.country}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    cs.workforceType === "Technical"
                      ? "bg-navy/10 text-navy"
                      : "bg-gold/15 text-gold"
                  }`}
                >
                  {cs.workforceType}
                </span>
                <span className="text-xs text-gray-400">{cs.industry}</span>
              </div>

              <h3 className="mt-3 font-semibold text-navy">{cs.client}</h3>

              <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-muted p-3 text-center">
                <div>
                  <p className="text-lg font-bold text-navy">{cs.headcount}</p>
                  <p className="text-xs text-gray-500">Workers Deployed</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-navy">{cs.leadTime}</p>
                  <p className="text-xs text-gray-500">Lead Time</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <p>
                  <span className="font-semibold text-navy">Challenge: </span>
                  <span className="text-gray-600">{cs.challenge}</span>
                </p>
                <p>
                  <span className="font-semibold text-navy">Solution: </span>
                  <span className="text-gray-600">{cs.solution}</span>
                </p>
                <p>
                  <span className="font-semibold text-navy">Result: </span>
                  <span className="text-gray-600">{cs.result}</span>
                </p>
              </div>
            </motion.div>
          ))}
          {list.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No case studies match these filters yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
