import type { Metadata } from "next";
import { Amiri, Inter } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | محفظة أعمالي",
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
        className={`${amiri.variable} ${inter.variable} antialiased bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
