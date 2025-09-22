// "use client";

// import { useRef } from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import project from "./Projects";
// import Image from "next/image";

// export default function ProjectShowcasing() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.25,
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     }),
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="projects"
//       className="font-['SatoshiVariable'] w-full py-28 px-4 sm:px-6 lg:px-8 text-center"
//     >
//       <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-900">
//         Innovation & Results
//       </h2>
//       <p className="text-gray-500 font-['Inter'] text-lg mt-2 mb-10">
//         Driving progress with creative solutions and tangible impact.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-[90%] md:w-5/6 lg:w-4xl xl:w-5xl 2xl:w-7xl mx-auto">
//         {project.map((caseStudy, index) => (
//           <motion.div
//             key={index}
//             className="relative bg-[#211951] rounded-[10px] w-full h-ful"
//             variants={fadeUp}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             custom={index}
//           >
//             <div className=" bg-white h-56 rounded-[10px] border border-[#211951] flex flex-col sm:flex-row items-start justify-between space-y-4 sm:space-y-0 sm:space-x-6 2xl:w-full p-6 transition-transform md:hover:translate-y-[-8px] md:hover:translate-x-[-8px]">
//             <div className="w-full sm:w-auto flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
//               <span className="md:text-xs lg:text-lg font-bold text-black">
//                 {caseStudy.category}
//               </span>
//               <h3 className="text-2xl md:text-xl lg:text-2xl 2xl:text-3xl font-extrabold text-gray-900">
//                 {caseStudy.title}
//               </h3>
//               <button className="bg-gray-200 rounded-xl p-3 transition hover:bg-gray-300">
//                 <FiArrowUpRight className="text-gray-900 text-lg" />
//               </button>
//             </div>

//             <div className="w-[200px] h-[140px] rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden">
//               {caseStudy.image ? (
//                 <Image
//                   src={caseStudy.image}
//                   alt={caseStudy.title}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <span className="text-gray-400">Image Placeholder</span>
//               )}
//             </div>
//           </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { useLayoutEffect, useRef } from "react";

import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import PointingArrowRight  from "@/assets/SVGs/Pointing-Arrow-Round-Right .svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import project from "@/data/objects/Projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectShowcasing() {
  return null;
}