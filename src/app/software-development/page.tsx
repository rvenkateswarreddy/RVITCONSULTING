import { Metadata } from 'next';
import { Code, Smartphone, Globe, Database, CheckCircle, ArrowRight, Cpu, Layers, Rocket } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software Development Services | RV IT Consulting',
  description: 'Custom software development services. Web, mobile, and enterprise applications built with modern technologies and agile methodologies.',
};

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Software <span className="text-yellow-300">Development</span>
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Build custom software solutions that drive your business forward. 
                Our expert developers deliver high-quality applications tailored 
                to your unique requirements and business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Project
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">300+</div>
                    <div className="text-green-100">Applications Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-green-100">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">95%</div>
                    <div className="text-green-100">On-time Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-green-100">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custom Software Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we build scalable, secure, and innovative 
              software solutions that solve real business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Code className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Development</h3>
              <p className="text-gray-600">
                Tailored software solutions built from scratch to meet your specific 
                business needs and requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Rocket className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Agile Methodology</h3>
              <p className="text-gray-600">
                Iterative development approach with continuous feedback and rapid 
                delivery of working software.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Cpu className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Tech Stack</h3>
              <p className="text-gray-600">
                Cutting-edge technologies and frameworks to build robust, scalable, 
                and future-proof applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development solutions for all platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Globe className="text-green-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Application Development</h3>
                  <p className="text-gray-600 mb-4">
                    Build responsive, feature-rich web applications that deliver 
                    exceptional user experiences across all devices.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">React, Angular, Vue.js</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Node.js, Python, .NET</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Progressive Web Apps</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Smartphone className="text-green-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile App Development</h3>
                  <p className="text-gray-600 mb-4">
                    Create native and cross-platform mobile applications that engage 
                    users and drive business growth.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">iOS (Swift) & Android (Kotlin)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">React Native & Flutter</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">App Store Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Database className="text-green-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Software</h3>
                  <p className="text-gray-600 mb-4">
                    Develop scalable enterprise solutions that streamline operations 
                    and drive business efficiency.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">ERP & CRM Systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Supply Chain Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Business Intelligence Tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Layers className="text-green-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">API Development & Integration</h3>
                  <p className="text-gray-600 mb-4">
                    Build robust APIs and integrate third-party services to extend 
                    your application capabilities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">RESTful & GraphQL APIs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Third-party Integrations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Microservices Architecture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the latest technologies to build modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React.js</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>.NET Core</li>
                <li>Go</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mobile</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React Native</li>
                <li>Flutter</li>
                <li>Swift</li>
                <li>Kotlin</li>
                <li>Ionic</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Database</h3>
              <ul className="space-y-2 text-gray-600">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Redis</li>
                <li>Oracle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

          {/* Development Process */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Development Process
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Agile methodology for rapid, iterative development
                </p>
              </div>

              <div className="grid md:grid-cols-6 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                  <p className="text-gray-600">
                    Understand requirements and define scope.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
                  <p className="text-gray-600">
                    Create architecture and UI/UX designs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
                  <p className="text-gray-600">
                    Build features in iterative sprints.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing</h3>
                  <p className="text-gray-600">
                    Ensure quality through comprehensive testing.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment</h3>
                  <p className="text-gray-600">
                    Launch application to production.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">6</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
                  <p className="text-gray-600">
                    Ongoing maintenance and improvements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-green-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Build Your Custom Software Solution
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Let's turn your ideas into powerful software applications that drive business success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contactus"
                  className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </section>
      </div>
    );
}
