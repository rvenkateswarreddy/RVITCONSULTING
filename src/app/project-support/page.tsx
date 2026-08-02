import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, Headphones } from "lucide-react";
import { createPageMetadata } from "../seo";
import CinematicMedia from "../components/CinematicMedia";

export const metadata = createPageMetadata(
  "Project Support",
  "Technical project support from RV IT Consulting including contract, part-time 4-hour, and full-time 8-hour support programs.",
  "/project-support",
);

const supportModels = [
  {
    title: "Technical support",
    body: "Hands-on support for implementation, troubleshooting, code review, configuration, integrations, and delivery blockers.",
    points: ["Issue triage", "Technical guidance", "Delivery unblockers"],
  },
  {
    title: "Contract support",
    body: "Experienced specialists available for defined project windows, milestones, or temporary capability gaps.",
    points: ["Short-term needs", "Specialist skills", "Clear scope"],
  },
  {
    title: "Part-time program",
    body: "A focused 4-hour daily support model for teams that need steady technical help without full-time allocation.",
    points: ["4 hours per day", "Flexible coverage", "Cost-efficient support"],
  },
  {
    title: "Full-time program",
    body: "An 8-hour daily support model for active programs that need consistent ownership and delivery continuity.",
    points: ["8 hours per day", "Dedicated availability", "Project continuity"],
  },
] as const;

const projectAreas = [
  "Full stack development",
  "Cloud and DevOps",
  "Data engineering",
  "Power BI and analytics",
  "ServiceNow and Workday",
  "Mobile development",
  "Technical documentation",
  "Production support",
] as const;

export default function ProjectSupportPage() {
  return (
    <>
      <section className="cinematic-hero support-hero">
        <CinematicMedia video="/assets/media/project-support-hero.mp4" poster="/assets/media/project-operations-real.jpg" priority position="center" />
        <div className="cinematic-shade" />
        <div className="site-container cinematic-content">
          <div className="ml-auto max-w-3xl" data-reveal="right">
            <h1 className="hero-display">
              Keep delivery moving. <em>Stay in control.</em>
            </h1>
            <p className="hero-copy">
              Add experienced technical support to your project through contract,
              part-time, or full-time engagement models.
            </p>
            <div className="hero-actions">
              <Link href="/contactus?service=project-support" className="button-primary">Discuss coverage <ArrowRight size={18} aria-hidden /></Link>
              <a href="#support-models" className="button-ghost">Compare models</a>
            </div>
          </div>
        </div>
      </section>

      <section id="support-models" className="editorial-section scroll-mt-24">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow">Support models</p>
              <h2 className="section-title mt-5">Choose the coverage that fits the project.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Some programs need short expert intervention. Others need steady daily
              coverage. RV IT supports both with clear scope and practical communication.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {supportModels.map((model) => (
              <article key={model.title} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(8,27,51,0.06)] transition hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(8,27,51,0.12)]" data-reveal>
                <Headphones className="text-blue-600" size={26} aria-hidden />
                <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-[#081B33]">{model.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{model.body}</p>
                <div className="mt-6 grid gap-2">
                  {model.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <CheckCircle className="text-blue-600" size={16} aria-hidden />
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 md:py-28">
        <div className="site-container grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <div className="support-console" data-reveal="left">
            <div className="support-console-top"><span /><span /><span /><b>DELIVERY PULSE</b></div>
            <div className="support-radar"><i /><i /><i /><span /></div>
            <div className="support-console-copy">
              <small>Coverage designed around your rhythm</small>
              <strong>Right skill. Right window. Clear ownership.</strong>
            </div>
          </div>
          <div data-reveal="right">
            <p className="eyebrow">Where we help</p>
            <h2 className="section-title mt-5">Technical coverage for active delivery teams.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We can support implementation teams, product groups, platform owners, and
              delivery managers across day-to-day technical work.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectAreas.map((area) => (
                <div key={area} className="flex items-center gap-3 border border-slate-200 bg-white p-4">
                  <FileText className="shrink-0 text-blue-600" size={18} aria-hidden />
                  <span className="font-bold text-[#081B33]">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section py-20 text-white">
        <div className="site-container relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-extrabold text-blue-100">Contract, 4-hour, and 8-hour programs</p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em]">
              Need reliable technical support for an active project?
            </h2>
          </div>
          <Link href="/contactus?service=project-support" className="button-light shrink-0">
            Discuss support options <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
