"use client"

import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
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
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg text-white/60 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Book your free consultation today or reach out with any questions.
          </motion.p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid gap-6">
          {/* Phone */}
          <motion.a
            href="tel:604-723-9281"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 block hover:bg-white/10 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="bg-rose-500/10 p-3 rounded-xl">
                <Phone className="w-6 h-6 text-rose-500" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                <p className="text-white/60">
                  (604) 723-9281
                </p>
              </div>
            </div>
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://maps.google.com/?q=8925+135A+St,+Surrey,+BC+V3V+5V2"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 block hover:bg-white/10 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Location</h3>
                <p className="text-white/60">
                  8925 135A St<br />
                  Surrey, BC V3V 5V2<br />
                  Client entrance on right side
                </p>
              </div>
            </div>
          </motion.a>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="bg-violet-500/10 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-violet-500" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Hours</h3>
                <p className="text-white/60">
                  Monday - Sunday<br />
                  8:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.8511749214307!2d-122.84427542356186!3d49.16428198695977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9ee362f0495%3A0x9f75f3a4f6982a56!2s8925%20135A%20St%2C%20Surrey%2C%20BC%20V3V%205V2!5e0!3m2!1sen!2sca!4v1702300784595!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-default"
            className="grayscale"
          ></iframe>
        </motion.div>
      </div>

      {/* Book Button */}
      <div className="bg-neutral-950 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/60 mb-8">
              Book your free consultation today and take the first step towards smooth, beautiful skin.
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