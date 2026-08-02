"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const consentKey = "rvit-cookie-preference";

export default function ExperienceLayer() {
  const [cookieOpen, setCookieOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("experience-ready");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -9%", threshold: 0.12 },
      );
      revealItems.forEach((item) => observer.observe(item));

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const progress = available > 0 ? Math.min(window.scrollY / available, 1) : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCookieOpen(!window.localStorage.getItem(consentKey));
    }, 900);
    return () => window.clearTimeout(timer);
  }, []);

  function savePreference(value: "all" | "essential") {
    window.localStorage.setItem(consentKey, value);
    setCookieOpen(false);
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden />
      {cookieOpen && (
        <aside className="cookie-card" aria-label="Cookie preferences">
          <button className="cookie-close" type="button" onClick={() => savePreference("essential")} aria-label="Close cookie notice">
            <X size={17} aria-hidden />
          </button>
          <div className="cookie-icon"><Cookie size={20} aria-hidden /></div>
          <div>
            <p className="cookie-title">A simple, respectful cookie choice.</p>
            <p className="cookie-copy">We use essential storage for site preferences. Optional analytics will only run when enabled.</p>
          </div>
          <div className="cookie-actions">
            <button type="button" onClick={() => savePreference("all")}>Allow analytics</button>
            <button type="button" className="cookie-secondary" onClick={() => savePreference("essential")}>Essential only</button>
            <Link href="/cookies">Read notice</Link>
          </div>
        </aside>
      )}
    </>
  );
}
