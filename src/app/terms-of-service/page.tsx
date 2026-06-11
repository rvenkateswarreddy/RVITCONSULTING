import Link from "next/link";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Website Terms",
  "Terms governing access to and use of the RV IT Consulting website.",
  "/terms-of-service",
);

const sections = [
  ["Website use", "You may use this website for lawful business and informational purposes. You must not interfere with its operation, attempt unauthorized access, submit malicious content, or use automated methods that place unreasonable load on the service."],
  ["Information, not professional advice", "Website content is general information and does not constitute a consulting recommendation, contractual commitment, warranty, or guarantee of a particular result. A consulting engagement begins only under a written agreement signed by the relevant parties."],
  ["Intellectual property", "Unless otherwise stated, the website design, copy, branding, and original materials belong to RV IT Consulting or its licensors. You may not reproduce or commercially reuse them without permission."],
  ["Submissions", "You are responsible for ensuring that information and files you submit are accurate, lawful, and do not violate another party's rights. Career submissions are considered only for legitimate recruitment purposes and do not guarantee employment or a response."],
  ["Third-party services", "The website may rely on or link to third-party services. Those services operate under their own terms and policies, and RV IT Consulting is not responsible for third-party content or availability."],
  ["Availability and liability", "We work to keep the website accurate and available but do not promise uninterrupted or error-free operation. To the extent permitted by applicable law, RV IT Consulting is not liable for indirect or consequential loss arising solely from use of this public website."],
  ["Changes", "We may update the website and these terms as our services or legal obligations change. The effective date shown on this page identifies the current version."],
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#081B33] py-20 text-white">
        <div className="site-container max-w-4xl">
          <p className="eyebrow !text-cyan-300">Legal</p>
          <h1 className="display-font mt-5 text-5xl font-semibold tracking-[-0.05em]">Website terms</h1>
          <p className="mt-5 text-slate-300">Effective June 11, 2026</p>
        </div>
      </section>
      <section className="py-20">
        <div className="site-container max-w-4xl">
          <p className="text-lg leading-8 text-slate-600">
            These terms govern use of rvit.co.in. Client services are governed by the
            applicable proposal, statement of work, or services agreement.
          </p>
          <div className="mt-12 divide-y divide-slate-200 border-t border-slate-300">
            {sections.map(([title, body]) => (
              <section key={title} className="py-8">
                <h2 className="display-font text-2xl font-bold text-[#081B33]">{title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{body}</p>
              </section>
            ))}
          </div>
          <p className="mt-8 bg-slate-50 p-6 text-slate-600">
            Questions can be sent to <a className="font-bold text-blue-600" href="mailto:contact@rvit.co.in">contact@rvit.co.in</a> or through the <Link className="font-bold text-blue-600" href="/contactus">contact page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
