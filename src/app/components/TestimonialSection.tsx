"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Anita Sharma",
    role: "VP, IT Strategy – FinTech Enterprise",
    content:
      "Their expertise in cloud transformation and enterprise security helped us scale rapidly. The team’s professionalism and deep technical knowledge set them apart.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO – Healthcare Solutions",
    content:
      "Our project demanded top-notch talent and agile delivery. Their recruitment team delivered, and our platform went live ahead of schedule.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Director, AI & Data Science – Retail Group",
    content:
      "They provided us with specialists who truly understand data. The difference in our analytics and customer experience is remarkable.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    name: "John Williams",
    role: "IT Manager – Manufacturing Corp",
    content:
      "Professional, responsive, and highly skilled. Their developers integrated seamlessly with our team and exceeded expectations.",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-[#f0f8ff] via-[#e3f2fd] to-[#dbeafe] text-gray-900 overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ letterSpacing: "-0.03em" }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Trusted by enterprise leaders and innovators across industries.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            className="bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] rounded-2xl shadow-xl p-8 flex flex-col justify-between border border-blue-100 hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.07 * idx }}
            viewport={{ once: true }}
            style={{
              boxShadow: "0 6px 24px 0 rgba(41, 128, 185, 0.10)",
              borderWidth: 1.5,
              borderStyle: "solid",
              borderColor: "rgba(41, 128, 185, 0.12)",
              backdropFilter: "blur(0.5px)",
              minHeight: "340px",
            }}
          >
            <div className="flex items-center mb-4">
              <img
                src={t.avatar}
                alt={`Photo of ${t.name}`}
                className="w-14 h-14 rounded-full object-cover border-4 border-blue-200 shadow-lg mr-4"
                loading="lazy"
              />
              <div>
                <div className="text-lg font-bold text-blue-700">{t.name}</div>
                <div className="text-sm font-medium text-blue-500">{t.role}</div>
                <div className="flex items-center mt-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-base mr-0.5" />
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="text-gray-900 text-lg font-medium leading-relaxed italic mb-2">
              “{t.content}”
            </blockquote>
          </motion.div>
        ))}
      </div>
      {/* Decorative floating circles */}
      <span className="pointer-events-none fixed z-0 left-8 top-40 w-16 h-16 bg-blue-300 opacity-15 rounded-full blur-xl animate-pulse" />
      <span className="pointer-events-none fixed z-0 right-12 top-1/3 w-24 h-24 bg-cyan-300 opacity-25 rounded-full blur-2xl animate-pulse" />
    </section>
  );
}