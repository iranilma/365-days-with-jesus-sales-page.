import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://365dayswithjesus.com"),
  title: "365 Days With Jesus | A Daily Devotional for Women",
  description:
    "Discover 365 Days With Jesus, a daily Christian devotional featuring Scripture, reflections and guided prayers. Get both digital editions for $17.",
  keywords: [
    "Christian Devotional",
    "Daily Devotional for Women",
    "365 Days With Jesus",
    "Prayer Journal",
    "Christian Daily Reader",
    "Scripture Reading Plan",
    "Christian Planner",
    "Printable Devotional",
    "World English Bible",
  ],
  openGraph: {
    title: "365 Days With Jesus | A Daily Devotional for Women",
    description:
      "A Year of Faith. A Daily Moment With Him. Complete Digital Bundle including Downloadable PDF & Interactive Web Edition for $17 USD.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/product-mockup-hero.jpg",
        width: 1024,
        height: 682,
        alt: "365 Days With Jesus - Complete Digital Bundle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "365 Days With Jesus | A Daily Devotional for Women",
    description:
      "A Year of Faith. A Daily Moment With Him. Complete Digital Bundle including Downloadable PDF & Interactive Web Edition for $17 USD.",
    images: ["/images/product-mockup-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-sanctuary-ivory text-sanctuary-cocoa antialiased selection:bg-sanctuary-blush selection:text-sanctuary-cocoa">
        {children}
      </body>
    </html>
  );
}
