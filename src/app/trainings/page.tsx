'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CorporateTrainingPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const trainingPrograms = [
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      description: "Master cutting-edge AI technologies with hands-on projects",
      features: [
        "Real-time computer vision projects",
        "NLP implementation workshops",
        "Live model deployment exercises",
        "Freelance AI project opportunities"
      ],
      duration: "8 Weeks",
      level: "Advanced"
    },
    {
      title: "Cloud Architecture",
      icon: "☁️",
      description: "Design and deploy enterprise-grade cloud solutions",
      features: [
        "AWS/Azure certification prep",
        "Live migration projects",
        "Serverless architecture labs",
        "Freelance cloud consulting gigs"
      ],
      duration: "6 Weeks",
      level: "Intermediate"
    },
    {
      title: "Cybersecurity",
      icon: "🔒",
      description: "Develop expertise in enterprise security frameworks",
      features: [
        "Live penetration testing",
        "Security audit simulations",
        "Compliance workshops",
        "Freelance security assessment projects"
      ],
      duration: "10 Weeks",
      level: "Advanced"
    },
    {
      title: "DevOps Engineering",
      icon: "⚙️",
      description: "Master CI/CD pipelines and infrastructure automation",
      features: [
        "Real deployment projects",
        "Kubernetes hands-on labs",
        "Monitoring system setup",
        "Freelance DevOps contracts"
      ],
      duration: "7 Weeks",
      level: "Intermediate"
    },
    {
      title: "Data Science",
      icon: "📊",
      description: "Turn data into actionable business insights",
      features: [
        "Live analytics projects",
        "Big data processing workshops",
        "Visualization techniques",
        "Freelance data consulting"
      ],
      duration: "8 Weeks",
      level: "Advanced"
    },
    {
      title: "Blockchain Development",
      icon: "⛓️",
      description: "Build decentralized applications and smart contracts",
      features: [
        "Live dApp development",
        "Smart contract auditing",
        "Tokenization projects",
        "Freelance blockchain gigs"
      ],
      duration: "9 Weeks",
      level: "Expert"
    }
  ];



  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white py-28 px-4 overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Corporate <span className="text-cyan-400">Training Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-8"
          >
            Upskilling your workforce with real-world projects and freelance opportunities
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors shadow-lg">
              Request Training Catalog
            </button>
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-bold rounded-lg transition-colors">
              Speak to Training Consultant
            </button>
          </motion.div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why <span className="text-blue-600">RV IT</span> Corporate Training?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between learning and earning with our unique project-based approach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Freelance Project Pipeline</h3>
            <p className="text-gray-600">
              Participants get access to real client projects through our global freelance network, turning training into revenue opportunities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Industry-Recognized Certification</h3>
            <p className="text-gray-600">
              Our programs include preparation for AWS, Azure, Google Cloud, and other top-tier certifications.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">ROI-Focused Training</h3>
            <p className="text-gray-600">
              Measure success through completed projects and revenue generated, not just course completion.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-blue-600">Training Programs</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical, project-driven courses with freelance market integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-3xl mb-6">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="flex justify-between mb-6">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {program.duration}
                    </span>
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {program.level}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                    Enroll Team
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upskill Your Workforce?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our training consultants will design a custom program that delivers measurable business impact
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get Custom Proposal
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              Book Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTrainingPage;