"use client";

import { useEffect, useRef, useState } from "react";

import AnimatedText from "@/components/ui/AnimatedText";
import CalendlyPopupButton from "./CalendlyPopupButton";
import Circles from "@/assets/FloatingAssets/Circles.png";
import Dots from "@/assets/FloatingAssets/Dots.png";
import GsapAnimejs from "./AnimatedGradientBg";
import Head from "next/head";
import Image from "next/image";
import { PopupButton } from "react-calendly";
import RingLeft from "@/assets/FloatingAssets/RingLeft.png";
import RingRight from "@/assets/FloatingAssets/RingRight.png";
import Star from "@/assets/FloatingAssets/Star.png";
import gsap from "gsap";

// import ParticlesBackground from "./ParticlesBackground";






const Hero = () => {
  const lines = [
    "Empowering Your Vision",
    "With Future-Ready IT Solutions."
  ];
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  return (
    <div
      className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden gap-10 px-6"
      role="main"
      aria-label="ProTech Innovation Hero Section"
    >
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/heroBackground.png"
          >
            <source src="/videos/Tech.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 bg-black opacity-50 left-0 w-full h-full object-cover z-0"></div>
          {/* Floating assets scale down on mobile for clarity */}
          <Image
            className="absolute select-none -z-10 top-[170px] right-[-80px] w-10 md:w-16 lg:w-20 xl:w-40"
            src={RingRight}
            alt="Decorative ring asset"
            aria-hidden="true"
          />
          <Image
            className="absolute select-none -z-10 top-1/2 left-[-80px] w-10 md:w-16 lg:w-20 xl:w-40"
            src={RingLeft}
            alt="Decorative ring asset"
            aria-hidden="true"
          />
          <Image
            className="absolute select-none top-4/6 right-[-80px] -z-10 w-16 md:w-24 xl:w-40"
            src={Star}
            alt="Decorative star asset"
            aria-hidden="true"
            width={150}
            height={150}
          />
          <div className="w-[95%] relative h-auto z-10 md:w-5/6 lg:w-4xl xl:w-5xl 2xl:w-7xl flex flex-col items-center gap-12">
            <Image
              className="absolute select-none top-[-10px] right-60 -z-10 w-12 md:w-20"
              src={Dots}
              alt="Decorative dots asset"
              aria-hidden="true"
              width={100}
              height={100}
            />
            <Image
              className="absolute select-none top-20 left-64 -z-10 w-8 md:w-12"
              src={Circles}
              alt="Decorative circles asset"
              aria-hidden="true"
              width={40}
              height={40}
            />
            <h1
              ref={headingRef}
              className="text-white mt-10 md:mt-0 text-center text-3xl md:text-[44px] lg:text-5xl 2xl:text-6xl font-black font-['SatoshiVariable']"
              aria-label="Empowering Your Vision With Future-Ready IT Solutions"
            >
              <span className="inline-block">
                {lines.map((line, lineIdx) => (
                  <div key={lineIdx} className="block">
                    {line.split("").map((char, i) => (
                      <span key={`${lineIdx}-${i}`} className="char inline-block">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </div>
                ))}
              </span>
            </h1>
            <p className="w-5/6 text-base xl:text-base 2xl:text-xl mt-2 2xl:mt-10 text-white text-center">
              We shape great ideas into reality with the force of digital technology and future-proof IT solutions.
            </p>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
                  <CalendlyPopupButton
                      text="Book A Free Consultation"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
              </div>
          </div>
            </div>
  );
}
// End of Hero.js

export default Hero;
