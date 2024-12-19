"use client"

import React from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function HomePage() {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/baljinder-glls'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-violet-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative py-24 max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Great Look Laser
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Experience the confidence of smooth, beautiful skin with our professional laser hair removal services in Surrey.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-50">
            <button 
              onClick={openCalendly}
              className="flex flex-col items-start w-full"
            >
              <div className="mb-4 p-3 bg-pink-50 rounded-xl w-fit group-hover:bg-pink-100 transition-colors">
                <Calendar className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Book Now</h3>
              <span 
                className="text-gray-600 hover:text-pink-600 cursor-pointer"
              >
                Online Booking Available
              </span>
            </button>
          </div>

          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-50">
            <div className="mb-4 p-3 bg-purple-50 rounded-xl w-fit group-hover:bg-purple-100 transition-colors">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Extended Hours</h3>
            <p className="text-gray-600">Open Daily: 8AM - 8PM</p>
          </div>

          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-violet-50">
            <div className="mb-4 p-3 bg-violet-50 rounded-xl w-fit group-hover:bg-violet-100 transition-colors">
              <MapPin className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
            <a 
              href="https://maps.google.com/?q=8925+135A+St+Surrey+BC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-violet-600"
            >
              8925 135A St, Surrey
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-5xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Professional Laser Hair Removal</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-gradient-to-br from-pink-50/50 to-purple-50/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100/50">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Why Choose Us</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-gray-600">State-of-the-art laser technology</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-gray-600">Experienced, licensed professionals</span>
              </li>
            </ul>
          </div>
          
          <div className="group bg-gradient-to-br from-purple-50/50 to-violet-50/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Treatment Areas</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-gray-600">Face and Body Treatments</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-gray-600">Full Body Packages Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">
          Book your appointment today and take the first step towards permanent hair reduction.
        </p>
        <button 
          onClick={openCalendly}
          className="inline-flex items-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-2xl hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <Calendar className="h-5 w-5" />
          Book Now
        </button>
      </section>
    </div>
  );
}