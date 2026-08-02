import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenCheck, CheckCircle, GraduationCap, Users } from "lucide-react";
import { createPageMetadata } from "../seo";
import CinematicMedia from "../components/CinematicMedia";

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

const formats = [
  ["Team workshops", "Focused sessions for project teams that need practical upskilling around a defined technology or delivery challenge."],
  ["Role-based academies", "Structured programs for developers, analysts, cloud engineers, QA, platform teams, and technical leads."],
  ["Leadership enablement", "Technology briefings and decision workshops for managers who need clarity without unnecessary jargon."],
] as const;

export default function CorporateTrainingsPage() {
  return (
    <>
      <section className="cinematic-hero training-hero">
        <CinematicMedia video="/assets/media/training-workshop.mp4" poster="/assets/media/training-workshop-poster.png" position="center" />
        <div className="cinematic-shade" />
        <div className="site-container cinematic-content">
          <div className="max-w-5xl" data-reveal>
            <h1 className="hero-display">
              Learn it today. Apply it <em>tomorrow.</em>
            </h1>
            <p className="hero-copy">
              We design corporate training programs around the tools, roles, and delivery
              responsibilities your teams handle every day.
            </p>
            <div className="hero-actions">
              <Link href="/contactus?service=corporate-trainings" className="button-primary">Build a learning path <ArrowRight size={18} aria-hidden /></Link>
              <a href="#programs" className="button-ghost">Browse programs</a>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="site-container scroll-story training-story">
          <div className="scroll-story-media" data-reveal="left">
            <Image src="/assets/media/training-seminar.jpg" alt="Professionals taking part in an instructor-led seminar" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <p className="scroll-story-caption">Learning designed around the work waiting on Monday morning.</p>
          </div>
          <div className="scroll-story-copy">
            <div className="story-intro" data-reveal="right">
              <p className="eyebrow">A learning path with a purpose</p>
              <h2 className="section-title mt-5">Not classroom theory. Capability your team can apply.</h2>
              <p>Every program is shaped around your audience, starting point, project goals, and technology stack.</p>
            </div>
            {formats.map(([title, body], index) => (
              <article key={title} className="story-chapter" data-reveal="right">
                <span>0{index + 1}</span><BookOpenCheck size={23} aria-hidden />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
            <Link href="/contactus?service=corporate-trainings" className="story-link">
              Plan a training program <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section id="programs" className="soft-section scroll-mt-24 py-24 md:py-28">
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
              <article key={group.category} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(8,27,51,0.05)]" data-reveal>
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

        </div>
      </section>

      <section className="dark-section py-20 text-white md:py-24">
        <div className="site-container relative grid gap-6 md:grid-cols-3">
          {[
            [GraduationCap, "Role-aware", "Content is adapted for engineers, analysts, managers, and platform teams."],
            [Users, "Hands-on", "Exercises can be mapped to realistic scenarios your teams recognize."],
            [BookOpenCheck, "Measured", "Programs include clear outcomes, practice, and take-away references."],
          ].map(([Icon, title, text]) => (
            <div key={title as string} className="rounded-[22px] border border-white/12 bg-white/[0.06] p-7 backdrop-blur" data-reveal>
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
