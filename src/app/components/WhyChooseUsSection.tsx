"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, TrendingUp, Award, Clock, Shield } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "500+ successful projects delivered with 98% client satisfaction rate across 15+ industries.",
    stat: "98% Success Rate"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "23+ certified professionals with average 8+ years experience in enterprise IT solutions.",
    stat: "150+ Years Combined"
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "We've helped clients achieve 40% average growth in efficiency and cost reduction.",
    stat: "40% Average Growth"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "ISO 9001:2015 certified and multiple industry awards for excellence in IT services.",
    stat: "5+ Awards"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support with 2-hour response time and 99.9% uptime guarantee.",
    stat: "2-Hour Response"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Zero security breaches in 5 years with enterprise-grade security protocols.",
    stat: "5 Years Secure"
  }
];

export default function WhyChooseUsSection() {
  const [hoveredReason, setHoveredReason] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">RV IT Consulting</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The trusted partner for businesses seeking reliable, innovative, and scalable IT solutions
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
              onMouseEnter={() => setHoveredReason(index)}
              onMouseLeave={() => setHoveredReason(null)}
            >
              <div className={`bg-white rounded-2xl shadow-lg p-8 h-full border transition-all duration-300 ${
                hoveredReason === index ? 'border-blue-400 shadow-xl' : 'border-gray-200'
              }`}>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <reason.icon className="text-blue-600" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {reason.description}
                </p>

                {/* Stat */}
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                    {reason.stat}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied clients who trust us for their critical IT needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contactus"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                Schedule Consultation
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
