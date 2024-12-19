"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, Info, Calendar } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function ServicesPage() {
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
      <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-violet-50 overflow-hidden py-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Professional laser hair removal treatments customized for women in a private, comfortable setting. 
            Experience lasting results with our state-of-the-art technology.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-10">
        {/* Treatment Areas Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Treatment Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-50">
              <h3 className="text-xl font-semibold mb-6">Face & Neck</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                  <span className="text-gray-600">Upper Lip</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                  <span className="text-gray-600">Chin</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                  <span className="text-gray-600">Full Face</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-50">
              <h3 className="text-xl font-semibold mb-6">Body</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-gray-600">Full Arms</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-gray-600">Full Legs</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-gray-600">Brazilian</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Treatment Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-violet-50">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors">
                <span className="text-violet-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Consultation</h3>
              <p className="text-gray-600">
                Free consultation to assess your skin type and discuss treatment options.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-violet-50">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors">
                <span className="text-violet-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Treatment</h3>
              <p className="text-gray-600">
                Quick and effective sessions using advanced laser technology.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-violet-50">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors">
                <span className="text-violet-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Results</h3>
              <p className="text-gray-600">
                Progressive reduction in hair growth with each session.
              </p>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <div className="group bg-gradient-to-br from-pink-50/50 to-purple-50/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100/50">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-4">Important Information</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>We provide laser hair removal services exclusively for female clients</li>
                  <li>Multiple sessions recommended for optimal results</li>
                  <li>Treatment plans customized to your specific needs</li>
                  <li>Free consultation available to discuss your goals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
    </div>
  );
}