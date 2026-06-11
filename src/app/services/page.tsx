import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Blocks, Cloud, GraduationCap, ShieldCheck, Users } from "lucide-react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Technology Consulting Services",
  "Explore RV IT Consulting services across digital engineering, cloud, data, cybersecurity, technology talent, and workforce enablement.",
  "/services",
);

const services = [
  ["Digital engineering", "Design and build dependable digital products, enterprise applications, integrations, and platforms.", Blocks, "digital-engineering", ["Product and platform engineering", "Application modernization", "Experience design", "Quality engineering"]],
  ["Cloud modernization", "Move from fragmented infrastructure to secure, scalable cloud platforms and operating practices.", Cloud, "cloud-modernization", ["Cloud strategy and architecture", "Migration and modernization", "Platform engineering", "FinOps and operations"]],
  ["Data & intelligence", "Create trusted data foundations and turn information into decisions people can act on.", BarChart3, "data-intelligence", ["Data platforms and pipelines", "Business intelligence", "Advanced analytics", "Responsible AI enablement"]],
  ["Security & resilience", "Reduce technology risk with security built into architecture, delivery, and operations.", ShieldCheck, "security-resilience", ["Security assessments", "Cloud and application security", "Governance and compliance", "Resilience planning"]],
  ["Talent & delivery teams", "Add experienced specialists or form outcome-oriented teams around your most important work.", Users, "talent-delivery", ["Specialist augmentation", "Managed delivery teams", "Technical recruitment", "Delivery leadership"]],
  ["Training & enablement", "Help teams adopt modern technologies and practices through applied, role-relevant learning.", GraduationCap, "training-enablement", ["Technical academies", "Custom workshops", "Leadership enablement", "On-the-job coaching"]],
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#081B33] text-white">
        <Image
          src="/assets/WhyChooseUs/team-2.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#081B33_0%,rgba(8,27,51,.95)_48%,rgba(8,27,51,.58)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/70 via-transparent to-[#081B33]/20" />
        <div className="site-container relative grid min-h-[500px] gap-10 py-24 lg:grid-cols-[1.25fr_.75fr] lg:items-end md:py-32">
          <div>
            <p className="eyebrow !text-cyan-300">Capabilities</p>
            <h1 className="display-font balanced mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-7xl">
              Expertise that connects strategy to working technology.
            </h1>
          </div>
          <p className="text-lg leading-8 text-slate-300">Engage us for a focused challenge or bring capabilities together across a broader transformation.</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="site-container">
          <div className="border-t border-slate-300">
            {services.map(([title, body, Icon, id, features], index) => (
              <article id={id} key={title} className="scroll-mt-24 grid gap-8 border-b border-slate-200 py-10 lg:grid-cols-[80px_1fr_1fr] lg:py-14">
                <div className="text-sm font-extrabold text-slate-400">0{index + 1}</div>
                <div>
                  <Icon className="text-blue-600" size={30} strokeWidth={1.7} aria-hidden />
                  <h2 className="display-font mt-7 text-3xl font-bold tracking-[-0.035em] text-[#081B33]">{title}</h2>
                  <p className="mt-4 max-w-xl leading-7 text-slate-600">{body}</p>
                  <Link href={`/contactus?service=${id}`} className="mt-7 inline-flex items-center gap-2 font-bold text-blue-600">Discuss this capability <ArrowRight size={17} aria-hidden /></Link>
                </div>
                <ul className="grid content-start gap-3 sm:grid-cols-2 lg:pt-14">
                  {features.map((feature) => <li key={feature} className="border-l-2 border-cyan-500 py-1 pl-4 text-sm font-semibold text-slate-700">{feature}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="site-container grid gap-10 lg:grid-cols-3">
          <div><p className="eyebrow">Engagement models</p><h2 className="section-title mt-5">The right shape for the work.</h2></div>
          {[
            ["Advisory", "Senior guidance for strategy, architecture, operating models, and critical decisions."],
            ["Delivery", "Accountable teams that take defined outcomes from discovery through implementation."],
            ["Augmentation", "Specialists who integrate with your teams and add capability where it matters."],
          ].map(([title, body]) => <div key={title} className="border-t-2 border-[#081B33] pt-6"><h3 className="display-font text-xl font-extrabold text-[#081B33]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></div>)}
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white">
        <div className="site-container flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="display-font max-w-3xl text-4xl font-semibold tracking-[-0.04em]">Let&apos;s define the smallest useful first step.</h2>
          <Link href="/contactus" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 font-extrabold text-blue-700">Discuss your needs <ArrowRight size={18} aria-hidden /></Link>
        </div>
      </section>
    </>
  );
}
