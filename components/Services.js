"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import { services } from "@/data/services";

function TiltCard({ id, icon, title, body, included, index, preview }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{
        rotateX: -6,
        rotateY: 6,
        translateY: -4,
        transition: { duration: 0.25 },
      }}
      className="card-tilt scroll-mt-24 rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-xl"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
        <Icon name={icon} className="h-6 w-6 text-navy" />
      </span>
      <h3 className="mt-4 font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{body}</p>
      {!preview && included && (
        <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
              <Icon name="check-circle" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function Services({ preview = false }) {
  const list = preview ? services.slice(0, 3) : services;
  return (
    <section className="section-y bg-muted" id="services">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">What We Offer</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <TiltCard key={s.id} index={i} preview={preview} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
