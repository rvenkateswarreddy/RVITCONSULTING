import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | RV IT Consulting',
  description: 'RV IT Consulting Terms of Service - Legal terms and conditions for using our website and services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the 
                RV IT Consulting website, services, and applications (the "Service") 
                operated by RV IT Consulting ("us," "we," or "our").
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By accessing or using our Service, you agree to be bound by these Terms. 
                If you disagree with any part of these terms, then you may not access 
                the Service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-700 leading-relaxed">
                RV IT Consulting provides IT consulting services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>IT consulting and strategy development</li>
                <li>Cloud solutions and migration services</li>
                <li>Cybersecurity assessments and implementations</li>
                <li>Data analytics and business intelligence</li>
                <li>Software development and customization</li>
                <li>Corporate training programs</li>
                <li>Project support and management</li>
                <li>Global recruitment services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
              <p className="text-gray-700 leading-relaxed">
                When you create an account with us, you must provide information that is 
                accurate, complete, and current at all times. You are responsible for 
                safeguarding the password that you use to access the Service and for any 
                activities or actions under your password.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                You agree not to disclose your password to any third party. You must notify 
                us immediately upon becoming aware of any breach of security or unauthorized 
                use of your account.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Conduct</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>Harass, abuse, insult, harm, defame, or discriminate against others</li>
                <li>Submit false or misleading information</li>
                <li>Upload viruses or other malicious code</li>
                <li>Spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>Interfere with or circumvent the security features of the Service</li>
                <li>Use the Service for any fraudulent or unlawful purpose</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service and its original content, features, and functionality are and 
                will remain the exclusive property of RV IT Consulting and its licensors. 
                The Service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our trademarks and trade dress may not be used in connection with any 
                product or service without the prior written consent of RV IT Consulting.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User-Generated Content</h2>
              <p className="text-gray-700 leading-relaxed">
                You may provide feedback, comments, suggestions, or ideas ("Feedback") to us. 
                You acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>Feedback is non-confidential and shall become our sole property</li>
                <li>We shall have no obligation of any kind with respect to Feedback</li>
                <li>We may use Feedback for any purpose without compensation or attribution to you</li>
                <li>You waive any rights you may have in the Feedback</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services and Payments</h2>
              <p className="text-gray-700 leading-relaxed">
                Certain services or features may require payment. You agree to provide current, 
                complete, and accurate purchase and account information for all purchases made 
                through our Service.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                You agree to promptly update your account and other information, including 
                your email address and credit card numbers and expiration dates, so that we 
                can complete your transactions and contact you as needed.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We reserve the right to refuse or cancel any order for any reason, including 
                but not limited to: product availability, errors in the description or price 
                of the product, error in your order, or if we suspect fraud or an unauthorized 
                or illegal transaction.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation and Refunds</h2>
              <p className="text-gray-700 leading-relaxed">
                All sales are final unless otherwise specified. Refunds, if any, will be 
                handled on a case-by-case basis and at our sole discretion. For service 
                cancellations, please refer to our specific service agreements or contact 
                our customer support team.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                Both parties agree to maintain confidentiality of all proprietary information 
                shared during the course of business. This includes but is not limited to 
                business strategies, technical information, client data, and any other 
                information marked as confidential.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                IN NO EVENT SHALL RV IT CONSULTING, OUR DIRECTORS, EMPLOYEES, PARTNERS, 
                AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, 
                LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING 
                FROM YOUR USE OF THE SERVICE.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                OUR TOTAL LIABILITY TO YOU FOR ANY CAUSE OF ACTION WHATSOEVER, AND REGARDLESS 
                OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, 
                IF ANY, BY YOU TO US FOR THE SERVICE DURING THE TERM OF YOUR ACCOUNT.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                THE SERVICE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. WE MAKE NO 
                REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE 
                OPERATION OF OUR SERVICE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS 
                INCLUDED ON THIS SERVICE.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                YOU EXPRESSLY AGREE THAT YOUR USE OF OUR SERVICE IS AT YOUR SOLE RISK.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of 
                New York, United States, without regard to its conflict of law provisions. 
                Any disputes arising from these Terms shall be resolved in the courts of 
                New York, United States.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these 
                Terms at any time. If a revision is material, we will try to provide at 
                least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                What constitutes a material change will be determined at our sole discretion. 
                By continuing to access or use our Service after those revisions become 
                effective, you agree to be bound by the revised terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@rvit.co.in</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700"><strong>Address:</strong> RV IT Consulting, 123 Business Ave, Suite 100, New York, NY 10001</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is held to be unenforceable or invalid, 
                such provision will be changed and interpreted to accomplish the objectives 
                of such provision to the greatest extent possible under applicable law 
                and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms constitute the entire agreement between you and RV IT Consulting 
                regarding your use of the Service and supersede all prior and contemporaneous 
                written or oral agreements between you and RV IT Consulting.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
