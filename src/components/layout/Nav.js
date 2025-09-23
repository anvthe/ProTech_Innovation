'use client';

import AnimatedButton from '@/components/ui/AnimatedButton';
import Link from 'next/link';
import {ROUTES_CONSTANTS} from '@/constants/routesConstants'
import {useState} from 'react';

const Nav = ({mobileClose}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const navItems = [
        {label: 'Home', href: ROUTES_CONSTANTS.HOME},
        {label: 'Services', href: '/#services'},
        {label: 'Projects', href: '/#projects'},
        {label: 'Educations', href: '/#educations'},
        {label: 'Testimonials', href: '/#customer-review'},
        {label: 'Contact', href: '/#contact'},

    ];

    // Removed servicesDropdown, no subsections needed

    // const servicesDropdown = [
    //   { label: "Branding & UI/UX Design", href: "/services/branding" },
    //   { label: "Product Development", href: "/services/development" },
    //   { label: "E-Commerce Solutions", href: "/services/ecommerce" },
    //   { label: "Cloud Services", href: "/services/cloud" },
    //   { label: "Cyber-Security Solutions", href: "/services/security" },
    //   { label: "Digital Marketing", href: "/services/marketing" },
    // ];
    return (
        <nav
            className="flex flex-col items-start p-10 md:flex-row md:items-center bg-white md:p-[6px] lg:space-x-4 xl:space-x-6 rounded-2xl md:shadow-[0_4px_8px_#00000020] shadow-none md:relative z-50 transition-all duration-300">
            <div
                className="flex flex-col md:px-5 md:text-xs md:text-[13px] xl:text-sm xl:px-3 md:flex-row items-center sm:space-x-3 lg:space-x-5 xl:space-x-10">
                {navItems.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        className="nav-link text-gray-700 font-['SatoshiVariable'] py-2 md:py-5 px-4 rounded-xl transition-all duration-200 ease-in-out hover:text-pink-600 hover:bg-gray-300 hover:shadow-md"
                        onClick={mobileClose}
                        style={{
                            boxShadow: '0 2px 8px rgba(80,0,200,0.08)',
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
            <AnimatedButton text="Lets Talk" a={<a href="#contact">Lets Talk</a>}/>
        </nav>
    );
};

export default Nav;



