import React from "react";
import Image from "next/image";
import { BotanicalSprig } from "@/components/BotanicalElements";

export function EmotionalConnectionSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white/70 rounded-3xl border border-sanctuary-taupeLight/50 p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle decorative sprig in top right */}
          <div className="absolute top-4 right-4 pointer-events-none opacity-30 text-sanctuary-gold">
            <BotanicalSprig className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Atmospheric Lifestyle Photograph */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-sanctuary-blush">
                <Image
                  src="/images/bundle-mockup-lifestyle-journey.jpg"
                  alt="A woman enjoying an unhurried, peaceful morning devotional moment with Scripture and reflection journal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Emotional Storytelling Copy */}
            <div className="md:col-span-7 space-y-4 text-left">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-sanctuary-plum leading-snug">
                Make Time for What Matters Most.
              </h2>

              <p className="text-sm sm:text-base text-sanctuary-cocoaLight leading-relaxed">
                Life gets busy. Our minds get full. And sometimes, even when we want to spend more time with God, we don&apos;t know where to begin.
              </p>

              <p className="text-sm sm:text-base text-sanctuary-cocoa leading-relaxed font-medium">
                365 Days With Jesus gives you a simple, meaningful way to pause, open God&apos;s Word and reconnect with Him.
              </p>

              <div className="py-2 border-l-2 border-sanctuary-gold pl-4 space-y-1">
                <p className="font-serif text-base sm:text-lg italic text-sanctuary-plum">
                  No pressure to be perfect.
                </p>
                <p className="font-serif text-base sm:text-lg italic text-sanctuary-plum">
                  No need to have all the answers.
                </p>
                <p className="text-xs sm:text-sm text-sanctuary-cocoa font-semibold pt-1">
                  Just a moment to pause, reflect and pray.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
