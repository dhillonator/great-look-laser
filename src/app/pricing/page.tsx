"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, Star, Calendar } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function PricingPage() {
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
            Our Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Below are our most popular treatment packages. We understand everyone's needs are unique - 
            contact us to create a customized package that's perfect for you.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Full Body Package */}
          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-bl-2xl">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-4">Full Body Package</h3>
            <div className="text-3xl font-bold text-violet-600 mb-6">$300</div>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-gray-600">Complete full body coverage</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-gray-600">Maximum value savings</span>
              </li>
            </ul>
          </div>

          {/* Premium Combo */}
          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-50">
            <h3 className="text-xl font-semibold mb-4">Premium Combo</h3>
            <div className="text-3xl font-bold text-violet-600 mb-6">$100</div>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-gray-600">Full face treatment</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-gray-600">Full arms included</span>
              </li>
            </ul>
          </div>

          {/* Lower Body Package */}
          <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-violet-50">
            <h3 className="text-xl font-semibold mb-4">Lower Body Package</h3>
            <div className="text-3xl font-bold text-violet-600 mb-6">$150</div>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                <span className="text-gray-600">Full legs treatment</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                <span className="text-gray-600">Brazilian included</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Package Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group bg-gradient-to-br from-pink-50/50 to-purple-50/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100/50">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors">
              <Star className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Free Consultation</h3>
            <p className="text-gray-600">Personalized treatment planning with skin assessment</p>
          </div>

          <div className="group bg-gradient-to-br from-purple-50/50 to-violet-50/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Book your sessions at your convenience</p>
          </div>

          <div className="group bg-gradient-to-br from-violet-50/50 to-pink-50/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100/50">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors">
              <Star className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Expert Care</h3>
            <p className="text-gray-600">Treatment by licensed professionals</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
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
        </div>
      </div>
    </div>
  );
}