import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle, GraduationCap, Users } from "lucide-react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Corporate Trainings",
  "Corporate technology trainings for teams across cloud, data, AI, DevOps, full stack development, mobile, and enterprise platforms.",
  "/corporate-trainings",
);

const trainingPrograms = [
  {
    category: "AI, Data & Analytics",
    programs: [
      "Data Science",
      "Generative AI (Gen AI)",
      "Data Analyst",
      "Data Engineer",
      "Python for analytics",
      "Power BI",
      "Business intelligence and reporting",
      "Data visualization",
      "SQL and database fundamentals",
      "Machine learning foundations",
    ],
  },
  {
    category: "Software Engineering",
    programs: [
      "Java Full Stack Development",
      "Python development",
      "Web Development",
      "Frontend engineering",
      "Backend API development",
      "REST API design",
      "Microservices fundamentals",
      "Quality engineering and testing",
      "Git and collaborative development",
    ],
  },
  {
    category: "Cloud, DevOps & Operations",
    programs: [
      "AWS Cloud",
      "Azure DevOps",
      "Cloud fundamentals",
      "CI/CD pipelines",
      "Infrastructure and deployment basics",
      "Monitoring and production readiness",
      "Agile delivery practices",
      "Release management",
    ],
  },
  {
    category: "Enterprise Platforms",
    programs: [
      "ServiceNow",
      "Workday",
      "SAS (Clinical & Banking Domain)",
      "ITSM process training",
      "Workflow automation",
      "Enterprise platform configuration",
      "Clinical domain systems",
      "Banking domain systems",
    ],
  },
  {
    category: "Mobile & Experience",
    programs: [
      "iOS Development",
      "Android Development",
      "Mobile application fundamentals",
      "Responsive web experiences",
      "UI engineering basics",
      "Accessibility fundamentals",
    ],
  },
  {
    category: "Professional Delivery Skills",
    programs: [
      "Technical documentation",
      "Project support readiness",
      "Client communication",
      "Interview preparation",
      "Corporate onboarding programs",
      "Team productivity and collaboration",
    ],
  },
] as const;

const allTrainingPrograms = trainingPrograms.flatMap((group) => group.programs);

const formats = [
  ["Team workshops", "Focused sessions for project teams that need practical upskilling around a defined technology or delivery challenge."],
  ["Role-based academies", "Structured programs for developers, analysts, cloud engineers, QA, platform teams, and technical leads."],
  ["Leadership enablement", "Technology briefings and decision workshops for managers who need clarity without unnecessary jargon."],
] as const;

export default function CorporateTrainingsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#081B33] text-white">
        <Image
          src="/assets/Industries/Education.webp"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#081B33_0%,rgba(8,27,51,.96)_50%,rgba(8,27,51,.54)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/75 via-transparent to-[#081B33]/20" />
        <div className="site-container relative flex min-h-[540px] items-center py-24 md:py-32">
          <div className="max-w-5xl">
            <p className="eyebrow !text-cyan-300">Corporate trainings</p>
            <h1 className="display-font balanced mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-7xl">
              Practical technology learning for working teams.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
              We design corporate training programs around the tools, roles, and delivery
              responsibilities your teams handle every day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="site-container grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Training built around real work</p>
            <h2 className="section-title mt-5">Not classroom theory. Capability your team can apply.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every program is shaped around your audience, baseline skill level, project
              goals, and technology stack. We keep sessions clear, hands-on, and useful.
            </p>
            <Link href="/contactus?service=corporate-trainings" className="mt-9 inline-flex items-center gap-2 font-bold text-blue-600">
              Plan a training program <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
          <div className="grid gap-4">
            {formats.map(([title, body]) => (
              <div key={title} className="border border-slate-200 bg-[#F8FAFC] p-7">
                <BookOpenCheck className="text-blue-600" size={26} aria-hidden />
                <h3 className="mt-5 text-xl font-extrabold text-[#081B33]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 md:py-28">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Technology coverage</p>
              <h2 className="section-title mt-5">Training programs and technologies we can support.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Programs can be delivered as short enablement sessions, multi-day workshops,
              or role-based learning paths depending on the team need.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {trainingPrograms.map((group) => (
              <article key={group.category} className="border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(8,27,51,0.05)]">
                <h3 className="display-font text-2xl font-extrabold tracking-[-0.03em] text-[#081B33]">
                  {group.category}
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.programs.map((program) => (
                    <div key={program} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 shrink-0 text-blue-600" size={17} aria-hidden />
                      <span className="text-sm font-bold leading-6 text-slate-700">{program}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-l-4 border-blue-600 bg-white p-6 shadow-[0_18px_55px_rgba(8,27,51,0.05)] md:p-8">
            <h3 className="font-extrabold text-[#081B33]">Complete training catalogue</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Current catalogue includes {allTrainingPrograms.join(", ")}.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#081B33] py-20 text-white md:py-24">
        <div className="site-container grid gap-6 md:grid-cols-3">
          {[
            [GraduationCap, "Role-aware", "Content is adapted for engineers, analysts, managers, and platform teams."],
            [Users, "Hands-on", "Exercises can be mapped to realistic scenarios your teams recognize."],
            [BookOpenCheck, "Measured", "Programs include clear outcomes, practice, and take-away references."],
          ].map(([Icon, title, text]) => (
            <div key={title as string} className="border border-white/12 bg-white/[0.06] p-7">
              <Icon className="text-cyan-300" size={26} aria-hidden />
              <h3 className="mt-6 text-xl font-extrabold">{title as string}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text as string}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
