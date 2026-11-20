import React from "react";
import { Check } from "lucide-react";
import { BotanicalSprig } from "@/components/BotanicalElements";

export function BenefitsSection() {
  const benefits = [
    "Make time for God, even on busy days.",
    "Grow in your understanding of Scripture.",
    "Find encouragement during challenging seasons.",
    "Develop a more intentional prayer life.",
    "Reflect on your journey with gratitude.",
    "Build a daily rhythm rooted in faith.",
  ];

  return (
    <section id="benefits" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-sanctuary-taupeLight/60 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Botanical Detail */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sanctuary-blush text-sanctuary-goldDark mb-1">
                <BotanicalSprig className="w-6 h-6 text-sanctuary-goldDark" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-sanctuary-plum leading-snug">
                A Little Time With God Can Change the Way You Approach Your Day.
              </h2>
              <p className="text-xs sm:text-sm text-sanctuary-cocoaLight leading-relaxed">
                Quiet spiritual discipline isn&apos;t about rigid perfection — it is
                about creating space to breathe, listen, and walk in grace.
              </p>
            </div>

            {/* Right Column: 2-column checklist of benefits */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-sanctuary-ivory border border-sanctuary-taupeLight/40"
                  >
                    <div className="w-5 h-5 rounded-full bg-sanctuary-sage text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-sanctuary-cocoa leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
