"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import FAQSection from '../components/services/FAQSection';
import WhySection from "../components/services/WhySection";
import EngagementModel from '../components/EngagementModel';

const ProfessionalServices = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with custom AI solutions that automate processes and uncover insights.",
      icon: "🤖",
      features: [
        "Predictive analytics",
        "Computer vision",
        "Natural language processing",
        "Recommendation engines"
      ],
      bgColor: "bg-white",
      accentColor: "from-purple-600 to-blue-500",
      borderColor: "border-gray-200"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable, secure cloud infrastructure tailored to your business needs.",
      icon: "☁️",
      features: [
        "AWS/Azure/GCP architecture",
        "Serverless computing",
        "Cloud migration",
        "Hybrid cloud solutions"
      ],
      bgColor: "bg-white",
      accentColor: "from-blue-600 to-cyan-500",
      borderColor: "border-gray-200"
    },
    {
      title: "Recruitment & Staffing",
      description: "Top-tier talent acquisition and workforce solutions for your technical needs.",
      icon: "👔",
      features: [
        "Technical recruitment",
        "Executive search",
        "Contract staffing",
        "Talent pipeline development"
      ],
      bgColor: "bg-white",
      accentColor: "from-amber-600 to-orange-500",
      borderColor: "border-gray-200"
    },
    {
      title: "Corporate Training",
      description: "Upskill your workforce with customized training programs.",
      icon: "🎓",
      features: [
        "Technical skill development",
        "Leadership training",
        "Certification programs",
        "Workshops & bootcamps"
      ],
      bgColor: "bg-white",
      accentColor: "from-green-600 to-emerald-500",
      borderColor: "border-gray-200"
    },
    {
      title: "Project Support",
      description: "Comprehensive support for your critical technology initiatives.",
      icon: "🛠️",
      features: [
        "Project management",
        "Technical consulting",
        "Quality assurance",
        "Implementation support"
      ],
      bgColor: "bg-white",
      accentColor: "from-pink-600 to-rose-500",
      borderColor: "border-gray-200"
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights with powerful analytics solutions.",
      icon: "📊",
      features: [
        "Business intelligence",
        "Data visualization",
        "ETL pipelines",
        "Real-time analytics"
      ],
      bgColor: "bg-white",
      accentColor: "from-indigo-600 to-blue-500",
      borderColor: "border-gray-200"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline development cycles with robust CI/CD pipelines and automated workflows.",
      icon: "⚙️",
      features: [
        "CI/CD pipelines",
        "Infrastructure as Code",
        "Monitoring & logging",
        "Automation scripting"
      ],
      bgColor: "bg-white",
      accentColor: "from-teal-600 to-cyan-500",
      borderColor: "border-gray-200"
    },
    {
      title: "UI/UX Design",
      description: "Craft intuitive and engaging digital experiences with user-centered design strategies.",
      icon: "🎨",
      features: [
        "Wireframing & prototyping",
        "User research",
        "Responsive design",
        "Design systems"
      ],
      bgColor: "bg-white",
      accentColor: "from-pink-500 to-fuchsia-500",
      borderColor: "border-gray-200"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with robust security assessments and compliance services.",
      icon: "🔐",
      features: [
        "Vulnerability assessments",
        "Penetration testing",
        "Security monitoring",
        "Compliance management"
      ],
      bgColor: "bg-white",
      accentColor: "from-red-600 to-yellow-500",
      borderColor: "border-gray-200"
    }
  ];

  return (
    <section className="py-0 px-0 bg-gray-50" ref={ref}>
      <div className="relative min-h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/servicesHero.jpg')",
            backgroundPosition: 'center 20%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-blue-100/50"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 w-full text-center py-24 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Enterprise <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">Professional Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive solutions for your most complex business challenges
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 mt-[-60px] relative z-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative h-full ${service.bgColor} rounded-xl border ${service.borderColor} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accentColor} flex items-center justify-center text-3xl mb-6 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
   <EngagementModel/>

        <WhySection/>

        <FAQSection/>

        {/* CTA Section */}
       {/* RV IT Banner CTA Section */}
<motion.div 
  className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl overflow-hidden my-16 shadow-xl"
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  {/* Background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('/patterns/circuit-lines.svg')] bg-[length:200px_200px]"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
  </div>

  {/* Decorative elements */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full filter blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/20 rounded-full filter blur-3xl"></div>

  <div className="relative z-10 px-8 py-12 md:py-16 lg:py-20 text-center">
    <div className="max-w-4xl mx-auto">
      <motion.h3 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white">
          Ready to Accelerate Your Digital Transformation?
        </span>
      </motion.h3>
      
      <motion.p 
        className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        RV IT delivers cutting-edge solutions tailored to your business needs. Partner with us today.
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        {/* Primary CTA */}
        <Link href="/request-consultation">
          <button className="flex items-center justify-center px-8 py-4 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            <span>Get Started Now</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </Link>

        {/* Secondary CTA */}
        <Link href="/contactUs">
          <button className="flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:border-white hover:bg-white/10 transition-all transform hover:-translate-y-1">
            <span>Speak to an Expert</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </button>
        </Link>
      </motion.div>

      {/* Trust indicators */}
      <motion.div 
        className="mt-12 flex flex-wrap justify-center items-center gap-6 text-blue-200 text-sm"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Trusted by 200+ Enterprises
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          Global level Certified
        </div>
      </motion.div>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default ProfessionalServices;