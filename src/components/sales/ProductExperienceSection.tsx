import React from "react";
import Image from "next/image";
import { Check, Download, Laptop, Sparkles } from "lucide-react";

export function ProductExperienceSection() {
  const pdfFeatures = [
    "Download and save your devotional.",
    "Read on your phone, tablet or computer.",
    "Revisit your favourite reflections.",
    "Keep your digital devotional close.",
  ];

  const webFeatures = [
    "Navigate through the 365 daily entries.",
    "Open the devotional you want to read.",
    "Enjoy a convenient online reading experience.",
    "Return whenever you want to spend time with Jesus.",
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 relative bg-sanctuary-ivoryLight/60 border-y border-sanctuary-taupeLight/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-12">
          <span className="text-[11px] font-sans font-bold tracking-widest uppercase text-sanctuary-taupe block">
            Flexible Quiet Time
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sanctuary-plum">
            Two Ways to Experience Your 365-Day Journey.
          </h2>
          <p className="text-sm sm:text-base text-sanctuary-cocoaLight leading-relaxed">
            Whether you love saving pages to your tablet, reading on the go, or
            immersing yourself in our interactive digital sanctuary.
          </p>
        </div>

        {/* Master Bundle Composition Visual Showcase */}
        <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-lg border border-sanctuary-taupeLight/60 bg-white/60 p-2 sm:p-3">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/images/bundle-mockup-open-book-laptop.jpg"
              alt="365 Days With Jesus Complete Digital Bundle featuring open devotional book, laptop sanctuary, tablet, and smartphone"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Two Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Card 1: Downloadable PDF */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sanctuary-taupeLight/70 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              {/* Visual Preview */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-sanctuary-blushLight flex items-center justify-center p-3 border border-sanctuary-taupeLight/40">
                <Image
                  src="/images/pdf-edition-preview.png"
                  alt="Downloadable PDF Edition Preview showing book cover and interior pages"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-sanctuary-plum mb-4">
                Your Devotional, Wherever You Go.
              </h3>

              {/* Feature Checklist */}
              <ul className="space-y-3 text-xs sm:text-sm text-sanctuary-cocoa">
                {pdfFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-sanctuary-sageLight text-sanctuary-sage flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tag */}
            <div className="mt-8 pt-4 border-t border-sanctuary-taupeLight/40 flex items-center justify-between text-xs font-semibold text-sanctuary-taupe">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sanctuary-blush text-sanctuary-plum text-[11px] font-bold">
                <Download className="w-3 h-3" />
                PDF EDITION
              </span>
              <span>US Letter &amp; A4 Compatible</span>
            </div>
          </div>

          {/* Card 2: Interactive Web Edition */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sanctuary-taupeLight/70 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              {/* Visual Preview */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-sanctuary-ivory flex items-center justify-center p-3 border border-sanctuary-taupeLight/40">
                <Image
                  src="/images/web-edition-preview.png"
                  alt="Interactive Web Edition preview showing responsive tablet and smartphone layout"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-sanctuary-plum mb-4">
                Your Daily Devotional, Online.
              </h3>

              {/* Feature Checklist */}
              <ul className="space-y-3 text-xs sm:text-sm text-sanctuary-cocoa">
                {webFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-sanctuary-sageLight text-sanctuary-sage flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tag */}
            <div className="mt-8 pt-4 border-t border-sanctuary-taupeLight/40 flex items-center justify-between text-xs font-semibold text-sanctuary-taupe">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sanctuary-blush text-sanctuary-plum text-[11px] font-bold">
                <Laptop className="w-3 h-3" />
                INTERACTIVE WEB EDITION
              </span>
              <span>Phone · Tablet · Desktop</span>
            </div>
          </div>
        </div>

        {/* Both Editions Included Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sanctuary-sage text-white font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-sanctuary-goldLight" />
            <span>BOTH EDITIONS INCLUDED IN YOUR PURCHASE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
