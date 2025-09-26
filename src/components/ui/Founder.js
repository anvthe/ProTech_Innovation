// components/Founder.tsx
"use client";
import Image from "next/image";
import founders from "@/data/objects/Founders";

export default function Founder() {
    return (
        <section
            id="founders"
            className="relative w-full py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
        >
            {/* Background motion blobs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-2xl animate-spin-slow"></div>

            {/* Title */}
            <div className="mb-16 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Meet Our Founders
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Visionaries who inspire innovation, leadership, and impact.
                </p>
            </div>

            {/* Founder Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto relative z-10">
                {founders.map((founder) => (
                    <div
                        key={founder.id}
                        className="group bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-2xl
                       transition-all duration-500 p-6 md:p-10 flex flex-col items-center text-center
                       hover:-translate-y-2"
                        aria-label="Founder profile"
                    >
                        {/* Profile Image */}
                        <div className="overflow-hidden rounded-full mb-6">
                            <Image
                                src={founder.img}
                                alt={founder.name}
                                width={160}
                                height={160}
                                className="w-40 h-40 rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Name & Role */}
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {founder.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">{founder.role}</p>

                        {/* Underline animation */}
                        <div className="mt-3 h-[2px] w-0 bg-pink-600 group-hover:w-16 transition-all duration-500"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
