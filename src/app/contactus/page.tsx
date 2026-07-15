import Image from "next/image";
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
    <>
      <section className="relative overflow-hidden bg-[#081B33] text-white">
        <Image
          src="/assets/Industries/Education.webp"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#081B33_0%,rgba(8,27,51,.95)_50%,rgba(8,27,51,.55)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/75 via-transparent to-[#081B33]/20" />
        <div className="site-container relative flex min-h-[500px] items-center py-24 md:py-28">
          <div className="max-w-5xl">
            <p className="eyebrow !text-cyan-300">Talk to the right person</p>
            <h1 className="display-font balanced mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-7xl">Start with the challenge, not a sales pitch.</h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">Tell us what you are trying to change, what is getting in the way, and where a thoughtful technology partner could help.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-container grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <aside>
            <p className="eyebrow">Before we recommend anything</p>
            <h2 className="display-font mt-5 text-3xl font-semibold tracking-[-0.035em] text-[#081B33]">A useful first conversation.</h2>
            <p className="mt-5 leading-7 text-slate-600">No lengthy procurement form. Share enough context for us to bring the right person into the conversation.</p>
            <div className="mt-10 space-y-6 border-t border-slate-200 pt-7">
              <div className="flex gap-4"><Mail className="mt-1 text-blue-600" size={20} aria-hidden /><div><p className="font-extrabold text-[#081B33]">Email</p><a href="mailto:contact@rvit.co.in" className="mt-1 block text-slate-600 hover:text-blue-600">contact@rvit.co.in</a></div></div>
              <div className="flex gap-4"><Clock className="mt-1 text-blue-600" size={20} aria-hidden /><div><p className="font-extrabold text-[#081B33]">Response</p><p className="mt-1 text-slate-600">Typically within one business day</p></div></div>
              <div className="flex gap-4"><MessageSquare className="mt-1 text-blue-600" size={20} aria-hidden /><div><p className="font-extrabold text-[#081B33]">What happens next</p><p className="mt-1 text-slate-600">A focused discovery conversation with a relevant consultant</p></div></div>
            </div>
          </aside>

          <div className="border border-slate-200 bg-[#F8FAFC] p-6 shadow-[0_20px_60px_rgba(8,27,51,0.08)] md:p-10">
            <h2 className="display-font text-3xl font-semibold tracking-[-0.035em] text-[#081B33]">Tell us what you are working on</h2>
            <p className="mt-3 text-slate-600">Fields marked with * are required.</p>
            <div className="mt-8"><ContactForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}
