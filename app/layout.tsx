import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        className={`${inter.className} antialiased bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
