"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cloud, 
  Shield, 
  BarChart3, 
  Users, 
  Cpu, 
  Globe,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure with 99.9% uptime guarantee. AWS, Azure, and GCP certified experts.",
    features: ["Migration Services", "24/7 Monitoring", "Cost Optimization", "Security Compliance"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions protecting 500+ organizations from cyber threats.",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
    color: "from-red-500 to-orange-600"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced BI and ML solutions.",
    features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Custom Dashboards"],
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology consulting to optimize your IT infrastructure and operations.",
    features: ["Digital Transformation", "Process Optimization", "Technology Assessment", "Strategic Planning"],
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Cpu,
    title: "Software Development",
    description: "Custom software solutions built with modern technologies and agile methodologies.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
    color: "from-indigo-500 to-blue-600"
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "24/7 support across USA, Canada, Luxembourg, and India with local expertise.",
    features: ["Help Desk", "Remote Support", "On-site Services", "SLA Management"],
    color: "from-gray-600 to-slate-700"
  }
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions tailored to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden">
                {/* Service Icon with gradient background */}
                <div className={`relative h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <service.icon 
                    className="relative z-10 text-white" 
                    size={48} 
                  />
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={`/contactus?service=${service.title.toLowerCase().replace(' ', '-')}`}
                    className={`inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all duration-200 ${
                      hoveredIndex === index ? 'translate-x-1' : ''
                    }`}
                  >
                    Learn More
                    <ArrowRight 
                      className={`ml-2 transition-transform duration-200 ${
                        hoveredIndex === index ? 'translate-x-1' : ''
                      }`} 
                      size={16} 
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6">
              Let&apos;s discuss how our expert solutions can drive your success
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
