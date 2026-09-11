"use client";

import { useState } from "react";
import { team } from "@/data/team";

export default function TeamGrid() {
  const [active, setActive] = useState(null);

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Meet Our Team</h2>
          <p className="mt-2 text-gray-600">
            Our experienced sourcing consultants, compliance specialists, and country
            desk experts work together to manage your workforce order from
            requirement to deployment.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((member, i) => (
            <button
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white text-left"
            >
              <div className="flex aspect-square items-center justify-center bg-navy/5 text-4xl">
                🧑‍💼
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-navy">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>

              {active === i && (
                <div className="absolute inset-0 flex flex-col justify-center gap-1 bg-navy/95 p-4 text-white">
                  <p className="text-sm font-semibold">{member.name}</p>
                  <p className="text-xs text-gold-light">{member.role}</p>
                  <p className="mt-1 text-xs text-white/70">{member.years} experience</p>
                  <p className="text-xs text-white/70">{member.specialty}</p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
