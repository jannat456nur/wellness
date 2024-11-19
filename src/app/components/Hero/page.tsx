"use client";

import Image from 'next/image';
import React from 'react';
import halfstar from '../../assets/halfstar.png';
import hero from '../../assets/herosection.png';
import heroicon from '../../assets/heroicon.png';
import { clsx } from 'clsx';

const page = () => {
    return (
        <div className="bg-[#F0F1EE]">
            <div className=" max-w-[1100px] mx-auto h-[760px] flex justify-between items-center">
                {/* Left Section */}
                <div className="left space-y-8 gap-4">
                    <div className="flex items-center gap-2">
                        {/* Full Stars */}
                        {[...Array(4)].map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-8 w-8 text-orange-400"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ))}
                        {/* Half Star */}
                        <Image src={halfstar} alt="half star" className="mt-0 w-7 h-7 object-cover" />
                        <span className='text-lg'>  4.9 (566)</span>
                    </div>
                    <h1 className="text-5xl font-bold space-y-2 ">
                        #1 Platform<br /> Powering Health <br /> and Wellness
                    </h1>
                    <h1 className="text-2xl font-semibold">
                        We’re restoring home as the primary <br />place of personal well-being
                    </h1>
                    <p className='text-lg space-x-3'>Health is not just about what you're eating. It's also<br /> about what you're thinking and saying</p>
                    <div>
                        <button className="bg-[#287279] text-white px-6 py-3 rounded-full">Browse More</button>
                        <button className="bg-transparent text-[#287279] px-6 py-3 rounded-full border border-[#287279] ml-4">Get Started</button>
                    </div>
                </div>

                {/* Right Section with Background Image */}
                <div
                    className="right w-[648px] h-[760px] bg-cover bg-center flex justify-end items-end"
                    style={{
                        backgroundImage: `url(${hero.src})`,
                    }}
                >
                    <div className="w-full h-[280px] relative">
                        {/* First Div with Glass-like Background Blur */}
                        <div className="bg-slate-200 bg-opacity-30 backdrop-blur-lg py-10 px-8 z-10 flex justify-around items-center rounded-lg m-2">
                            <h1 className="text-6xl font-bold">12,000+</h1>
                            {/* Vertical Divider */}
                            <div className="border-l border-black h-8 mx-2" />
                            <p className="text-lg">Happy learners rely on<br />us regularly</p>
                        </div>

                        {/* Second Div with Blur effect */}
                        <div className="absolute left-0 right-0 mb-2 mx-2 -mt-4 z-20 py-10 px-8 bg-white rounded-lg shadow-lg flex justify-between items-center">
                            <p className="text-lg font-medium">Find your wellbeing</p>
                            <p>
                                By prioritizing self-care and making informed choices,<br />
                                one can enhance their overall quality of life
                            </p>
                        </div>
                        <Image src={heroicon} className='h-24 w-24 absolute -top-80 -left-8'/>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default page;
