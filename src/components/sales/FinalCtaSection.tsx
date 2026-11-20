import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenCheckout: () => void;
}

export function FinalCtaSection({ onOpenCheckout }: FinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 border-t border-sanctuary-taupeLight/50">
      {/* Background Floral Sunrise Banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-cta-banner.jpg"
          alt="Sunrise with soft floral petals"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sanctuary-ivory via-sanctuary-ivory/80 to-sanctuary-ivory/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sanctuary-plum leading-tight">
          A Moment With Jesus Can Change the Way You Approach Your Day.
        </h2>

        <p className="font-serif text-base sm:text-lg italic text-sanctuary-cocoaLight max-w-xl mx-auto">
          Start today. Grow in faith. Walk with Him, one day at a time.
        </p>

        <div className="pt-2">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-sanctuary-plum text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl hover:bg-sanctuary-plumDark hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>GET BOTH EDITIONS — $17</span>
            <ArrowRight className="w-4 h-4 text-sanctuary-goldLight group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
