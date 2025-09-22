// import values from "./Values";
// import Grains from "@/assets/Grains.png";
// import Blob from "@/assets/Blob.png";

// // import GsapAnimejs from '@/components/AnimatedGradientBg' 

// import Image from "next/image";

// export default function HowWeWork() {
//   return (
//     <section id="about" className="font-['SatoshiVariable'] w-full relative py-28 text-center overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
//         <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-900">
//           How we work at ProTech Innovation
//         </h2>
//         <p className="text-gray-500 font-['Inter'] mt-2 mb-10">
//           Inside ProTech Innovation: The Values We Live By
//         </p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 xl:gap-8 w-[90%] md:w-4/5 lg:w-4xl xl:w-5xl 2xl:w-7xl mx-auto relative z-10">
//         {values.map((value, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center space-y-3 p-5"
//           >
//             <Image src={value.icon} alt={value.title} className="w-12 h-12" />
//             <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
//             <p className="text-gray-500">{value.description}</p>
//           </div>
//         ))}
//       </div>
      
//       <Image 
//         src={Grains} 
//         alt="Grains" 
//         className="absolute inset-0 object-cover -z-40 w-full h-full opacity-40"
//       />
//       <Image 
//         src={Blob} 
//         alt="Blob" 
//         className="absolute inset-0 object-cover -z-30 w-full h-full opacity-40 "
//       />
//     </section>
//   );
// }



"use client";

import { useEffect, useRef } from "react";

import Blob from "@/assets/FloatingAssets/Blob.png";
import Grains from "@/assets/Grains.png";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import values from "@/data/objects/Values";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { backgroundColor: "#ffffff" },
      {
        backgroundColor: "#000000",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "top 40%",
          toggleActions: "play reverse play reverse",
          scrub: true,
        },
      }
    );

    gsap.utils.toArray(".text-black").forEach((el) => {
      gsap.fromTo(
        el,
        { color: "#000000" },
        {
          color: "#ffffff",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 40%",
            toggleActions: "play reverse play reverse",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="font-['SatoshiVariable'] w-full relative py-28 text-center overflow-hidden transition-colors duration-1000"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-black">
          How we work at ProTech Innovation
        </h2>
        <p className="text-gray-400 font-['Inter'] mt-2 mb-10">
          Inside ProTech Innovation: The Values We Live By
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 xl:gap-8 w-[90%] md:w-4/5 lg:w-4xl xl:w-5xl 2xl:w-7xl mx-auto relative z-10">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3 p-5"
          >
            <Image src={value.icon} alt={value.title} className="w-12 h-12" />
            <h3 className="text-lg font-bold text-black">{value.title}</h3>
            <p className="text-gray-400">{value.description}</p>
          </div>
        ))}
      </div>

      <Image
        src={Grains}
        alt="Grains"
        className="absolute inset-0 object-cover -z-40 w-full h-full opacity-40"
      />
      <Image
        src={Blob}
        alt="Blob"
        className="absolute inset-0 object-cover -z-30 w-full h-full opacity-40"
      />
    </section>
  );
}
