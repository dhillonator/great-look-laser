"use client"

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingPage() {
  const openCalendly = () => {
    window.location.href = 'https://calendly.com/baljinder-glls';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(88, 28, 135, 0.15), transparent 70%), radial-gradient(circle at bottom left, rgba(219, 39, 119, 0.15), transparent 70%)'
        }}
      />

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="pt-24 px-4 pb-12">
          <motion.div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-rose-500/20 to-purple-600/20 rounded-full blur-3xl" />
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Packages
            </motion.h1>
            <motion.p 
              className="text-lg text-white/60 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose from our popular packages or contact us for custom solutions.
            </motion.p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid gap-6">
            {/* Full Body Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-3 py-1 rounded-bl-lg text-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Body Package</h3>
              <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent mb-4">$300</div>
              <ul className="space-y-3">
                {[
                  'Complete coverage',
                  'Best value'
                ].map((feature, index) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span className="text-white/60">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Premium Combo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-2">Face + Full Arms</h3>
              <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent mb-4">$100</div>
              <ul className="space-y-3">
                {[
                  'Face treatment',
                  'Full arms included'
                ].map((feature, index) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span className="text-white/60">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Face + Underarms Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-2">Face + Underarms Only</h3>
              <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent mb-4">$50</div>
              <ul className="space-y-3">
                {[
                  'Face treatment',
                  'Underarms included'
                ].map((feature, index) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span className="text-white/60">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Lower Body Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-2">Lower Body Package</h3>
              <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent mb-4">$150</div>
              <ul className="space-y-3">
                {[
                  'Full legs treatment',
                  'Brazilian included'
                ].map((feature, index) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span className="text-white/60">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Package Benefits */}
        <div className="py-16 bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4">
            <motion.h2 
              className="text-2xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              All Packages Include
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Free Consultation', description: 'Personalized treatment planning' },
                { title: 'Flexible Scheduling', description: 'Book your sessions at your convenience' },
                { title: 'Expert Care', description: 'Treatment by licensed professionals' }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="bg-gradient-to-r from-rose-500/10 to-purple-600/10 p-3 rounded-xl w-fit mb-4">
                    <Star className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-white/60 mb-8">
                Contact us to discuss our packages or create a customized treatment plan that works for you.
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
    </div>
  );
}