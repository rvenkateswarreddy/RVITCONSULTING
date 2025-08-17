'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EngagementModel = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const steps = [
    {
      title: "Assessment",
      description: "Comprehensive needs analysis",
      icon: "🔍",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Planning",
      description: "Tailored solution design",
      icon: "📝",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Execution",
      description: "Agile implementation",
      icon: "⚡",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Optimization",
      description: "Continuous improvement",
      icon: "🔄",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const arrow = {
    initial: { x: -10, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      ref={ref}
      className="bg-white rounded-2xl p-8 md:p-12 mb-5 relative overflow-hidden border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-30"></div>
      <div className="relative z-10">
        <motion.h3 
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our <span className="text-blue-600">Engagement Model</span>
        </motion.h3>

        <motion.div 
          className="relative"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Connecting line for desktop */}
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full -z-10"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={item}
                className="relative group"
              >
                <div className="relative bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full">
                  {/* Animated circle background */}
                  <motion.div 
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                    initial={{ scale: 0.5 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />

                  {/* Icon with floating animation */}
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ y: -5 }}
                  >
                    <motion.span 
                      className="text-5xl md:text-6xl block"
                      initial={{ scale: 0.8 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: index * 0.2
                      }}
                    >
                      {step.icon}
                    </motion.span>
                  </motion.div>

                  <h4 className="text-2xl md:text-2xl font-extrabold mb-2 text-gray-900">
                    {step.title}
                  </h4>

                  {/* Animated dots */}
                  <motion.div 
                    className="flex items-center justify-center gap-2 mt-2 mb-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    <motion.span 
                      className="block w-2 h-2 rounded-full bg-blue-500"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <motion.span 
                      className="block w-2 h-2 rounded-full bg-cyan-500"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3 + 0.2
                      }}
                    />
                  </motion.div>

                  <p className="text-base md:text-lg text-gray-600">
                    {step.description}
                  </p>

                  {/* Animated arrow for desktop */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden md:block mt-6"
                      variants={arrow}
                      initial="initial"
                      animate={inView ? "animate" : "initial"}
                      transition={{ delay: index * 0.2 + 0.8 }}
                    >
                      <svg 
                        className="w-8 h-8 text-gray-300 mx-auto"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <motion.path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          animate={{ 
                            pathLength: [0, 1, 1],
                            opacity: [0, 1, 1]
                          }}
                          transition={{ 
                            duration: 1.5,
                            delay: index * 0.3
                          }}
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated circular progress for mobile */}
        <motion.div 
          className="md:hidden mt-12 relative h-64 w-64 mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.svg 
            className="absolute inset-0"
            viewBox="0 0 100 100"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeDasharray="283"
              strokeDashoffset="283"
              strokeLinecap="round"
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </motion.svg>

          {steps.map((step, index) => (
            <motion.div
              key={`mobile-${step.title}`}
              className="absolute w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-blue-500 shadow-md"
              style={{
                top: `${50 + 40 * Math.sin((index * Math.PI * 2) / steps.length - Math.PI/2)}%`,
                left: `${50 + 40 * Math.cos((index * Math.PI * 2) / steps.length - Math.PI/2)}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { 
                scale: 1,
                opacity: 1,
                transition: { 
                  delay: index * 0.3 + 0.5,
                  type: "spring",
                  stiffness: 300
                }
              } : {}}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl">{step.icon}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EngagementModel;