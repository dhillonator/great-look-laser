"use client"

import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const openCalendly = () => {
    window.location.href = 'https://calendly.com/baljinder-glls';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 relative">
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-rose-500/20 to-purple-600/20 rounded-full blur-3xl" />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Great Look Laser
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-3xl mb-8 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Goodbye, Unwanted Hair.
        </motion.p>

        <motion.div 
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button 
            onClick={openCalendly}
            className="bg-gradient-to-r from-rose-500 to-purple-600 px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Book Now
          </button>
          <a 
            href="/faq"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-all"
          >
            Learn more
          </a>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-0 right-0 text-center text-base text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Women Only
        </motion.div>
      </div>

      {/* Info Section */}
      <div className="bg-neutral-950 py-16">
        <div className="max-w-5xl mx-auto px-4">
          {/* Quick Info Cards */}
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="bg-rose-500/10 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Extended Hours</h3>
                  <p className="text-white/60 text-sm mt-1">
                    Open Daily: 8AM - 8PM
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-white/60 text-sm mt-1">
                    8925 135A St, Surrey<br />
                    Client entrance on right side
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-black py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">Our Services</h2>
          
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Face</h3>
              <ul className="space-y-3">
                {['Upper Lip', 'Chin', 'Full Face'].map((area) => (
                  <li key={area} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span className="text-white/60">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Body</h3>
              <ul className="space-y-3">
                {['Full Arms', 'Full Legs', 'Brazilian'].map((area) => (
                  <li key={area} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span className="text-white/60">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-neutral-950 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">Contact Us</h2>

          <div className="grid gap-6">
            <motion.a
              href="tel:604-723-9281"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 block border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="bg-rose-500/10 p-2 rounded-lg">
                  <Star className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Call Us</h3>
                  <p className="text-white/60 text-sm mt-1">
                    (604) 723-9281
                  </p>
                </div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Hours</h3>
                  <p className="text-white/60 text-sm mt-1">
                    Monday - Sunday
                    <br />
                    8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}