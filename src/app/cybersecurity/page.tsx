import { Metadata } from 'next';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, ShieldCheck, Key, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | RV IT Consulting',
  description: 'Comprehensive cybersecurity solutions to protect your business. Security assessments, penetration testing, compliance management, and 24/7 monitoring.',
};

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cyber<span className="text-yellow-300">security</span>
              </h1>
              <p className="text-xl text-red-100 mb-8">
                Protect your digital assets with enterprise-grade security solutions. 
                Our experts safeguard your business against evolving cyber threats 
                with comprehensive security strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Get Protected
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-red-100">Security Audits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-red-100">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-red-100">Security Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">0</div>
                    <div className="text-red-100">Breaches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Security Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-layered security approach ensures your business is protected 
              from all angles against modern cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Shield className="text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proactive Defense</h3>
              <p className="text-gray-600">
                Advanced threat detection and prevention systems that stop attacks before they impact your business.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Eye className="text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Monitoring</h3>
              <p className="text-gray-600">
                24/7 security monitoring and real-time threat intelligence to keep your systems secure.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <AlertTriangle className="text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                Incident response team ready to contain and remediate security breaches within minutes.
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
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end security solutions tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <ShieldCheck className="text-red-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Assessment</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive evaluation of your security posture to identify vulnerabilities 
                    and recommend improvements.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Vulnerability Scanning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Risk Assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Security Gap Analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Lock className="text-red-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Penetration Testing</h3>
                  <p className="text-gray-600 mb-4">
                    Simulated cyber attacks to test your defenses and identify security weaknesses 
                    before malicious actors exploit them.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Network Penetration Testing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Web Application Testing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Social Engineering Tests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <Key className="text-red-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Identity & Access Management</h3>
                  <p className="text-gray-600 mb-4">
                    Secure user access management with multi-factor authentication and 
                    role-based access controls.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Multi-Factor Authentication</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Single Sign-On (SSO)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">Privileged Access Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <FileText className="text-red-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Management</h3>
                  <p className="text-gray-600 mb-4">
                    Ensure your business meets industry standards and regulatory requirements 
                    with comprehensive compliance solutions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">GDPR Compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">HIPAA Compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">SOC 2 Type II</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Frameworks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Frameworks & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow industry best practices and international security standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'NIST Cybersecurity Framework', desc: 'Comprehensive risk-based approach' },
              { name: 'ISO 27001', desc: 'Information security management' },
              { name: 'CIS Controls', desc: 'Critical security controls' },
              { name: 'OWASP Top 10', desc: 'Web application security' }
            ].map((framework) => (
              <div key={framework.name} className="bg-gray-50 p-6 rounded-lg text-center">
                <Shield className="text-red-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">{framework.name}</h3>
                <p className="text-gray-600 text-sm">{framework.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Protection Against Modern Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced defense mechanisms against evolving cyber threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Ransomware Protection',
              'Phishing Defense',
              'Malware Detection',
              'DDoS Mitigation',
              'Data Loss Prevention',
              'Advanced Persistent Threats'
            ].map((threat) => (
              <div key={threat} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium text-gray-900">{threat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Security Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to securing your digital infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assess</h3>
              <p className="text-gray-600">
                Evaluate current security posture and identify vulnerabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                Create comprehensive security architecture and policies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implement</h3>
              <p className="text-gray-600">
                Deploy security solutions and configure protective measures.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitor</h3>
              <p className="text-gray-600">
                Continuous monitoring and improvement of security controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't wait for a breach to happen. Protect your digital assets with our expert cybersecurity solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactus"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Security Assessment
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Security Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
