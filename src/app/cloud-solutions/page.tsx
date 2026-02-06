import { Metadata } from 'next';
import { Cloud, Database, Shield, Zap, CheckCircle, ArrowRight, Server, Globe, Lock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Solutions | RV IT Consulting',
  description: 'Comprehensive cloud solutions including migration, management, and optimization. AWS, Azure, Google Cloud certified experts.',
};

export default function CloudSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-500 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud <span className="text-yellow-300">Solutions</span>
              </h1>
              <p className="text-xl text-cyan-100 mb-8">
                Transform your business with scalable, secure, and cost-effective 
                cloud solutions. Our certified experts help you leverage the full 
                potential of cloud computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">200+</div>
                    <div className="text-cyan-100">Cloud Migrations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">40%</div>
                    <div className="text-cyan-100">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-cyan-100">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-cyan-100">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified experts across all major cloud platforms to deliver the best solution for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-orange-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Amazon Web Services</h3>
              <p className="text-gray-600 mb-4">
                AWS certified solutions architects with expertise in EC2, S3, Lambda, and more.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700">Migration & Modernization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700">Serverless Architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700">Cost Optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Microsoft Azure</h3>
              <p className="text-gray-600 mb-4">
                Azure certified experts specializing in hybrid cloud and enterprise solutions.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700">Hybrid Cloud Setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700">Azure DevOps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700">Enterprise Integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-green-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Cloud Platform</h3>
              <p className="text-gray-600 mb-4">
                GCP certified professionals with expertise in data analytics and machine learning.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700">Data & Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700">Kubernetes Engine</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-gray-700">AI/ML Solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end cloud solutions from strategy to optimization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Database className="text-cyan-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Migration</h3>
                  <p className="text-gray-600 mb-4">
                    Seamless migration of your applications and infrastructure to the cloud 
                    with minimal downtime and maximum efficiency.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Assessment & Planning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Lift & Shift Migration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Re-architecture Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Server className="text-cyan-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Infrastructure Management</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive management of your cloud infrastructure to ensure optimal 
                    performance, security, and cost-efficiency.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">24/7 Monitoring & Support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Automated Scaling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Performance Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Shield className="text-cyan-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Security</h3>
                  <p className="text-gray-600 mb-4">
                    Enterprise-grade security solutions to protect your cloud assets and 
                    ensure compliance with industry standards.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Identity & Access Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Data Encryption</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Compliance Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Zap className="text-cyan-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">DevOps & Automation</h3>
                  <p className="text-gray-600 mb-4">
                    Accelerate your development cycles with automated CI/CD pipelines and 
                    infrastructure as code solutions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">CI/CD Pipeline Setup</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Infrastructure as Code</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Container Orchestration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Cloud Adoption
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with the power of cloud computing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Scalability</h3>
              <p className="text-gray-600">
                Scale resources up or down based on demand with automatic elasticity.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost Efficiency</h3>
              <p className="text-gray-600">
                Reduce infrastructure costs by 40% with pay-as-you-go pricing models.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Enhanced Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security with built-in compliance and data protection.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Deploy applications globally with low latency and high availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Cloud Adoption Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure successful cloud transformation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">
                Evaluate current infrastructure and identify cloud opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">
                Design cloud architecture and migration strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Migration</h3>
              <p className="text-gray-600">
                Execute migration with minimal business disruption.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">
                Fine-tune performance and optimize costs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Management</h3>
              <p className="text-gray-600">
                Ongoing monitoring and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Embrace the Cloud?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let&apos;s build a scalable, secure, and cost-effective cloud infrastructure for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactus"
              className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Cloud Journey
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
