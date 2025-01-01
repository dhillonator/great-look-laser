"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function FAQPage() {
  const faqs = [
    {
      question: "How does laser hair removal work?",
      answer: "Our advanced diode laser technology targets the melanin in your hair follicles. The laser energy is converted to heat, which damages the follicle and inhibits future hair growth while leaving the surrounding skin unaffected."
    },
    {
      question: "How many sessions will I need?",
      answer: "The number of sessions varies based on individual factors such as hair thickness, treatment area, and your body's response to the treatment. Most clients see significant results within 6-8 sessions, though some areas might require more or fewer treatments for optimal results."
    },
    {
      question: "Is the treatment painful?",
      answer: "Comfort levels vary by individual and treatment area. We use cooling gel during the procedure to minimize discomfort. Many clients describe the sensation as a mild pinch or rubber band snap. The advanced technology in our diode laser system helps make the treatment as comfortable as possible."
    },
    {
      question: "How should I prepare for my treatment?",
      answer: "Please shave the treatment area the day before your appointment. Avoid tanning, sun exposure, and self-tanning products before treatment. The area should be clean and free of any lotions or creams on the day of treatment."
    },
    {
      question: "What aftercare is required?",
      answer: "After treatment, please:\n• Avoid direct sun exposure\n• Skip workouts and swimming for 24 hours\n• Avoid fragranced lotions and tanning products\n• Keep the area clean and cool\n• Use sunscreen when going outdoors"
    },
    {
      question: "How long does each session take?",
      answer: "Session duration varies depending on the treatment area. Smaller areas like upper lip may take just a few minutes, while larger areas like full legs take longer. Specific timing details are provided when booking your appointment through our scheduling system."
    },
    {
      question: "When will I see results?",
      answer: "Most clients notice hair reduction after their first few sessions. The hair that does grow back is typically finer and lighter. For optimal results, completing the full recommended treatment course is important."
    },
    {
      question: "Why choose laser hair removal?",
      answer: "Laser hair removal offers a long-term solution to unwanted hair, saving you time and money compared to regular waxing or shaving. Our diode laser technology provides safe, effective results for a wide range of skin types."
    }
  ];

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
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-lg text-white/60 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Everything you need to know about our laser hair removal treatments.
            </motion.p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                {...(index < 3 ? {
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.3 + (index * 0.1) }
                } : {
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6, delay: index * 0.1 }
                })}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-white/60 whitespace-pre-line">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
              <p className="text-white/60 mb-8">
                We're here to help. Contact us for a free consultation to discuss your specific needs.
              </p>
              <a 
                href="tel:604-723-9281"
                className="bg-gradient-to-r from-rose-500 to-purple-600 px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}