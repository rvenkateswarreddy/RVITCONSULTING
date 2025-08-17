'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IndustriesPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

const industries = [
  {
    name: "Healthcare",
    image: "/assets/industries/Healthcare.webp",
    description: "Empowering hospitals and clinics with digital transformation.",
    details: [
      "EHR systems implementation",
      "Telemedicine platforms",
      "AI-powered diagnostic tools",
      "HIPAA compliant solutions"
    ],
    stats: "90% of clients report improved operational efficiency"
  },
  {
    name: "Education",
    image: "/assets/industries/Education.webp",
    description: "Innovative solutions for modern learning environments.",
    details: [
      "Learning management systems",
      "Virtual classroom technology",
      "Educational mobile apps",
      "Student engagement analytics"
    ],
    stats: "Deployed in 500+ institutions worldwide"
  },
  {
    name: "Finance",
    image: "/assets/industries/Finance.webp",
    description: "Secure, scalable technologies for financial institutions.",
    details: [
      "Blockchain solutions",
      "Fraud detection algorithms",
      "Regulatory compliance systems",
      "Digital banking platforms"
    ],
    stats: "Processes $2B+ in transactions monthly"
  },
  {
    name: "Retail & E-Commerce",
    image: "/assets/industries/Retail.webp",
    description: "Enhancing customer experience for retailers.",
    details: [
      "AR shopping experiences",
      "Inventory management systems",
      "AI recommendation engines",
      "Omnichannel solutions"
    ],
    stats: "30% average increase in customer retention"
  }
  // },
  // {
  //   name: "Manufacturing",
  //   image: "/industries/manufacturing.jpg",
  //   description: "Smart automation for manufacturing and industrial sectors.",
  //   details: [
  //     "IoT-enabled predictive maintenance",
  //     "Supply chain optimization",
  //     "Digital twin technologies",
  //     "Production efficiency tools"
  //   ],
  //   stats: "Reduces operational costs by 25% on average"
  // },
  // {
  //   name: "Transportation & Logistics",
  //   image: "/industries/logistics.jpg",
  //   description: "Optimizing logistics and supply chain management.",
  //   details: [
  //     "Route optimization algorithms",
  //     "Fleet management systems",
  //     "Warehouse automation tools",
  //     "End-to-end operations solutions"
  //   ],
  //   stats: "Improves delivery times by 35%"
  // },
  // {
  //   name: "Telecom",
  //   image: "/industries/telecom.jpg",
  //   description: "Next-gen connectivity for telecom providers.",
  //   details: [
  //     "5G infrastructure solutions",
  //     "Network optimization tools",
  //     "Customer experience platforms",
  //     "IoT connectivity solutions"
  //   ],
  //   stats: "Enables 99.9% network uptime"
  // },
  // {
  //   name: "Insurance",
  //   image: "/industries/insurance.jpg",
  //   description: "Digital solutions for insurers and brokers.",
  //   details: [
  //     "Claims processing automation",
  //     "Risk assessment algorithms",
  //     "Customer portal development",
  //     "Fraud detection systems"
  //   ],
  //   stats: "Reduces processing time by 40%"
  // },
  // {
  //   name: "Pharmaceuticals",
  //   image: "/industries/pharma.jpg",
  //   description: "Driving innovation in pharma and medical research.",
  //   details: [
  //     "Clinical trial management systems",
  //     "Drug discovery platforms",
  //     "Regulatory compliance solutions",
  //     "Supply chain tracking"
  //   ],
  //   stats: "Accelerates time-to-market by 30%"
  // },
  // {
  //   name: "Hospitality",
  //   image: "/industries/hospitality.jpg",
  //   description: "Smart tech for hotels, restaurants, and leisure.",
  //   details: [
  //     "Property management systems",
  //     "Guest experience platforms",
  //     "Revenue optimization tools",
  //     "Smart room technology"
  //   ],
  //   stats: "Increases guest satisfaction by 28%"
  // },
 
];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/industries.webp" 
            alt="Industry solutions" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Industry-Specific <span className="text-cyan-300">Technology Solutions</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Tailored digital transformation strategies for your sectors unique challenges
          </p>
          <button className="px-8 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors shadow-lg">
            Explore Our Solutions
          </button>
        </motion.div>
      </section>

      {/* Industries Section */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-blue-600">Industry Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver specialized solutions that address the unique challenges of your industry
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-28"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                variants={item}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image Column */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-xl overflow-hidden shadow-xl h-96"
                  >
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  </motion.div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2">
                  <div className={`${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                    <p className="text-xl text-gray-600 mb-6">{industry.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {industry.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
                      <p className="text-blue-700 font-medium">{industry.stats}</p>
                    </div>

                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      View Case Studies
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-28 bg-gray-900 rounded-xl p-12 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your industry?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team specializes in creating custom solutions for unique business challenges
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors">
                  Schedule Consultation
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Contact Our Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;