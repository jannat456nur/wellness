"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import review from "../../assets/review.jpg";

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
        quote: "The mindfulness courses have helped me manage stress better and find balance in my daily life.",
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
];

export default function TestimonialCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const contentRef = React.useRef<HTMLDivElement>(null);

    const scrollToSlide = (index: number) => {
        setActiveIndex(index);
        const content = contentRef.current;
        if (content) {
            const slideWidth = content.firstElementChild?.clientWidth || 0;
            content.scrollTo({
                left: index * slideWidth,
                behavior: "smooth",
            });
        }
    };

    React.useEffect(() => {
        const content = contentRef.current;
        if (content) {
            const slideWidth = content.firstElementChild?.clientWidth || 0;
            content.scrollTo({
                left: activeIndex * slideWidth,
                behavior: "smooth",
            });
        }
    }, [activeIndex]);

    return (
        <div className="py-12 px-4 ">
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
                    className="flex transition-transform duration-300 -ml-2 md:-ml-4"
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/5 shrink-0"
                        >
                            <Card className="p-6 bg-[#F5F3FF] border-none relative">
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
                        className={`w-3 h-3 rounded-full focus:outline-none ${index === activeIndex
                            ? "bg-[#8B5CF6]"
                            : "bg-gray-300"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                        aria-current={index === activeIndex ? "true" : "false"}
                    ></button>
                ))}
            </div>
        </div>
    );
}
