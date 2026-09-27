import Link from "next/link";
import PageIntro from "../components/PageIntro";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Cookie Notice",
  "Information about cookies and similar technologies used by the RV IT Consulting website.",
  "/cookies",
);

export default function CookieNoticePage() {
  return (
    <div className="rv-interior rv-legal">
      <PageIntro
        title="Cookie"
        emphasis="notice."
        description="Effective June 11, 2026"
        variant="compact"
      />
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
    </div>
  );
}
