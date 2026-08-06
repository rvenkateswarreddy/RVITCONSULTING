"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

const navItems = [
  { name: "Services", path: "/services" },
  { name: "Project Support", path: "/project-support" },
  { name: "Marketing", path: "/marketing" },
  { name: "Industries", path: "/industries" },
  { name: "Learning", path: "/corporate-trainings" },
  { name: "Careers", path: "/careers" },
  { name: "Company", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-container flex h-[78px] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="RV IT Consulting home">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${
                  active ? "is-active" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <Link
            href="/contactus"
            className="nav-cta"
          >
            Talk to an expert <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          data-testid="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      </header>

      <div id="mobile-navigation" className={`mobile-navigation ${open ? "is-open" : ""}`} data-open={open ? "true" : "false"}>
        <div className="site-container grid min-h-[calc(100dvh-78px)] content-between gap-10 py-8">
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Link key={item.path} href={item.path} tabIndex={open ? 0 : -1}>
                <span>0{index + 1}</span>{item.name}<ArrowRight size={21} aria-hidden />
              </Link>
            ))}
          </nav>
          <div className="mobile-nav-footer">
            <a href="mailto:contact@rvit.co.in" tabIndex={open ? 0 : -1}><Mail size={17} aria-hidden /> contact@rvit.co.in</a>
            <Link href="/contactus" className="mobile-nav-cta" tabIndex={open ? 0 : -1}>Start a conversation <ArrowUpRight size={18} aria-hidden /></Link>
          </div>
        </div>
      </div>
    </>
  );
}
