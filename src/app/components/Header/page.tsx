"use client";

import { useState } from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Logo.png";

export default function Menu() {
    const [dropdownOpen, setDropdownOpen] = useState({
        courses: false,
        instructors: false,
        blogs: false,
    });

    const toggleDropdown = (menu: string) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    return (
        <nav className="bg-#FFFFF py-4 h-[74px] max-w-[1100px] m-auto ">
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={50}
                        height={50}
                        className="h-8 w-auto object-cover"
                    />
                </div>

                {/* Centered Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {/* Courses Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("courses")}
                            className="flex items-center text-gray-700 hover:text-black focus:outline-none"
                        >
                            Courses <ChevronDown className="ml-1 h-5 w-5" />
                        </button>
                        {dropdownOpen.courses && (
                            <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md z-10">
                                <Link
                                    href="/courses/web-development"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Web Development
                                </Link>
                                <Link
                                    href="/courses/data-science"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Data Science
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Instructors Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("instructors")}
                            className="flex items-center text-gray-700 hover:text-black focus:outline-none"
                        >
                            Instructors <ChevronDown className="ml-1 h-5 w-5" />
                        </button>
                        {dropdownOpen.instructors && (
                            <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md z-10">
                                <Link
                                    href="/instructors/john-doe"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    John Doe
                                </Link>
                                <Link
                                    href="/instructors/jane-smith"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Jane Smith
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Blogs Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("blogs")}
                            className="flex items-center text-gray-700 hover:text-black focus:outline-none"
                        >
                            Blogs <ChevronDown className="ml-1 h-5 w-5" />
                        </button>
                        {dropdownOpen.blogs && (
                            <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md z-10">
                                <Link
                                    href="/blogs/tech"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Tech
                                </Link>
                                <Link
                                    href="/blogs/lifestyle"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Lifestyle
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* About and Contact Links */}
                    <Link href="/about" className="text-gray-700 hover:text-black">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-black">
                        Contact
                    </Link>
                </div>

                {/* Cart and Login */}
                <div className="flex items-center space-x-4">
                    <button className="relative text-gray-700 hover:text-black">
                        <ShoppingCart className="h-6 w-6" />
                    </button>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-full">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
}
