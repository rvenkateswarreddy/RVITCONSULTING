import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "../seo";
import CinematicMedia from "../components/CinematicMedia";

export const metadata = createPageMetadata(
  "Industries",
  "Industry-aware technology consulting for financial services, healthcare, retail, education, and technology organizations.",
  "/industries",
);

const industries = [
  ["Financial services", "Modernize secure customer journeys, data platforms, risk processes, and operational systems.", "/assets/Industries/Finance.webp", "Secure modernization"],
  ["Healthcare", "Improve care operations and digital experiences while respecting privacy, resilience, and regulation.", "/assets/Industries/Healthcare.webp", "Connected care"],
  ["Retail & commerce", "Build responsive commerce, data, and supply-chain capabilities around changing customer expectations.", "/assets/Industries/Retail.webp", "Customer-led platforms"],
  ["Education", "Create accessible learning platforms, institutional systems, and better digital services for learners and staff.", "/assets/Industries/Education.webp", "Digital learning"],
] as const;

export default function IndustriesPage() {
  return (
    <>
      <section className="industry-photo-hero text-white">
        <CinematicMedia image="/assets/Industries/Finance.webp" alt="Financial services team at work" priority position="center" className="industry-hero-video" />
        <div className="industry-video-shade" />
        <div className="site-container industry-hero-grid">
          <div className="max-w-3xl" data-reveal>
            <h1 className="hero-display">Context changes <em>everything.</em></h1>
            <p className="hero-copy">We combine technology depth with respect for the operating, regulatory, and customer realities of each sector.</p>
          </div>
          <div className="industry-mosaic" aria-label="Industries served" data-reveal="right">
            {industries.map(([title, , image], index) => (
              <figure key={title} className={`industry-mosaic-item item-${index + 1}`}>
                <Image src={image} alt={`${title} industry`} fill className="object-cover" sizes="(max-width: 900px) 50vw, 25vw" />
                <figcaption>{title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="site-container space-y-20">
          {industries.map(([title, body, image, label], index) => (
            <article key={title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal>
              <div className={`media-panel min-h-[400px] ${index % 2 ? "lg:order-2" : ""}`}>
                <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/60 to-transparent" />
                <p className="absolute bottom-6 left-6 text-xs font-extrabold uppercase tracking-[0.14em] text-white">{label}</p>
              </div>
              <div className={index % 2 ? "lg:order-1" : ""}>
                <span className="text-sm font-extrabold text-blue-600">0{index + 1}</span>
                <h2 className="section-title mt-5">{title}</h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{body}</p>
                <Link href="/contactus" className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600">Discuss your priorities <ArrowRight size={17} aria-hidden /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="soft-section py-20">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center" data-reveal>
          <h2 className="section-title">Your sector is not a template.</h2>
          <p className="text-lg leading-8 text-slate-600">Our first job is to understand the economics, constraints, users, and systems already in play. That context shapes the roadmap, team, architecture, and pace of delivery.</p>
        </div>
      </section>
    </>
  );
}
