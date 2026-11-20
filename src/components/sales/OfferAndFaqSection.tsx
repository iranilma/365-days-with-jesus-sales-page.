"use client";

import React, { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronUp, Lock, Plus, Minus } from "lucide-react";
import { BotanicalSprig } from "@/components/BotanicalElements";

interface OfferAndFaqSectionProps {
  onOpenCheckout: () => void;
}

export function OfferAndFaqSection({ onOpenCheckout }: OfferAndFaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const inclusions = [
    "Complete 365-day devotional.",
    "Downloadable PDF edition.",
    "Interactive web edition.",
    "Daily Scripture and reflections.",
    "Three reflection questions per day.",
    "Guided prayers.",
    "Daily intentions and practical actions.",
    "Evening reflection prompts.",
  ];

  const faqs = [
    {
      q: "What exactly will I receive?",
      a: "You receive immediate access to the Complete Digital Bundle: both the beautifully formatted Downloadable PDF Edition (suitable for printing, iPad, and offline reading) and lifetime access to the Interactive Web Edition (with search, 365-day calendar, personal prayer wall, and gratitude journal).",
    },
    {
      q: "Can I use it on my phone?",
      a: "Yes! Both editions work seamlessly on smartphones (iPhone and Android). The interactive web edition is fully responsive and behaves like a smooth mobile web app, while the PDF can be opened in Apple Books, Kindle, or any PDF reader.",
    },
    {
      q: "Do I need to download an app?",
      a: "No app store download is required. The interactive edition runs directly in your web browser on any device (phone, tablet, laptop). You can even add it to your home screen with one tap for instant app-like access.",
    },
    {
      q: "Is this suitable for beginners?",
      a: "Absolutely. Whether you are opening a Bible for the first time or have walked with Jesus for decades, each daily entry is warm, welcoming, and grounded in the clear, accessible World English Bible (WEB) translation. There is no religious jargon or pressure.",
    },
    {
      q: "How long should I spend each day?",
      a: "Each daily devotional is intentionally designed for an unhurried 5 to 10-minute quiet time. You can read the Scripture and reflection in just a few minutes, or spend longer journaling your reflection questions and prayer.",
    },
    {
      q: "What happens if I miss a day?",
      a: "There is zero guilt, shame, or broken streaks here. This devotional is founded on God's grace, not performance. If you miss a day, simply pick back up whenever you are ready. Your progress is saved, and every morning brings new mercies.",
    },
    {
      q: "Is this a physical book?",
      a: "This is a complete digital product. You receive the high-resolution downloadable PDF edition (which you can print at home if you love physical paper) and the interactive web edition. No physical book will be shipped in the mail.",
    },
    {
      q: "How much does it cost?",
      a: "It is a single, one-time payment of $17 USD. There are no recurring fees, subscriptions, or hidden charges. You receive lifetime access to both digital editions.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Section 7: High-Impact Offer Box (Left Column) */}
          <div
            id="offer"
            className="lg:col-span-6 bg-sanctuary-plum text-white rounded-3xl p-6 sm:p-8 lg:p-9 shadow-xl border border-sanctuary-plumDark relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background botanical flourish */}
            <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 pointer-events-none opacity-10 text-white">
              <BotanicalSprig className="w-48 h-48" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                  Your Year With Jesus Starts Here.
                </h3>
                <p className="text-xs sm:text-sm text-sanctuary-blush font-medium">
                  365 Days With Jesus — Complete Digital Bundle
                </p>
              </div>

              {/* Price Pill */}
              <div className="flex items-center">
                <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-sanctuary-gold text-sanctuary-plum font-serif text-2xl sm:text-3xl font-bold shadow-inner">
                  $17 USD
                </div>
              </div>

              {/* Included Checklist */}
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-sanctuary-goldLight block mb-3">
                  INCLUDED:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                  {inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-sanctuary-gold/20 text-sanctuary-goldLight flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={onOpenCheckout}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-white text-sanctuary-plum font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:bg-sanctuary-goldPale hover:text-sanctuary-plumDark transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
                >
                  <span>YES! I WANT BOTH EDITIONS — $17</span>
                  <ArrowRight className="w-4 h-4 text-sanctuary-gold group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[11px] text-sanctuary-blush">
                  One purchase. Two ways to experience your devotional.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8: Frequently Asked Questions (Right Column) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-6">
              <span className="text-[11px] font-sans font-bold tracking-widest uppercase text-sanctuary-taupe block">
                Everything You Need to Know
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sanctuary-plum">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-sanctuary-taupeLight/60 rounded-2xl bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between p-4 text-left font-serif text-sm sm:text-base font-bold text-sanctuary-cocoa hover:text-sanctuary-plum transition-colors"
                    >
                      <span className="pr-3">{faq.q}</span>
                      <div className="w-6 h-6 rounded-full bg-sanctuary-ivory flex items-center justify-center flex-shrink-0 text-sanctuary-plum">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-sanctuary-cocoaLight leading-relaxed border-t border-sanctuary-taupeLight/30 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
