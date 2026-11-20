import React from "react";

export function BotanicalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 text-sanctuary-taupe ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-sanctuary-taupeLight" />
      <svg
        className="w-6 h-6 text-sanctuary-rose opacity-80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21c-4.5-4-7-8.5-7-12a7 7 0 0 1 14 0c0 3.5-2.5 8-7 12z" />
        <path d="M12 9v4" />
        <path d="M10 11h4" />
      </svg>
      <div className="h-[1px] w-12 sm:w-20 bg-sanctuary-taupeLight" />
    </div>
  );
}

export function BotanicalSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-8 h-8 text-sanctuary-sage ${className}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Central stem */}
      <path d="M16 28 C16 20, 16 12, 16 4" />
      {/* Left leaves */}
      <path d="M16 22 C13 21, 10 18, 11 15 C13 14, 15 16, 16 19" fill="currentColor" fillOpacity="0.15" />
      <path d="M16 15 C12 14, 9 10, 11 7 C13 6, 15 9, 16 12" fill="currentColor" fillOpacity="0.15" />
      {/* Right leaves */}
      <path d="M16 19 C19 18, 22 15, 21 12 C19 11, 17 13, 16 16" fill="currentColor" fillOpacity="0.15" />
      <path d="M16 11 C20 10, 23 6, 21 3 C19 2, 17 5, 16 8" fill="currentColor" fillOpacity="0.15" />
      {/* Top bud */}
      <circle cx="16" cy="4" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function BotanicalCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-6 h-6 text-sanctuary-taupe opacity-40 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M2 2h8c6 0 10 4 10 10v8" />
      <circle cx="4" cy="4" r="1.5" fill="currentColor" />
    </svg>
  );
}
