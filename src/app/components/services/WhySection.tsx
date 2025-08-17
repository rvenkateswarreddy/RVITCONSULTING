import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';

const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4"/><path d="m16 4-3 3"/><path d="M18 12h4"/><path d="m20 8-3-3"/><path d="M12 22v-4"/><path d="m8 20 3-3"/><path d="M6 12H2"/><path d="m4 16 3-3"/>
        </svg>
      ),
      title: "End-to-End Solutions",
      description: "We handle everything from strategy to support — so you can focus on growth.",
      color: "text-blue-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Industry-Certified Professionals",
      description: "AWS-certified architects, AI experts, and full-stack engineers with proven track records.",
      color: "text-blue-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
        </svg>
      ),
      title: "Security & Compliance",
      description: "GDPR, HIPAA compliant solutions with enterprise-grade security protocols.",
      color: "text-blue-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4"/><path d="m10 4 4 4"/><path d="m17 8 3-3"/><path d="M19 12h4"/><path d="m17 16 3 3"/><path d="m12 18v4"/><path d="m14 20-4-4"/><path d="m7 16-3 3"/><path d="M5 12H1"/><path d="m7 8-3-3"/>
        </svg>
      ),
      title: "Agile Methodology",
      description: "Rapid iterations with continuous feedback for faster time-to-market.",
      color: "text-blue-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"/><path d="m7 16 4-4 4 4"/><path d="M7 10h10"/>
        </svg>
      ),
      title: "Proven Results",
      description: "90% client retention rate with measurable business impact.",
      color: "text-blue-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m8 12 3 3 5-5"/>
        </svg>
      ),
      title: "24/7 Support",
      description: "Dedicated account managers with round-the-clock technical support.",
      color: "text-blue-600"
    }
  ];

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Partner With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver transformative results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className={`w-14 h-14 flex items-center justify-center rounded-lg mb-6 ${benefit.color} bg-blue-50`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contactUs"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Start Your Partnership Journey
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;