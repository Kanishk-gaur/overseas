"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import { hiringTracks, engagementModels } from "@/data/howWeWork";

export default function HowWeWork() {
  const [active, setActive] = useState(hiringTracks[0].id);
  const track = hiringTracks.find((t) => t.id === active);

  return (
    <>
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">
              Two Tracks, Because the Hiring Process Isn&apos;t the Same
            </h2>
            <p className="mt-2 text-gray-600">
              A B.Tech engineer and a trade-certified welder aren&apos;t qualified,
              tested, or sponsored the same way — so we run separate tracks built
              around how each is actually verified.
            </p>
          </div>

          <div className="mt-8 flex gap-2">
            {hiringTracks.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === t.id
                    ? "bg-navy text-white"
                    : "bg-muted text-gray-600 hover:bg-border/60"
                }`}
              >
                <Icon name={t.icon} className="h-4 w-4" /> {t.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-10"
            >
              <p className="text-sm font-medium text-gold">{track.subtitle}</p>

              <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {track.steps.map((step, i) => (
                  <li
                    key={step.title}
                    className="relative rounded-xl border border-border bg-white p-5"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy-dark">
                      {i + 1}
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-navy">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-600">{step.body}</p>
                  </li>
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section-y bg-muted">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Engagement Models</h2>
            <p className="mt-2 text-gray-600">
              Choose the model that fits how your business needs to hire.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                  <Icon name={m.icon} className="h-6 w-6 text-navy" />
                </span>
                <h3 className="mt-3 font-semibold text-navy">{m.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
