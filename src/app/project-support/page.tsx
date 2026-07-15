import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, Headphones } from "lucide-react";
import { createPageMetadata } from "../seo";

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
      <section className="relative overflow-hidden bg-[#081B33] text-white">
        <Image
          src="/assets/brand/consulting-team-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-48"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#081B33_0%,rgba(8,27,51,.96)_48%,rgba(8,27,51,.58)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/75 via-transparent to-[#081B33]/20" />
        <div className="site-container relative flex min-h-[540px] items-center py-24 md:py-32">
          <div className="max-w-5xl">
            <p className="eyebrow !text-cyan-300">Project support</p>
            <h1 className="display-font balanced mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-7xl">
              Technical support when delivery needs momentum.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
              Add experienced technical support to your project through contract,
              part-time, or full-time engagement models.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
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
              <article key={model.title} className="border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(8,27,51,0.06)]">
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
          <div className="relative min-h-[460px] overflow-hidden bg-[#081B33]">
            <Image
              src="/assets/WhyChooseUs/team-1.png"
              alt="Technical consultants supporting project delivery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p className="display-font text-2xl font-semibold leading-tight">
                Support can be shaped around your project rhythm, not a rigid template.
              </p>
            </div>
          </div>
          <div>
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

      <section className="bg-blue-600 py-20 text-white">
        <div className="site-container flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-extrabold text-blue-100">Contract, 4-hour, and 8-hour programs</p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em]">
              Need reliable technical support for an active project?
            </h2>
          </div>
          <Link href="/contactus?service=project-support" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-4 font-extrabold text-blue-700 hover:bg-blue-50">
            Discuss support options <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
