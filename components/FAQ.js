"use client";

import { useState } from "react";
import Icon from "./Icon";
import { faqs } from "@/data/services";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-y">
      <div className="container-x max-w-3xl">
        <h2 className="text-2xl font-bold text-navy md:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-navy text-sm md:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-gold transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
