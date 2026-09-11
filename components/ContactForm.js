"use client";

import { useState } from "react";
import { countries } from "@/data/countries";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center">
        <p className="font-semibold text-navy">Thank you for reaching out!</p>
        <p className="mt-1 text-sm text-gray-600">
          Our team will get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company Name" name="company" required />
        <Field label="Contact Person" name="name" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div>
        <label className="text-xs font-semibold text-gray-500">Country You&apos;re Hiring In</label>
        <select className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold">
          {countries.map((c) => (
            <option key={c.slug}>{c.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold text-gray-500">Workforce Requirement</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Roles needed, approximate headcount, and target timeline"
          className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Submit
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-500">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}
