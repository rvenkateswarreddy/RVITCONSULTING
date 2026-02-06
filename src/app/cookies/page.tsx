import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | RV IT Consulting',
  description: 'RV IT Consulting Cookie Policy - Learn how we use cookies and similar technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are stored on your device (computer, 
                tablet, or mobile) when you visit a website. They are widely used to 
                make websites work more efficiently and to provide information to website 
                owners.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This Cookie Policy explains how RV IT Consulting ("we," "us," or "our") 
                uses cookies and similar technologies when you visit our website 
                rvit.co.in ("Website").
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies for various purposes to enhance your experience on our Website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our Website</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and content</li>
                <li><strong>Analytics Cookies:</strong> Help us analyze website usage and improve our services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are necessary for the Website to function and cannot be 
                switched off in our systems. They are usually only set in response to 
                actions made by you which amount to a request for services.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Authentication and security</li>
                <li>Shopping cart contents</li>
                <li>Load balancing</li>
                <li>Privacy preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">Performance Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies allow us to count visits and traffic sources so we can 
                measure and improve the performance of our Website. They help us to know 
                which pages are the most and least popular and see how visitors move 
                around the Website.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Google Analytics</li>
                <li>Hotjar</li>
                <li>Custom analytics scripts</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">Functional Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies enable the Website to provide enhanced functionality and 
                personalization. They may be set by us or by third-party providers whose 
                services we have added to our pages.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Language preferences</li>
                <li>Remembering your login details</li>
                <li>Customized content display</li>
                <li>Social media integration</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">Marketing Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies may be set through our site by our advertising partners to 
                build a profile of your interests and show you relevant advertisements 
                on other sites.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Google Ads</li>
                <li>Facebook Pixel</li>
                <li>LinkedIn Insight Tag</li>
                <li>Retargeting cookies</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                In some special cases we also use cookies provided by trusted third parties. 
                The following section details which third-party cookies you might encounter 
                through this site.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">Google Analytics</h3>
              <p className="text-gray-700 leading-relaxed">
                Our Website uses Google Analytics to analyze how visitors use our site. 
                Google Analytics uses cookies to collect information such as how often users 
                visit this site, what pages they visit, and what other sites they used 
                prior to coming to this site.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">Social Media Cookies</h3>
              <p className="text-gray-700 leading-relaxed">
                We may integrate social media plugins (Facebook, Twitter, LinkedIn, etc.) 
                on our Website. These plugins may set cookies on your device to track 
                your interactions with social media content.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have several options to manage cookies:
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. 
                You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Accept all cookies</li>
                <li>Reject all cookies</li>
                <li>Delete existing cookies</li>
                <li>Block third-party cookies</li>
                <li>Set notifications when cookies are sent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Please note that blocking or deleting cookies may affect your user experience 
                and may prevent you from using certain features of our Website.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">Cookie Consent Banner</h3>
              <p className="text-gray-700 leading-relaxed">
                When you first visit our Website, you will see a cookie consent banner 
                where you can choose which types of cookies you want to accept. You can 
                change your preferences at any time by clicking on the cookie settings 
                link in the footer of our Website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Duration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies can be categorized based on their duration:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                The specific duration of each cookie is determined by its purpose and 
                the technology used. You can find detailed information about cookie 
                durations in your browser settings.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights Regarding Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have the following rights regarding cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li><strong>Right to Information:</strong> Know what cookies are being used and for what purpose</li>
                <li><strong>Right to Consent:</strong> Choose whether to accept non-essential cookies</li>
                <li><strong>Right to Withdraw:</strong> Change your cookie preferences at any time</li>
                <li><strong>Right to Object:</strong> Object to certain types of cookies, particularly marketing cookies</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Cookie Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in 
                our use of cookies or in applicable law. We will notify you of any 
                material changes by posting the updated policy on our Website and updating 
                the "Last updated" date.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We encourage you to review this Cookie Policy periodically to stay informed 
                about our use of cookies and similar technologies.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> privacy@rvit.co.in</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700"><strong>Address:</strong> RV IT Consulting, 123 Business Ave, Suite 100, New York, NY 10001</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Useful Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For more information about cookies and how to manage them, you may find 
                these resources helpful:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><a href="https://www.allaboutcookies.org/" className="text-blue-600 hover:underline">All About Cookies</a></li>
                <li><a href="https://www.google.com/policies/privacy/partners/" className="text-blue-600 hover:underline">Google Privacy & Terms</a></li>
                <li><a href="https://youronlinechoices.com/" className="text-blue-600 hover:underline">Your Online Choices</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
