"use client";

import { useState } from "react";
import { countries } from "@/data/countries";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section-y bg-navy">
      <div className="container-x">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
          <h2 className="text-xl font-bold text-white md:text-2xl">
            Never Miss a Workforce Availability Update
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Subscribe to get new workforce availability and compliance updates across
            the Gulf, Europe, and Asia delivered straight to your inbox.
          </p>

          {submitted ? (
            <p className="mt-6 font-medium text-gold-light">
              Thanks for subscribing! You&apos;ll hear from us soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:border-gold sm:w-64"
              />
              <select className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm text-white outline-none focus:border-gold sm:w-48">
                <option className="text-navy">Country of Interest</option>
                {countries.map((c) => (
                  <option key={c.slug} className="text-navy">
                    {c.name}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
