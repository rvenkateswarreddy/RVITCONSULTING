"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHospital,
  FaUniversity,
  FaMoneyBillWave,
  FaShoppingCart,
  FaTruck,
  FaBriefcase,
  FaHeartbeat,
  FaStore,
} from "react-icons/fa";
import { MdDevices, MdConstruction } from "react-icons/md";

// Google Fonts: Inter (closest to Google Sans)
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const sectionImage = "/industries.webp";

const industries = [
  {
    name: "Healthcare",
    icon: <FaHospital className="text-4xl text-blue-600 group-hover:text-blue-700 transition-colors" />,
    description: "Empowering hospitals and clinics with digital transformation.",
  },
  {
    name: "Education",
    icon: <FaUniversity className="text-4xl text-indigo-600 group-hover:text-indigo-700 transition-colors" />,
    description: "Innovative solutions for modern learning environments.",
  },
  {
    name: "Finance",
    icon: <FaMoneyBillWave className="text-4xl text-green-600 group-hover:text-green-700 transition-colors" />,
    description: "Secure, scalable technologies for financial institutions.",
  },
  {
    name: "Retail & E-Commerce",
    icon: <FaShoppingCart className="text-4xl text-pink-600 group-hover:text-pink-700 transition-colors" />,
    description: "Enhancing customer experience for retailers and online stores.",
  },
  {
    name: "Manufacturing",
    icon: <MdConstruction className="text-4xl text-orange-600 group-hover:text-orange-700 transition-colors" />,
    description: "Smart automation for manufacturing and industrial sectors.",
  },
  {
    name: "Transportation & Logistics",
    icon: <FaTruck className="text-4xl text-teal-600 group-hover:text-teal-700 transition-colors" />,
    description: "Optimizing logistics and supply chain management.",
  },
  {
    name: "Telecom",
    icon: <MdDevices className="text-4xl text-purple-600 group-hover:text-purple-700 transition-colors" />,
    description: "Next-gen connectivity for telecom providers.",
  },
  {
    name: "Insurance",
    icon: <FaBriefcase className="text-4xl text-gray-600 group-hover:text-gray-800 transition-colors" />,
    description: "Digital solutions for insurers and brokers.",
  },
  {
    name: "Pharmaceuticals",
    icon: <FaHeartbeat className="text-4xl text-red-600 group-hover:text-red-700 transition-colors" />,
    description: "Driving innovation in pharma and medical research.",
  },
  {
    name: "Hospitality",
    icon: <FaStore className="text-4xl text-yellow-600 group-hover:text-yellow-700 transition-colors" />,
    description: "Smart tech for hotels, restaurants, and leisure.",
  },
];

export default function IndustriesSection() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <section
      className={`${inter.variable} font-sans relative py-24 px-6 min-h-[100vh] bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900`}
    >
      {/* Background image */}
      <div className="absolute inset-x-0 top-0 z-0 pointer-events-none">
        <motion.img
          src={sectionImage}
          alt="Industries"
          className="mx-auto rounded-3xl shadow-xl w-full max-w-5xl h-96 object-cover opacity-50"
          initial={{ opacity: 0, y: -30, scale: 1.05 }}
          whileInView={{ opacity: 0.5, y: 0, scale: 1 }}
          transition={{ duration: 1.1, type: "spring" }}
        />
      </div>

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-20 z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Industries We Serve
        </motion.h2>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We deliver enterprise-grade solutions that transform industries and
          create measurable value.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto z-10">
        {industries.map((industry, idx) => (
         <motion.div
  key={industry.name}
  className="
    group relative bg-white/80 border border-gray-200
    rounded-2xl shadow-sm hover:shadow-md transition-all duration-300
    p-8 flex flex-col items-center justify-start cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-blue-400
  "
  initial={{ opacity: 0, y: 40, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.45, delay: 0.05 * idx }}
  viewport={{ once: true }}
  onMouseEnter={() => setHoverIdx(idx)}
  onMouseLeave={() => setHoverIdx(null)}
  onFocus={() => setHoverIdx(idx)}
  onBlur={() => setHoverIdx(null)}
>
  {/* Icon */}
  <motion.div
    className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4"
    whileHover={{ scale: 1.05 }}
  >
    {industry.icon}
  </motion.div>

  {/* Title */}
  <span className="text-base md:text-lg font-semibold text-gray-900 text-center mb-2">
    {industry.name}
  </span>

  {/* Smooth expanding description */}
  <AnimatePresence>
    {hoverIdx === idx && (
      <motion.p
        className="text-sm text-gray-600 text-center leading-relaxed"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {industry.description}
      </motion.p>
    )}
  </AnimatePresence>
</motion.div>

        ))}
      </div>
    </section>
  );
}
