'use client';

import { useState, useEffect } from 'react';

export default function CalendlyPopupButton() {
  const [ready, setReady] = useState(false);

  

  useEffect(() => {
    const waitForCalendly = setInterval(() => {
      if (typeof window !== 'undefined' && window.Calendly) {
        setReady(true);
        clearInterval(waitForCalendly);
      }
    }, 200);

    return () => clearInterval(waitForCalendly);
  }, []);

  const handleClick = () => {
    if (window.Calendly) {
      if (document.querySelector('.calendly-overlay')) {
        document.querySelector('.calendly-overlay').remove();
      }

      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/devtechfusion?hide_gdpr_banner=1',
      });
    }
  };

  return (
    // <AnimatedButton
    //   text={'Get Your Personalized Tech Roadmap'}
    //   handleClick={handleClick}
    //   ready={ready}
    // />
    <button
      onClick={handleClick} 
      disabled={!ready}
      className={`px-6 py-3 rounded-lg font-semibold cursor-pointer ${
        ready
          ? 'bg-transparent backdrop-blur-sm border border-white text-white hover:bg-white hover:text-[#211951] overflow-hidden group'
          : 'bg-gray-100 cursor-not-allowed'
      }`}
       >
      <span className="flex flex-col items-center justify-center relative">
      Get Your Personalized Tech Roadmap
      </span>
    </button>
  );
}


// const AnimatedButton = ({text, handleClick, ready}) => {
//   return (
//     <button
//       onClick={handleClick} 
//       disabled={!ready}
//       className={`px-6 py-3 rounded-lg font-semibold cursor-pointer ${
//         ready
//           ? 'bg-transparent backdrop-blur-sm border border-white text-white hover:bg-white hover:text-[#211951] overflow-hidden group'
//           : 'bg-gray-400 text-gray-100 cursor-not-allowed'
//       }`}
//        >
//       <span className="flex flex-col items-center justify-center relative">
//         <span
//           className="block transition-transform duration-400 group-hover:translate-y-[130%]"
//         >
//           {text}
//         </span>
//         <span
//           className="block absolute left-0 top-0 transition-transform duration-400 translate-y-[-150%] group-hover:translate-y-0"
//         >
//           {text}
//         </span>
//       </span>
//     </button>
//   );
// };
