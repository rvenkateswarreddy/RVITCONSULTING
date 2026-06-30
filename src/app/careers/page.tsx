"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, FileText, Users } from "lucide-react";
import { functionsEndpoint } from "@/lib/functions-api";

const initialForm = {
  name: "",
  email: "",
  job: "",
  website: "",
};

const talentAreas = [
  "Data Science",
  "Generative AI (Gen AI)",
  "Java Full Stack Development",
  "Python",
  "Power BI",
  "Workday",
  "Data Analyst",
  "SaaS (Clinical & Banking Domain)",
  "Data Engineer",
  "Azure DevOps",
  "ServiceNow",
  "AWS Cloud",
  "Web Development",
  "iOS Development",
  "Android Development",
] as const;

export default function CareersPage() {
  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!resume) return;

    setLoading(true);
    setError("");
    setReference("");

    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => payload.set(key, value));
      payload.set("resume", resume);

      const response = await fetch(functionsEndpoint("submitCareer"), {
        method: "POST",
        body: payload,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Submission failed.");

      setReference(result.reference || "Submitted");
      setForm(initialForm);
      setResume(null);
      event.currentTarget.reset();
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not submit your profile.",
      );
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-[#081B33] focus:border-blue-600 focus:ring-2 focus:ring-blue-200";

  return (
    <>
      <section className="relative overflow-hidden bg-[#081B33] text-white">
        <Image
          src="/assets/brand/consulting-team-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#081B33_0%,rgba(8,27,51,.94)_48%,rgba(8,27,51,.5)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/75 via-transparent to-[#081B33]/20" />
        <div className="site-container relative grid min-h-[500px] gap-10 py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-end md:py-28">
          <div>
            <p className="eyebrow !text-cyan-300">Careers</p>
            <h1 className="display-font balanced mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-7xl">
              Do work that earns trust.
            </h1>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            We value sound judgment, clear communication, and engineers who care about the
            outcome after the technology ships.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20 md:py-24">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Talent areas</p>
              <h2 className="section-title mt-5">Expertise we recruit for.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Share your profile for current and future client assignments across these
              technology and domain specializations.
            </p>
          </div>

          <div className="mt-14 grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {talentAreas.map((area, index) => (
              <div key={area} className="flex min-h-28 items-start justify-between gap-5 border-b border-r border-slate-200 bg-white p-6">
                <h3 className="font-extrabold leading-6 text-[#081B33]">{area}</h3>
                <span className="text-xs font-extrabold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Work with RV IT</p>
            <h2 className="section-title mt-5">A small team with serious standards.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We do not publish roles until they are approved and active. You can still
              share your profile for future consulting, engineering, cloud, data, security,
              and delivery opportunities.
            </p>
            <div className="mt-10 space-y-6 border-t border-slate-200 pt-7">
              <div className="flex gap-4">
                <Users className="mt-1 text-blue-600" size={21} aria-hidden />
                <div>
                  <h3 className="font-extrabold text-[#081B33]">Experienced practitioners</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">People who can connect technical choices to business context.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="mt-1 text-blue-600" size={21} aria-hidden />
                <div>
                  <h3 className="font-extrabold text-[#081B33]">Straightforward process</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Relevant profiles are reviewed when a matching need becomes active.</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative border border-slate-200 bg-[#F8FAFC] p-6 shadow-[0_20px_60px_rgba(8,27,51,0.08)] md:p-10">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => setForm({ ...form, website: event.target.value })} />
            </div>
            <h2 className="display-font text-3xl font-semibold tracking-[-0.035em] text-[#081B33]">Share your profile</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">PDF, DOC, or DOCX. Maximum file size 5 MB.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="career-name" className="mb-2 block text-sm font-bold text-slate-700">Full name *</label>
                <input id="career-name" required maxLength={100} autoComplete="name" className={fieldClass} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
              </div>
              <div>
                <label htmlFor="career-email" className="mb-2 block text-sm font-bold text-slate-700">Email *</label>
                <input id="career-email" required type="email" maxLength={160} autoComplete="email" className={fieldClass} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="career-area" className="mb-2 block text-sm font-bold text-slate-700">Primary area *</label>
              <select id="career-area" required className={fieldClass} value={form.job} onChange={(event) => setForm({ ...form, job: event.target.value })}>
                <option value="">Select an area</option>
                {talentAreas.map((area) => <option key={area}>{area}</option>)}
                <option>General application</option>
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="resume" className="mb-2 block text-sm font-bold text-slate-700">Resume *</label>
              <input id="resume" required type="file" accept=".pdf,.doc,.docx" className={`${fieldClass} file:mr-4 file:rounded file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:font-bold file:text-blue-700`} onChange={(event) => setResume(event.target.files?.[0] || null)} />
            </div>

            {reference && (
              <div className="mt-6 flex gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-emerald-900" role="status">
                <CheckCircle size={20} aria-hidden />
                <p className="text-sm font-semibold">Profile received. Reference: {reference}</p>
              </div>
            )}
            {error && <p className="mt-6 rounded-md border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800" role="alert">{error}</p>}

            <button type="submit" disabled={loading} className="mt-7 inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 disabled:opacity-60">
              {loading ? "Submitting..." : "Submit profile"} <ArrowRight size={17} aria-hidden />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
