"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

const navItems = [
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="site-container flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="RV IT Consulting home">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-bold transition-colors ${
                  active ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="mailto:contact@rvit.co.in" className="text-sm font-semibold text-slate-600 hover:text-[#081B33]">
            contact@rvit.co.in
          </a>
          <Link
            href="/contactus"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700"
          >
            Talk to an expert <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-slate-300 text-[#081B33] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 pb-6 pt-3 lg:hidden">
          <nav className="site-container flex flex-col" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className="border-b border-slate-100 py-4 font-bold text-[#081B33]">
                {item.name}
              </Link>
            ))}
            <Link href="/contactus" className="mt-5 rounded-md bg-blue-600 px-5 py-3 text-center font-bold text-white">
              Talk to an expert
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
