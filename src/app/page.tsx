import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Check,
  Cloud,
  GraduationCap,
  ShieldCheck,
  Users,
} from "lucide-react";
import { createPageMetadata, defaultDescription } from "./seo";
import CinematicMedia from "./components/CinematicMedia";

export const metadata = {
  ...createPageMetadata("Technology built for business", defaultDescription, "/"),
  title: {
    absolute: "RV IT Consulting | Technology built for business",
  },
};

const capabilities = [
  {
    icon: Blocks,
    title: "Digital engineering",
    body: "Modern applications, platforms, and product experiences built for reliability and change.",
    href: "/services#digital-engineering",
  },
  {
    icon: Cloud,
    title: "Cloud modernization",
    body: "Pragmatic cloud strategy, migration, platform engineering, and operating model support.",
    href: "/services#cloud-modernization",
  },
  {
    icon: BarChart3,
    title: "Data & intelligence",
    body: "Data foundations, analytics, and responsible AI that move decisions closer to the work.",
    href: "/services#data-intelligence",
  },
  {
    icon: ShieldCheck,
    title: "Security & resilience",
    body: "Security embedded across architecture, delivery, and day-to-day technology operations.",
    href: "/services#security-resilience",
  },
  {
    icon: Users,
    title: "Technology talent",
    body: "Specialist teams and recruitment support aligned to your delivery standards and context.",
    href: "/services#talent-delivery",
  },
  {
    icon: GraduationCap,
    title: "Capability building",
    body: "Applied training that helps teams adopt new tools, practices, and ways of working.",
    href: "/services#training-enablement",
  },
];

const industries = ["Financial services", "Healthcare", "Retail & commerce", "Education", "Technology", "Public services"];

export default function Home() {
  return (
    <>
      <section className="cinematic-hero">
        <CinematicMedia video="/assets/media/home-collaboration.mp4" poster="/assets/media/home-collaboration-poster.png" position="center" />
        <div className="cinematic-shade" />
        <div className="site-container cinematic-content">
          <div className="max-w-4xl" data-reveal>
            <h1 className="hero-display">
              Technology change that <em>works.</em>
            </h1>
            <p className="hero-copy">
              We help organizations modernize critical systems, strengthen delivery teams, and turn technology investment into lasting business capability.
            </p>
            <div className="hero-actions">
              <Link href="/contactus" className="button-primary">
                Discuss your priorities <ArrowRight size={18} aria-hidden />
              </Link>
              <Link href="/services" className="button-ghost">
                Explore our capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-strip">
        <div className="site-container signal-grid">
          {[
            ["7+ years", "Building practical technology solutions"],
            ["Global client reach", "North America, Europe, Middle East, Asia, and Africa"],
            ["Flexible models", "Advisory, delivery, staffing, and training"],
            ["One accountable team", "From direction through implementation"],
          ].map(([value, label]) => (
            <div key={value} className="signal-item">
              <strong>{value}</strong>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="editorial-section">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20" data-reveal>
            <div>
              <p className="eyebrow">Where RV IT helps</p>
              <h2 className="section-title balanced mt-5">One partner for the work between ambition and execution.</h2>
            </div>
            <div className="lg:pt-11">
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Good transformation is not a technology shopping list. We connect business direction, engineering discipline, and team capability so change can survive beyond launch day.
              </p>
            </div>
          </div>

          <div className="bento-grid mt-16">
            {capabilities.map((item, index) => (
              <Link key={item.title} href={item.href} className="bento-card group" data-reveal>
                <span className="bento-number">Capability 0{index + 1}</span>
                <span className="bento-icon"><item.icon size={25} strokeWidth={1.8} aria-hidden /></span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                  Learn more <ArrowRight className="transition-transform group-hover:translate-x-1" size={15} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-section editorial-section">
        <div className="site-container scroll-story">
          <div className="scroll-story-media" data-reveal="left">
            <Image
              src="/assets/media/home-delivery-team.jpg"
              alt="A consulting team reviewing delivery priorities together"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/70 via-transparent to-transparent" />
            <p className="scroll-story-caption">Senior thinking stays close to delivery.</p>
          </div>
          <div className="scroll-story-copy">
            <div className="story-intro" data-reveal="right">
              <p className="eyebrow">How the work moves</p>
              <h2 className="section-title balanced mt-5">Clear decisions. Capable teams. Measurable progress.</h2>
              <p>Our engagements stay transparent and grounded in the way your organization actually operates.</p>
            </div>
            {[
              ["01", "Start with outcomes", "Define the business change, constraints, and measures before prescribing technology."],
              ["02", "Deliver in useful increments", "Create visible progress early, reduce risk, and learn from real adoption."],
              ["03", "Leave teams stronger", "Transfer knowledge, improve ways of working, and build internal confidence."],
            ].map(([number, title, body]) => (
              <article key={title} className="story-chapter" data-reveal="right">
                <span>{number}</span><Check size={23} aria-hidden />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
            <Link href="/about" className="story-link">
              How RV IT works <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="site-container">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">Built around your operating reality</p>
            <h2 className="section-title balanced mt-5">Technology expertise shaped around the work your organization does.</h2>
          </div>
          <div className="mt-14 grid border-t border-slate-300 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div key={industry} className="group flex items-center justify-between border-b border-slate-200 py-6 transition-colors hover:border-blue-500 md:px-5 md:first:pl-0" data-reveal>
                <span className="display-font text-lg font-bold text-[#081B33]">{industry}</span>
                <span className="text-xs font-extrabold text-slate-400">0{index + 1}</span>
              </div>
            ))}
          </div>
          <Link href="/industries" className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600">
            Explore industry experience <ArrowRight size={17} aria-hidden />
          </Link>
        </div>
      </section>

      <section className="dark-section py-20 text-white md:py-24">
        <div className="site-container relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end" data-reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold text-blue-100">Start with a useful conversation</p>
            <h2 className="display-font balanced mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-5xl">
              What technology challenge is slowing your organization down?
            </h2>
          </div>
          <Link href="/contactus" className="button-light shrink-0">
            Talk to our team <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
