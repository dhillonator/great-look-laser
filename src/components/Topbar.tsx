"use client"

import React from 'react';
import { Menu, X } from 'lucide-react';
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
    <>
      {/* Fixed top nav bar - more compact for mobile */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#f5f0e5]/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo/Brand */}
            <div className={`font-semibold text-lg ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              Great Look Laser
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-white/80'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`text-sm transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-white/80'
                }`}
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className={`text-sm transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-white/80'
                }`}
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-sm transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-white/80'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu - overlays content instead of pushing it down */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 pt-14 z-40 bg-black/90 backdrop-blur-md flex flex-col justify-center items-center menu-fullscreen">
          <div className="flex flex-col gap-8 text-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white text-xl font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-white text-xl font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white text-xl font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white text-xl font-medium"
            >
              Contact
            </button>
            <button 
              onClick={openCalendly}
              className="mt-4 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-lg text-white font-medium transition-colors shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}