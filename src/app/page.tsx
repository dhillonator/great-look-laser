"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { event } from '@/lib/analytics';
import { trackBooking } from '@/lib/analytics';

const CUSTOM_PARTS = ['Full Body', 'Legs', 'Brazilian', 'Underarms', 'Face', 'Full Arms'] as const;

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [customOpen, setCustomOpen] = useState(false);
  const [customParts, setCustomParts] = useState<string[]>([]);

  const openCalendly = () => {
    trackBooking();
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

  const services = [
    {
      name: "Full Body",
      duration: "2 hrs 30 min",
      price: "$300",
      link: "https://calendly.com/baljinder-glls/full-body",
    },
    {
      name: "Legs + Brazilian",
      duration: "1 hr",
      price: "$150",
      link: "https://calendly.com/baljinder-glls/legs-brazilian",
    },
    {
      name: "Face + Full Arms",
      duration: "1 hr",
      price: "$100",
      link: "https://calendly.com/baljinder-glls/full-face-arms",
    },
    {
      name: "Face + Underarms",
      duration: "30 min",
      price: "$50",
      link: "https://calendly.com/baljinder-glls/face-underarms",
    },
    {
      name: "Face",
      duration: "25 min",
      price: "$40",
      link: "https://calendly.com/baljinder-glls/face",
    },
    {
      name: "Underarms",
      duration: "10 min",
      price: "$20",
      link: "https://calendly.com/baljinder-glls/underarms",
    },
    {
      name: "Legs",
      duration: "45 min",
      price: "$100",
      link: "https://calendly.com/baljinder-glls/legs",
    },
    {
      name: "Brazilian",
      duration: "20 min",
      price: "$50",
      link: "https://calendly.com/baljinder-glls/brazillian",
    },
  ];

  return (
    <div>
      {/* ── Hero ──────────────────────────────────── */}
      <section id="home" className="relative h-screen min-h-[600px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/legs-image.jpg"
            alt="Great Look Laser — smooth skin"
            fill
            priority
            className="object-cover object-[70%_center] md:object-center"
          />
          {/* Warm overlay */}
          <div className="absolute inset-0" style={{ background: 'rgba(15, 10, 5, 0.48)' }} />
        </div>

        {/* Content — lower-left */}
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-lg"
          >
            {/* Eyebrow */}
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/50 mb-6">
              Surrey, BC — Laser Hair Removal
            </p>

            {/* Headline */}
            <h1 className="font-serif font-light leading-none text-white mb-8"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>
              Great Look<br />
              <em>Laser</em>
            </h1>

            {/* Tagline */}
            <p className="font-sans font-light text-white/70 mb-2 tracking-wide text-base">
              Reveal your smoothest skin.
            </p>
            <p className="font-sans text-xs text-white/40 mb-10 tracking-wide">
              For women of all skin types.
            </p>

            {/* CTA */}
            <button
              onClick={() => {
                event({ action: 'hero_booking', category: 'Conversion', label: 'Hero Section Book Now' });
                openCalendly();
              }}
              className="font-sans text-xs tracking-widest uppercase text-white border-b border-white/40 pb-1 hover:border-white transition-colors"
            >
              Book Now &nbsp;→
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Services / Pricing ────────────────────── */}
      <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#faf7f2]">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#78716c] mb-4">
              Services &amp; Pricing
            </p>
            <h2 className="font-serif font-light text-[#1c1917] leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              Our Treatments
            </h2>
            <p className="font-sans text-sm text-[#8b7355] mt-4 italic">
              Exclusively for women, in a comfortable private setting.
            </p>
          </motion.div>

          {/* Price list */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {services.map((service, index) => (
              <div
                key={service.name}
                onClick={() => {
                  event({ action: 'package_booking', category: 'Booking', label: service.name });
                  window.location.href = service.link;
                }}
                className={`group cursor-pointer grid grid-cols-12 items-baseline py-5 border-t border-[#e2d9cc] ${
                  index === services.length - 1 ? 'border-b' : ''
                }`}
              >
                {/* Service name */}
                <div className="col-span-6 md:col-span-5">
                  <span className="font-sans text-sm md:text-base font-medium text-[#1c1917] group-hover:text-[#8b7355] transition-colors">
                    {service.name}
                  </span>
                </div>

                {/* Duration */}
                <div className="col-span-3 md:col-span-4">
                  <span className="font-sans text-xs md:text-sm text-[#78716c]">
                    {service.duration}
                  </span>
                </div>

                {/* Price + book link */}
                <div className="col-span-3 flex items-baseline justify-end gap-4 md:gap-6">
                  <span className="font-serif text-xl md:text-2xl text-[#8b7355]">
                    {service.price}
                  </span>
                  <span className="hidden md:inline font-sans text-xs tracking-widest uppercase text-[#8b7355] opacity-0 group-hover:opacity-100 transition-opacity">
                    Book →
                  </span>
                </div>
              </div>
            ))}

            {/* Custom booking — collapsible row */}
            <div className="border-t border-[#e2d9cc]">
              {/* Row header — same grid as service rows */}
              <button
                className="w-full group grid grid-cols-12 items-baseline py-5 text-left"
                onClick={() => {
                  setCustomOpen((o) => !o);
                  if (!customOpen) setCustomParts([]);
                }}
              >
                <div className="col-span-6 md:col-span-5">
                  <span className="font-sans text-sm md:text-base font-medium text-[#1c1917] group-hover:text-[#8b7355] transition-colors">
                    Custom
                  </span>
                </div>
                <div className="col-span-3 md:col-span-4">
                  <span className="font-sans text-xs md:text-sm text-[#78716c]">
                    Build your own
                  </span>
                </div>
                <div className="col-span-3 flex items-baseline justify-end">
                  <span className="font-sans text-[#8b7355] text-lg">
                    {customOpen ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {customOpen && (
                  <motion.div
                    key="custom-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8">
                      <p className="font-sans text-sm text-[#78716c] mb-6">
                        Select the areas you&apos;d like treated — we&apos;ll text you back to confirm.
                      </p>

                      {/* Checkboxes */}
                      <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
                        {CUSTOM_PARTS.map((part) => {
                          const checked = customParts.includes(part);
                          return (
                            <label
                              key={part}
                              className="flex items-center gap-2.5 cursor-pointer group"
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                  setCustomParts((prev) =>
                                    checked ? prev.filter((p) => p !== part) : [...prev, part]
                                  )
                                }
                                className="w-4 h-4 rounded-none border border-[#e2d9cc] accent-[#8b7355] cursor-pointer"
                              />
                              <span className={`font-sans text-sm transition-colors ${
                                checked ? 'text-[#8b7355]' : 'text-[#1c1917] group-hover:text-[#8b7355]'
                              }`}>
                                {part}
                              </span>
                            </label>
                          );
                        })}
                      </div>

                      {/* Book CTA */}
                      <button
                        disabled={customParts.length === 0}
                        onClick={() => {
                          event({ action: 'custom_booking', category: 'Booking', label: customParts.join(', ') });
                          const body = `Hi, I'd like to book laser hair removal for: ${customParts.join(', ')}. Please call me back to confirm.`;
                          window.location.href = `sms:+16047239281?body=${encodeURIComponent(body)}`;
                        }}
                        className={`font-sans text-xs tracking-widest uppercase pb-1 border-b transition-colors ${
                          customParts.length === 0
                            ? 'text-[#c4bdb4] border-[#e2d9cc] cursor-not-allowed'
                            : 'text-[#8b7355] border-[#8b7355] hover:text-[#1c1917] hover:border-[#1c1917] cursor-pointer'
                        }`}
                      >
                        Book Now →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────── */}
      <section id="faq" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#f2ece2]">
        <div className="max-w-3xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#78716c] mb-4">FAQ</p>
            <h2 className="font-serif font-light text-[#1c1917]"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              Common Questions
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <div key={index} className={`border-t border-[#e2d9cc] ${index === faqs.length - 1 ? 'border-b' : ''}`}>
                <button
                  className="w-full py-6 flex items-start justify-between text-left gap-8"
                  onClick={() => {
                    event({ action: 'faq_view', category: 'Content', label: faq.question });
                    setOpenFaq(openFaq === index ? null : index);
                  }}
                >
                  <span className="font-sans text-sm md:text-base font-medium text-[#1c1917]">
                    {faq.question}
                  </span>
                  <span className="font-sans text-[#8b7355] text-lg flex-shrink-0 mt-0.5">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-sm text-[#78716c] pb-6 leading-relaxed whitespace-pre-line max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#1c1917]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-12">
            {/* Left — details */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-between gap-12"
            >
              <div>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#8b7355] mb-4">
                  Contact
                </p>
                <h2 className="font-serif font-light text-[#faf7f2]"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                  Find Us
                </h2>
              </div>

              <div className="space-y-10">
                {/* Phone */}
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-[#8b7355] mb-2">Phone</p>
                  <a
                    href="tel:604-723-9281"
                    onClick={() => event({ action: 'contact_click', category: 'Contact', label: 'Phone' })}
                    className="font-sans text-lg text-[#faf7f2] hover:text-[#8b7355] transition-colors"
                  >
                    (604) 723-9281
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-[#8b7355] mb-2">Address</p>
                  <a
                    href="https://maps.google.com/?q=8925+135A+St,+Surrey,+BC+V3V+5V2"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => event({ action: 'contact_click', category: 'Contact', label: 'Location' })}
                    className="font-sans text-base text-[#faf7f2]/80 leading-relaxed hover:text-[#faf7f2] transition-colors"
                  >
                    8925 135A St<br />
                    Surrey, BC V3V 5V2<br />
                    <span className="text-[#78716c] text-sm">Client entrance on right side</span>
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-[#8b7355] mb-2">Hours</p>
                  <p className="font-sans text-base text-[#faf7f2]/80 leading-relaxed">
                    Monday – Sunday<br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    event({ action: 'contact_booking', category: 'Conversion', label: 'Contact Section Book Now' });
                    openCalendly();
                  }}
                  className="font-sans text-xs tracking-widest uppercase text-[#8b7355] border-b border-[#8b7355] pb-1 hover:text-[#faf7f2] hover:border-[#faf7f2] transition-colors w-fit"
                >
                  Book Now →
                </button>
              </div>
            </motion.div>

            {/* Right — map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              onClick={() => event({ action: 'map_view', category: 'Contact', label: 'Interactive Map' })}
              className="h-[360px] md:h-full min-h-[360px] overflow-hidden"
              style={{ filter: 'grayscale(25%) sepia(15%)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.8511749214307!2d-122.84427542356186!3d49.16428198695977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9ee362f0495%3A0x9f75f3a4f6982a56!2s8925%20135A%20St%2C%20Surrey%2C%20BC%20V3V%205V2!5e0!3m2!1sen!2sca!4v1702300784595!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────── */}
      <footer className="bg-[#231f1a] px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-serif text-base text-[#faf7f2]/40 tracking-wide">
            Great Look Laser
          </p>
          <div className="flex items-center gap-8">
            <button
              onClick={openCalendly}
              className="font-sans text-xs tracking-widest uppercase text-[#8b7355] border-b border-[#8b7355] pb-0.5 hover:text-[#faf7f2] hover:border-[#faf7f2] transition-colors"
            >
              Book Now →
            </button>
            <p className="font-sans text-xs text-[#faf7f2]/25">
              © {new Date().getFullYear()} Great Look Laser
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
