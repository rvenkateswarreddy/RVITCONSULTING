'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectSupportPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const supportOptions = [
    {
      type: "Full-Time Support",
      icon: "🕒",
      description: "Dedicated resources working exclusively on your project",
      features: [
        "40+ hours per week commitment",
        "Project manager included",
        "Daily progress reports",
        "Priority support queue",
        "Dedicated communication channel"
      ],
      bestFor: "Long-term projects with evolving requirements",
      image: "/fulltime.webp"
    },
    {
      type: "Part-Time Support",
      icon: "⏱️",
      description: "Flexible support for projects with variable workloads",
      features: [
        "10-30 hours per week",
        "Shared expert resources",
        "Weekly progress updates",
        "Scheduled availability",
        "Cost-effective solution"
      ],
      bestFor: "Ongoing maintenance or smaller initiatives",
      image: "/parttime.webp"
    },
    {
      type: "Contract-Based Support",
      icon: "📝",
      description: "Specialized expertise for defined project phases",
      features: [
        "Fixed duration engagements",
        "Specialized skill sets",
        "Milestone-based delivery",
        "Flexible scaling",
        "Clear deliverables"
      ],
      bestFor: "Specific project phases or technical challenges",
      image: "/contract.webp"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      projects: ["EHR Implementation", "Telemedicine Platforms", "HIPAA Compliance"],
      icon: "🏥"
    },
    {
      name: "Finance",
      projects: ["Digital Banking", "Fraud Detection", "Blockchain Solutions"],
      icon: "💳"
    },
    {
      name: "Retail",
      projects: ["E-commerce Platforms", "Inventory Systems", "Customer Analytics"],
      icon: "🛍️"
    },
    {
      name: "Manufacturing",
      projects: ["IoT Integration", "Supply Chain Optimization", "Predictive Maintenance"],
      icon: "🏭"
    }
  ];

  const methodologies = [
    {
      name: "Agile",
      description: "Iterative development with 2-week sprints",
      icon: "🔄"
    },
    {
      name: "Waterfall",
      description: "Structured phases with defined deliverables",
      icon: "📊"
    },
    {
      name: "Hybrid",
      description: "Combining Agile flexibility with Waterfall structure",
      icon: "⚡"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white py-32 px-4 overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Comprehensive <span className="text-cyan-400">Project Support</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-8"
          >
            Flexible engagement models to meet your projects unique requirements
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors shadow-lg mr-4">
              Request Consultation
            </button>
           
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="text-blue-600">Support Models</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the engagement model that best fits your project needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={option.image}
                  alt={option.type}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl">
                  {option.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{option.type}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Key Features:</h4>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-blue-700">
                    <span className="font-bold">Best for:</span> {option.bestFor}
                  </p>
                </div>

                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Get {option.type} Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              <span className="text-blue-600">Industry-Specific</span> Support
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for your industrys unique challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.projects.map((project, i) => (
                    <li key={i} className="text-gray-600">{project}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-blue-600">Methodologies</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approaches to ensure project success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="text-3xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{method.name}</h3>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-cyan-400">Support Process</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to delivering exceptional project support
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Requirement Analysis</h3>
              <p className="text-gray-300">Detailed assessment of your project needs and objectives</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Resource Allocation</h3>
              <p className="text-gray-300">Matching your project with the right experts and tools</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-300">Executing with your chosen methodology and support model</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-300">Regular reviews and optimizations for ongoing success</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support specialists are ready to discuss your requirements
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get Custom Proposal
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              Speak to Support Manager
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSupportPage;