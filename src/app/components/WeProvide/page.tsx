"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from 'react';
import providewomen from '../../assets/providewomen.png';
import Image from "next/image";
import provideicon from '../../assets/provideicon.png';

const page = () => {
    return (
        <div className="pt-20 flex flex-col-reverse lg:flex-row justify-between items-center max-w-[1100px] mx-auto space-y-10 lg:space-y-0 lg:space-x-10">
            {/* Left Section */}
            <div className='left w-full lg:w-[424px] lg:h-[546px] space-y-6 text-center lg:text-left'>
                <h1 className="text-3xl lg:text-5xl font-semibold mt-8">We provide...</h1>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Personalized routine</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Follow-up after completing courses</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Access to additional resources</AccordionTrigger>
                        <AccordionContent>
                            We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <button className="text-[#287279] rounded-full border p-3 w-full lg:w-auto">
                    Learn More About Our Services
                </button>
            </div>

            {/* Right Section */}
            <div
                className="relative w-full lg:w-[550px] h-[400px] lg:h-[580px] bg-cover bg-center flex justify-end items-end rounded-lg"
                style={{
                    backgroundImage: `url(${providewomen.src})`,
                }}
            >
                <Image
                    src={provideicon}
                    alt="Provide Icon"
                    className="absolute top-6 lg:top-12 -left-6 lg:-left-10 w-16 lg:w-[74px] h-16 lg:h-[73.67px]"
                />
            </div>
        </div>
    );
};

export default page;
