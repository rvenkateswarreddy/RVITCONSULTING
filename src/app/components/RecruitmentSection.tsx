"use client";

import { useState, Suspense, ChangeEvent, FormEvent } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import toast, { Toaster } from "react-hot-toast";

// Lazy load icons
const FaSearch = dynamic(() => import("react-icons/fa").then(mod => mod.FaSearch), { ssr: false });
const FaUserTie = dynamic(() => import("react-icons/fa").then(mod => mod.FaUserTie), { ssr: false });
const FaHandshake = dynamic(() => import("react-icons/fa").then(mod => mod.FaHandshake), { ssr: false });
const FaChartLine = dynamic(() => import("react-icons/fa").then(mod => mod.FaChartLine), { ssr: false });

export default function RecruitmentSection() {
  const recruitmentServices = [
    {
      icon: <FaSearch className="text-2xl text-blue-600" />,
      title: "Talent Acquisition",
      description: "We identify and attract top IT professionals with specialized skills for your organization."
    },
    {
      icon: <FaUserTie className="text-2xl text-blue-600" />,
      title: "Executive Search",
      description: "Strategic recruitment of senior IT leadership to drive your digital transformation."
    },
    {
      icon: <FaHandshake className="text-2xl text-blue-600" />,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project-based work or temporary skill gaps."
    },
    {
      icon: <FaChartLine className="text-2xl text-blue-600" />,
      title: "Workforce Planning",
      description: "Data-driven strategies to align your talent pipeline with business objectives."
    }
  ];

  const [form, setForm] = useState({ name: "", email: "", service: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ name?: string; email?: string; service?: string; submit?: string }>({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const errors: { name?: string; email?: string; service?: string } = {};
    if (!form.name) errors.name = "Name is required";
    if (!form.email) errors.email = "Email is required";
    if (!form.service) errors.service = "Service selection is required";
    return errors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(prev => ({ ...prev, [e.target.name]: undefined }));
    setSuccess(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    setLoading(true);
    setSuccess(false);
    try {
      await addDoc(collection(db, "recruitmentRequests"), form);
      setSuccess(true);
      setForm({ name: "", email: "", service: "" });
      toast.success("Request submitted successfully!");
    } catch (err) {
      setError({ submit: "Failed to submit. Please try again." });
      toast.error("Failed to submit. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="relative py-20 px-6 bg-blue-100 text-gray-900" aria-labelledby="recruitment-heading">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            id="recruitment-heading"
          >
            IT Recruitment <span className="text-blue-600">Solutions</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting exceptional <span className="font-semibold">IT talent</span> with{" "}
            <span className="font-semibold">innovative organizations</span>
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {recruitmentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <Suspense fallback={<div className="w-12 h-12 animate-pulse bg-gray-100 rounded-full mb-4" />}>
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full mb-4">
                  {service.icon}
                </div>
              </Suspense>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why us + form */}
        <div className="bg-gray-50 rounded-xl p-10 border border-gray-100 shadow-md">
          <div className="flex flex-col md:flex-row md:gap-12">
            {/* Why Partner */}
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Partner With Us?</h3>
              <ul className="space-y-4">
                {[
                  "Deep understanding of IT skill requirements",
                  "Extensive network of pre-vetted professionals",
                  "Competitive placement rates",
                  "90-day replacement guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Form */}
            <motion.div
              className="md:w-1/2 bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Request Talent</h4>
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      error.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {error.name && <span className="text-red-500 text-sm">{error.name}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      error.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {error.email && <span className="text-red-500 text-sm">{error.email}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      error.service ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="permanent">Permanent Recruitment</option>
                    <option value="contract">Contract Staffing</option>
                    <option value="executive">Executive Search</option>
                    <option value="consulting">Consulting Services</option>
                  </select>
                  {error.service && <span className="text-red-500 text-sm">{error.service}</span>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
                {error.submit && <span className="text-red-500 text-sm">{error.submit}</span>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}