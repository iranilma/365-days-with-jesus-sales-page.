"use client";

import React, { useState } from "react";
import { SalesNavigation } from "./SalesNavigation";
import { HeroSection } from "./HeroSection";
import { RibbonSection } from "./RibbonSection";
import { EmotionalConnectionSection } from "./EmotionalConnectionSection";
import { WhatsInsideSection } from "./WhatsInsideSection";
import { ProductExperienceSection } from "./ProductExperienceSection";
import { BenefitsSection } from "./BenefitsSection";
import { OfferAndFaqSection } from "./OfferAndFaqSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { SalesFooter } from "./SalesFooter";
import { StickyMobileCta } from "./StickyMobileCta";
import { CheckoutModal } from "./CheckoutModal";
import { PolicyModal, PolicyType } from "./PolicyModal";
import { DevotionalEntry } from "@/lib/types";

interface SalesPageContentProps {
  sampleEntry: DevotionalEntry;
}

export function SalesPageContent({ sampleEntry }: SalesPageContentProps) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  const handleOpenCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setCheckoutOpen(false);
  };

  const handleOpenPolicy = (type: PolicyType) => {
    setActivePolicy(type);
  };

  const handleClosePolicy = () => {
    setActivePolicy(null);
  };

  return (
    <div className="min-h-screen bg-sanctuary-ivory text-sanctuary-cocoa flex flex-col selection:bg-sanctuary-blush selection:text-sanctuary-plum">
      {/* SECTION 1 — NAVIGATION */}
      <SalesNavigation onOpenCheckout={handleOpenCheckout} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* SECTION 2 — HERO */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* VALUE PROPOSITION RIBBON */}
        <RibbonSection />

        {/* SECTION 3 — EMOTIONAL CONNECTION */}
        <EmotionalConnectionSection />

        {/* SECTION 4 — WHAT'S INSIDE */}
        <WhatsInsideSection sampleEntry={sampleEntry} />

        {/* SECTION 5 — PRODUCT EXPERIENCE */}
        <ProductExperienceSection />

        {/* SECTION 6 — EMOTIONAL BENEFITS */}
        <BenefitsSection />

        {/* SECTIONS 7 & 8 — THE PRODUCT OFFER & FREQUENTLY ASKED QUESTIONS */}
        <OfferAndFaqSection onOpenCheckout={handleOpenCheckout} />

        {/* SECTION 9 — FINAL CTA */}
        <FinalCtaSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* SECTION 10 — FOOTER */}
      <SalesFooter onOpenPolicy={handleOpenPolicy} />

      {/* CONVERSION: STICKY MOBILE PURCHASE CTA */}
      <StickyMobileCta onOpenCheckout={handleOpenCheckout} />

      {/* CONVERSION: CHECKOUT INTEGRATION MODAL */}
      <CheckoutModal isOpen={checkoutOpen} onClose={handleCloseCheckout} />

      {/* ACCESSIBLE LEGAL POLICY MODAL */}
      <PolicyModal type={activePolicy} onClose={handleClosePolicy} />
    </div>
  );
}
