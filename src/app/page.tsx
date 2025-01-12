"use client"

import React from 'react';
import { Star, Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { event } from '@/lib/analytics';

export default function HomePage() {
  const openCalendly = () => {
    window.location.href = 'https://calendly.com/baljinder-glls';
  };

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
    <div className="bg-black text-white">
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
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
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
              onClick={() => {
                event({
                  action: 'hero_booking',
                  category: 'Conversion',
                  label: 'Hero Section Book Now'
                });
                openCalendly();
              }}
              className="bg-gradient-to-r from-rose-500 to-purple-600 px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Book Now
            </button>
            <a 
              href="#faq"
              onClick={() => event({
                action: 'hero_learn_more',
                category: 'Engagement',
                label: 'Hero Section Learn More'
              })}
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
        </section>

{/* Pricing Section */}
<section id="pricing" className="min-h-screen py-24 px-4">
  <div className="max-w-5xl mx-auto">
    <motion.h2 
      className="text-3xl md:text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Our Services
    </motion.h2>
    <motion.p 
      className="text-lg text-white/60 max-w-2xl mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
    >
      Choose from our range of professional laser hair removal treatments.
    </motion.p>

    <motion.div 
      className="grid gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {[
        {
          name: "Full Body",
          duration: "2 hrs 30 min",
          description: "Complete body treatment",
          price: "$300",
          link: "https://calendly.com/baljinder-glls/30min",
          isPopular: true
        },
        {
          name: "Legs + Brazilian",
          duration: "1 hr",
          description: "Legs and Brazilian combo",
          price: "$150",
          link: "https://calendly.com/baljinder-glls/lower-body-legs-brazilian"
        },
        {
          name: "Face + Full Arms",
          duration: "1 hr",
          description: "Face and arms package",
          price: "$100",
          link: "https://calendly.com/baljinder-glls/full-face-arms"
        },
        {
          name: "Face + Underarms",
          duration: "30 min",
          description: "Face and underarms combo",
          price: "$50",
          link: "https://calendly.com/baljinder-glls/full-face-arms-clone"
        },
        {
          name: "Face",
          duration: "25 min",
          description: "Complete facial treatment",
          price: "$40",
          link: "https://calendly.com/baljinder-glls/face-clone"
        },
        {
          name: "Underarms",
          duration: "10 min",
          description: "Quick underarm service",
          price: "$20",
          link: "https://calendly.com/baljinder-glls/underarms-clone"
        },
        {
          name: "Legs",
          duration: "45 min",
          description: "Full legs treatment",
          price: "$100",
          link: "https://calendly.com/baljinder-glls/legs-clone"
        },
        {
          name: "Brazilian",
          duration: "20 min",
          description: "Brazilian area only",
          price: "$50",
          link: "https://calendly.com/baljinder-glls/legs-brazilian-clone"
        }
      ].map((service, index) => (
        <motion.div
          key={service.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.1
          }}
          onClick={() => {
            event({
              action: 'package_booking',
              category: 'Booking',
              label: service.name
            });
            window.location.href = service.link;
          }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden cursor-pointer hover:bg-white/10 transition-all"
        >
          {service.isPopular && (
            <div className="absolute top-0 right-0 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-3 py-1 rounded-bl-lg text-sm">
              Most Popular
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-white/60 mb-4">{service.duration} | {service.description}</p>
          <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent mb-4">
            {service.price}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

        {/* FAQ Section */}
        <section id="faq" className="min-h-screen py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-lg text-white/60 max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Everything you need to know about our laser hair removal treatments.
            </motion.p>
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => event({
                    action: 'faq_view',
                    category: 'Content',
                    label: faq.question
                  })}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-white/60 whitespace-pre-line">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h2>
            <motion.p 
              className="text-lg text-white/60 max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Book your free consultation today or reach out with any questions.
            </motion.p>

            <div className="grid gap-6">
              {/* Phone */}
              <motion.a
                href="tel:604-723-9281"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={() => event({
                  action: 'contact_click',
                  category: 'Contact',
                  label: 'Phone'
                })}
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
                transition={{ duration: 0.6, delay: 0.4 }}
                onClick={() => event({
                  action: 'contact_click',
                  category: 'Contact',
                  label: 'Location'
                })}
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
                transition={{ duration: 0.6, delay: 0.5 }}
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
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => event({
                  action: 'map_view',
                  category: 'Contact',
                  label: 'Interactive Map'
                })}
                className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.8511749214307!2d-122.84427542356186!3d49.16428198695977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9ee362f0495%3A0x9f75f3a4f6982a56!2s8925%20135A%20St%2C%20Surrey%2C%20BC%20V3V%205V2!5e0!3m2!1sen!2sca!4v1702300784595!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}