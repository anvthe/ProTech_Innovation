"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import educationDetails from "@/data/objects/EducationDetails";

export default function Educations() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="educations"
            className="font-['SatoshiVariable'] w-full flex flex-col gap-10 py-16 px-4 sm:px-6 lg:px-8 2xl:py-32 z-50 text-center"
        >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 tracking-tight">
                Our Academic & Research Works
            </h2>

            <p className="text-gray-600 font-light 2xl:text-lg max-w-2xl mx-auto leading-relaxed">
                From varsity pet projects to full-fledged research and thesis works — we
                build, innovate, and experiment with passion.
            </p>

            {/* Swiper Wrapper */}
            <div ref={sectionRef} className="relative w-full max-w-7xl mx-auto z-10">
                <Swiper
                    spaceBetween={30}
                    grabCursor
                    centeredSlides={true}
                    slidesPerView="auto"
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className="pb-12"
                >
                    {educationDetails.map((solution, index) => (
                        <SwiperSlide
                            key={index}
                            className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    boxShadow: "0 22px 60px rgba(0,0,0,0.25)",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-[2px] shadow-xl"
                            >
                                <div className="bg-black h-full w-full p-8 flex flex-col text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Premium pagination style */}
                <style jsx global>{`
                    .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background: #d1d5db;
                        opacity: 1;
                        border-radius: 50%;
                        transition: all 0.3s ease;
                    }
                    .swiper-pagination-bullet-active {
                        background: linear-gradient(to right, #8b5cf6, #ec4899, #ef4444);
                        transform: scale(1.3);
                    }
                `}</style>
            </div>
        </section>
    );
}
