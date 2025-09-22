"use client";

import { IoClose, IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";

import { FaRocket } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import logoBlue from "@/assets/Blue/DTF-Secondary Logo-Blue.png";
import logoWhite from "@/assets/White/DTF-Secondary-Logo-White.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsHeroVisible(window.scrollY < window.innerHeight * 0.9);
    };

    onScroll(); // initial check
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="w-full py-3 backdrop-blur-lg top-0 fixed z-40">
      <div className="flex items-center justify-between px-6 md:px-10 py-2">
      <Link href="/">
        <span className="flex items-center gap-2 w-32 sm:w-40 md:w-48 font-extrabold text-xl md:text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg select-none">
          <span className="flex flex-col">
            <span className="flex items-center">
              <span className="text-3xl md:text-5xl font-extrabold">ProTech</span>
              <FaRocket className="text-pink-500 ml-2 text-2xl md:text-4xl" aria-label="Creative Innovation Icon" />
            </span>
            <span className="font-black leading-tight text-base md:text-lg">Innovation</span>
          </span>
        </span>
      </Link>

        <div className="hidden z-50 md:flex">
          <Nav />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 z-50 transition-transform duration-1000 ease p-2 focus:outline-none"
        >
          {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      <div
        className={`absolute top-0 w-full overflow-hidden h-[100vh] bg-white md:hidden transition-transform duration-500 ease ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Nav mobileClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};

export default Navbar;