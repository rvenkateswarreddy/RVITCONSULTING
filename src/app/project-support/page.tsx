import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Clock3,
  FileText,
  Headphones,
  UsersRound,
} from "lucide-react";
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
    coverage: "Focused intervention",
    bestFor: "A delivery blocker, technical decision, implementation issue, or review that needs experienced attention.",
    body: "Hands-on support for troubleshooting, code review, configuration, integrations, and implementation challenges.",
    points: ["Issue triage", "Technical guidance", "Delivery unblockers"],
  },
  {
    title: "Contract support",
    coverage: "Defined project window",
    bestFor: "A milestone, temporary capability gap, specialist requirement, or clearly scoped delivery need.",
    body: "Experienced specialists aligned to a defined project period, work package, or technical responsibility.",
    points: ["Short-term needs", "Specialist skills", "Clear scope"],
  },
  {
    title: "Part-time program",
    coverage: "4 hours per day",
    bestFor: "Teams that need dependable daily technical help without a full-time allocation.",
    body: "Focused daily coverage for reviews, implementation support, technical coordination, and continuity.",
    points: ["Flexible coverage", "Regular availability", "Efficient support"],
  },
  {
    title: "Full-time program",
    coverage: "8 hours per day",
    bestFor: "Active programs that need consistent ownership, deeper context, and day-to-day delivery continuity.",
    body: "Dedicated daily support integrated with the team rhythm, priorities, and delivery responsibilities.",
    points: ["Dedicated availability", "Deeper project context", "Delivery continuity"],
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

const engagementSteps = [
  ["01", "Share the delivery context", "Tell us what is moving, what is blocked, and where additional capability would help."],
  ["02", "Choose the right coverage", "We align the skill, daily availability, responsibilities, and working window to the need."],
  ["03", "Start with clear priorities", "The support professional joins with an understood scope, communication rhythm, and first priorities."],
  ["04", "Review and adjust", "Progress, coverage, and next steps stay visible so the engagement can evolve with the project."],
] as const;

export default function ProjectSupportPage() {
  return (
    <>
      <section className="cinematic-hero support-hero support-enterprise-hero">
        <CinematicMedia image="/assets/media/project-operations-real.jpg" alt="Technology operations team working together" priority position="center" />
        <div className="cinematic-shade" />
        <div className="site-container cinematic-content">
          <div className="max-w-3xl" data-reveal>
            <h1 className="hero-display">
              Delivery support, built around <em>your project.</em>
            </h1>
            <p className="hero-copy">
              Add experienced technical capability when your team needs focused help,
              specialist skills, or dependable daily coverage.
            </p>
            <div className="hero-actions">
              <Link href="/contactus?service=project-support" className="button-primary">Discuss your project <ArrowRight size={18} aria-hidden /></Link>
              <a href="#support-models" className="button-ghost">Compare support models</a>
            </div>
          </div>
        </div>
      </section>

      <section className="support-principles" aria-label="Project support principles">
        <div className="site-container support-principle-grid">
          {[
            [Headphones, "Practical help", "Support stays close to the technical work and current delivery priorities."],
            [Clock3, "Flexible coverage", "Choose focused, contract, 4-hour, or 8-hour availability."],
            [UsersRound, "Clear ownership", "Responsibilities, communication, and working rhythm are agreed from the start."],
          ].map(([Icon, title, body]) => (
            <div key={title as string} className="support-principle">
              <Icon size={21} aria-hidden />
              <div><strong>{title as string}</strong><p>{body as string}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="support-models" className="editorial-section scroll-mt-24">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow">Ways to work with us</p>
              <h2 className="section-title mt-5">Coverage that fits the delivery need.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Start with the outcome and working rhythm. The support model should follow
              the project—not force the project into a fixed package.
            </p>
          </div>

          <div className="support-model-table mt-12">
            <div className="support-model-header" aria-hidden="true">
              <span>Support model</span><span>Best suited to</span><span>What is included</span>
            </div>
            {supportModels.map((model, index) => (
              <article key={model.title} className="support-model-row" data-reveal>
                <div className="support-model-name">
                  <span>0{index + 1}</span>
                  <h3>{model.title}</h3>
                  <p>{model.coverage}</p>
                </div>
                <div className="support-model-fit">
                  <small>Best suited to</small>
                  <p>{model.bestFor}</p>
                  <p>{model.body}</p>
                </div>
                <div className="support-model-points">
                  <small>What is included</small>
                  {model.points.map((point) => (
                    <span key={point}><CheckCircle size={16} aria-hidden />{point}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-section editorial-section">
        <div className="site-container grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <div data-reveal="left">
            <p className="eyebrow">How support begins</p>
            <h2 className="section-title mt-5">A clear start. A visible working rhythm.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Project support works best when priorities, availability, and ownership are
              explicit. We keep the setup straightforward.
            </p>
            <Link href="/contactus?service=project-support" className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600">
              Plan your coverage <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
          <div className="support-steps" data-reveal="right">
            {engagementSteps.map(([number, title, body]) => (
              <article key={number} className="support-step">
                <span>{number}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="site-container grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div data-reveal="left">
            <p className="eyebrow">Technology coverage</p>
            <h2 className="section-title mt-5">Support for the work already in motion.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We can support implementation teams, product groups, platform owners, and
              delivery managers across day-to-day technical responsibilities.
            </p>
          </div>
          <div className="support-area-list" data-reveal="right">
            {projectAreas.map((area, index) => (
              <div key={area}><span>0{index + 1}</span><FileText size={18} aria-hidden /><strong>{area}</strong><Check size={18} aria-hidden /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-20 text-white">
        <div className="site-container relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-bold text-blue-100">Focused, contract, 4-hour, and 8-hour coverage</p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em]">
              What would help your project move forward?
            </h2>
          </div>
          <Link href="/contactus?service=project-support" className="button-light shrink-0">
            Talk to our team <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
