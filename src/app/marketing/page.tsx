import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, CheckCircle, Globe2, Megaphone, Target, Users } from "lucide-react";
import { createPageMetadata } from "../seo";
import CinematicMedia from "../components/CinematicMedia";

export const metadata = createPageMetadata(
  "Marketing Support",
  "Career and business marketing support for professionals and companies seeking stronger visibility across local and global markets.",
  "/marketing",
);

const marketGroups = [
  ["USA", "New York, Los Angeles, San Jose, Chicago, Houston"],
  ["India", "Bangalore, Mumbai, Chennai, Pune"],
  ["Middle East", "UAE, Egypt, Saudi Arabia, Iran, Iraq, Qatar, Bahrain, Turkey, Kuwait"],
  ["North America", "United States (USA), Canada, Mexico"],
  ["Far East / Asia Pacific", "Singapore, Hong Kong"],
  [
    "Europe",
    "United Kingdom, France, Germany, Denmark, Netherlands, Portugal, Austria, Luxembourg, Finland",
  ],
  ["Africa", "Nigeria, Ghana, Algeria, South Africa"],
] as const;

const candidateSupport = [
  "Resume and profile positioning",
  "LinkedIn profile improvement",
  "Technology skill positioning",
  "Local market targeting",
  "Global opportunity visibility",
  "Interview readiness",
  "Candidate personal branding",
  "Consultant profile presentation",
] as const;

const businessSupport = [
  "Brand messaging",
  "Website and service positioning",
  "Lead generation support",
  "Digital presence improvement",
  "Technology service marketing",
  "Corporate profile creation",
  "Campaign support",
  "Market communication planning",
] as const;

const process = [
  ["01", "Understand the goal", "We learn whether you are promoting a career profile, a service, a company, or a specific market objective."],
  ["02", "Improve positioning", "We refine the message, profile, service story, and proof points so the market understands the value clearly."],
  ["03", "Select target markets", "We align outreach and visibility around preferred local and international markets."],
  ["04", "Support visibility", "We help with communication, presentation, profile readiness, and next-step improvement."],
] as const;

export default function MarketingPage() {
  return (
    <>
      <section className="cinematic-hero marketing-hero">
        <CinematicMedia video="/assets/media/marketing-hero.mp4" poster="/assets/media/marketing-team.jpg" priority position="center" />
        <div className="cinematic-shade" />
        <div className="site-container cinematic-content">
          <div className="max-w-4xl" data-reveal>
            <h1 className="hero-display">
              Be understood. Be visible. <em>Be chosen.</em>
            </h1>
            <p className="hero-copy">
              RV IT helps professionals and businesses present themselves clearly across
              local and global markets, with practical positioning, profile improvement,
              and market communication support.
            </p>
            <div className="hero-actions">
              <Link href="/contactus?service=marketing-support" className="button-primary">
                Request marketing support <ArrowRight size={18} aria-hidden />
              </Link>
              <a href="#global-markets" className="button-ghost">
                View market reach
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="site-container grid md:grid-cols-3">
          {[
            ["Career visibility", "Position profiles for relevant local and international opportunities."],
            ["Business visibility", "Clarify service messaging and strengthen digital market presence."],
            ["Global reach", "Support market positioning across the USA, India, Europe, Middle East, Africa, and Asia Pacific."],
          ].map(([title, text]) => (
            <div key={title} className="border-l border-slate-200 px-6 py-8 last:border-r" data-reveal>
              <h2 className="font-extrabold text-[#081B33]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="editorial-section">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="marketing-photo lg:col-span-2" data-reveal>
            <Image src="/assets/media/marketing-presentation.jpg" alt="A business team shaping a market presentation" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1240px" />
            <p>Good marketing makes the value clear before it asks for attention.</p>
          </div>
          <article className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-7 md:p-9" data-reveal="left">
            <Users className="text-blue-600" size={30} aria-hidden />
            <p className="eyebrow mt-8">For professionals</p>
            <h2 className="section-title mt-5">Career profile marketing.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We help professionals present their experience, technology skills, and career
              goals clearly for relevant local and global market opportunities.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {candidateSupport.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 shrink-0 text-blue-600" size={17} aria-hidden />
                  <span className="text-sm font-bold leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(8,27,51,0.06)] md:p-9" data-reveal="right">
            <BriefcaseBusiness className="text-blue-600" size={30} aria-hidden />
            <p className="eyebrow mt-8">For businesses</p>
            <h2 className="section-title mt-5">Business growth marketing.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We help businesses communicate their services more professionally, improve
              digital presence, and position offers for the right audience.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {businessSupport.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 shrink-0 text-blue-600" size={17} aria-hidden />
                  <span className="text-sm font-bold leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="global-markets" className="relative overflow-hidden bg-[#F8FAFC] py-24 md:py-32">
        <Globe2
          className="pointer-events-none absolute -bottom-28 -right-24 h-[480px] w-[480px] text-blue-950/[0.025] md:h-[640px] md:w-[640px]"
          strokeWidth={0.7}
          aria-hidden
        />
        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Global market reach</p>
              <h2 className="section-title balanced mt-5">Support across local and international markets.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We help professionals and businesses improve visibility in preferred markets.
              Market availability, response, and opportunity fit may vary by region,
              industry, and profile strength.
            </p>
          </div>

          <dl className="mt-14 overflow-hidden border-y border-slate-300 bg-white/85 shadow-[0_24px_80px_rgba(8,27,51,0.06)] backdrop-blur-sm">
            {marketGroups.map(([region, markets]) => (
              <div
                key={region}
                className="grid gap-3 border-b border-slate-200 px-6 py-7 last:border-b-0 md:grid-cols-[220px_1fr] md:gap-10 md:px-10 md:py-8"
                data-reveal
              >
                <dt className="flex items-center gap-3 font-extrabold text-[#081B33]">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" aria-hidden />
                  {region}
                </dt>
                <dd className="leading-7 text-slate-600">{markets}.</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="editorial-section">
        <div className="site-container grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <Target className="text-blue-600" size={32} aria-hidden />
            <p className="eyebrow mt-8">How support works</p>
            <h2 className="section-title mt-5">Clear positioning before outreach.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Good marketing starts with clarity. We help shape the message, audience, and
              market direction before supporting visibility.
            </p>
          </div>
          <div className="grid gap-4">
            {process.map(([number, title, text]) => (
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

      <section className="dark-section py-20 text-white">
        <div className="site-container relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <Megaphone className="text-blue-100" size={32} aria-hidden />
            <h2 className="display-font mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em]">
              Ready to improve your market visibility?
            </h2>
          </div>
          <Link href="/contactus?service=marketing-support" className="button-light shrink-0">
            Start marketing support <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
