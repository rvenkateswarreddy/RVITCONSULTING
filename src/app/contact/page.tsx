import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe } from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | RV IT Consulting',
  description: 'Get in touch with RV IT Consulting. Contact us for IT consulting, corporate training, project support, and recruitment services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge IT solutions? 
              We're here to help you achieve your technology goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@rvit.co.in</p>
                    <p className="text-gray-600">support@rvit.co.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567 (USA)</p>
                    <p className="text-gray-600">+91 98765 43210 (India)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Locations</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>USA:</strong> New York, NY<br />
                      <strong>Canada:</strong> Toronto, ON<br />
                      <strong>Luxembourg:</strong> Luxembourg City<br />
                      <strong>India:</strong> Hyderabad, Telangana
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 2:00 PM EST<br />
                      Sunday: Closed<br />
                      <span className="text-blue-600 font-semibold">24/7 Emergency Support Available</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Areas</h3>
                    <p className="text-gray-600">
                      USA, Canada, Luxembourg, India, and Global Remote Support
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="mt-8 space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Quick Response</h4>
                  <p className="text-blue-700 text-sm">
                    We typically respond to inquiries within 2-4 business hours.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Free Consultation</h4>
                  <p className="text-green-700 text-sm">
                    Get a complimentary 30-minute consultation for your IT needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
            <p className="text-xl text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MessageSquare className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Chat with our experts in real-time for quick questions and support.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Start Chat →
              </button>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Mail className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Send detailed inquiries and receive comprehensive responses from our team.
              </p>
              <a href="mailto:contact@rvit.co.in" className="text-blue-600 font-semibold hover:text-blue-700">
                Email Us →
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Phone className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Consultation</h3>
              <p className="text-gray-600 mb-4">
                Schedule a call with our consultants to discuss your project in detail.
              </p>
              <a href="tel:+15551234567" className="text-blue-600 font-semibold hover:text-blue-700">
                Call Now →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
