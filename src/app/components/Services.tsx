"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Globe2,
  BadgeCheck,
  Briefcase,
  Users,
  GraduationCap,
  Code,
  Bot,
  LineChart,
  Laptop,
  Cloud,
  Settings,
  ShoppingBag,
  Server,
  Palette,
  Layers,
  Headphones,
  ShieldCheck
} from "lucide-react";

// If you're using shadcn/ui in your project, you can uncomment these for prettier Cards & Buttons
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// Types
 type Service = {
  title: string;
  desc: string;
  tag: "Talent" | "Training" | "Support" | "AI" | "Development";
  Icon: React.ComponentType<{ className?: string }>; // lucide icon
};

const services: Service[] = [
  // Talent (Recruitment & Staffing)
  {
    title: "Global Recruitment & Staffing",
    desc: "Hire skilled professionals across USA, Canada, Luxembourg, and more. Fast onboarding with flexible hiring.",
    tag: "Talent",
    Icon: Globe2,
  },
  {
    title: "Executive Hiring",
    desc: "Leadership and C-level hiring services with a global headhunting network.",
    tag: "Talent",
    Icon: BadgeCheck,
  },
  {
    title: "Contract Staffing",
    desc: "Quickly scale your team with vetted contract workers — short-term or long-term.",
    tag: "Talent",
    Icon: Briefcase,
  },

  // Training
  {
    title: "Corporate Skill Training",
    desc: "Customized training for teams — from onboarding to upskilling, designed for company goals.",
    tag: "Training",
    Icon: GraduationCap,
  },
  {
    title: "Tech Bootcamps for Teams",
    desc: "Hands-on workshops for software tools, frameworks, and cloud platforms.",
    tag: "Training",
    Icon: Code,
  },
  {
    title: "Leadership & Communication",
    desc: "Workshops that boost leadership, communication, and agile thinking for managers and teams.",
    tag: "Training",
    Icon: Users,
  },

  // Support
  {
    title: "Project-Based Support",
    desc: "On-demand experts for your projects — part-time, full-time, or contract-based support.",
    tag: "Support",
    Icon: Layers,
  },
  {
    title: "IT Helpdesk & Tech Support",
    desc: "24/7 technical support including L1 and L2 resolution for smooth business operations.",
    tag: "Support",
    Icon: Headphones,
  },
  {
    title: "Fully Managed IT Services",
    desc: "Full-cycle IT support with SLAs — includes infrastructure, monitoring, and user support.",
    tag: "Support",
    Icon: ShieldCheck,
  },

  // AI
  {
    title: "Business Automation & AI",
    desc: "Automate tasks, workflows, and reporting with powerful AI-driven tools.",
    tag: "AI",
    Icon: Settings,
  },
  {
    title: "AI Chatbots & Assistants",
    desc: "Deploy chatbots for websites, apps, and internal workflows. Powered by large language models.",
    tag: "AI",
    Icon: Bot,
  },
  {
    title: "Predictive Data Insights",
    desc: "Turn raw data into actionable insights using AI and machine learning.",
    tag: "AI",
    Icon: LineChart,
  },

  // Development (6 modern services)
  {
    title: "Web & Mobile App Development",
    desc: "End-to-end development for modern apps and responsive websites.",
    tag: "Development",
    Icon: Laptop,
  },
  {
    title: "Cloud Services (AWS, Azure, GCP)",
    desc: "Migrate, manage, and scale apps in the cloud using major platforms.",
    tag: "Development",
    Icon: Cloud,
  },
  {
    title: "DevOps & Automation",
    desc: "Set up CI/CD pipelines, manage infrastructure as code, and speed up releases.",
    tag: "Development",
    Icon: Settings,
  },
  {
    title: "E-commerce Solutions",
    desc: "We build online stores with Shopify, Magento, WooCommerce and custom platforms.",
    tag: "Development",
    Icon: ShoppingBag,
  },
  {
    title: "API & Backend Development",
    desc: "Build secure APIs and backend systems using Node.js, Python, Java, and GraphQL.",
    tag: "Development",
    Icon: Server,
  },
  {
    title: "UI/UX & Front-End Engineering",
    desc: "Beautiful, fast front-ends built with React, Angular, and Vue.",
    tag: "Development",
    Icon: Palette,
  },
];

const tags = ["Talent", "Training", "Support", "AI", "Development"] as const;

type Tag = typeof tags[number];

export default function Services() {
  const [activeTab, setActiveTab] = useState<Tag>("Talent");
  const [hovered, setHovered] = useState<number | null>(null);

  const getServicesForTag = (tag: Tag) => {
    const list = services.filter((s) => s.tag === tag);
    return tag === "Development" ? list.slice(0, 6) : list.slice(0, 3);
  };

  const filtered = getServicesForTag(activeTab);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
            <BadgeCheck className="h-4 w-4" /> Trusted by teams worldwide
          </span>
          <motion.h2
        className="text-3xl md:text-5xl font-extrabold mt-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ letterSpacing: "-0.03em" }}
      >
        <span className="text-black">Our Professional </span>
        <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"> Services</span>
      </motion.h2>
          <p className="mt-3 max-w-2xl text-lg text-gray-600 mx-auto">
            Trusted solutions crafted with three decades of industry experience
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-2xl border border-gray-200 bg-gray-50 p-1 shadow-sm">
            {tags.map((tag, idx) => (
              <button
                key={tag}
                onClick={() => setActiveTab(tag)}
                className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none ${
                  activeTab === tag
                    ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/70"
                } ${idx === 0 ? "ml-0" : "ml-1"}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {filtered.map((service, index) => {
            const Icon = service.Icon;
            const isHovered = hovered === index;
            return (
              <div
                key={`${service.title}-${index}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* subtle highlight */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-50 to-transparent pointer-events-none"/>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center text-xs font-medium text-gray-500">
                    {service.tag}
                  </span>
                  {isHovered && (
                    <span className="text-xs font-medium text-indigo-600">
                      Good expertise
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-base text-gray-600 mb-4">
            Ready to leverage our three decades of industry experience?
          </p>
          <button className="px-8 py-3 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
