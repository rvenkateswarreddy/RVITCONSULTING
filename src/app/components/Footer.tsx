import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import BrandLogo from "./BrandLogo";

const serviceLinks = [
  ["Digital engineering", "/services#digital-engineering"],
  ["Cloud modernization", "/services#cloud-modernization"],
  ["Data & intelligence", "/services#data-intelligence"],
  ["Marketing support", "/marketing"],
  ["Project support", "/project-support"],
];

export default function Footer() {
  return (
    <footer className="enterprise-footer">
      <div className="site-container py-12 md:py-14">
        <div className="grid gap-10 border-b border-slate-200 pb-10 lg:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <BrandLogo />
            <h2 className="display-font mt-5 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#081B33] md:text-3xl">
              Technology, learning, and delivery support built around your next business outcome.
            </h2>
            <Link href="/contactus" className="mt-6 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900">
              Start a conversation <ArrowUpRight size={18} aria-hidden />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#081B33]">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map(([label, path]) => (
                <li key={path}>
                  <Link href={path} className="text-sm text-slate-600 hover:text-blue-700">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#081B33]">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-blue-700">About us</Link></li>
              <li><Link href="/industries" className="hover:text-blue-700">Industries</Link></li>
              <li><Link href="/corporate-trainings" className="hover:text-blue-700">Learning</Link></li>
              <li><Link href="/careers" className="hover:text-blue-700">Careers</Link></li>
              <li>
                <a href="mailto:contact@rvit.co.in" className="inline-flex items-center gap-2 hover:text-blue-700">
                  <Mail size={15} aria-hidden /> contact@rvit.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} RV IT Consulting. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="hover:text-blue-700">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-blue-700">Terms</Link>
            <Link href="/cookies" className="hover:text-blue-700">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
