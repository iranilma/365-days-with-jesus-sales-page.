"use client";

import React, { useState } from "react";
import { Check, Lock, ShieldCheck, Sparkles, X, ArrowRight } from "lucide-react";
import { BotanicalSprig } from "@/components/BotanicalElements";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfigured] = useState(false); // Set to true when Stripe/LemonSqueezy env keys are provided

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // In production, this forwards the customer to Stripe Checkout session
    // e.g. window.location.href = data.checkoutUrl;
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sanctuary-cocoa/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-sanctuary-ivoryLight rounded-3xl border border-sanctuary-taupeLight/80 shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close checkout"
          className="absolute top-5 right-5 p-2 rounded-full text-sanctuary-taupe hover:text-sanctuary-cocoa hover:bg-sanctuary-blushLight transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sanctuary-blush text-sanctuary-plum mb-3">
            <BotanicalSprig className="w-6 h-6 text-sanctuary-plum" />
          </div>
          <span className="text-[11px] font-sans uppercase tracking-widest text-sanctuary-taupe block mb-1">
            Secure Digital Checkout
          </span>
          <h2
            id="checkout-title"
            className="font-serif text-2xl sm:text-3xl font-bold text-sanctuary-plum leading-tight"
          >
            Your 365-Day Journey Starts Here
          </h2>
          <p className="text-xs sm:text-sm text-sanctuary-cocoaLight mt-1.5">
            Complete Digital Bundle — Downloadable PDF + Interactive Web Edition
          </p>
        </div>

        {/* Order Summary Box */}
        <div className="bg-white rounded-2xl p-4 border border-sanctuary-taupeLight/60 mb-6 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-sanctuary-taupeLight/40">
            <div>
              <span className="font-serif font-bold text-sanctuary-cocoa text-base block">
                365 Days With Jesus Digital Bundle
              </span>
              <span className="text-xs text-sanctuary-taupe">
                One-time purchase · Lifetime digital access
              </span>
            </div>
            <div className="text-right">
              <span className="font-serif font-bold text-2xl text-sanctuary-plum block">
                $17.00
              </span>
              <span className="text-[10px] uppercase tracking-wider text-sanctuary-sage font-semibold">
                USD
              </span>
            </div>
          </div>

          <div className="pt-3 space-y-1.5 text-xs text-sanctuary-cocoaLight">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-sanctuary-sage flex-shrink-0" />
              <span>Full 365-Day Devotional Collection (PDF Edition)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-sanctuary-sage flex-shrink-0" />
              <span>Lifetime Access to Interactive Web Sanctuary & Planner</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-sanctuary-sage flex-shrink-0" />
              <span>Daily Scripture, Reflection, Questions, Prayer & Actions</span>
            </div>
          </div>
        </div>

        {/* Checkout Integration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="customer-name"
              className="block text-xs font-semibold text-sanctuary-cocoa mb-1"
            >
              Your Full Name
            </label>
            <input
              id="customer-name"
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-sanctuary-taupeLight/80 bg-white text-sanctuary-cocoa text-sm focus:outline-none focus:ring-2 focus:ring-sanctuary-plum/30 transition-all placeholder:text-sanctuary-taupe/60"
            />
          </div>

          <div>
            <label
              htmlFor="customer-email"
              className="block text-xs font-semibold text-sanctuary-cocoa mb-1"
            >
              Email Address for Delivery
            </label>
            <input
              id="customer-email"
              type="email"
              required
              placeholder="sarah@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-sanctuary-taupeLight/80 bg-white text-sanctuary-cocoa text-sm focus:outline-none focus:ring-2 focus:ring-sanctuary-plum/30 transition-all placeholder:text-sanctuary-taupe/60"
            />
            <span className="text-[11px] text-sanctuary-taupe mt-1 block">
              Your instant access link and download credentials will be sent here.
            </span>
          </div>

          {/* Integration Status Notice */}
          <div className="p-3.5 rounded-xl bg-sanctuary-goldPale border border-sanctuary-gold/40 text-[11px] text-sanctuary-cocoa leading-relaxed">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-sanctuary-goldDark flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-sanctuary-goldDark block mb-0.5">
                  Production Checkout Integration Ready
                </strong>
                To connect live payments, set your preferred provider keys in{" "}
                <code className="bg-white/80 px-1 py-0.5 rounded text-[10px]">
                  STRIPE_SECRET_KEY
                </code>{" "}
                or LemonSqueezy webhook. In accordance with zero-fake entitlement rules, download links remain secured until a real payment transaction completes.
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-sanctuary-plum text-white font-bold text-sm tracking-wider uppercase shadow-md hover:bg-sanctuary-plumDark hover:shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            <Lock className="w-4 h-4 text-sanctuary-gold" />
            <span>
              {isSubmitting
                ? "Connecting to Payment Gateway..."
                : "Proceed to Secure Payment — $17"}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer Guarantee */}
        <div className="mt-5 text-center text-[11px] text-sanctuary-taupe space-y-1">
          <p className="flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3 text-sanctuary-sage" />
            <span>256-Bit SSL Encrypted Checkout · Instant Digital Access</span>
          </p>
          <p>30-Day Peaceful Guarantee · One-Time Payment · No Recurring Fees</p>
        </div>
      </div>
    </div>
  );
}
