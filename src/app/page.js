"use client";

import "@/styles/globals.css";

import ContactUs from "@/components/ui/ContactUsSection";
import DevtechTape from '@/components/ui/DevtechTape'
import DottedLine from '@/assets/SVGs/Dotted-Line-for-Section.svg';
import GsapAnimejs from '@/components/ui/AnimatedGradientBg'
import Hero from "@/components/ui/Hero";
import HowWeWork from "@/components/ui/HowWeWork";
import Image from "next/image";
import MilestoneSection from "@/components/ui/MilestoneSection";
import Noise from '@/assets/Taxture.png'
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import Subscription from "@/components/ui/Subscription";
import TechnologySolutions from "@/components/ui/Services";
import Techrain from '@/components/ui/Techrain'
import TestimonialSection from "@/components/ui/ClientTestimonials";

// import OurLocations from "@/components/OurLocation";










export default function Home() {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="  relative w-full h-screen">
        <Hero />
      </div>
      <div className="relative w-full h-auto">
        <div className="relative w-full h-auto bg-cover  bg-center bg-no-repeat">
          <Image className="absolute lg:left-[-10%] lg:top-[-42.5%] xl:top-[-41.2%]  2xl:left-20 2xl:top-[-41%] h-full z-0 w-full opacity-30 overflow-hidden object-fill" src={DottedLine} alt="Background" />
          {/* <Techrain count={40} /> */}
          <TechnologySolutions />
          <ProjectShowcase />
          <HowWeWork />
        </div>

        <div className="relative w-full h-auto">
          <MilestoneSection />
          <TestimonialSection />
        </div>

        <div className="relative w-full h-auto">
          {/* <OurLocations /> */}
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
