import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactUs() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-gray-900 mb-3">
            <span className="italic font-serif font-medium text-gray-700">Get in</span> <span className="font-bold">Touch</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Have a question or need help planning your trip? We're here for you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-[#1a1a1a] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100 text-gray-900">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-lg">Our Office</h4>
                <p className="text-gray-600">123 Travel Lane, Adventure District<br/>New Delhi, 110001, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100 text-gray-900">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-lg">Call Us</h4>
                <p className="text-gray-600">+91 98765 43210<br/>Mon-Sat, 9AM to 6PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100 text-gray-900">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-lg">Email Us</h4>
                <p className="text-gray-600">hello@makeitmytour.com<br/>support@makeitmytour.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
