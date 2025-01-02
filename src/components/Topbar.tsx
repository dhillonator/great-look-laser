"use client"

import React from 'react';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const openCalendly = () => {
    window.location.href = 'https://calendly.com/baljinder-glls';
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white/90 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-white text-sm transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-white/90 hover:text-white text-sm transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white/90 hover:text-white text-sm transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-white text-sm transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Book Now Button - Always visible */}
          <button 
            onClick={openCalendly}
            className="bg-gradient-to-r from-rose-500 to-purple-600 px-4 py-1.5 rounded-full text-sm text-white font-medium hover:opacity-90 transition-opacity"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/10">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white/90 hover:text-white py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-white/90 hover:text-white py-2"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-white/90 hover:text-white py-2"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white/90 hover:text-white py-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}