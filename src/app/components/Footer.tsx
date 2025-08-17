"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black border-t border-gray-200 pt-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-2">
              <Image
                src="/assets/logo.png"
                alt="RV IT Logo"
                width={60}
                height={50}
              
                priority
              />
             
            </div>
            <p className="text-black text-base">
              5 years of Enterprise-level expertise serving diverse industries with cutting-edge IT solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/rvitconsulting" aria-label="LinkedIn" className="text-black hover:text-cyan-500 transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://twitter.com/rvitconsulting" aria-label="Twitter" className="text-black hover:text-cyan-500 transition-colors">
                <Twitter size={22} />
              </a>
              <a href="https://facebook.com/rvitconsulting" aria-label="Facebook" className="text-black hover:text-cyan-500 transition-colors">
                <Facebook size={22} />
              </a>
              <a href="https://instagram.com/rvitconsulting" aria-label="Instagram" className="text-black hover:text-cyan-500 transition-colors">
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-black hover:text-cyan-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-black hover:text-cyan-500 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-cyan-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-cyan-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/it-consulting" className="text-black hover:text-cyan-500 transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/cloud-solutions" className="text-black hover:text-cyan-500 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/cybersecurity" className="text-black hover:text-cyan-500 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/data-analytics" className="text-black hover:text-cyan-500 transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/software-development" className="text-black hover:text-cyan-500 transition-colors">
                  Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-black">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1 text-cyan-500" size={18} />
                <span className="text-black">123 Tech Park, Silicon Valley, CA 94025</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-cyan-500" size={18} />
                <a href="mailto:contact@rvit.co.in" className="text-black hover:text-cyan-500 transition-colors">
                  contact@rvit.co.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-cyan-500" size={18} />
                <a href="tel:+18005551234" className="text-black hover:text-cyan-500 transition-colors">
                  +1 (800) 555-1234
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-cyan-500" size={18} />
                <span className="text-black">Mon-Fri: 9AM - 6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12"></div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} RV IT CONSULTING. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-cyan-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-cyan-500 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-cyan-500 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}