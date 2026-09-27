import { Suspense } from "react";
import PageIntro from "../components/PageIntro";
import { Clock, Mail, MessageSquare } from "lucide-react";
import ContactForm from "../contact/ContactForm";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Contact",
  "Talk to RV IT Consulting about your technology priorities, delivery needs, talent requirements, or corporate training goals.",
  "/contactus",
);

export default function ContactPage() {
  return (
    <div className="rv-interior rv-contactus">
      <PageIntro
        title="What are you"
        emphasis="working on?"
        description="Tell us about a project, a hiring need, or a challenge your team is facing. We’ll connect you with the right person."
        variant="compact"
      />

      <section className="editorial-section">
        <div className="site-container grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <aside data-reveal="left">
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
    </div>
  );
}
