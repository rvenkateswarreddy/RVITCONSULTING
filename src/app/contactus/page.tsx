import { Suspense } from "react";
import { Clock, Mail, MessageSquare } from "lucide-react";
import ContactForm from "../contact/ContactForm";
import { createPageMetadata } from "../seo";
import CinematicMedia from "../components/CinematicMedia";

export const metadata = createPageMetadata(
  "Contact",
  "Talk to RV IT Consulting about your technology priorities, delivery needs, talent requirements, or corporate training goals.",
  "/contactus",
);

export default function ContactPage() {
  return (
    <>
      <section className="cinematic-hero contact-hero">
        <CinematicMedia video="/assets/media/contact-hero.mp4" poster="/assets/media/contact-conversation-real.jpg" priority position="center" />
        <div className="cinematic-shade" />
        <div className="site-container cinematic-content">
          <div className="ml-auto max-w-3xl" data-reveal="right">
            <h1 className="hero-display">Start with the <em>challenge.</em></h1>
            <p className="hero-copy">Tell us what you are trying to change, what is getting in the way, and where a thoughtful technology partner could help.</p>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="site-container grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <aside data-reveal="left">
            <p className="eyebrow">Before we recommend anything</p>
            <h2 className="display-font mt-5 text-3xl font-semibold tracking-[-0.035em] text-[#081B33]">A useful first conversation.</h2>
            <p className="mt-5 leading-7 text-slate-600">No lengthy procurement form. Share enough context for us to bring the right person into the conversation.</p>
            <div className="mt-10 space-y-6 border-t border-slate-200 pt-7">
              <div className="flex gap-4"><Mail className="mt-1 text-blue-600" size={20} aria-hidden /><div><p className="font-extrabold text-[#081B33]">Email</p><a href="mailto:contact@rvit.co.in" className="mt-1 block text-slate-600 hover:text-blue-600">contact@rvit.co.in</a></div></div>
              <div className="flex gap-4"><Clock className="mt-1 text-blue-600" size={20} aria-hidden /><div><p className="font-extrabold text-[#081B33]">Response</p><p className="mt-1 text-slate-600">Typically within one business day</p></div></div>
              <div className="flex gap-4"><MessageSquare className="mt-1 text-blue-600" size={20} aria-hidden /><div><p className="font-extrabold text-[#081B33]">What happens next</p><p className="mt-1 text-slate-600">A focused discovery conversation with a relevant consultant</p></div></div>
            </div>
          </aside>

          <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-[0_24px_80px_rgba(8,27,51,0.1)] md:p-10" data-reveal="right">
            <h2 className="display-font text-3xl font-semibold tracking-[-0.035em] text-[#081B33]">Tell us what you are working on</h2>
            <p className="mt-3 text-slate-600">Fields marked with * are required.</p>
            <div className="mt-8">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
