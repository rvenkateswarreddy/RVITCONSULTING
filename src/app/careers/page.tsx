"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, FileText, MapPin, ShieldCheck, Users } from "lucide-react";
import CloudWorkflowStatus from "../components/CloudWorkflowStatus";
import CinematicMedia from "../components/CinematicMedia";
import { functionsEndpoint } from "@/lib/functions-api";

const initialForm = {
  name: "",
  email: "",
  job: "",
  website: "",
};

const hiringDomains = [
  {
    title: "Software Engineering",
    description: "Full stack, frontend, backend, API, product engineering, and enterprise application roles.",
    roles: [
      "Java Full Stack Development",
      "Java Developer",
      "Spring Boot Developer",
      "Python Developer",
      "Node.js Developer",
      ".NET Developer",
      "Frontend Developer",
      "React Developer",
      "Angular Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Web Development",
      "API Developer",
      "Microservices Developer",
    ],
  },
  {
    title: "Mobile & Experience",
    description: "Native mobile, cross-platform, UI engineering, and digital experience roles.",
    roles: [
      "iOS Development",
      "Android Development",
      "React Native Developer",
      "Flutter Developer",
      "Mobile App Developer",
      "UI Developer",
      "UX Designer",
      "Accessibility Engineer",
    ],
  },
  {
    title: "Data, AI & Analytics",
    description: "Data, reporting, engineering, AI, BI, and domain analytics roles.",
    roles: [
      "Data Science",
      "Generative AI (Gen AI)",
      "Machine Learning Engineer",
      "AI Engineer",
      "Data Analyst",
      "Business Analyst",
      "Data Engineer",
      "ETL Developer",
      "SQL Developer",
      "Power BI",
      "Tableau Developer",
      "SAS (Clinical & Banking Domain)",
      "Clinical Data Analyst",
      "Banking Data Analyst",
    ],
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    description: "Cloud platforms, automation, release engineering, infrastructure, and reliability roles.",
    roles: [
      "AWS Cloud",
      "Azure Cloud",
      "Google Cloud Platform (GCP)",
      "Cloud Engineer",
      "Azure DevOps",
      "DevOps Engineer",
      "SRE Engineer",
      "Kubernetes Engineer",
      "Docker Engineer",
      "Terraform Engineer",
      "Linux Administrator",
      "Windows Administrator",
      "Network Engineer",
    ],
  },
  {
    title: "Enterprise Platforms",
    description: "Workflow, ERP, CRM, HR systems, service management, and enterprise platform roles.",
    roles: [
      "ServiceNow",
      "Workday",
      "Salesforce",
      "SAP",
      "Oracle",
      "SharePoint",
      "MuleSoft",
      "RPA Developer",
      "UiPath Developer",
      "Enterprise Application Support",
    ],
  },
  {
    title: "Quality, Security & Support",
    description: "Testing, security, production support, technical support, and application operations roles.",
    roles: [
      "QA Engineer",
      "Automation Test Engineer",
      "Manual Test Engineer",
      "SDET",
      "Performance Tester",
      "Cybersecurity Analyst",
      "Application Security Engineer",
      "Technical Support Engineer",
      "Production Support Engineer",
      "Application Support Analyst",
      "Helpdesk Support",
    ],
  },
  {
    title: "Delivery, Project & Product",
    description: "Project coordination, agile delivery, product ownership, documentation, and client delivery roles.",
    roles: [
      "Project Manager",
      "Project Coordinator",
      "Scrum Master",
      "Product Owner",
      "Product Manager",
      "Program Manager",
      "Delivery Manager",
      "Technical Writer",
      "Process Analyst",
      "PMO Analyst",
    ],
  },
  {
    title: "HR, Recruitment & Operations",
    description: "Hiring, HR operations, people coordination, onboarding, and consultant engagement roles.",
    roles: [
      "HR Executive",
      "IT Recruiter",
      "Technical Recruiter",
      "Talent Acquisition Specialist",
      "HR Operations",
      "HR Coordinator",
      "Bench Sales Recruiter",
      "Onboarding Coordinator",
      "Operations Executive",
    ],
  },
] as const;

const talentAreas = Array.from(new Set(hiringDomains.flatMap((domain) => domain.roles)));

const hiringSteps = [
  ["01", "Choose your closest role", "Use any Apply button to preselect the role area in the form."],
  ["02", "Share your resume", "Submit your profile with your primary technology or functional area."],
  ["03", "Profile review", "We review fit against active hiring, project support, and client requirements."],
  ["04", "Role alignment", "Shortlisted profiles move into discussion, fitment, and onboarding steps."],
] as const;

export default function CareersPage() {
  const [openDomain, setOpenDomain] = useState(0);
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

  function applyFor(area: string) {
    setForm((current) => ({ ...current, job: area }));
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const fieldClass =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-[#081B33] shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200";

  return (
    <>
      <section className="cinematic-hero careers-hero">
        <CinematicMedia image="/assets/media/careers-collaboration.jpg" alt="Colleagues collaborating in a modern workplace" priority position="center" />
        <div className="cinematic-shade" />
        <div className="site-container cinematic-content">
          <div className="max-w-4xl" data-reveal>
            <h1 className="hero-display">
              Your next challenge <em>starts here.</em>
            </h1>
            <p className="hero-copy">
              We hire technology, project delivery, support, HR, and recruitment professionals
              for active roles, contract needs, and upcoming client assignments.
            </p>
            <div className="hero-actions">
              <a href="#open-roles" className="button-primary">
                View hiring areas <ArrowRight size={18} aria-hidden />
              </a>
              <a href="#apply" className="button-ghost">
                Apply now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="site-container grid md:grid-cols-3">
          {[
            [`${talentAreas.length}+ role areas`, "A broad hiring catalogue across modern technology and business functions."],
            ["Flexible engagement", "Full-time, contract, part-time, project support, and client-aligned needs."],
            ["Fast apply path", "Select a role area, upload your resume, and our team reviews your profile."],
          ].map(([title, text]) => (
            <div key={title} className="border-l border-slate-200 px-6 py-8 last:border-r" data-reveal>
              <h2 className="font-extrabold text-[#081B33]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="open-roles" className="bg-[#F8FAFC] py-20 md:py-28">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="eyebrow">Hiring universe</p>
              <h2 className="section-title mt-5">Choose your domain and apply directly.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Instead of showing only a few jobs, we organize hiring by technology and
                functional domains. If your skill is close to one of these areas, apply.
              </p>
            </div>

            <div className="career-photo" data-reveal="right">
              <Image src="/assets/media/careers-planning.jpg" alt="A technology team planning together around a table" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 52vw" />
              <div className="career-photo-caption">Work with people who value clear thinking, useful delivery, and shared ownership.</div>
            </div>
          </div>

          <div className="role-board-grid mt-14">
            {hiringDomains.map((domain, index) => (
              <details key={domain.title} className="role-board" open={openDomain === index} data-reveal>
                <summary
                  className="role-board-heading"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenDomain((current) => current === index ? -1 : index);
                  }}
                >
                  <div>
                    <div>
                      <p className="role-board-number">{String(index + 1).padStart(2, "0")}</p>
                      <h3>{domain.title}</h3>
                    </div>
                    <span className="role-board-toggle">{openDomain === index ? "Hide roles" : "View roles"} <ArrowRight size={15} aria-hidden /></span>
                  </div>
                </summary>
                <p className="role-board-description">{domain.description}</p>
                <div className="role-board-list">
                  {domain.roles.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => applyFor(role)}
                      className="role-link"
                      aria-label={`Apply for ${role}`}
                    >
                      <span>{role}</span><ArrowRight size={15} aria-hidden />
                    </button>
                  ))}
                </div>
              </details>
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
              Apply for the closest role area. Our team reviews your resume against active
              hiring needs, project support requests, and upcoming client requirements.
            </p>
          </div>
          <div className="grid gap-4">
            {hiringSteps.map(([number, title, text]) => (
              <div key={title} className="process-step" data-reveal>
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
            <h2 className="section-title mt-5">Apply to RV IT.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Submit your resume once. We will review it for active and future technology,
              HR, recruitment, support, cloud, data, and enterprise platform opportunities.
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
            <div className="mt-8">
              <CloudWorkflowStatus />
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
