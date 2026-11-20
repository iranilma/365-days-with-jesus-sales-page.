"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Compass,
  FileText,
  Heart,
  MessageSquare,
  Moon,
  Sparkles,
  Sprout,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { DevotionalEntry } from "@/lib/types";

interface WhatsInsideSectionProps {
  sampleEntry: DevotionalEntry;
}

export function WhatsInsideSection({ sampleEntry }: WhatsInsideSectionProps) {
  const [showPreview, setShowPreview] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Daily Scripture",
      desc: "Begin with a Bible passage that provides the foundation for your reflection.",
      icon: BookOpen,
      color: "bg-sanctuary-blush",
    },
    {
      num: "02",
      title: "Heartfelt Reflection",
      desc: "Explore a meaningful message connected to the day's Scripture.",
      icon: FileText,
      color: "bg-sanctuary-blushLight",
    },
    {
      num: "03",
      title: "Three Reflection Questions",
      desc: "Pause and consider how the message speaks to your life and faith.",
      icon: MessageSquare,
      color: "bg-sanctuary-ivoryLight",
    },
    {
      num: "04",
      title: "Guided Prayer",
      desc: "Find encouragement and direction through a prayer inspired by the day's message.",
      icon: Heart,
      color: "bg-sanctuary-blush",
    },
    {
      num: "05",
      title: "Daily Intention",
      desc: "Carry a meaningful, faith-filled intention into your day.",
      icon: Compass,
      color: "bg-sanctuary-goldPale",
    },
    {
      num: "06",
      title: "Practical Action",
      desc: "Put what you learn into practice through a simple daily action.",
      icon: Sprout,
      color: "bg-sanctuary-sageLight",
    },
    {
      num: "07",
      title: "Evening Reflection",
      desc: "Close your day with gratitude and awareness of God's presence.",
      icon: Moon,
      color: "bg-sanctuary-blushLight",
    },
  ];

  return (
    <section id="whats-inside" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
          <span className="text-[11px] font-sans font-bold tracking-widest uppercase text-sanctuary-taupe block">
            Structured Spiritual Rhythms
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sanctuary-plum">
            Your Daily Moment With Jesus.
          </h2>
          <p className="text-sm sm:text-base text-sanctuary-cocoaLight leading-relaxed">
            Every day is thoughtfully structured to help you move from reading
            Scripture to applying biblical wisdom in everyday life.
          </p>
        </div>

        {/* 7 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 sm:gap-4 text-left">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-sanctuary-taupeLight/50 shadow-sm hover:shadow-md hover:border-sanctuary-rose transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xs font-bold text-sanctuary-taupe tracking-wider">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-sanctuary-blush flex items-center justify-center text-sanctuary-plum group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-base font-bold text-sanctuary-plum mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-sanctuary-cocoaLight leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive "Look Inside Day 1" Drawer */}
        <div className="mt-8">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-sanctuary-taupeLight text-xs font-semibold text-sanctuary-plum hover:bg-sanctuary-blushLight transition-colors shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-sanctuary-gold" />
            <span>
              {showPreview
                ? "Hide Sample Day 1 Devotional"
                : "Preview Day 1 Devotional Liturgy"}
            </span>
            {showPreview ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showPreview && (
            <div className="mt-6 text-left max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-sanctuary-taupeLight/80 shadow-lg animate-fade-in space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-sanctuary-taupeLight/40">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-sanctuary-taupe font-bold block">
                    Day 1 of 365 · Authoritative Sample
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-sanctuary-plum">
                    {sampleEntry.title}
                  </h4>
                </div>
                <span className="text-xs font-serif italic text-sanctuary-taupe">
                  {sampleEntry.scripture_primary_reference}
                </span>
              </div>

              {/* Scripture Quotation */}
              <div className="p-4 rounded-2xl bg-sanctuary-ivory border-l-4 border-sanctuary-gold">
                <p className="font-serif text-lg italic text-sanctuary-cocoa leading-relaxed">
                  &ldquo;{sampleEntry.scripture_primary_text}&rdquo;
                </p>
                <span className="text-[10px] text-sanctuary-taupe block mt-1 uppercase tracking-wider font-semibold">
                  {sampleEntry.scripture_translation}
                </span>
              </div>

              {/* Reflection Excerpt */}
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-sanctuary-plum block mb-1">
                  Pastoral Reflection
                </span>
                <p className="text-xs sm:text-sm text-sanctuary-cocoaLight leading-relaxed">
                  {sampleEntry.reflection_body}
                </p>
              </div>

              {/* 3 Reflection Questions */}
              <div className="p-4 rounded-2xl bg-sanctuary-blushLight/50 space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-sanctuary-plum block">
                  Three Reflection Questions
                </span>
                <ul className="space-y-1.5 text-xs text-sanctuary-cocoa">
                  {sampleEntry.reflection_questions.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-sanctuary-plum flex-shrink-0">
                        {idx + 1}.
                      </span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guided Prayer */}
              <div className="p-4 rounded-2xl bg-sanctuary-ivory space-y-1 border border-sanctuary-taupeLight/40">
                <span className="text-xs uppercase tracking-wider font-bold text-sanctuary-plum block">
                  Guided Prayer
                </span>
                <p className="font-serif italic text-xs sm:text-sm text-sanctuary-cocoa leading-relaxed">
                  &ldquo;{sampleEntry.guided_prayer}&rdquo;
                </p>
              </div>

              {/* Intention & Action */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-sanctuary-goldPale border border-sanctuary-gold/30">
                  <span className="font-bold text-sanctuary-goldDark block mb-0.5 uppercase text-[10px] tracking-wider">
                    Daily Intention
                  </span>
                  <span className="text-sanctuary-cocoa">{sampleEntry.daily_intention}</span>
                </div>
                <div className="p-3 rounded-xl bg-sanctuary-sageLight/50 border border-sanctuary-sage/30">
                  <span className="font-bold text-sanctuary-sage block mb-0.5 uppercase text-[10px] tracking-wider">
                    Practical Faith Action
                  </span>
                  <span className="text-sanctuary-cocoa">{sampleEntry.practical_action}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
