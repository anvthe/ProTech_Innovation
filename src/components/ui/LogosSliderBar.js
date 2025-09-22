"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Logos from "@/assets/company-logos/Logos";

const LogoSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(5);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <div className="w-[90%] md:w-5/6 lg:w-4xl xl:w-5xl my-5 flex justify-center items-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        className="flex shadow-none justify-center z-30 items-center"
      >
        {Logos.map((logo, i) => (
          <SwiperSlide key={i} className="bg-white rounded-lg justify-center z-30 items-center">
            <div key={i} className="md:px-1 md:py-0 lg:px-2 lg:py-1 xl:px-4 rounded-lg flex justify-center items-center z-30 bg-white">
              <Image className="relative w-auto h-14 2xl:h-20  select-none object-contain z-50" src={logo} alt={`logo-${i}`} />
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;

