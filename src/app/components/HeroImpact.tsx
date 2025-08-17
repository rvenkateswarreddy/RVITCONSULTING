"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TABS = [
  { title: "Global Recruitment", heading: "Hiring talent across USA, Canada, Luxembourg and more.", sub: "We connect you with the right people, wherever they are.", image: "/assets/Herosection/Global.webp" },
  { title: "Project Support", heading: "Speed up your projects with skilled experts.", sub: "Flexible team support with real results.", image: "/assets/Herosection/support.webp" },
  { title: "Training Programs", heading: "Help your team learn in-demand skills.", sub: "Online or on-site — we train your way.", image: "/assets/Herosection/trainings.webp" },
  { title: "App & Web Development", heading: "We build apps and websites that stand out.", sub: "From idea to launch — we take care of it all.", image: "/assets/Herosection/web.webp" },
] as const;

const DURATION_MS = 6000; // each slide
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroImpact() {
  const [index, setIndex] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const reducedMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const nextIndex = useMemo(() => (index + 1) % TABS.length, [index]);

  // Auto-rotate using a timer (no rAF race conditions)
  useEffect(() => {
    if (reducedMotion || isPaused) return;
    timerRef.current && clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIndex((i) => (i + 1) % TABS.length), DURATION_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [index, isPaused, reducedMotion]);

  // Pause/resume on tab visibility
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const handleTabClick = (i: number) => {
    setIndex(i);
  };

  return (
    <section
      className="relative w-full h-[82vh] min-h-[560px] overflow-hidden text-white bg-[#060A2B]"
      aria-label="Hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Right angled media panel */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[62%] md:w-[58%] lg:w-[55%]">
        <div className="absolute inset-0 [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={TABS[index].image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute inset-0"
            >
              <Image
                src={TABS[index].image}
                alt="Background"
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 1024px) 60vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-700/60 via-purple-700/40 to-pink-600/40 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Preload the next image */}
      <span aria-hidden className="sr-only">
        <Image src={TABS[nextIndex].image} alt="" width={1} height={1} loading="lazy" />
      </span>

      {/* Left content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={TABS[index].heading}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-4xl md:text-6xl/[1.05] font-extrabold tracking-tight"
            >
              {TABS[index].heading}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={TABS[index].sub}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="mt-5 text-lg md:text-2xl text-white/90 max-w-2xl"
            >
              {TABS[index].sub}
            </motion.p>
          </AnimatePresence>

          <div className="mt-8">
            <Link href="/contactus" prefetch>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3 font-semibold text-black shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-300 focus-visible:ring-offset-[#060A2B]"
              >
                Contact Us →
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Tabs + animated underline (progress restarts each slide via key=index) */}
        <nav className="mt-14 w-full" aria-label="Hero tabs">
          <ul className="flex flex-wrap gap-6 md:gap-10 text-white/70">
            {TABS.map((t, i) => (
              <li key={t.title}>
                <button
                  onClick={() => handleTabClick(i)}
                  className="relative pb-2 text-sm md:text-base font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                  aria-current={index === i ? "page" : undefined}
                >
                  <span className={index === i ? "text-white" : undefined}>{t.title}</span>
                  {index === i && (
                    <motion.span
                      key={index} // <- resets the animation every slide
                      className="absolute left-0 bottom-0 h-[2px] w-full rounded bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: DURATION_MS / 1000, ease: EASE }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Deep navy base + soft diagonal tint to mirror the reference */}
      <div className="absolute inset-0 -z-10 bg-[#060A2B]" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-[70%] [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)] bg-gradient-to-br from-indigo-900/40 via-fuchsia-900/20 to-pink-900/20"
      />
    </section>
  );
}
