"use client";

import { useState } from "react";
import { ChevronDown, ShoppingCart, Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Logo.png";

type DropdownKey = "courses" | "instructors" | "blogs";

export default function Menu() {
    const [dropdownOpen, setDropdownOpen] = useState<Record<DropdownKey, boolean>>({
        courses: false,
        instructors: false,
        blogs: false,
    });
    const [sidebarOpen, setSidebarOpen] = useState(false); // State to control the sidebar visibility

    const toggleDropdown = (menu: DropdownKey) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <nav className="bg-white py-4 h-[74px] max-w-[1100px] m-auto">
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

                {/* Centered Menu (Desktop) */}
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
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden text-gray-700 focus:outline-none"
                    >
                        <MenuIcon className="h-6 w-6" />
                    </button>

                    {/* Cart Icon */}
                    <button className="hidden lg:flex relative text-gray-700 hover:text-black">
                        <ShoppingCart className="h-6 w-6" />
                    </button>

                    {/* Login Button */}
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-full">
                        Login
                    </button>
                </div>
            </div>

            {/* Sidebar (Mobile) */}
            {sidebarOpen && (
                <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-20">
                    <div className="bg-white w-64 h-full p-4">
                        <button
                            onClick={toggleSidebar}
                            className="text-gray-700 mb-4"
                        >
                            Close
                        </button>
                        <div className="space-y-4">
                            <Link href="/courses/web-development" className="block text-gray-700">
                                Web Development
                            </Link>
                            <Link href="/courses/data-science" className="block text-gray-700">
                                Data Science
                            </Link>
                            <Link href="/instructors/john-doe" className="block text-gray-700">
                                John Doe
                            </Link>
                            <Link href="/instructors/jane-smith" className="block text-gray-700">
                                Jane Smith
                            </Link>
                            <Link href="/blogs/tech" className="block text-gray-700">
                                Tech
                            </Link>
                            <Link href="/blogs/lifestyle" className="block text-gray-700">
                                Lifestyle
                            </Link>
                            <Link href="/about" className="block text-gray-700">
                                About
                            </Link>
                            <Link href="/contact" className="block text-gray-700">
                                Contact
                            </Link>

                            {/* Cart Icon in Sidebar */}
                            <button className="relative text-gray-700 hover:text-black">
                                <ShoppingCart className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
