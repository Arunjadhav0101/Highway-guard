import type { Metadata } from "next";
import { dmSans, montserrat } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Highway Guard - India's Biggest Machine Learning Project",
  description:
    "Highway Guard is an AI-powered system revolutionizing waste detection on highways, contributing to Swachh Bharat Abhiyan and fostering sustainability.",
  keywords:[
    "Highway Guard",
    "AI Waste Detection",
    "Swachh Bharat Abhiyan",
    "Highway Sustainability",
    "Machine Learning",
    "Waste Management",
    "Clean India Mission",
    "Alaska App Studios"
  ],
  authors: [{ name: "Alaska App Studios" }],
  openGraph: {
    title: "Highway Guard - India's Biggest Machine Learning Project",
    description:
      "Discover Highway Guard, an innovative AI-powered solution for real-time waste detection on highways, supporting India's Clean India Mission.",
    url: "https://alaskas.tech",
    images: [
      {
        url: "/images/highway-guard-banner.png",
        width: 1200,
        height: 454,
        alt: "Highway Guard Banner",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body
        className={`${montserrat.className} ${dmSans.variable} bg-white text-gray-900 antialiased`}
      >
        <Header />
        <main className="pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
