import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import BrandLogo from "./BrandLogo";

const serviceLinks = [
  ["Digital engineering", "/services#digital-engineering"],
  ["Cloud modernization", "/services#cloud-modernization"],
  ["Data & intelligence", "/services#data-intelligence"],
  ["Security & resilience", "/services#security-resilience"],
  ["Talent & delivery", "/services#talent-delivery"],
];

export default function Footer() {
  return (
    <footer className="bg-[#081B33] text-white">
      <div className="site-container py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandLogo inverse />
            <h2 className="display-font mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
              Build the technology capability your next chapter needs.
            </h2>
            <Link href="/contactus" className="mt-8 inline-flex items-center gap-2 font-bold text-white hover:text-cyan-300">
              Start a conversation <ArrowUpRight size={18} aria-hidden />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-400">Capabilities</h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map(([label, path]) => (
                <li key={path}>
                  <Link href={path} className="text-sm text-slate-200 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-400">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
              <li><Link href="/locations" className="hover:text-white">Global reach</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li>
                <a href="mailto:contact@rvit.co.in" className="inline-flex items-center gap-2 hover:text-white">
                  <Mail size={15} aria-hidden /> contact@rvit.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} RV IT Consulting. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
