"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";

const offerings = [
  { title: "Digital engineering", copy: "Web, mobile, and enterprise applications. Built around the way your business actually works.", image: "/assets/media/services-developers.jpg", href: "/services#digital-engineering" },
  { title: "Cloud & data", copy: "Modern infrastructure, dependable data pipelines, and clearer information for better decisions.", image: "/assets/media/technical-support-unbranded.webp", href: "/services#cloud-modernization" },
  { title: "Project support", copy: "Experienced specialists working alongside your team to resolve blockers and move delivery forward.", image: "/assets/media/home-delivery-team.jpg", href: "/project-support" },
  { title: "Corporate learning", copy: "Practical training that gives your teams the confidence to put new skills to work.", image: "/assets/media/training-seminar.jpg", href: "/corporate-trainings" },
  { title: "Marketing", copy: "Creative and technical support to help your business reach the people who matter.", image: "/assets/media/marketing-team.jpg", href: "/marketing" },
];

export default function HomeShowcase({ mode }: { mode: "film" | "services" }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (mode !== "film") return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (preference.matches) video.current?.pause();
      else void video.current?.play().catch(() => undefined);
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, [mode]);

  if (mode === "film") return (
    <div className="rv-film">
      <video ref={video} muted loop playsInline preload="metadata" poster="/assets/media/home-collaboration-poster.png" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label="People collaborating in an office">
        <source src="/assets/media/home-collaboration.mp4" type="video/mp4" />
      </video>
      <div className="rv-film-word" aria-hidden>Forward,<br /><em>together.</em></div>
      <a href="#us-recruitment" className="rv-film-recruitment"><span>USA IT recruitment</span><ArrowUpRight size={25} aria-hidden /></a>
      <button type="button" className="rv-film-control" onClick={() => {
        if (video.current?.paused) void video.current.play().catch(() => undefined);
        else video.current?.pause();
      }} aria-label={playing ? "Pause background video" : "Play background video"}>
        {playing ? <Pause size={16} aria-hidden /> : <Play size={16} aria-hidden />}
      </button>
    </div>
  );

  return (
    <div className="rv-service-browser">
      <div className="rv-service-preview" aria-hidden>
        {offerings.map((item, index) => <Image key={item.title} src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 40vw" className={index === active ? "is-active" : ""} />)}
        <span>{offerings[active].title}</span>
      </div>
      <div className="rv-service-rows">
        {offerings.map((item, index) => (
          <div className={active === index ? "rv-service-row is-active" : "rv-service-row"} key={item.title}>
            <button type="button" aria-expanded={active === index} aria-controls={`service-content-${index}`} onClick={() => setActive(index)}>
              {item.title}<span aria-hidden>{active === index ? "−" : "+"}</span>
            </button>
            <div id={`service-content-${index}`} hidden={active !== index}>
              <p>{item.copy}</p>
              <Link href={item.href}>Explore {item.title.toLowerCase()} <ArrowUpRight size={16} aria-hidden /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
