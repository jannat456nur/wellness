'use client'

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Quote } from 'lucide-react'
import review from "../../assets/review.jpg"

const testimonials = [
    {
        id: 1,
        name: "Kilian Murphe",
        image: review,
        quote: "The interactive elements and community forums where I can connect with other learners.",
    },
    {
        id: 2,
        name: "Kilian Murphe",
        image: review,
        quote: "It's not just about physical health but mental and emotional well-being too. mental and emotional well-being too.",
    },
    {
        id: 3,
        name: "Kilian Murphe",
        image: review,
        quote: "A fantastic platform with a wide variety of health and wellness courses.",
    },
    {
        id: 4,
        name: "Kilian Murphe",
        image: review,
        quote: "It's not just about physical health but mental and emotional well-being too.",
    },
    {
        id: 5,
        name: "Kilian Murphe",
        image: review,
        quote: "I love the flexibility of the courses. I can learn at my own pace.",
    },
    {
        id: 6,
        name: "Kilian Murphe",
        image: review,
        quote: "It's not just about physical health but mental and emotional well-being too. mental and emotional well-being too.",
    },
    {
        id: 7,
        name: "Kilian Murphe",
        image: review,
        quote: "I love the flexibility of the courses. I can learn at my own pace.",
    },
]

export default function TestimonialCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const contentRef = React.useRef<HTMLDivElement>(null)

    const scrollToSlide = (index: number) => {
        setActiveIndex(index)
    }

    const visibleTestimonials = React.useMemo(() => {
        const numVisible = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 768 ? 2 : 1
        return testimonials.slice(activeIndex, activeIndex + numVisible)
    }, [activeIndex])

    return (
        <div className="py-12 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">
                    Learners love EduPath. See why
                </h2>
                <p className="text-2xl font-semibold mt-2">
                    they rate us 4.9 out of 5
                </p>
            </div>

            <div className="relative overflow-hidden">
                <div
                    ref={contentRef}
                    className="flex transition-all duration-300 ease-in-out"
                >
                    {visibleTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="px-2 md:px-4 w-full md:w-1/2 lg:w-1/5"
                        >
                            <Card className="p-6 bg-[#F5F3FF] border-none relative h-auto w-full">
                                <Quote className="absolute top-4 right-4 w-6 h-6 text-[#8B5CF6] opacity-20" />
                                <div className="flex items-center gap-3 mb-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <h3 className="font-semibold">
                                        {testimonial.name}
                                    </h3>
                                </div>
                                <blockquote className="text-sm text-gray-600 leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Accessible round buttons */}
            <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToSlide(index)}
                        className={`w-3 h-3 rounded-full focus:outline-none ${index === activeIndex ? "bg-[#8B5CF6]" : "bg-gray-300"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                        aria-current={index === activeIndex ? "true" : "false"}
                    ></button>
                ))}
            </div>
        </div>
    )
}