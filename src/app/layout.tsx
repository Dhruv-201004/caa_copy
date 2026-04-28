import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ajit Agarwal & Associates",
    template: "%s | Ajit Agarwal & Associates",
  },
  description:
    "Ajit Agarwal & Associates is a chartered accountant firm delivering tax, audit, and advisory excellence with trust and precision.",
  keywords: [
    "chartered accountant",
    "tax",
    "audit",
    "compliance",
    "advisory",
    "Moradabad",
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-ink">{children}</body>
    </html>
  );
}
