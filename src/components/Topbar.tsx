"use client"

import React from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackBooking, event } from '@/lib/analytics';

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    trackBooking();
    setIsMenuOpen(false);
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
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

  const navLinkClass = `font-sans text-xs tracking-widest uppercase transition-colors ${
    scrolled ? 'text-[#78716c] hover:text-[#1c1917]' : 'text-white/70 hover:text-white'
  }`;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#faf7f2] border-b border-[#e2d9cc]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center"
              aria-label="Great Look Laser — home"
            >
              {scrolled ? (
                <Image
                  src="/GLL-logo-transparent.png"
                  alt="Great Look Laser"
                  width={80}
                  height={44}
                  className="object-contain"
                  priority
                />
              ) : (
                <span className="font-serif text-lg tracking-wide text-white">
                  Great Look Laser
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-colors ${
                scrolled ? 'text-[#1c1917]' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('home')} className={navLinkClass}>
                Home
              </button>
              <button onClick={() => scrollToSection('pricing')} className={navLinkClass}>
                Services
              </button>
              <button onClick={() => scrollToSection('faq')} className={navLinkClass}>
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className={navLinkClass}>
                Contact
              </button>
              <button
                onClick={scrollToPricing}
                className={`font-sans text-xs tracking-widest uppercase pb-0.5 border-b transition-colors ${
                  scrolled
                    ? 'text-[#8b7355] border-[#8b7355] hover:text-[#1c1917] hover:border-[#1c1917]'
                    : 'text-white/80 border-white/40 hover:text-white hover:border-white'
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu — ivory panel */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#faf7f2] flex flex-col justify-center px-10">
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-6 text-[#1c1917]"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col gap-10">
            <Image
              src="/GLL-logo-transparent.png"
              alt="Great Look Laser"
              width={96}
              height={52}
              className="object-contain mb-2"
            />
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#8b7355] -mt-6">
              Navigation
            </p>
            {[
              { label: 'Home', id: 'home' },
              { label: 'Services', id: 'pricing' },
              { label: 'FAQ', id: 'faq' },
              { label: 'Contact', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="font-serif text-4xl font-light text-[#1c1917] text-left hover:text-[#8b7355] transition-colors"
              >
                {label}
              </button>
            ))}
            <button
              onClick={scrollToPricing}
              className="font-sans text-xs tracking-widest uppercase text-[#8b7355] border-b border-[#8b7355] pb-1 w-fit mt-4 hover:text-[#1c1917] hover:border-[#1c1917] transition-colors"
            >
              Book a Consultation →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
