"use client";

import { useState } from "react";
import Icon from "./Icon";
import { glossary } from "@/data/glossary";

const countries = ["All", ...new Set(glossary.map((g) => g.country))];

export default function Glossary() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? glossary : glossary.filter((g) => g.country === filter);

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Visa & Compliance Glossary
          </h2>
          <p className="mt-2 text-gray-600">
            Plain-language definitions for the visa categories and compliance terms
            referenced throughout our country guides and blog.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-navy text-white"
                  : "bg-muted text-gray-600 hover:bg-border/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {list.map((g) => (
            <div key={g.term} className="rounded-xl border border-border bg-white p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <Icon name="book-text" className="h-4 w-4 text-navy" />
                </span>
                <dt className="font-semibold text-navy">{g.term}</dt>
                <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-medium text-gold">
                  {g.country}
                </span>
              </div>
              <dd className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                {g.definition}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
