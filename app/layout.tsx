import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "./components/AnimatedBackground";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio - Data Science, AI Engineering, Software Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${inter.className} antialiased bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-stone-900 dark:via-amber-900 dark:to-stone-800 min-h-screen relative overflow-x-hidden`}
      >
        <ThemeProvider>
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
