"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Send } from "lucide-react";
import { functionsEndpoint } from "@/lib/functions-api";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  website: "",
};

const serviceParamMap: Record<string, string> = {
  "cloud-modernization": "Cloud modernization",
  "corporate-trainings": "Corporate training",
  "data-intelligence": "Data and analytics",
  "digital-engineering": "Software engineering",
  "marketing-support": "Marketing support",
  "project-support": "Project support",
  "security-resilience": "Cybersecurity",
  "talent-delivery": "Technology recruitment",
  "training-enablement": "Corporate training",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (!serviceParam) return;

    const mappedService = serviceParamMap[serviceParam] ?? "";
    if (!mappedService) return;

    setFormData((current) => ({
      ...current,
      service: current.service || mappedService,
    }));
  }, [searchParams]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setReference("");

    try {
      const response = await fetch(functionsEndpoint("submitContact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Submission failed.");

      setReference(result.reference || "Submitted");
      setFormData(initialForm);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not submit your enquiry.",
      );
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-[#081B33] transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200";

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">Full name *</label>
          <input id="name" name="name" required maxLength={100} value={formData.name} onChange={handleChange} className={fieldClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">Work email *</label>
          <input id="email" name="email" type="email" required maxLength={160} value={formData.email} onChange={handleChange} className={fieldClass} autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">Phone</label>
          <input id="phone" name="phone" type="tel" maxLength={40} value={formData.phone} onChange={handleChange} className={fieldClass} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-bold text-slate-700">Company</label>
          <input id="company" name="company" maxLength={120} value={formData.company} onChange={handleChange} className={fieldClass} autoComplete="organization" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-bold text-slate-700">How can we help? *</label>
        <select id="service" name="service" required value={formData.service} onChange={handleChange} className={fieldClass}>
          <option value="">Select a service</option>
          <option value="IT consulting">IT consulting</option>
          <option value="Cloud modernization">Cloud modernization</option>
          <option value="Data and analytics">Data and analytics</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Software engineering">Software engineering</option>
          <option value="Project support">Project support</option>
          <option value="Technology recruitment">Technology recruitment</option>
          <option value="Marketing support">Marketing support</option>
          <option value="Corporate training">Corporate training</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">Tell us about the challenge *</label>
        <textarea id="message" name="message" required minLength={10} maxLength={3000} rows={6} value={formData.message} onChange={handleChange} className={fieldClass} />
      </div>

      {reference && (
        <div className="flex gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-emerald-900" role="status" aria-live="polite">
          <CheckCircle className="mt-0.5 shrink-0" size={20} aria-hidden />
          <p className="text-sm font-semibold">Enquiry received. Reference: {reference}</p>
        </div>
      )}

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800" role="alert">
          {error} You can also email <a className="underline" href="mailto:contact@rvit.co.in">contact@rvit.co.in</a>.
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-slate-500">Your details are used only to respond to this enquiry and are handled according to our privacy policy.</p>
        <button type="submit" disabled={loading} aria-busy={loading} className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">
          <Send size={17} aria-hidden />
          {loading ? "Sending..." : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
