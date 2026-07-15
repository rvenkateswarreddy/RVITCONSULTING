"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, FileText, Mail, MapPin, ShieldCheck, Users } from "lucide-react";
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
  "SAS (Clinical & Banking Domain)",
  "Data Engineer",
  "Azure DevOps",
  "ServiceNow",
  "AWS Cloud",
  "Web Development",
  "iOS Development",
  "Android Development",
] as const;

const focusRoles = [
  {
    title: "Engineering & Product",
    areas: ["Java Full Stack", "Python", "Web", "iOS", "Android"],
    text: "Build reliable client-facing and internal platforms across modern web and mobile stacks.",
  },
  {
    title: "Data, AI & Analytics",
    areas: ["Data Science", "Gen AI", "Power BI", "Data Engineering"],
    text: "Turn enterprise data into governed pipelines, dashboards, models, and practical AI workflows.",
  },
  {
    title: "Cloud & Enterprise Platforms",
    areas: ["AWS", "Azure DevOps", "ServiceNow", "Workday", "SAS"],
    text: "Support cloud modernization, workflow automation, and regulated domain delivery.",
  },
] as const;

const hiringSteps = [
  ["01", "Share your profile", "Send your resume with the closest primary area."],
  ["02", "Profile review", "We review fit against active and upcoming client needs."],
  ["03", "Practical conversation", "We discuss real project experience, ownership, and communication."],
  ["04", "Client alignment", "Selected profiles move into role fitment, documentation, and onboarding."],
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
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-[#081B33] shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200";

  return (
    <>
      <section className="relative overflow-hidden bg-[#081B33] text-white">
        <Image
          src="/assets/brand/consulting-team-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#081B33_0%,rgba(8,27,51,.96)_48%,rgba(8,27,51,.62)_100%)]" />
        <div className="site-container relative grid min-h-[560px] items-end py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="eyebrow !text-cyan-300">Join our delivery network</p>
            <h1 className="display-font balanced mt-6 text-5xl font-semibold leading-[1.03] tracking-[-0.06em] md:text-7xl">
              Join a team built for serious technology delivery.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              We work with experienced engineers, analysts, cloud specialists, and platform
              consultants who can help clients move with clarity and confidence.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#apply" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700">
                Submit profile <ArrowRight size={18} aria-hidden />
              </a>
              <a href="mailto:contact@rvit.co.in" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur hover:bg-white/15">
                <Mail size={17} aria-hidden /> contact@rvit.co.in
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="site-container grid md:grid-cols-3">
          {[
            ["Technology consulting", "Engineering, cloud, data, AI, and enterprise platforms."],
            ["Client-aligned roles", "Opportunities depend on approved project requirements."],
            ["Global delivery", "Support across India, USA, Europe, Middle East, and APAC contexts."],
          ].map(([title, text]) => (
            <div key={title} className="border-l border-slate-200 px-6 py-8 last:border-r">
              <h2 className="font-extrabold text-[#081B33]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20 md:py-28">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="eyebrow">Hiring focus</p>
              <h2 className="section-title mt-5">Career areas we are actively tracking.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                We keep hiring communication simple. If your experience fits one of these
                areas, share your profile and we will review it against current and upcoming
                consulting needs.
              </p>
            </div>

            <div className="relative min-h-[430px] overflow-hidden bg-[#081B33] shadow-[0_24px_70px_rgba(8,27,51,0.14)]">
              <Image
                src="/assets/WhyChooseUs/team-2.png"
                alt="Technology consultants discussing a delivery plan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/80 via-[#081B33]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="display-font max-w-md text-2xl font-semibold leading-tight">
                  We hire for judgment, communication, and delivery ownership.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid overflow-hidden border border-slate-200 bg-white shadow-[0_18px_55px_rgba(8,27,51,0.06)]">
            {focusRoles.map((role, index) => (
              <article key={role.title} className="grid gap-6 border-b border-slate-200 p-7 last:border-b-0 md:grid-cols-[96px_1fr_.85fr] md:p-9">
                <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-[#081B33]">{role.title}</h3>
                  <p className="mt-4 max-w-xl leading-7 text-slate-600">{role.text}</p>
                </div>
                <div className="flex flex-wrap content-start gap-2 md:justify-end">
                  {role.areas.map((area) => (
                    <span key={area} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-700">
                      {area}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-container grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Candidate journey</p>
            <h2 className="section-title mt-5">A practical process, without unnecessary noise.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our process is built around real delivery experience, communication, and
              client fit. No fake urgency, no mystery steps.
            </p>
          </div>
          <div className="grid gap-4">
            {hiringSteps.map(([number, title, text]) => (
              <div key={title} className="grid gap-5 border border-slate-200 bg-white p-6 md:grid-cols-[70px_1fr]">
                <div className="display-font text-3xl font-semibold tracking-[-0.04em] text-blue-600">{number}</div>
                <div>
                  <h3 className="font-extrabold text-[#081B33]">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081B33] py-18 text-white md:py-24">
        <div className="site-container grid gap-6 md:grid-cols-3">
          {[
            [ShieldCheck, "Trust", "Handle client context with care and professionalism."],
            [Users, "Ownership", "Communicate clearly and take responsibility for outcomes."],
            [MapPin, "Adaptability", "Work across domains, teams, time zones, and delivery models."],
          ].map(([Icon, title, text]) => (
            <div key={title as string} className="border border-white/12 bg-white/[0.06] p-7">
              <Icon className="text-cyan-300" size={26} aria-hidden />
              <h3 className="mt-6 text-xl font-extrabold">{title as string}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="bg-[#F8FAFC] py-20 md:py-28">
        <div className="site-container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Profile submission</p>
            <h2 className="section-title mt-5">Share your profile with RV IT.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Submit your resume once. We will review it for active and future consulting,
              engineering, cloud, data, and platform opportunities.
            </p>
            <div className="mt-10 border-t border-slate-200 pt-7">
              <div className="flex gap-4">
                <FileText className="mt-1 text-blue-600" size={21} aria-hidden />
                <div>
                  <h3 className="font-extrabold text-[#081B33]">Secure submission</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Your resume is sent through the configured Firebase function workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(8,27,51,0.1)] md:p-10">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => setForm({ ...form, website: event.target.value })} />
            </div>
            <h2 className="display-font text-3xl font-semibold tracking-[-0.035em] text-[#081B33]">Candidate profile</h2>
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
