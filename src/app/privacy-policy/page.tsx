import Link from "next/link";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "How RV IT Consulting handles website enquiries, career applications, and technical service data.",
  "/privacy-policy",
);

const sections = [
  ["Information we collect", "When you contact us, we collect the details you submit, such as your name, work email, phone number, company, service interest, and message. When you submit a career profile, we collect your name, email, area of interest, and resume. Our hosting and security providers may also process basic technical data such as IP address, browser information, timestamps, and request logs."],
  ["How we use information", "We use submitted information to respond to enquiries, assess potential engagements, review career profiles, protect the website from abuse, maintain service reliability, and meet legal obligations. We do not sell personal information."],
  ["Service providers", "We use carefully selected providers to operate this website and its communications, including Google Firebase and Google Cloud for backend processing and storage, and Zoho Mail for business email. These providers process information only as needed to deliver their services."],
  ["Retention and security", "Enquiry and career records are retained only for legitimate business, recruitment, security, and legal needs. Resumes are stored in private cloud storage. Access is restricted to authorized personnel, and data is transmitted using encrypted connections."],
  ["Your choices", "You may ask us to access, correct, or delete personal information you submitted, subject to applicable law and legitimate retention requirements. You may also withdraw from recruitment consideration at any time."],
  ["International processing", "Our service providers may process data in locations outside your country. Where required, we use provider safeguards and contractual protections appropriate to the transfer."],
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#081B33] py-20 text-white">
        <div className="site-container max-w-4xl">
          <p className="eyebrow !text-cyan-300">Legal</p>
          <h1 className="display-font mt-5 text-5xl font-semibold tracking-[-0.05em]">Privacy policy</h1>
          <p className="mt-5 text-slate-300">Effective June 11, 2026</p>
        </div>
      </section>
      <section className="py-20">
        <div className="site-container max-w-4xl">
          <p className="text-lg leading-8 text-slate-600">
            This policy explains how RV IT Consulting handles information submitted through
            rvit.co.in. It does not replace any privacy terms agreed in a client contract.
          </p>
          <div className="mt-12 divide-y divide-slate-200 border-t border-slate-300">
            {sections.map(([title, body]) => (
              <section key={title} className="py-8">
                <h2 className="display-font text-2xl font-bold text-[#081B33]">{title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{body}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 border-l-4 border-blue-600 bg-slate-50 p-6">
            <h2 className="font-extrabold text-[#081B33]">Privacy requests</h2>
            <p className="mt-2 text-slate-600">
              Email <a className="font-bold text-blue-600" href="mailto:contact@rvit.co.in">contact@rvit.co.in</a> or use our <Link className="font-bold text-blue-600" href="/contactus">contact form</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
