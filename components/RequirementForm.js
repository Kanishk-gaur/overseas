"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import { countries } from "@/data/countries";

const steps = ["Company Details", "Workforce Requirement", "Documents", "Review & Submit"];

const initialData = {
  companyName: "",
  contactPerson: "",
  designation: "",
  industry: "",
  companyEmail: "",
  companyPhone: "",
  country: countries[0].name,
  rolesNeeded: "",
  headcount: "",
  experienceLevel: "",
  targetDate: "",
};

export default function RequirementForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [files, setFiles] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setData((d) => ({ ...d, [key]: e.target.value }));
  const updateFile = (key) => (e) =>
    setFiles((f) => ({ ...f, [key]: e.target.files?.[0]?.name || "" }));

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-10 text-center">
        <Icon name="check-circle" className="mx-auto h-12 w-12 text-gold" />
        <h2 className="mt-4 text-xl font-bold text-navy">Thank you for your requirement!</h2>
        <p className="mt-2 text-sm text-gray-600">
          Our account management team will review your job order and contact you within
          2–3 business days with a sourcing timeline.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <ol className="flex items-center justify-between">
        {steps.map((label, i) => (
          <li key={label} className="flex flex-1 flex-col items-center text-center">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                i <= step ? "bg-gold text-navy-dark" : "bg-border text-gray-500"
              }`}
            >
              {i + 1}
            </span>
            <span className="mt-1.5 hidden text-xs text-gray-500 sm:block">{label}</span>
          </li>
        ))}
      </ol>

      <form
        onSubmit={handleSubmit}
        className="mt-8 rounded-2xl border border-border bg-white p-6 md:p-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Company Name" value={data.companyName} onChange={update("companyName")} required />
                <Field label="Contact Person" value={data.contactPerson} onChange={update("contactPerson")} required />
                <Field label="Designation" value={data.designation} onChange={update("designation")} />
                <Field label="Industry" value={data.industry} onChange={update("industry")} />
                <Field label="Company Email" type="email" value={data.companyEmail} onChange={update("companyEmail")} required />
                <Field label="Company Phone" type="tel" value={data.companyPhone} onChange={update("companyPhone")} required />
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-gray-500">Country of Deployment</label>
                  <select
                    value={data.country}
                    onChange={update("country")}
                    className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold"
                  >
                    {countries.map((c) => (
                      <option key={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <Field label="Number of Workers Required" value={data.headcount} onChange={update("headcount")} required />
                <Field label="Job Roles / Trades Needed" value={data.rolesNeeded} onChange={update("rolesNeeded")} required />
                <Field label="Experience Level Required" value={data.experienceLevel} onChange={update("experienceLevel")} />
                <Field label="Target Deployment Date" type="date" value={data.targetDate} onChange={update("targetDate")} />
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <FileField label="Company Registration / Business License" onChange={updateFile("registration")} value={files.registration} />
                <FileField label="Job Order / Role Specification Sheet" onChange={updateFile("jobOrder")} value={files.jobOrder} />
                <FileField label="Additional Requirement Document" onChange={updateFile("additional")} value={files.additional} />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-2 text-sm">
                <h3 className="mb-3 font-semibold text-navy">Review Your Requirement</h3>
                {Object.entries(data).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-border py-1.5">
                    <span className="capitalize text-gray-500">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="font-medium text-navy">{value || "—"}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="btn-secondary !text-navy !border-border disabled:opacity-0"
          >
            Back
          </button>
          {step < steps.length - 1 ? (
            <button type="button" onClick={next} className="btn-primary">
              Next
            </button>
          ) : (
            <button type="submit" className="btn-primary">
              Submit Requirement
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({ label, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-500">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}

function FileField({ label, onChange, value }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-500">{label}</label>
      <input
        type="file"
        onChange={onChange}
        className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-xs outline-none file:mr-3 file:rounded-full file:border-0 file:bg-gold file:px-3 file:py-1 file:text-xs file:font-semibold file:text-navy-dark"
      />
      {value && <p className="mt-1 text-xs text-gray-500">Selected: {value}</p>}
    </div>
  );
}
