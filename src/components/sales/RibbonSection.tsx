import React from "react";
import { BookOpen, Calendar, CheckCircle2, Heart } from "lucide-react";
import { BotanicalSprig } from "@/components/BotanicalElements";

export function RibbonSection() {
  const items = [
    {
      icon: BookOpen,
      title: "365 Daily Devotionals",
    },
    {
      icon: BotanicalSprig,
      title: "Rooted in Scripture",
    },
    {
      icon: Heart,
      title: "Practical & Real-Life",
    },
    {
      icon: Calendar,
      title: "For Every Season of Life",
    },
  ];

  return (
    <section className="w-full border-y border-sanctuary-taupeLight/60 bg-sanctuary-ivoryLight py-4 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2.5 sm:gap-3 text-center sm:text-left"
              >
                <div className="w-7 h-7 rounded-full bg-sanctuary-blush/60 flex items-center justify-center text-sanctuary-plum flex-shrink-0">
                  <Icon className="w-4 h-4 text-sanctuary-plum" />
                </div>
                <span className="font-serif text-sm sm:text-base font-bold text-sanctuary-cocoa tracking-wide">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
