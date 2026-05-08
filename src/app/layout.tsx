import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/providers/theme-provider";

import { AuthProvider } from "@/components/providers/session-provider";

const playfairDisplayHeading =
  Playfair_Display({
    subsets: ["latin"],
    variable: "--font-heading",
  });

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sereniq",
    template: "%s | Sereniq",
  },

  description:
    "A calm digital wellness companion for mindfulness, reflection, emotional clarity, and mental wellbeing.",

  keywords: [
    "mental wellness",
    "mindfulness",
    "journaling",
    "stress relief",
    "focus",
    "wellbeing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
       data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        notoSans.variable,
        playfairDisplayHeading.variable,
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body className="min-h-screen bg-background text-foreground">
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}