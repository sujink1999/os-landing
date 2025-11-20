import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vanta OS — The Operating System for High-Performance Living",
  description:
    "Vanta OS is an AI-driven operating system that learns your biology, behavior, and ambition, then builds a personalized daily protocol around them.",
  keywords: [
    "Vanta OS",
    "health",
    "AI",
    "personalized health",
    "biohacking",
    "high-performance",
    "wellness",
  ],
  authors: [{ name: "Vanta" }],
  openGraph: {
    title: "Vanta OS — The Operating System for High-Performance Living",
    description:
      "Vanta OS is an AI-driven operating system that learns your biology, behavior, and ambition, then builds a personalized daily protocol around them.",
    type: "website",
    siteName: "Vanta OS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanta OS — The Operating System for High-Performance Living",
    description:
      "Vanta OS is an AI-driven operating system that learns your biology, behavior, and ambition, then builds a personalized daily protocol around them.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
