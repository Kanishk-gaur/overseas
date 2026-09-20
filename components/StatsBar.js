"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { stats } from "@/data/services";

const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
  loading: () => <>0</>,
});

export default function StatsBar() {
  return (
    <section className="bg-muted">
      <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4 md:py-14">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
              <Icon name={s.icon} className="h-6 w-6 text-gold" />
            </span>
            <span className="mt-2 text-2xl font-bold text-navy md:text-3xl">
              <CountUp end={s.number} duration={2} enableScrollSpy scrollSpyOnce />
              {s.suffix}
            </span>
            <span className="mt-1 text-sm text-gray-600">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
