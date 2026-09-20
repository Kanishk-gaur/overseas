"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { workforce } from "@/data/workforce";
import { countries } from "@/data/countries";

const typeFilters = ["All", "Technical", "Non-Technical"];

export default function WorkforceAvailability({ preview = false }) {
  const [typeFilter, setTypeFilter] = useState("All");
  const [countryFilter, setCountryFilter] = useState("All");

  const filtered = workforce.filter(
    (item) =>
      (typeFilter === "All" || item.type === typeFilter) &&
      (countryFilter === "All" || item.country === countryFilter)
  );
  const list = preview ? filtered.slice(0, 4) : filtered;

  return (
    <section className="section-y bg-muted">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Available Workforce Ready to Deploy
          </h2>
          {preview && (
            <Link href="/workforce" className="text-sm font-semibold text-gold">
              View full availability →
            </Link>
          )}
        </div>

        {!preview && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex gap-2">
              {typeFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setTypeFilter(f)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    typeFilter === f
                      ? "bg-navy text-white"
                      : "bg-white text-gray-600 border border-border hover:bg-muted"
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
              <option value="All">All Countries</option>
              {countries.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="bg-navy text-white text-left">
                <th className="px-4 py-3 font-semibold">Trade / Role</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Country</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Experience</th>
                <th className="px-4 py-3 font-semibold">Workers Available</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {list.map((item) => (
                <tr key={`${item.title}-${item.country}`} className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-navy">{item.title}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        item.type === "Technical"
                          ? "bg-navy/10 text-navy"
                          : "bg-gold/15 text-gold"
                      }`}
                    >
                      <Icon
                        name={item.type === "Technical" ? "graduation-cap" : "wrench"}
                        className="h-3.5 w-3.5"
                      />
                      {item.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{item.country}</td>
                  <td className="px-4 py-3 text-gray-600">{item.category}</td>
                  <td className="px-4 py-3 text-gray-600">{item.experience}</td>
                  <td className="px-4 py-3 text-gray-600">{item.available}</td>
                </tr>
              ))}
              {list.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                    No roles match these filters yet — submit your requirement and
                    we&apos;ll source it.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Need a role not listed here?{" "}
            <Link href="/request-workforce" className="font-semibold text-gold">
              Submit Your Requirement →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
