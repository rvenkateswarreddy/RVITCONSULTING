import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Globe2 } from "lucide-react";
import { createPageMetadata } from "../seo";
import CinematicMedia from "../components/CinematicMedia";

export const metadata = createPageMetadata(
  "About",
  "Learn how RV IT Consulting combines senior technology thinking with practical delivery and lasting capability.",
  "/about",
);

const locationGroups = [
  ["USA", "New York, Los Angeles, San Jose, Chicago, Houston"],
  ["India", "Bangalore, Mumbai, Chennai, Pune"],
  ["Middle East", "UAE, Egypt, Saudi Arabia, Iran, Iraq, Qatar, Bahrain, Turkey, Kuwait"],
  ["North America", "United States (USA), Canada, Mexico"],
  ["Far East", "Singapore, Hong Kong"],
  [
    "Europe",
    "United Kingdom, France, Germany, Denmark, Netherlands, Portugal, Austria, Luxembourg, Finland",
  ],
  ["Africa", "Nigeria, Ghana, Algeria, South Africa"],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="cinematic-hero about-photo-hero">
        <CinematicMedia video="/assets/media/about-hero.mp4" poster="/assets/media/about-consultants.jpg" priority position="center" />
        <div className="cinematic-shade" />
        <div className="site-container cinematic-content">
          <div className="max-w-5xl" data-reveal>
            <h1 className="hero-display">Progress without the <em>theatre.</em></h1>
            <p className="hero-copy">For more than seven years, RV IT Consulting has helped teams solve practical technology challenges across strategy, engineering, talent, and enablement.</p>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="site-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="left">
            <p className="eyebrow">What guides our decisions</p>
            <h2 className="section-title mt-5">Technology only creates value when people can use, operate, and improve it.</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              <p>That is why our work goes beyond implementation. We align technology decisions to business priorities, involve the people closest to the work, and design for a sustainable operating reality.</p>
              <p>Our consultants bring focused expertise without losing sight of the whole system: the product, platform, process, team, and customer experience around it.</p>
            </div>
          </div>
          <div className="media-panel" data-reveal="right">
            <Image src="/assets/media/about-workshop.jpg" alt="Consultants working through ideas in a team workshop" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="media-caption"><p className="display-font text-2xl font-semibold">Independent thinking. Shared accountability.</p></div>
          </div>
        </div>
      </section>

      <section className="dark-section py-24 text-white md:py-28">
        <div className="site-container relative">
          <p className="eyebrow !text-cyan-300">What clients can expect from us</p>
          <div className="mt-12 grid gap-px bg-white/20 md:grid-cols-2">
            {[
              ["Clarity before complexity", "We make choices and trade-offs understandable before adding tools or process."],
              ["Experienced people", "Senior practitioners stay engaged with the work and the decisions that shape it."],
              ["Open collaboration", "Your team has visibility into progress, risks, reasoning, and next steps."],
              ["Capability that lasts", "We document, coach, and transfer knowledge so progress continues after we leave."],
            ].map(([title, body]) => <div key={title} className="bg-[#081B33] p-8 md:p-10" data-reveal><Check className="text-cyan-300" aria-hidden /><h3 className="display-font mt-8 text-2xl font-bold">{title}</h3><p className="mt-3 max-w-lg leading-7 text-slate-300">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="site-container grid gap-8 md:grid-cols-3" data-reveal>
          {[["7+ years", "of focused technology consulting and delivery"], ["Multi-region", "client experience across North America, Europe, the Middle East, Asia, and Africa"], ["End-to-end", "support from strategy and staffing through delivery and training"]].map(([value, label]) => <div key={value} className="border-t-2 border-blue-600 pt-6"><p className="display-font text-4xl font-semibold tracking-[-0.04em] text-[#081B33]">{value}</p><p className="mt-3 max-w-xs leading-6 text-slate-600">{label}</p></div>)}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F8FAFC] py-24 md:py-32">
        <Globe2
          className="pointer-events-none absolute -bottom-28 -right-24 h-[480px] w-[480px] text-blue-950/[0.025] md:h-[640px] md:w-[640px]"
          strokeWidth={0.7}
          aria-hidden
        />
        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Client locations</p>
              <h2 className="section-title balanced mt-5">Clients located around the world.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We work across borders with clear ownership, practical communication, and
              delivery rhythms designed for distributed teams.
            </p>
          </div>

          <dl className="mt-14 overflow-hidden border-y border-slate-300 bg-white/85 shadow-[0_24px_80px_rgba(8,27,51,0.06)] backdrop-blur-sm">
            {locationGroups.map(([region, locations]) => (
              <div
                key={region}
                className="grid gap-3 border-b border-slate-200 px-6 py-7 last:border-b-0 md:grid-cols-[190px_1fr] md:gap-10 md:px-10 md:py-8"
                data-reveal
              >
                <dt className="flex items-center gap-3 font-extrabold text-[#081B33]">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" aria-hidden />
                  {region}
                </dt>
                <dd className="leading-7 text-slate-600">{locations}.</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white">
        <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="display-font text-4xl font-semibold tracking-[-0.04em]">Bring us the challenge you are trying to untangle.</h2>
          <Link href="/contactus" className="button-light shrink-0">Meet our team <ArrowRight size={18} aria-hidden /></Link>
        </div>
      </section>
    </>
  );
}
