import React from "react";
import { BotanicalSprig } from "@/components/BotanicalElements";
import { PolicyType } from "./PolicyModal";

interface SalesFooterProps {
  onOpenPolicy: (type: PolicyType) => void;
}

export function SalesFooter({ onOpenPolicy }: SalesFooterProps) {
  return (
    <footer className="w-full bg-sanctuary-ivoryLight border-t border-sanctuary-taupeLight/60 py-10 sm:py-12 text-center text-xs text-sanctuary-cocoaLight">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4">
        {/* Brand Wordmark & Emblem */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sanctuary-plum">
          <div className="flex items-center gap-2">
            <BotanicalSprig className="w-5 h-5 text-sanctuary-goldDark" />
            <span className="font-serif text-lg font-bold tracking-tight">
              365 Days With Jesus
            </span>
          </div>
          <span className="hidden sm:inline text-sanctuary-taupe">|</span>
          <span className="text-xs text-sanctuary-taupe font-sans tracking-wide">
            A Daily Devotional for Women
          </span>
        </div>

        {/* Short Brand Description */}
        <p className="font-serif italic text-sm text-sanctuary-cocoa max-w-lg">
          &ldquo;Start your day with faith. Live with gratitude. Walk with purpose.&rdquo;
        </p>

        {/* Support Contact Placeholder */}
        <p className="text-[11px] text-sanctuary-taupe">
          Have questions or need assistance? Reach our friendly support team at{" "}
          <a
            href="mailto:support@365dayswithjesus.com"
            className="text-sanctuary-plum underline hover:text-sanctuary-plumDark"
          >
            support@365dayswithjesus.com
          </a>
        </p>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-sanctuary-cocoa pt-2 border-t border-sanctuary-taupeLight/30">
          <button
            onClick={() => onOpenPolicy("privacy")}
            className="hover:text-sanctuary-plum transition-colors"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button
            onClick={() => onOpenPolicy("terms")}
            className="hover:text-sanctuary-plum transition-colors"
          >
            Terms and Conditions
          </button>
          <span>•</span>
          <button
            onClick={() => onOpenPolicy("refund")}
            className="hover:text-sanctuary-plum transition-colors"
          >
            Refund Policy
          </button>
        </div>

        {/* Copyright Notice */}
        <p className="text-[11px] text-sanctuary-taupe pt-2">
          &copy; {new Date().getFullYear()} 365 Days With Jesus. All rights reserved. Scripture quotations are from the World English Bible (WEB), dedicated to the public domain.
        </p>
      </div>
    </footer>
  );
}
