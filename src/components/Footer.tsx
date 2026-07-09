import React from 'react';
import { Plane, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-black p-2 rounded-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif italic font-medium text-2xl tracking-tight">MAKEITMYTOUR</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting unforgettable travel experiences and adventures for wanderlust souls around the globe.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/makeitmytour" className="bg-gray-800 p-2 rounded-full hover:bg-black transition-all shadow-md">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-black transition-all shadow-md">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-black transition-all shadow-md">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Upcoming Trips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Travel Street, Adventure City, World 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-300 shrink-0" />
                <span className="text-gray-400">+91 8700069811 (Mr. Varun)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-300 shrink-0" />
                <span className="text-gray-400">hello@makeitmytour.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MAKEITMYTOUR. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
