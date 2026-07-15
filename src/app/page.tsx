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
      <section className="relative overflow-hidden bg-[#081B33] text-white">
        <Image
          src="/assets/brand/consulting-team-hero.png"
          alt="Technology consultants collaborating in a modern workspace"
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#081B33_0%,rgba(8,27,51,.96)_38%,rgba(8,27,51,.45)_72%,rgba(8,27,51,.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,27,51,.72),transparent_45%)]" />
        <div className="site-container relative flex min-h-[680px] items-center py-20 md:min-h-[740px]">
          <div className="max-w-3xl">
            <p className="eyebrow !text-cyan-300">Strategy. Engineering. Enablement.</p>
            <h1 className="display-font balanced mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Technology change that works in the real world.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              We help organizations modernize critical systems, strengthen delivery teams, and turn technology investment into lasting business capability.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contactus" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700">
                Discuss your priorities <ArrowRight size={18} aria-hidden />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-4 font-bold text-white hover:bg-white/10">
                Explore our capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="site-container grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["7+ years", "Building practical technology solutions"],
            ["Global client reach", "North America, Europe, Middle East, Asia, and Africa"],
            ["Flexible models", "Advisory, delivery, staffing, and training"],
            ["One accountable team", "From direction through implementation"],
          ].map(([value, label]) => (
            <div key={value} className="bg-white px-6 py-7">
              <p className="display-font text-xl font-extrabold text-[#081B33]">{value}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
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

          <div className="mt-16 grid border-l border-t border-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Link key={item.title} href={item.href} className="group border-b border-r border-slate-200 p-7 transition-colors hover:bg-slate-50 md:p-9">
                <item.icon className="text-blue-600" size={28} strokeWidth={1.8} aria-hidden />
                <h3 className="display-font mt-8 text-xl font-extrabold text-[#081B33]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                  Learn more <ArrowRight className="transition-transform group-hover:translate-x-1" size={15} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 md:py-32">
        <div className="site-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[520px] overflow-hidden bg-[#081B33]">
            <Image
              src="/assets/WhyChooseUs/team-2.png"
              alt="Consultants reviewing a delivery plan"
              fill
              className="object-cover opacity-90 grayscale-[20%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-sm bg-[#081B33] p-7 text-white">
              <p className="text-sm font-bold text-cyan-300">Why teams stay with us</p>
              <p className="display-font mt-3 text-2xl font-semibold leading-tight">Senior thinking stays close to delivery.</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">The way we deliver</p>
            <h2 className="section-title balanced mt-5">Clear decisions. Capable teams. Measurable progress.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We keep engagements transparent and grounded in your operating reality, with experienced practitioners involved from discovery through delivery.
            </p>
            <div className="mt-9 space-y-6">
              {[
                ["Start with outcomes", "Define the business change, constraints, and measures before prescribing technology."],
                ["Deliver in useful increments", "Create visible progress early, reduce risk, and learn from real adoption."],
                ["Leave teams stronger", "Transfer knowledge, improve ways of working, and build internal confidence."],
              ].map(([title, body]) => (
                <div key={title} className="grid grid-cols-[28px_1fr] gap-4 border-t border-slate-200 pt-5">
                  <Check className="mt-1 text-blue-600" size={20} aria-hidden />
                  <div>
                    <h3 className="font-extrabold text-[#081B33]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="mt-9 inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700">
              How RV IT works <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow">Built around your operating reality</p>
            <h2 className="section-title balanced mt-5">Technology expertise shaped around the work your organization does.</h2>
          </div>
          <div className="mt-14 grid border-t border-slate-300 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div key={industry} className="flex items-center justify-between border-b border-slate-200 py-6 md:px-5 md:first:pl-0">
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

      <section className="bg-blue-600 py-20 text-white md:py-24">
        <div className="site-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold text-blue-100">Start with a useful conversation</p>
            <h2 className="display-font balanced mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-5xl">
              What technology challenge is slowing your organization down?
            </h2>
          </div>
          <Link href="/contactus" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-4 font-extrabold text-blue-700 hover:bg-blue-50">
            Talk to our team <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
