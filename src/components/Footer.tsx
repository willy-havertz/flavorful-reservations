import React from 'react';
import { MapPin, Phone, Mail, Globe, Share2, UtensilsCrossed, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-white pt-24 pb-12 px-6 border-t border-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-2 rounded-lg text-white">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold text-orange-950">L'Artisane</span>
            </div>
            <p className="text-orange-900/60 leading-relaxed">
              Crafting unforgettable culinary memories through passion, precision, and the finest local ingredients.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-orange-950 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Our Menu', 'Reservations', 'Private Events', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-orange-900/60 hover:text-orange-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-orange-950 mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-orange-900/60">123 Gourmet Avenue, Culinary District, FL 33101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-orange-900/60">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-orange-900/60">hello@lartisane.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-orange-950 mb-6">Our Location</h4>
            <div className="h-48 bg-orange-100 rounded-3xl overflow-hidden grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="w-8 h-8 text-orange-600 mb-2" />
                <p className="text-xs font-bold text-orange-950">Click to view in Google Maps</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-orange-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-orange-900/40 text-sm">
            © 2024 L'Artisane Restaurant. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-orange-900/40">
            <a href="#" className="hover:text-orange-600">Privacy Policy</a>
            <a href="#" className="hover:text-orange-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};