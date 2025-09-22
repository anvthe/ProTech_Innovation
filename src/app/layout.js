import "@/styles/globals.css";

import { Caveat, Geist, Geist_Mono, Inter } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/tsparticles@3/tsparticles.bundle.min.js"
          defer
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${inter.variable} antialiased`}
      >
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}


export const metadata = {
  title: "ProTech Innovation",
  description: "move forward",
};

