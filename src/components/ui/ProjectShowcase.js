import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "TechLand BD E-Commerce Platform",
    description: "A feature-rich e-commerce platform for electronics and technology products. It offers seamless shopping, secure payments, fast delivery, and real-time analytics for business growth. Designed for reliability and user engagement across all devices.",
    image: "/ProjectImages/DM-Favicon.svg",
    link: "https://www.techlandbd.com/"
  },
  {
    title: "Aptitudo AI Hiring Platform",
    description: "Aptitudo is an AI-powered hiring platform with customizable skill assessments, bias-free and data-driven recruitment, ATS integration, and real-time analytics. It supports startups and enterprises with scalable plans and a seamless user experience.",
    image: "/ProjectImages/DevPOS-Favicon.svg",
    link: "https://www.aptitudo.ca/"
  },
  {
    title: "🚨 Enterprise Emergency Service Platform",
    description: "Enterprise emergency services mapping platform for improved user engagement (+40% MAU). Reliable, real-time coordination and analytics for critical response teams.",
    image: "/ProjectImages/Technado-Favicon.svg",
    link: "https://shongjog.brac.net/"
  }
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={
                `group bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_8px_32px_rgba(33,25,81,0.18)]`
              }
            >
              <div className="relative">
                <Image src={project.image} alt={project.title} width={400} height={192} className="w-full h-48 object-cover rounded-t-2xl group-hover:brightness-105 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-40 transition duration-500 rounded-t-2xl"></div>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-extrabold mb-2 text-black transition-colors duration-300 group-hover:text-black">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 transition-colors duration-300 group-hover:text-black">
                  {project.description}
                </p>
                {project.link !== '#' ? (
                  <button
                    type="button"
                    className="mt-2 px-5 py-2 rounded-full bg-black text-white font-bold shadow-lg hover:bg-white hover:text-black border border-black transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                  >
                    View Details
                  </button>
                ) : (
                  <span className="text-blue-600">View Details</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
