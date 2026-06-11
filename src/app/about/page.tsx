import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "About",
  "Learn how RV IT Consulting combines senior technology thinking with practical delivery and lasting capability.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#081B33] text-white">
        <Image
          src="/assets/WhyChooseUs/team-1.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#081B33_0%,rgba(8,27,51,.95)_48%,rgba(8,27,51,.52)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/75 via-transparent to-[#081B33]/20" />
        <div className="site-container relative flex min-h-[500px] items-center py-24 md:py-32">
          <div className="max-w-5xl">
            <p className="eyebrow !text-cyan-300">About RV IT</p>
            <h1 className="display-font balanced mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-7xl">Built for organizations that need progress, not theatre.</h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">For more than seven years, RV IT Consulting has helped teams solve practical technology challenges across strategy, engineering, talent, and enablement.</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="site-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Our point of view</p>
            <h2 className="section-title mt-5">Technology only creates value when people can use, operate, and improve it.</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              <p>That is why our work goes beyond implementation. We align technology decisions to business priorities, involve the people closest to the work, and design for a sustainable operating reality.</p>
              <p>Our consultants bring focused expertise without losing sight of the whole system: the product, platform, process, team, and customer experience around it.</p>
            </div>
          </div>
          <div className="relative min-h-[560px] overflow-hidden">
            <Image src="/assets/WhyChooseUs/team-1.png" alt="RV IT consultants working together" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-x-0 bottom-0 bg-[#081B33] p-7 text-white"><p className="display-font text-2xl font-semibold">Independent thinking. Shared accountability.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#081B33] py-24 text-white md:py-28">
        <div className="site-container">
          <p className="eyebrow !text-cyan-300">What clients can expect</p>
          <div className="mt-12 grid gap-px bg-white/20 md:grid-cols-2">
            {[
              ["Clarity before complexity", "We make choices and trade-offs understandable before adding tools or process."],
              ["Experienced people", "Senior practitioners stay engaged with the work and the decisions that shape it."],
              ["Open collaboration", "Your team has visibility into progress, risks, reasoning, and next steps."],
              ["Capability that lasts", "We document, coach, and transfer knowledge so progress continues after we leave."],
            ].map(([title, body]) => <div key={title} className="bg-[#081B33] p-8 md:p-10"><Check className="text-cyan-300" aria-hidden /><h3 className="display-font mt-8 text-2xl font-bold">{title}</h3><p className="mt-3 max-w-lg leading-7 text-slate-300">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="site-container grid gap-8 md:grid-cols-3">
          {[["7+ years", "of focused technology consulting and delivery"], ["Multi-region", "experience supporting teams across markets and time zones"], ["End-to-end", "support from strategy and staffing through delivery and training"]].map(([value, label]) => <div key={value} className="border-t-2 border-blue-600 pt-6"><p className="display-font text-4xl font-semibold tracking-[-0.04em] text-[#081B33]">{value}</p><p className="mt-3 max-w-xs leading-6 text-slate-600">{label}</p></div>)}
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white">
        <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="display-font text-4xl font-semibold tracking-[-0.04em]">Bring us the challenge you are trying to untangle.</h2>
          <Link href="/contactus" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-4 font-extrabold text-blue-700">Meet our team <ArrowRight size={18} aria-hidden /></Link>
        </div>
      </section>
    </>
  );
}
