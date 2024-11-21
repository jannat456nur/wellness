"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import course1 from "../../assets/course1.png";
import course2 from "../../assets/course2.png";
import course3 from "../../assets/course3.png";
import course4 from "../../assets/course4.png";
import instructor1 from "../../assets/instructor1 (1).jpg";
import instructor2 from "../../assets/instructor2.jpg";
import instructor3 from "../../assets/instructor3.jpg";
import instructor4 from "../../assets/instructor4.jpg";
import clock from "../../assets/clock.png";
import book from "../../assets/book.png";
import mark from "../../assets/provideicon (2).png";

const Page = () => {
    const sliderRef = React.useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const courses = [
        {
            id: 1,
            title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
            level: "Beginner",
            category: "Nutrition and Diet",
            rating: 4.9,
            reviews: 586,
            duration: "6h 34m",
            lessons: 3,
            instructor: {
                name: "Kilian Murphy",
                image: instructor1,
            },
            price: 40,
            image: course2,
        },
        {
            id: 2,
            title: "Parenting in the Digital Age: Navigating Screen Time",
            level: "Intermediate",
            category: "Health and Wellness",
            rating: 4.9,
            reviews: 456,
            duration: "6h 34m",
            lessons: 3,
            instructor: {
                name: "Sarah Hopkins",
                image: instructor2,
            },
            price: 50,
            image: course3,
        },
        {
            id: 3,
            title: "Holistic Health: Integrating Mind, Body, and Spirit",
            level: "Beginner",
            category: "Nutrition and Diet",
            rating: 4.9,
            reviews: 399,
            duration: "6h 34m",
            lessons: 3,
            instructor: {
                name: "Luna Karim",
                image: instructor3,
            },
            price: 45,
            image: course4,
        },
        {
            id: 4,
            title: "Introduction to Health and Nutrition",
            level: "Beginner",
            category: "Nutrition and Diet",
            rating: 4.9,
            reviews: 566,
            duration: "6h 34m",
            lessons: 3,
            instructor: {
                name: "Kate Winslake",
                image: instructor4,
            },
            price: 55,
            image: course3,
        },
        {
            id: 5,
            title: "Introduction to Health and Nutrition",
            level: "Beginner",
            category: "Nutrition and Diet",
            rating: 4.9,
            reviews: 566,
            duration: "6h 34m",
            lessons: 3,
            instructor: {
                name: "Kate Winslake",
                image: instructor1,
            },
            price: 55,
            image: course4,
        },
        {
            id: 6,
            title: "Introduction to Health and Nutrition",
            level: "Beginner",
            category: "Nutrition and Diet",
            rating: 4.9,
            reviews: 566,
            duration: "6h 34m",
            lessons: 3,
            instructor: {
                name: "Kate Winslake",
                image: instructor4,
            },
            price: 55,
            image: course1,
        },
    ];

    const slideLeft = () => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.offsetWidth;
            sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            setCurrentSlide((prev) => Math.max(prev - 1, 0));
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.offsetWidth;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setCurrentSlide((prev) => Math.min(prev + 1, courses.length - 1));
        }
    };

    return (
        <div className="px-4 py-6 max-w-[1100px] mx-auto mt-4 sm:mt-20">
            <div className="flex items-center justify-between mb-6">
                <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold mb-2">Our popular courses</h2>
                    <p className="text-muted-foreground">
                        By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience,
                        and foster a sense of inner peace and balance
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={slideLeft} aria-label="Previous slide">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={slideRight} aria-label="Next slide">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div ref={sliderRef} className="flex overflow-x-hidden scroll-smooth" aria-live="polite">
                {courses.map((course) => (
                    <Card key={course.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 p-4 mr-6">
                        <div className="relative">
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={400}
                                height={200}
                                className="object-cover w-full h-48 rounded-md"
                            />
                            <div className="absolute top-2 right-2 flex gap-2">
                                <Button size="icon" variant="secondary">
                                    <ShoppingCart className="h-4 w-4" />
                                    <span className="sr-only">Add to cart</span>
                                </Button>
                                <Button size="icon" variant="secondary">
                                    <Heart className="h-4 w-4" />
                                    <span className="sr-only">Add to favorites</span>
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex gap-2 mb-2">
                                <Badge className="border-[#ffdfb1] bg-[#fff5e6]">{course.level}</Badge>
                                <Badge className="border-[#e4f191] bg-[#f5fad6]">{course.category}</Badge>
                            </div>
                            <h3 className={`font-semibold mb-2 line-clamp-2 ${course.id === 2 ? "underline" : ""}`}>
                                {course.title}
                            </h3>
                            <div className="flex items-center gap-1 mb-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < Math.floor(course.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                    {course.rating} ({course.reviews})
                                </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                <div className="flex items-center gap-1 ">
                                    <Image src={clock} alt={course.title} className="rounded-full object-cover h-5 w-5" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="border-l border-gray-400 h-3 mx-2" />
                                <div className="flex items-center gap-1 ">
                                    <Image src={book} alt={course.title} className="object-cover h-4 w-4" />
                                    <span className="mb-1">{course.lessons} Lessons</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={course.instructor.image}
                                        alt={course.instructor.name}
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                    <span className="text-sm font-medium">{course.instructor.name}</span>
                                </div>
                                {course.id === 3 ? (
                                    <div className="flex border-gray border rounded items-center p-1">
                                        <Image src={mark} alt="marked as enrolled" className="w-3 h-3" />
                                        <p className="text-gray-400 text-xs">Enrolled</p>
                                    </div>
                                ) : (
                                    <span className="text-lg font-semibold">${course.price}</span>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Page;
