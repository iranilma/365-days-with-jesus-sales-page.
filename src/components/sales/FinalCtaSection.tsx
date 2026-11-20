import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenCheckout: () => void;
}

export function FinalCtaSection({ onOpenCheckout }: FinalCtaSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative bg-sanctuary-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Botanical Watercolor Box */}
        <div className="relative rounded-3xl overflow-hidden border border-sanctuary-taupeLight/60 shadow-lg p-8 sm:p-14 lg:p-16 text-center">
          {/* Botanical Watercolor Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/botanical-cta-bg.png"
              alt="Soft botanical watercolor foliage background"
              fill
              className="object-cover"
              priority
            />
            {/* Soft subtle scrim in the center for optical contrast */}
            <div className="absolute inset-0 bg-sanctuary-ivory/40 backdrop-blur-[0.5px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-sanctuary-plum leading-snug">
              A Moment With Jesus Can Change the Way You Approach Your Day.
            </h2>

            <p className="font-serif text-base sm:text-lg italic text-sanctuary-cocoa max-w-xl mx-auto">
              Start today. Grow in faith. Walk with Him, one day at a time.
            </p>

            <div className="pt-3">
              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-sanctuary-plum text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl hover:bg-sanctuary-plumDark hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>GET BOTH EDITIONS — $17</span>
                <ArrowRight className="w-4 h-4 text-sanctuary-goldLight group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
