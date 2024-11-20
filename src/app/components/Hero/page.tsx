"use client";

import Image from 'next/image';
import React from 'react';
import halfstar from '../../assets/halfstar.png';
import hero from '../../assets/herosection.png';
import heroicon from '../../assets/heroicon.png';

const page = () => {
    return (
        <div className="bg-[#F0F1EE] ">
            <div className="sm:mt-8  sm:gap-4 max-w-[1100px] mx-auto h-auto lg:h-[760px] flex flex-col lg:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="left space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left px-4 lg:px-0">
                    <div className=" flex justify-center lg:justify-start items-center gap-2">
                        {/* Full Stars */}
                        {[...Array(4)].map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6 md:h-8 md:w-8 text-orange-400"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ))}
                        {/* Half Star */}
                        <Image src={halfstar} alt="half star" className="w-5 h-5 md:w-7 md:h-7 object-cover" />
                        <span className="text-base md:text-lg">4.9 (566)</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold space-y-2">
                        #1 Platform<br /> Powering Health <br /> and Wellness
                    </h1>
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        We’re restoring home as the primary <br /> place of personal well-being
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg">
                        Health is not just about what you're eating. It's also<br />
                        about what you're thinking and saying
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <button className="bg-[#287279] text-white px-4 py-2 md:px-6 md:py-3 rounded-full">
                            Browse More
                        </button>
                        <button className="bg-transparent text-[#287279] px-4 py-2 md:px-6 md:py-3 rounded-full border border-[#287279]">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Right Section with Background Image */}
                <div
                    className="right w-full lg:w-[648px] h-[400px] lg:h-[760px] bg-cover bg-center mt-8 lg:mt-0 flex justify-end items-end"
                    style={{
                        backgroundImage: `url(${hero.src})`,
                    }}
                >
                    <div className="w-full h-auto lg:h-[280px] relative px-4 lg:px-0">
                        {/* First Div with Glass-like Background Blur */}
                        <div className=" hidden lg:flex  bg-slate-200 bg-opacity-30 backdrop-blur-lg py-6 px-6 m-2 lg:py-10 lg:px-8 z-10 flex flex-col lg:flex-row justify-around items-center rounded-lg">
                            <h1 className="text-4xl lg:text-6xl font-bold">12,000+</h1>
                            {/* Vertical Divider */}
                            <div className="hidden lg:block border-l border-black h-8 mx-2" />
                            <p className="text-sm md:text-base lg:text-lg text-center lg:text-left">
                                Happy learners rely on<br /> us regularly
                            </p>
                        </div>

                        {/* Second Div with Blur effect */}
                        <div className=" hidden lg:flex absolute left-0 right-0 -mt-5 mx-2  z-20 py-6 px-6 lg:py-10 lg:px-8 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row justify-between items-center">
                            <p className="text-sm md:text-base lg:text-lg font-medium">
                                Find your wellbeing
                            </p>
                            <p className="text-xs md:text-sm lg:text-base text-center lg:text-left">
                                By prioritizing self-care and making informed choices,<br />
                                one can enhance their overall quality of life
                            </p>
                        </div>
                        <Image
                            src={heroicon}
                            // className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 absolute -top-8 sm:-top-0 md:-top-0 lg:-top-80 sm:top-30 -left-4 lg:-left-8"
                            className="absolute -top-52 lg:-top-80 -left-6 lg:-left-10 w-16 lg:w-[70px] h-16 lg:h-[73.67px]"

                            alt="Hero Icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
