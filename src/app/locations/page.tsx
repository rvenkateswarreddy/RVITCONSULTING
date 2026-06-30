import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Globe2 } from "lucide-react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Global Reach",
  "Explore the global locations of RV IT Consulting clients across North America, Europe, the Middle East, Asia, and Africa.",
  "/locations",
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

export default function LocationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#081B33] text-white">
        <Image
          src="/assets/brand/consulting-team-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#081B33_0%,rgba(8,27,51,.96)_52%,rgba(8,27,51,.58)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/75 via-transparent to-[#081B33]/20" />
        <div className="site-container relative flex min-h-[520px] items-center py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="eyebrow !text-cyan-300">Global reach</p>
            <h1 className="display-font balanced mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-7xl">
              Global perspective. Local context.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
              Our clients are located across North America, Europe, the Middle East, Asia,
              and Africa. We combine consistent delivery standards with respect for regional context.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F8FAFC] py-24 md:py-32">
        <Globe2
          className="pointer-events-none absolute -bottom-28 -right-24 h-[480px] w-[480px] text-blue-950/[0.025] md:h-[640px] md:w-[640px]"
          strokeWidth={0.7}
          aria-hidden
        />
        <div className="site-container relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Global delivery network</p>
            <h2 className="section-title balanced mt-5">Clients located around the world.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We work across borders with clear ownership, practical communication, and
              delivery rhythms designed for distributed teams.
            </p>
          </div>

          <dl className="mx-auto mt-14 max-w-5xl overflow-hidden border-y border-slate-300 bg-white/80 shadow-[0_24px_80px_rgba(8,27,51,0.06)] backdrop-blur-sm">
            {locationGroups.map(([region, locations]) => (
              <div
                key={region}
                className="grid gap-3 border-b border-slate-200 px-6 py-7 last:border-b-0 md:grid-cols-[190px_1fr] md:gap-10 md:px-10 md:py-8"
              >
                <dt className="flex items-center justify-center gap-3 font-extrabold text-[#081B33] md:justify-start">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" aria-hidden />
                  {region}
                </dt>
                <dd className="text-center leading-7 text-slate-600 md:text-left">
                  {locations}.
                </dd>
              </div>
            ))}
          </dl>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-5 border-l-4 border-blue-600 bg-[#081B33] px-6 py-6 text-center text-white sm:flex-row sm:text-left md:px-8">
            <p className="max-w-2xl leading-7 text-slate-200">
              Looking for support in another location? Our remote delivery model can be
              configured around your team and operating hours.
            </p>
            <Link href="/contactus" className="inline-flex shrink-0 items-center gap-2 font-extrabold text-white hover:text-cyan-300">
              Get a quote <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20 md:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Clock3 className="text-blue-600" size={30} strokeWidth={1.7} aria-hidden />
            <h2 className="section-title mt-6">Built for distributed work.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              We establish working hours, decision paths, documentation standards, and
              communication rhythms at the start of every engagement. Remote support beyond
              these markets can be arranged around the needs of the program.
            </p>
            <Link href="/contactus" className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700">
              Discuss your location needs <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white">
        <div className="site-container flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue-100">
              Start a conversation
            </p>
            <h2 className="display-font mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em]">
              Need technology capability in one of these markets?
            </h2>
          </div>
          <Link href="/contactus" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-4 font-extrabold text-blue-700 hover:bg-blue-50">
            Get a quote <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
