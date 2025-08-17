"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Clock, Users, Award } from "lucide-react";

export default function WhyChooseUs({
  images = [
    "/assets/WhyChooseUs/team-1.png",
    "/assets/WhyChooseUs/team-2.png",
    "/assets/WhyChooseUs/team-3.png",
    "/assets/WhyChooseUs/team-1.png",
    "/assets/WhyChooseUs/team-4.png",
    "/assets/WhyChooseUs/team-2.png",
  ],
}: {
  images?: string[];
}) {
  // Ensure at least 6 images
  const gallery = [...images].slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/3 h-72 w-[40rem] translate-x-1/2 rounded-full bg-fuchsia-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            <Sparkles className="h-4 w-4" /> Why choose us
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Expertise you can feel, results you can measure
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Three decades of building, shipping, and supporting technology that scales. Our teams plug in fast and deliver outcomes—without the overhead.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Innovative Image Display */}
          <div className="relative">
            {/* Centerpiece card */}
            <HoverCard className="absolute left-1/2 top-1/2 z-20 w-56 -translate-x-1/2 -translate-y-1/2 rotate-1 shadow-xl sm:w-64">
              <MaskedImage src={gallery[0]} alt="core team" />
            </HoverCard>

            {/* Arc of supporting images */}
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0">
                <CollageItem src={gallery[1]} className="left-[4%] top-[8%] w-40 rotate-[-8deg] sm:w-52" />
                <CollageItem src={gallery[2]} className="left-[22%] top-[2%] w-40 rotate-[6deg] sm:w-52" />
                <CollageItem src={gallery[3]} className="right-[22%] bottom-[4%] w-40 rotate-[-4deg] sm:w-52" />
                <CollageItem src={gallery[4]} className="right-[5%] top-[12%] w-40 rotate-[10deg] sm:w-52" />
                <CollageItem src={gallery[5]} className="left-1/2 bottom-[6%] w-40 -translate-x-1/2 rotate-[-2deg] sm:w-52" />
              </div>
            </div>

            {/* Soft ring highlight */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-200/50 to-fuchsia-200/40 blur-2xl" />
          </div>

          {/* Reasons list */}
          <ul className="space-y-5">
            <Reason
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Reliable delivery, every sprint"
              desc="Battle-tested playbooks, clear SLAs, and proactive communication so you always know what's next."
            />
            <Reason
              icon={<Clock className="h-5 w-5" />}
              title="Fast onboarding, faster impact"
              desc="Specialists who slot into your workflow in days, not weeks—remote or on-site."
            />
            <Reason
              icon={<Users className="h-5 w-5" />}
              title="Right talent, right away"
              desc="From exec hiring to contract staffing, we bring vetted experts for your exact needs."
            />
            <Reason
              icon={<Award className="h-5 w-5" />}
              title="Quality without the drama"
              desc="Engineering fundamentals + design rigor. We ship delightful, maintainable products."
            />

            {/* Quick stats */}
            <li className="mt-6 grid grid-cols-3 gap-4">
              <Stat number="5+" label="Years" />
              <Stat number="10+" label="Countries" />
              <Stat number="98%" label="Retention" />
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700">
            Talk to our team
          </button>
        </div>
      </div>
    </section>
  );
}

// --- Small components ---

function Reason({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <li className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600">
        {icon}
      </span>
      <div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">{desc}</p>
      </div>
    </li>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
      <div className="text-2xl font-extrabold text-gray-900">{number}</div>
      <div className="text-xs font-medium uppercase tracking-wide text-gray-500">{label}</div>
    </div>
  );
}

function HoverCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ rotate: 0, scale: 1.03 }}
      initial={{ rotate: -2, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-2 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function CollageItem({ src, className = "" }: { src: string; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotate: 0, scale: 1.05 }}
      className={`absolute rounded-2xl border border-gray-200 bg-white p-2 shadow-md ${className}`}
    >
      <MaskedImage src={src} alt="gallery image" />
    </motion.div>
  );
}

function MaskedImage({ src, alt }: { src: string; alt: string }) {
  // Soft-edge mask with gradient for an airy, premium look
  return (
    <div
      className="relative h-40 w-40 overflow-hidden rounded-xl sm:h-48 sm:w-48"
      style={{
        WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 68%, transparent 100%)",
        maskImage: "radial-gradient(circle at 50% 50%, black 68%, transparent 100%)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 200px, 240px"
        className="object-cover"
        priority
        draggable={false}
      />
    </div>
  );
}
