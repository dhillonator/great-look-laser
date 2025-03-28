"use client"

import React from 'react';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackBooking, event } from '@/lib/analytics';

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for transparent to solid navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const openCalendly = () => {
    trackBooking();
    window.location.href = 'https://calendly.com/baljinder-glls';
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    event({
      action: 'navigation_click',
      category: 'Navigation',
      label: id
    });
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#f5f0e5] shadow-md text-gray-800' : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className={`font-semibold text-lg transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            Great Look Laser
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`text-sm hover:opacity-80 transition-colors ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`text-sm hover:opacity-80 transition-colors ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`text-sm hover:opacity-80 transition-colors ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`text-sm hover:opacity-80 transition-colors ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Book Now Button - Always visible */}
          <button 
            onClick={openCalendly}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-1.5 rounded-full text-sm text-white font-medium transition-colors shadow-sm"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 space-y-4 border-t ${
            scrolled ? 'border-orange-200' : 'border-white/10'
          }`}>
            <button 
              onClick={() => scrollToSection('home')}
              className={`block w-full text-left py-2 ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`block w-full text-left py-2 ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`block w-full text-left py-2 ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left py-2 ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}