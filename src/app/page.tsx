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
    <>
      {/* Hero Section with Background Image - Mobile Optimized */}
      <section 
        id="home" 
        className="min-h-screen flex flex-col items-start justify-center px-4 md:px-12 lg:px-20 relative"
        style={{
          backgroundImage: "url('/legs-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "70% center", /* Shift position to show more of the legs on mobile */
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Gradient overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-lg mt-16 md:mt-0"> {/* Added margin-top to push content down on mobile */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Great Look Laser
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-8 text-white drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reveal Your Smoothest Skin
          </motion.p>

          <motion.div 
            className="flex gap-4 flex-wrap"
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
              className="bg-orange-500 px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity text-white shadow-lg"
            >
              Book Now
            </button>
            <a 
              href="#pricing"
              onClick={() => event({
                action: 'hero_learn_more',
                category: 'Engagement',
                label: 'Hero Section Learn More'
              })}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/30 transition-all"
            >
              Learn more
            </a>
          </motion.div>

          <motion.div 
            className="mt-8 text-base bg-black/40 inline-block px-4 py-1 rounded-full text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Women Only
          </motion.div>
        </div>
      </section>

      {/* Pricing Section - Beige Background (from wall color) */}
      <section id="pricing" className="min-h-screen py-24 px-4" style={{ backgroundColor: "#f5f0e5" }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose from our range of professional laser hair removal treatments.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.05) }}
                onClick={() => {
                  event({
                    action: 'package_booking',
                    category: 'Booking',
                    label: service.name
                  });
                  window.location.href = service.link;
                }}
                className="bg-white rounded-2xl p-6 shadow-md border border-orange-100 relative overflow-hidden cursor-pointer hover:shadow-lg hover:translate-y-[-5px] transition-all"
              >
                {service.isPopular && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.duration} | {service.description}</p>
                <div className="text-3xl font-bold text-orange-500 mb-4">
                  {service.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Green accent from plants */}
      <section id="faq" className="min-h-screen py-24 px-4 bg-gradient-to-b from-green-50 to-[#f5f0e5]/70">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about our laser hair removal treatments.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.05) }}
                onClick={() => event({
                  action: 'faq_view',
                  category: 'Content',
                  label: faq.question
                })}
                className="bg-white rounded-2xl p-6 border border-green-200 shadow-md cursor-pointer hover:shadow-lg hover:border-green-300 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Orange accent */}
      <section id="contact" className="min-h-screen py-24 px-4" style={{ backgroundColor: "#f7f4ed" }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book your free consultation today or reach out with any questions.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
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
              className="bg-white rounded-2xl p-6 border border-orange-100 shadow-md block hover:shadow-lg hover:translate-y-[-5px] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Call Us</h3>
                  <p className="text-gray-600">
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
              className="bg-white rounded-2xl p-6 border border-orange-100 shadow-md block hover:shadow-lg hover:translate-y-[-5px] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Location</h3>
                  <p className="text-gray-600">
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
              className="bg-white rounded-2xl p-6 border border-orange-100 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Hours</h3>
                  <p className="text-gray-600">
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
              className="w-full h-[400px] rounded-2xl overflow-hidden border border-orange-100 shadow-md"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.8511749214307!2d-122.84427542356186!3d49.16428198695977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9ee362f0495%3A0x9f75f3a4f6982a56!2s8925%20135A%20St%2C%20Surrey%2C%20BC%20V3V%205V2!5e0!3m2!1sen!2sca!4v1702300784595!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Great Look Laser</h3>
          <p className="text-gray-400 mb-6">Professional laser hair removal services in Surrey, BC</p>
          <div className="flex justify-center gap-4 mb-6">
            <button 
              onClick={openCalendly}
              className="bg-orange-500 px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book Now
            </button>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Great Look Laser. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}