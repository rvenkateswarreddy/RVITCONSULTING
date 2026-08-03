import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  Cloud,
  ChevronDown,
  GraduationCap,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { createPageMetadata } from "../seo";
import CinematicMedia from "../components/CinematicMedia";

export const metadata = createPageMetadata(
  "Enterprise Technology Consulting Services",
  "Explore RV IT Consulting services across software engineering, cloud, data, AI, DevOps, project support, corporate training, marketing support, and technology hiring.",
  "/services",
);

const services = [
  {
    title: "Digital engineering",
    body: "We design, build, modernize, and support dependable web, mobile, and enterprise applications for real business workflows.",
    icon: Blocks,
    id: "digital-engineering",
    href: "/contactus?service=digital-engineering",
    features: ["Java full stack", "Python development", "React and Angular", "Web development", "iOS development", "Android development", "API integrations", "Application modernization"],
  },
  {
    title: "Cloud, DevOps & infrastructure",
    body: "Cloud consulting and delivery for teams that need scalable environments, release confidence, and stronger operations.",
    icon: Cloud,
    id: "cloud-modernization",
    href: "/contactus?service=cloud-modernization",
    features: ["AWS Cloud", "Azure DevOps", "Azure Cloud", "Google Cloud", "CI/CD pipelines", "Infrastructure automation", "Monitoring and reliability", "Cloud migration"],
  },
  {
    title: "Data, analytics & AI",
    body: "From data pipelines to dashboards and Gen AI enablement, we help teams turn scattered information into usable intelligence.",
    icon: BarChart3,
    id: "data-intelligence",
    href: "/contactus?service=data-intelligence",
    features: ["Data Science", "Generative AI", "Data Analyst", "Data Engineer", "Power BI", "SAS clinical domain", "SAS banking domain", "Business intelligence"],
  },
  {
    title: "Enterprise platforms",
    body: "Specialist support for enterprise systems, workflow platforms, HR technology, service management, and industry applications.",
    icon: BriefcaseBusiness,
    id: "enterprise-platforms",
    href: "/contactus?service=enterprise-platforms",
    features: ["ServiceNow", "Workday", "SAS", "Clinical domain", "Banking domain", "Workflow automation", "Platform support", "System integration"],
  },
  {
    title: "Security & resilience",
    body: "Security-conscious delivery across applications, cloud, access, operations, and business continuity.",
    icon: ShieldCheck,
    id: "security-resilience",
    href: "/contactus?service=security-resilience",
    features: ["Application security", "Cloud security", "Access controls", "Compliance readiness", "Operational resilience", "Risk review", "Secure architecture", "Production support"],
  },
  {
    title: "Project support",
    body: "Flexible technical support models for companies and delivery teams that need experienced help without unnecessary overhead.",
    icon: Users,
    id: "project-support",
    href: "/project-support",
    features: ["Technical support", "Contract support", "Part-time 4-hour program", "Full-time 8-hour program", "Delivery support", "Production support", "Implementation help", "Remote engineering support"],
  },
  {
    title: "Corporate trainings",
    body: "Applied technology training programs for teams, freshers, experienced professionals, and enterprise enablement initiatives.",
    icon: GraduationCap,
    id: "training-enablement",
    href: "/corporate-trainings",
    features: ["Data Science", "Gen AI", "Java full stack", "Python", "Power BI", "Workday", "ServiceNow", "AWS and DevOps"],
  },
  {
    title: "Careers, staffing & talent",
    body: "Hiring and talent support across modern technology roles, HR roles, project delivery roles, and specialist market requirements.",
    icon: Users,
    id: "talent-delivery",
    href: "/careers",
    features: ["Technology recruitment", "HR hiring", "Java roles", "Python roles", "Data roles", "Cloud roles", "Mobile roles", "Business analyst roles"],
  },
  {
    title: "Marketing support",
    body: "Professional marketing support for candidates and businesses that need stronger visibility, positioning, outreach, and local market presence.",
    icon: Megaphone,
    id: "marketing-support",
    href: "/marketing",
    features: ["Career profile marketing", "Business marketing", "Local area visibility", "Global market reach", "Service positioning", "Digital presence", "Lead support", "Client communication"],
  },
] as const;

const technologyGroups = [
  ["Software", ["Java", "Spring Boot", "Python", "Node.js", ".NET", "React", "Angular", "Microservices", "REST APIs"]],
  ["Mobile & Web", ["Web development", "iOS", "Android", "React Native", "Flutter", "UI engineering", "Accessibility", "Performance"]],
  ["Data & AI", ["Data Science", "Generative AI", "Data Analyst", "Data Engineer", "Power BI", "SQL", "SAS", "Analytics"]],
  ["Cloud & Platforms", ["AWS Cloud", "Azure DevOps", "Azure", "Google Cloud", "ServiceNow", "Workday", "CI/CD", "Automation"]],
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="cinematic-hero">
        <CinematicMedia video="/assets/media/services-engineering.mp4" poster="/assets/media/services-engineering-poster.png" position="center" />
        <div className="cinematic-shade" />
        <div className="site-container cinematic-content">
          <div className="max-w-5xl" data-reveal>
            <h1 className="hero-display">
              From complex systems to <em>clear outcomes.</em>
            </h1>
            <p className="hero-copy">
            From software engineering and cloud to data, AI, trainings, staffing, project support,
            and marketing support, RV IT Consulting helps clients move from requirement to real execution.
            </p>
            <div className="hero-actions">
              <Link href="/contactus" className="button-primary">Shape an engagement <ArrowRight size={18} aria-hidden /></Link>
              <a href="#digital-engineering" className="button-ghost">Explore capabilities</a>
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section py-16">
        <div className="site-container grid gap-5 md:grid-cols-4">
          {[
            ["End-to-end", "Consulting, implementation, support, hiring, training, and market visibility."],
            ["Flexible models", "Advisory, delivery teams, contract support, part-time, and full-time programs."],
            ["Modern stack", "Cloud, DevOps, data, AI, mobile, web, and enterprise platform expertise."],
            ["Global mindset", "Support for clients, candidates, and businesses across multiple markets."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" data-reveal>
              <h2 className="display-font text-xl font-extrabold tracking-[-0.025em] text-[#081B33]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="editorial-section">
        <div className="site-container service-scroll-shell">
          <aside className="service-sticky-media" data-reveal="left">
            <Image src="/assets/media/services-developers.jpg" alt="Software engineers collaborating around a workstation" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
            <div className="service-sticky-copy">
              <p>One connected delivery team</p>
              <strong>From first decision to a reliable operating service.</strong>
            </div>
          </aside>
          <div className="service-catalogue">
            {services.map(({ title, body, icon: Icon, id, features, href }, index) => (
              <details id={id} key={title} className="service-entry" data-reveal="right" open={index === 0}>
                <summary className="service-entry-heading">
                  <span>0{index + 1}</span>
                  <Icon className="text-blue-600" size={30} strokeWidth={1.7} aria-hidden />
                  <strong>{title}</strong>
                  <ChevronDown className="service-entry-toggle" size={20} aria-hidden />
                </summary>
                <div className="service-entry-content">
                  <p className="service-entry-body">{body}</p>
                  <ul className="service-feature-list">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link href={href} className="service-entry-link">Explore this service <ArrowRight size={17} aria-hidden /></Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-24 text-white">
        <div className="site-container relative">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow !text-cyan-300">Technology coverage</p>
              <h2 className="display-font mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Broad capability without making the page feel crowded.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                These are the core technology areas we support across consulting, delivery,
                project support, training, and hiring requirements.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {technologyGroups.map(([group, items]) => (
                <div key={group} className="border-t border-white/30 py-6" data-reveal>
                  <h3 className="display-font text-2xl font-bold tracking-[-0.03em]">{group}</h3>
                  <div className="mt-5 grid grid-cols-2 gap-x-6">
                    {items.map((item) => (
                      <span key={item} className="border-b border-white/10 py-2 text-xs font-bold text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section py-20">
        <div className="site-container grid gap-10 lg:grid-cols-3">
          <div><p className="eyebrow">How clients engage us</p><h2 className="section-title mt-5">The right shape for the work.</h2></div>
          {[
            ["Advisory", "Senior guidance for strategy, architecture, operating models, and critical decisions."],
            ["Delivery", "Accountable teams that take defined outcomes from discovery through implementation."],
            ["Support", "Part-time, full-time, contract, training, staffing, and marketing support around the work."],
          ].map(([title, body]) => <div key={title} className="border-t-2 border-[#081B33] pt-6"><h3 className="display-font text-xl font-extrabold text-[#081B33]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></div>)}
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white">
        <div className="site-container flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="display-font max-w-3xl text-4xl font-semibold tracking-[-0.04em]">Let&apos;s define the smallest useful first step.</h2>
          <Link href="/contactus" className="button-light">Discuss your needs <ArrowRight size={18} aria-hidden /></Link>
        </div>
      </section>
    </>
  );
}
