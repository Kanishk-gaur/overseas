"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import { countries } from "@/data/countries";
import { jobCategories, experienceLevels, passportStatusOptions } from "@/data/jobCategories";

const steps = ["Personal Details", "Job Preference", "Resume & Documents", "Review & Submit"];

const initialData = {
  fullName: "",
  email: "",
  phone: "",
  currentLocation: "",
  category: "",
  specificRole: "",
  experienceLevel: experienceLevels[0],
  highestQualification: "",
  preferredCountry: countries[0]?.name || "",
  passportStatus: passportStatusOptions[0],
  coverMessage: "",
};

export default function FindJobForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [resume, setResume] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setData((d) => ({ ...d, [key]: e.target.value }));

  const next = () => {
    if (step === 0 && (!data.fullName || !data.email || !data.phone)) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }
    if (step === 1 && !data.category) {
      setError("Please select a job category.");
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!resume) {
      setError("Please attach your resume before submitting.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const body = new FormData();
      Object.entries(data).forEach(([key, value]) => body.append(key, value));
      body.append("resume", resume);
      if (photo) body.append("photo", photo);

      const res = await fetch("/api/jobs/apply", { method: "POST", body });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-10 text-center">
        <Icon name="check-circle" className="mx-auto h-12 w-12 text-gold" />
        <h2 className="mt-4 text-xl font-bold text-navy">Application Received!</h2>
        <p className="mt-2 text-sm text-gray-600">
          Thank you for applying, {data.fullName.split(" ")[0] || "there"}. Our recruitment team
          will review your profile and resume, and reach out if your experience matches an open
          role.
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
                <Field label="Full Name" value={data.fullName} onChange={update("fullName")} required />
                <Field label="Email Address" type="email" value={data.email} onChange={update("email")} required />
                <Field label="Phone / WhatsApp Number" type="tel" value={data.phone} onChange={update("phone")} required />
                <Field label="Current City & Country" value={data.currentLocation} onChange={update("currentLocation")} />
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-500">Job Category</label>
                  <select
                    value={data.category}
                    onChange={update("category")}
                    required
                    className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold"
                  >
                    <option value="">Select a category</option>
                    {jobCategories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.icon} {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <Field
                  label="Specific Role / Trade"
                  value={data.specificRole}
                  onChange={update("specificRole")}
                  placeholder="e.g. Electrician, Registered Nurse, CNC Operator"
                />
                <div>
                  <label className="text-xs font-semibold text-gray-500">Experience Level</label>
                  <select
                    value={data.experienceLevel}
                    onChange={update("experienceLevel")}
                    className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold"
                  >
                    {experienceLevels.map((lvl) => (
                      <option key={lvl}>{lvl}</option>
                    ))}
                  </select>
                </div>
                <Field
                  label="Highest Qualification"
                  value={data.highestQualification}
                  onChange={update("highestQualification")}
                  placeholder="e.g. ITI, Diploma, B.Tech, 12th Pass"
                />
                <div>
                  <label className="text-xs font-semibold text-gray-500">Preferred Country to Work In</label>
                  <select
                    value={data.preferredCountry}
                    onChange={update("preferredCountry")}
                    className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold"
                  >
                    {countries.map((c) => (
                      <option key={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500">Passport Status</label>
                  <select
                    value={data.passportStatus}
                    onChange={update("passportStatus")}
                    className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold"
                  >
                    {passportStatusOptions.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <FileField
                  label="Resume / CV (PDF or Word, max 5MB)"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files?.[0] || null)}
                  value={resume?.name}
                  required
                />
                <FileField
                  label="Passport-size Photo (optional)"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => setPhoto(e.target.files?.[0] || null)}
                  value={photo?.name}
                />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-500">Tell Us About Yourself</label>
                  <textarea
                    value={data.coverMessage}
                    onChange={update("coverMessage")}
                    rows={4}
                    placeholder="Your work history, key skills, and why you're a good fit for overseas placement"
                    className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-2 text-sm">
                <h3 className="mb-3 font-semibold text-navy">Review Your Application</h3>
                {Object.entries(data).map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-4 border-b border-border py-1.5">
                    <span className="capitalize text-gray-500">{key.replace(/([A-Z])/g, " $1")}</span>
                    <span className="text-right font-medium text-navy">{value || "—"}</span>
                  </div>
                ))}
                <div className="flex justify-between border-b border-border py-1.5">
                  <span className="text-gray-500">Resume</span>
                  <span className="font-medium text-navy">{resume?.name || "Not attached"}</span>
                </div>
                <div className="flex justify-between border-b border-border py-1.5">
                  <span className="text-gray-500">Photo</span>
                  <span className="font-medium text-navy">{photo?.name || "Not attached"}</span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

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
            <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
              {submitting ? "Submitting…" : "Submit Application"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({ label, type = "text", value, onChange, required, placeholder }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-500">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}

function FileField({ label, accept, onChange, value, required }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-500">{label}</label>
      <input
        type="file"
        accept={accept}
        onChange={onChange}
        required={required}
        className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-xs outline-none file:mr-3 file:rounded-full file:border-0 file:bg-gold file:px-3 file:py-1 file:text-xs file:font-semibold file:text-navy-dark"
      />
      {value && <p className="mt-1 text-xs text-gray-500">Selected: {value}</p>}
    </div>
  );
}
