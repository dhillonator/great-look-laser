"use client"

import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const openCalendly = () => {
    window.location.href = 'https://calendly.com/baljinder-glls';
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <div className="relative px-4 py-12">
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-rose-500/20 to-purple-600/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-lg text-white/60 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Professional laser hair removal treatments customized for women in a private, comfortable setting.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid gap-6">
          {/* Face Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-rose-500/10 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold">Face</h3>
            </div>
            <ul className="space-y-4">
              {['Upper Lip', 'Chin', 'Full Face'].map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span className="text-white/60">{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Body Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-500/10 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold">Body</h3>
            </div>
            <ul className="space-y-4">
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

      {/* Treatment Process */}
      <div className="bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">Treatment Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Consultation', description: 'Free consultation to assess your skin type and discuss treatment options.' },
              { step: '2', title: 'Treatment', description: 'Quick and effective sessions using advanced laser technology.' },
              { step: '3', title: 'Results', description: 'Progressive reduction in hair growth with each session.' }
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/60 mb-8">
              Book your free consultation today and take the first step towards permanent hair reduction.
            </p>
            <button
              onClick={openCalendly}
              className="bg-gradient-to-r from-rose-500 to-purple-600 px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Book Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}