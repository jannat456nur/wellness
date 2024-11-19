"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'
import providewomen from '../../assets/providewomen.png'
import Image from "next/image"
import provideicon from '../../assets/provideicon.png'

const page = () => {
    return (
        <div className=" pt-20 flex justify-between items-center  max-w-[1100px] mx-auto " >

            <div className='left w-[424px] h-[546px] space-y-6'>
                <h1 className="text-5xl font-semibold">We provide...</h1>
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
                <button className="text-[#287279] rounded-full border p-3">Learn More About Our Services</button>
            </div>
            <div className="relative right w-[550px] h-[580px] bg-cover bg-center flex justify-end items-end rounded-lg"
                style={{
                    backgroundImage: `url(${providewomen.src})`,
                }}>
                <Image src={provideicon} className="absolute top-12 -left-10 w-[74px] h-[73.67px] " />
            </div>
        </div>
    )
}

export default page