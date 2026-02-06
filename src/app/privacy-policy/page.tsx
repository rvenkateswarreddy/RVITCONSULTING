import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RV IT Consulting',
  description: 'RV IT Consulting Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                RV IT Consulting ("we," "us," or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website rvit.co.in and use our services.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using our website and services, you consent to the data practices described 
                in this policy. If you do not agree with the terms of this privacy policy, 
                please do not access or use our website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personally identifiable information, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company information and job title</li>
                <li>Account credentials (username, password)</li>
                <li>Payment information (processed through secure third-party payment processors)</li>
                <li>Communication records (emails, chat transcripts, support tickets)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">Technical Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect certain technical information when you visit our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IP address and geolocation data</li>
                <li>Browser type, operating system, and device information</li>
                <li>Pages visited, time spent, and click patterns</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Referring website and search terms</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Communicating with you about services, updates, and support</li>
                <li>Personalizing your experience and improving our website</li>
                <li>Analyzing website usage and optimizing our services</li>
                <li>Detecting and preventing fraud, abuse, and security issues</li>
                <li>Complying with legal obligations</li>
                <li>Marketing and promotional communications (with your consent)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Service Providers</h3>
              <p className="text-gray-700 leading-relaxed">
                We may share your information with third-party service providers who perform 
                services on our behalf, such as payment processing, data analytics, email 
                delivery, hosting services, and customer service. These providers are 
                contractually obligated to protect your information and only use it for 
                the purposes specified by us.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information when required by law or in good faith belief 
                that such action is necessary to comply with legal obligations, protect and 
                defend our rights, property, or safety, or that of our users or the public.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">Business Transfers</h3>
              <p className="text-gray-700 leading-relaxed">
                In the event of a merger, acquisition, or sale of all or part of our assets, 
                user information may be transferred as part of the transaction. We will 
                notify you of any such transfer that affects your rights.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect 
                your information against unauthorized access, alteration, disclosure, or 
                destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure data storage and access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                However, no method of transmission over the internet or method of electronic 
                storage is 100% secure. While we strive to use commercially acceptable means 
                to protect your information, we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience 
                on our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and content</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling 
                cookies may affect your ability to use certain features of our website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information only as long as necessary to fulfill the 
                purposes for which it was collected, including legal, accounting, or reporting 
                requirements. When no longer needed, we will securely delete or anonymize your 
                information in accordance with applicable laws.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than 
                your own. We ensure appropriate safeguards are in place for such transfers, 
                including standard contractual clauses or other legally recognized mechanisms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website and services are not intended for individuals under the age of 13. 
                We do not knowingly collect personal information from children under 13. 
                If you become aware that a child has provided us with personal information, 
                please contact us immediately.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new policy on this page and updating the "Last 
                updated" date. You are advised to review this Privacy Policy periodically 
                for any changes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> privacy@rvit.co.in</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700"><strong>Address:</strong> RV IT Consulting, 123 Business Ave, Suite 100, New York, NY 10001</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
