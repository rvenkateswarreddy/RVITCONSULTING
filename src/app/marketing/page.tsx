import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle, Globe2, Megaphone, Target, Users } from "lucide-react";
import { createPageMetadata } from "../seo";

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
      <section className="relative overflow-hidden bg-[#081B33] text-white">
        <Image
          src="/assets/brand/consulting-team-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#081B33_0%,rgba(8,27,51,.96)_48%,rgba(8,27,51,.58)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/75 via-transparent to-[#081B33]/20" />
        <div className="site-container relative flex min-h-[560px] items-center py-24 md:py-32">
          <div className="max-w-5xl">
            <p className="eyebrow !text-cyan-300">Career and business marketing</p>
            <h1 className="display-font balanced mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-7xl">
              Improve visibility in the markets that matter.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
              RV IT helps professionals and businesses present themselves clearly across
              local and global markets, with practical positioning, profile improvement,
              and market communication support.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contactus?service=marketing-support" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700">
                Request marketing support <ArrowRight size={18} aria-hidden />
              </Link>
              <a href="#global-markets" className="inline-flex items-center justify-center rounded-md border border-white/35 px-6 py-4 font-bold text-white hover:bg-white/10">
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
            <div key={title} className="border-l border-slate-200 px-6 py-8 last:border-r">
              <h2 className="font-extrabold text-[#081B33]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <article className="border border-slate-200 bg-[#F8FAFC] p-7 md:p-9">
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

          <article className="border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(8,27,51,0.06)] md:p-9">
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

      <section className="py-24 md:py-28">
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
              <div key={title} className="grid gap-5 border border-slate-200 bg-white p-6 md:grid-cols-[70px_1fr]">
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

      <section className="bg-blue-600 py-20 text-white">
        <div className="site-container flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <Megaphone className="text-blue-100" size={32} aria-hidden />
            <h2 className="display-font mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em]">
              Ready to improve your market visibility?
            </h2>
          </div>
          <Link href="/contactus?service=marketing-support" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-4 font-extrabold text-blue-700 hover:bg-blue-50">
            Start marketing support <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
