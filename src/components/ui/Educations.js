import { motion, useInView } from "framer-motion";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import educationDetails from "@/data/objects/EducationDetails";
import { useRef } from "react";

export default function Educations() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    return (
        <section id="educations" className="font-['SatoshiVariable'] w-full flex flex-col gap-10 py-16 px-4 sm:px-6 lg:px-8 2xl:py-40 z-50 text-center">
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-black group-hover:text-white transition-colors duration-300">
               Educations
            </h2>
            <p className="text-gray-500 font-['Inter'] 2xl:text-lg">
                We blend industry expertise, advanced IT solutions, and powerful AI technologies to help businesses grow, adapt, and stay ahead in an ever-evolving world.
            </p>
            <div ref={sectionRef} className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] md:w-5/6 lg:w-4xl xl:w-5xl 2xl:w-7xl mx-auto">
                {educationDetails.map((solution, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        whileHover={{ scale: 1.08, y: -10, boxShadow: "0 12px 32px 0 rgba(33,25,81,0.18)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1, duration: 0.5 }}
                        className="relative rounded-2xl w-full h-full overflow-hidden group"
                    >
                        <div className="bg-white rounded-2xl h-full shadow-lg p-8 flex flex-col items-start text-left border border-black group-hover:border-black transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:bg-black">
                            {/* No icon/button for link */}
                            <h3 className="text-[22px] font-bold 2xl:text-2xl mb-2 transition-colors duration-300 group-hover:text-white">
                                {solution.title}
                            </h3>
                            <p className="text-gray-700 2xl:text-lg transition-colors duration-300 group-hover:text-white">{solution.description}</p>
                        </div>
                        {/* Removed blue gradient glows for pure black/white look */}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

