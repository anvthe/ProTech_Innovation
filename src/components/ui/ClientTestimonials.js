import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import PointingArrowRight  from "@/assets/SVGs/Pointing-Arrow-Round-Right .svg";
import testimonials from "@/data/objects/Testimonials";

export default function TestimonialSection() {
  return (
    <section id="customer-review" className="font-['SatoshiVariable'] w-full py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-50">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-[#212121]">What Our Clients Say</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl mx-auto">
        {testimonials.slice(0, 3).map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative rounded-2xl p-8 flex flex-col justify-between items-center text-center bg-white shadow-xl border border-transparent group overflow-hidden"
            style={{ boxShadow: "0 8px 32px 0 rgba(33,25,81,0.12)" }}
          >
            <span className="absolute inset-0 pointer-events-none z-0 rounded-2xl border-4 border-transparent group-hover:border-gradient-to-r group-hover:from-[#acaadd] group-hover:via-[#fbc9be] group-hover:to-[#211951] transition-all duration-500" />
            <span className="absolute -top-16 -left-16 w-40 h-40 bg-gradient-to-br from-[#acaadd] via-[#fbc9be] to-[#211951] opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-500 z-0" />
            <span className="absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br from-[#211951] via-[#fbc9be] to-[#acaadd] opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-500 z-0" />
            <div className="relative z-10 w-full flex flex-col items-center">
              <p className="text-lg font-bold text-[#211951] uppercase mb-2 tracking-wide group-hover:text-[#acaadd] transition-colors duration-300">{testimonial.role}</p>
              <p className="text-gray-700 text-base md:text-lg italic mb-4 leading-relaxed group-hover:text-[#211951] transition-colors duration-300">“{testimonial.quote}”</p>
              <span className="font-semibold text-[#211951] text-lg mb-1 group-hover:text-[#acaadd] transition-colors duration-300">{testimonial.name}</span>
              <span className="text-sm text-gray-500 font-medium group-hover:text-[#211951] transition-colors duration-300">{testimonial.company}</span>
            </div>
            <div className="absolute inset-0 z-0 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

