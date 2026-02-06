"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Projects Delivered", value: "127", suffix: "+" },
  { label: "Years Experience", value: "5" },
  { label: "Global Clients", value: "48" },
  { label: "Team Members", value: "23" }
];

export default function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    setIsVisible(true);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Enterprise IT Solutions
                <span className="block text-blue-400 text-3xl lg:text-4xl mt-2">
                  That Drive Growth
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Trusted by Fortune 500 companies and innovative startups alike. 
                We deliver cutting-edge technology solutions with real business impact.
              </p>
            </div>

            {/* Stats with realistic numbers */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all duration-700 ${
                    currentStat === index ? 'scale-105 border-blue-400/50' : 'scale-100'
                  }`}
                >
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                    <span className="text-blue-400 ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link 
                href="/contactus"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                Get Started
              </Link>
              <Link 
                href="/services"
                className="px-8 py-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="relative">
            <div className="relative">
              {/* Main image with subtle shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/assets/team-meeting.jpg"
                  alt="RV IT Consulting team meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              {/* Floating elements for organic feel */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-400">24/7 Support Available</span>
              </div>
              <div className="flex items-censter space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-400">5+ Years Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 C300,90 600,30 900,60 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.02)"
            />
            <path 
              d="M0,60 C300,90 600,30 900,60" 
              stroke="rgba(255,255,255,0.05)" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
