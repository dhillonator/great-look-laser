"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/baljinder-glls'
      });
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-purple-600">
            Great Look Laser
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-600 hover:text-purple-600">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-purple-600">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-purple-600">
              Contact
            </Link>
            <button 
              onClick={openCalendly}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book Now
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href="/services" 
              className="block text-gray-600 hover:text-purple-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/pricing" 
              className="block text-gray-600 hover:text-purple-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-600 hover:text-purple-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button 
              onClick={openCalendly}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}