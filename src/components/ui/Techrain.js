// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function TechRain({ count = 40 }) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const drops = Array.from({ length: count }, (_, i) => {
//       const el = document.createElement("div");
//       el.className = "rain-drop";
//       container.appendChild(el);
//       return el;
//     });

//     drops.forEach((drop) => {
//       const size = gsap.utils.random(4, 10);
//       const duration = gsap.utils.random(2, 4);
//       const delay = gsap.utils.random(0, 5);
//       const left = gsap.utils.random(0, 100);

//       gsap.set(drop, {
//         width: size,
//         height: size * 4,
//         left: `${left}%`,
//         top: "-10%",
//         background: "linear-gradient(to bottom, #8a2be2, #211951)",
//         opacity: 0.8,
//         borderRadius: "2px",
//         position: "absolute",
//       });

//       gsap.to(drop, {
//         y: "100vh",
//         scaleY: 0.2,
//         scaleX: 2,
//         opacity: 0,
//         ease: "power2.in",
//         duration,
//         delay,
//         repeat: -1,
//         repeatDelay: gsap.utils.random(2, 6),
//         onRepeat: () => {
//           gsap.set(drop, {
//             scale: 1,
//             opacity: 0.8,
//           });
//         },
//       });
//     });

//     return () => container.innerHTML = "";
//   }, [count]);

//   return <div ref={containerRef} className="absolute w-full h-full overflow-hidden z-0"></div>;
// }



"use client";

import { useEffect, useRef } from "react";
import { FaCodeBranch, FaMicrochip, FaSatelliteDish, FaCloud } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggeredIcons() {
  const iconContainer = useRef(null);

  useEffect(() => {
    const icons = gsap.utils.toArray(".tech-icon");

    gsap.set(icons, { opacity: 0, scale: 0.5 });

    gsap.to(icons, {
      scrollTrigger: {
        trigger: iconContainer.current,
        start: "top 80%",
      },
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.2,
    });

    icons.forEach((icon) => {
      gsap.to(icon, {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
        delay: gsap.utils.random(0, 1),
      });
    });
  }, []);

  return (
    <div
      ref={iconContainer}
      className="w-full h-[300px] relative flex justify-center items-center gap-6 overflow-hidden"
    >
      <FaCodeBranch className="tech-icon text-4xl text-purple-500 absolute top-4 left-6" />
      <FaMicrochip className="tech-icon text-4xl text-pink-500 absolute bottom-6 right-8" />
      <FaSatelliteDish className="tech-icon text-4xl text-cyan-400 absolute top-1/2 left-1/4" />
      <FaCloud className="tech-icon text-4xl text-yellow-400 absolute bottom-1/4 right-1/3" />
    </div>
  );
}