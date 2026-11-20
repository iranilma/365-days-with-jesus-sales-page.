"use client";

import React from "react";
import { X } from "lucide-react";
import { BotanicalSprig } from "@/components/BotanicalElements";

export type PolicyType = "privacy" | "terms" | "refund" | null;

interface PolicyModalProps {
  type: PolicyType;
  onClose: () => void;
}

export function PolicyModal({ type, onClose }: PolicyModalProps) {
  if (!type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      updated: "November 2026",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-sanctuary-cocoa leading-relaxed">
          <p>
            At <strong>365 Days With Jesus</strong>, we honor your privacy as a sacred trust. This Privacy Policy describes how we collect, use, and protect your information when you visit our website, purchase our digital devotional, or use our interactive sanctuary.
          </p>
          <h3 className="font-serif text-base font-bold text-sanctuary-plum">1. Information We Collect</h3>
          <p>
            When you purchase the 365 Days With Jesus Complete Digital Bundle, we collect necessary transaction details including your name, email address, and payment confirmation from our secure payment processors. We do not store full credit card numbers or financial credentials on our servers.
          </p>
          <h3 className="font-serif text-base font-bold text-sanctuary-plum">2. Devotional Reflection Data</h3>
          <p>
            Your personal quiet-time notes, prayer wall requests, and gratitude entries in the Interactive Web Edition are saved privately to your personal browser storage (scoped localStorage) and are not accessible to public third parties.
          </p>
          <h3 className="font-serif text-base font-bold text-sanctuary-plum">3. How We Use Your Information</h3>
          <p>
            We use your email address solely to deliver your digital devotional bundle, send access updates, and provide customer support. We never sell, rent, or trade your email address or personal details to third-party marketing companies.
          </p>
          <h3 className="font-serif text-base font-bold text-sanctuary-plum">4. Contact Us</h3>
          <p>
            If you have questions regarding your personal information, contact our support team at{" "}
            <span className="font-semibold text-sanctuary-plum">support@365dayswithjesus.com</span>.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms and Conditions",
      updated: "November 2026",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-sanctuary-cocoa leading-relaxed">
          <p>
            Welcome to <strong>365 Days With Jesus</strong>. By purchasing, downloading, or using our digital devotional editions, you agree to the following terms:
          </p>
          <h3 className="font-serif text-base font-bold text-sanctuary-plum">1. Digital License & Personal Use</h3>
          <p>
            Your purchase of the Complete Digital Bundle grants you a single-user, non-transferable, perpetual license for personal spiritual study, family devotion, and quiet time. You may print copies for personal binder use. You may not resell, redistribute, upload to public file-sharing networks, or commercially exploit the content.
          </p>
          <h3 className="font-serif text-base font-bold text-sanctuary-plum">2. Scripture Attributions</h3>
          <p>
            Scripture quotations throughout 365 Days With Jesus are taken from the World English Bible (WEB), dedicated to the public domain. Devotional reflections, liturgical prayers, daily intentions, and liturgical questions are protected under copyright.
          </p>
          <h3 className="font-serif text-base font-bold text-sanctuary-plum">3. Availability of Web Edition</h3>
          <p>
            We endeavor to maintain uninterrupted access to the online interactive web edition. However, offline reading is also permanently provided through your downloadable PDF edition.
          </p>
          <h3 className="font-serif text-base font-bold text-sanctuary-plum">4. Governing Law</h3>
          <p>
            These terms are governed by standard commercial consumer guidelines. For assistance or licensing queries, contact{" "}
            <span className="font-semibold text-sanctuary-plum">support@365dayswithjesus.com</span>.
          </p>
        </div>
      ),
    },
    refund: {
      title: "Refund Policy",
      updated: "November 2026",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-sanctuary-cocoa leading-relaxed">
          <p>
            We want your journey with <strong>365 Days With Jesus</strong> to bring unhurried peace, encouragement, and spiritual joy into your home.
          </p>
          <h3 className="font-serif text-base font-bold text-sanctuary-plum">30-Day Peaceful Guarantee</h3>
          <p>
            If you explore the devotional and find that it does not meet your quiet-time expectations or spiritual needs, simply send an email to{" "}
            <span className="font-semibold text-sanctuary-plum">support@365dayswithjesus.com</span> within 30 days of your purchase.
          </p>
          <p>
            We will cheerfully refund your $17 USD in full with no pressure and no hard feelings. We want you to feel complete peace of mind in your purchase.
          </p>
        </div>
      ),
    },
  }[type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sanctuary-cocoa/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-sanctuary-ivoryLight rounded-3xl border border-sanctuary-taupeLight/80 shadow-2xl p-6 sm:p-8 flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-sanctuary-taupe hover:text-sanctuary-cocoa hover:bg-sanctuary-blushLight transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-sanctuary-taupeLight/40">
          <BotanicalSprig className="w-6 h-6 text-sanctuary-plum" />
          <div>
            <h2
              id="policy-modal-title"
              className="font-serif text-2xl font-bold text-sanctuary-plum"
            >
              {content.title}
            </h2>
            <span className="text-[11px] text-sanctuary-taupe">
              Last updated: {content.updated}
            </span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto pr-2 space-y-4 flex-1">
          {content.body}
        </div>

        {/* Modal Footer */}
        <div className="mt-5 pt-3 border-t border-sanctuary-taupeLight/40 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-sanctuary-plum text-white text-xs font-semibold hover:bg-sanctuary-plumDark transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
