"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Menu, Sparkles, X } from "lucide-react";
import { BotanicalSprig } from "@/components/BotanicalElements";

interface SalesNavigationProps {
  onOpenCheckout: () => void;
}

export function SalesNavigation({ onOpenCheckout }: SalesNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "What's Inside", href: "#whats-inside" },
    { label: "The Experience", href: "#experience" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-sanctuary-ivory/95 backdrop-blur-md border-b border-sanctuary-taupeLight/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Wordmark & Emblem */}
        <Link
          href="#top"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-sanctuary-blush flex items-center justify-center text-sanctuary-goldDark group-hover:scale-105 transition-transform">
            <BotanicalSprig className="w-5 h-5 text-sanctuary-goldDark" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-sanctuary-plum block leading-tight">
              365 Days With Jesus
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Sales page navigation"
          className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wide text-sanctuary-cocoa"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sanctuary-cocoa hover:text-sanctuary-plum transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Explore Devotional Experience Link */}
          <a
            href="#experience"
            className="inline-flex items-center gap-1.5 text-sanctuary-taupe hover:text-sanctuary-plum transition-colors text-xs font-medium"
            title="Explore the Devotional Experience"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Devotional</span>
          </a>
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sanctuary-plum text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-sanctuary-plumDark hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get Both Editions — $17</span>
            <ArrowRight className="w-3.5 h-3.5 text-sanctuary-goldLight" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCheckout}
            className="sm:hidden px-3 py-1.5 rounded-full bg-sanctuary-plum text-white text-[11px] font-bold uppercase tracking-wider"
          >
            $17
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-xl text-sanctuary-cocoa hover:bg-sanctuary-blushLight transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sanctuary-taupeLight/60 bg-sanctuary-ivoryLight px-6 py-5 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-4 text-sm font-medium text-sanctuary-cocoa">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-sanctuary-plum transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 inline-flex items-center gap-2 text-sanctuary-taupe hover:text-sanctuary-plum"
            >
              <BookOpen className="w-4 h-4" />
              <span>The Devotional</span>
            </a>

            <div className="pt-2 border-t border-sanctuary-taupeLight/40">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-sanctuary-plum text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-sanctuary-plumDark"
              >
                <span>Get Both Editions — $17</span>
                <ArrowRight className="w-3.5 h-3.5 text-sanctuary-goldLight" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
