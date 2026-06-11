import Link from "next/link";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Cookie Notice",
  "Information about cookies and similar technologies used by the RV IT Consulting website.",
  "/cookies",
);

export default function CookieNoticePage() {
  return (
    <>
      <section className="bg-[#081B33] py-20 text-white">
        <div className="site-container max-w-4xl">
          <p className="eyebrow !text-cyan-300">Legal</p>
          <h1 className="display-font mt-5 text-5xl font-semibold tracking-[-0.05em]">Cookie notice</h1>
          <p className="mt-5 text-slate-300">Effective June 11, 2026</p>
        </div>
      </section>
      <section className="py-20">
        <div className="site-container max-w-4xl space-y-10">
          <section>
            <h2 className="display-font text-2xl font-bold text-[#081B33]">Current use</h2>
            <p className="mt-4 leading-7 text-slate-600">
              RV IT Consulting does not currently use advertising cookies or cross-site
              behavioral tracking on this website. Our hosting infrastructure may use
              strictly necessary technologies and security logs to deliver pages, prevent
              abuse, and maintain service reliability.
            </p>
          </section>
          <section className="border-t border-slate-200 pt-8">
            <h2 className="display-font text-2xl font-bold text-[#081B33]">Future changes</h2>
            <p className="mt-4 leading-7 text-slate-600">
              If analytics or optional cookies are introduced, this notice and any required
              consent controls will be updated before those technologies are enabled.
            </p>
          </section>
          <section className="border-t border-slate-200 pt-8">
            <h2 className="display-font text-2xl font-bold text-[#081B33]">Questions</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Contact <a className="font-bold text-blue-600" href="mailto:contact@rvit.co.in">contact@rvit.co.in</a> or review our <Link className="font-bold text-blue-600" href="/privacy-policy">privacy policy</Link>.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
