"use client";

import { motion } from "framer-motion";
import { Quote, Star, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    position: "CTO",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    avatar: "/avatars/sarah-chen.jpg",
    content: "RV IT Consulting transformed our entire IT infrastructure. Their expertise in cloud migration and cybersecurity saved us 40% in operational costs while improving system reliability.",
    rating: 5,
    project: "Cloud Migration & Security"
  },
  {
    name: "Michael Rodriguez",
    position: "CEO",
    company: "Global Finance Inc",
    location: "New York, NY",
    avatar: "/avatars/michael-rodriguez.jpg",
    content: "The custom software development team delivered exactly what we needed. Their agile approach and attention to detail resulted in a platform that exceeded our user engagement targets by 200%.",
    rating: 5,
    project: "Custom Software Platform"
  },
  {
    name: "Jennifer Liu",
    position: "Operations Director",
    company: "Healthcare Plus",
    location: "Toronto, ON",
    avatar: "/avatars/jennifer-liu.jpg",
    content: "Outstanding IT consulting services. They helped us implement robust data analytics solutions that improved our decision-making process and patient outcomes significantly.",
    rating: 4,
    project: "Healthcare Analytics"
  },
  {
    name: "David Kumar",
    position: "Founder",
    company: "StartupHub",
    location: "Bangalore, India",
    avatar: "/avatars/david-kumar.jpg",
    content: "As a startup, we needed reliable IT support. RV IT Consulting provided enterprise-level solutions that scaled with our growth. Their 24/7 support has been invaluable.",
    rating: 5,
    project: "Startup IT Infrastructure"
  },
  {
    name: "Emma Thompson",
    position: "VP of Technology",
    company: "Manufacturing Pro",
    location: "Luxembourg",
    avatar: "/avatars/emma-thompson.jpg",
    content: "The cybersecurity assessment and implementation was thorough and professional. They identified vulnerabilities we didn't know existed and helped us achieve full compliance.",
    rating: 4,
    project: "Security Compliance"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses across multiple industries and continents
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col border border-gray-200 hover:border-blue-300 transition-all duration-300">
                
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                      <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-500">{testimonial.location}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="flex-1">
                  <Quote className="w-8 h-8 text-blue-500 mb-3 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </blockquote>

                {/* Project Tag */}
                <div className="mt-auto pt-4">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-gray-300 mb-6">
              Ready to achieve similar results for your business?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contactus"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                Start Your Project
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
