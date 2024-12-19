"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Phone, Clock, MapPin, Star, Calendar } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Book your free consultation today or reach out with any questions about our services.
          </p>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Card */}
          <div className="space-y-6">
            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-50">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                    <Phone className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Phone</h3>
                    <a href="tel:604-723-9281" className="text-gray-600 hover:text-pink-600 transition-colors">
                      (604) 723-9281
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Location</h3>
                    <a 
                      href="https://maps.google.com/?q=8925+135A+St,+Surrey,+BC+V3V+5V2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      8925 135A St<br />
                      Surrey, BC V3V 5V2
                    </a>
                    <p className="text-gray-600 mt-1">
                      Client entrance on right side of house
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-violet-200 transition-colors">
                    <Clock className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Business Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Sunday</p>
                      <p>8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="group bg-gradient-to-br from-pink-50/50 to-purple-50/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100/50">
              <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
              <p className="mb-6 text-gray-600">
                Call us now for a free consultation or book your appointment online.
              </p>
              <button 
                onClick={openCalendly}
                className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-50 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.8511749214307!2d-122.84427542356186!3d49.16428198695977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9ee362f0495%3A0x9f75f3a4f6982a56!2s8925%20135A%20St%2C%20Surrey%2C%20BC%20V3V%205V2!5e0!3m2!1sen!2sca!4v1702300784595!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group bg-gradient-to-br from-pink-50/50 to-purple-50/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100/50">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors">
              <Star className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Free Parking</h3>
            <p className="text-gray-600">Convenient parking available on premises</p>
          </div>

          <div className="group bg-gradient-to-br from-purple-50/50 to-violet-50/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Private Entrance</h3>
            <p className="text-gray-600">Dedicated client entrance for your convenience</p>
          </div>

          <div className="group bg-gradient-to-br from-violet-50/50 to-pink-50/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100/50">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors">
              <Star className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Professional Care</h3>
            <p className="text-gray-600">Expert service in a comfortable environment</p>
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
    </div>
  );
}