"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Lock } from "lucide-react";

interface StickyMobileCtaProps {
  onOpenCheckout: () => void;
}

export function StickyMobileCta({ onOpenCheckout }: StickyMobileCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 350px)
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-sanctuary-ivoryLight/95 backdrop-blur-md border-t border-sanctuary-taupeLight/80 p-3 sm:px-6 shadow-2xl animate-fade-in">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div>
          <span className="font-serif font-bold text-sm text-sanctuary-plum block leading-tight">
            365 Days With Jesus
          </span>
          <span className="text-[11px] text-sanctuary-taupe font-semibold">
            Complete Bundle · $17 USD
          </span>
        </div>

        <button
          onClick={onOpenCheckout}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-sanctuary-plum text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-sanctuary-plumDark active:scale-95 transition-all"
        >
          <span>Get Editions</span>
          <ArrowRight className="w-3.5 h-3.5 text-sanctuary-goldLight" />
        </button>
      </div>
    </div>
  );
}
