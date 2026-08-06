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

      <section className="marketing-scroll-stage" aria-label="Marketing support stories">
        <div className="marketing-scroll-media" aria-hidden="true">
          <Image src="/assets/media/marketing-presentation.jpg" alt="" fill className="object-cover" sizes="100vw" />
          <div className="marketing-scroll-shade" />
          <p>Good marketing makes value clear before it asks for attention.</p>
        </div>

        <div className="site-container marketing-scroll-track">
          <article className="marketing-story marketing-story-intro" data-reveal>
            <div className="marketing-story-panel">
              <Megaphone size={29} aria-hidden />
              <p className="marketing-story-label">A clearer market story</p>
              <h2>Turn capability into a message people understand.</h2>
              <p>
                Strong visibility starts before campaigns and outreach. We clarify the
                audience, the offer, and the proof so every next step has a stronger foundation.
              </p>
            </div>
          </article>

          <article className="marketing-story" data-reveal>
            <div className="marketing-story-panel">
              <Users size={29} aria-hidden />
              <p className="marketing-story-label">For professionals</p>
              <h2>Career profile marketing.</h2>
              <p>Present your experience, technology skills, and career direction clearly for relevant local and international opportunities.</p>
              <div className="marketing-story-list">
                {candidateSupport.map((item) => (
                  <span key={item}><CheckCircle size={16} aria-hidden />{item}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="marketing-story" data-reveal>
            <div className="marketing-story-panel">
              <BriefcaseBusiness size={29} aria-hidden />
              <p className="marketing-story-label">For businesses</p>
              <h2>Business growth marketing.</h2>
              <p>Communicate services professionally, strengthen digital presence, and position each offer for the audience it is built to serve.</p>
              <div className="marketing-story-list">
                {businessSupport.map((item) => (
                  <span key={item}><CheckCircle size={16} aria-hidden />{item}</span>
                ))}
              </div>
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
