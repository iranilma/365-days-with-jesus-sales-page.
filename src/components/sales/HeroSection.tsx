"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Check, Monitor, Sparkles } from "lucide-react";
import { BotanicalSprig } from "@/components/BotanicalElements";

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export function HeroSection({ onOpenCheckout }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Conversion Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-sanctuary-taupe/60"></span>
              <span className="text-[11px] sm:text-xs font-sans font-bold tracking-widest uppercase text-sanctuary-taupe">
                365-DAY DIGITAL DEVOTIONAL
              </span>
              <span className="h-px w-6 bg-sanctuary-taupe/60"></span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-sanctuary-plum leading-[1.08] tracking-tight">
              A Year of Faith.
              <br />
              <span className="italic font-normal">A Daily Moment</span> With Him.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-sanctuary-cocoaLight leading-relaxed max-w-xl">
              Make room for God in your everyday life. Discover daily Scripture,
              meaningful reflections, guided prayers and practical encouragement
              to help you walk closer with Jesus — one day at a time.
            </p>

            {/* Price Display */}
            <div className="pt-1">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-sanctuary-plum">
                  $17
                </span>
                <span className="text-lg font-serif font-bold text-sanctuary-taupe uppercase tracking-wider">
                  USD
                </span>
              </div>
            </div>

            {/* CTA Button & Microcopy */}
            <div className="space-y-3 pt-1">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sanctuary-plum text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-md hover:bg-sanctuary-plumDark hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>GET BOTH EDITIONS — $17</span>
                <ArrowRight className="w-4 h-4 text-sanctuary-goldLight group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-wrap items-center gap-4 text-xs text-sanctuary-taupe pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sanctuary-sage"></span>
                  One-time payment
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sanctuary-taupe" />
                  PDF + Interactive Web Edition
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Product Mockup */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Subtle Warm Glow Behind Mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sanctuary-blush/30 via-sanctuary-goldPale/20 to-transparent rounded-3xl filter blur-2xl transform scale-95 pointer-events-none"></div>

            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-xl border border-sanctuary-taupeLight/50 bg-white/40 backdrop-blur-sm group transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/images/product-mockup-hero.jpg"
                alt="365 Days With Jesus Devotional Book, Tablet, and Smartphone Mockup"
                width={1024}
                height={682}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
