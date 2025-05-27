"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const SLIDES = [
    {
        image: "/assets/hero_1.jpg",
        title: "Orbis Valves Industries",
        quote: "Engineered for enduring reliability and unrivaled efficiency",
    },
    {
        image: "/assets/hero_2.jpg",
        title: "Orbis Valves Industries",
        quote: "Precision flow control, powering your operations seamlessly",
    },
];

export default function Home() {
    return (
        <Carousel className="w-full relative">
            <CarouselContent>
                {SLIDES.map((slide, index) => (
                    <CarouselItem
                        key={index}
                        className="relative w-full h-[calc(100vh-6rem)]"
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover object-center"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Hero Text & Buttons */}
                        <div className="absolute inset-0 flex items-center justify-center px-4">
                            {/* Button overlays on sides */}
                            <CarouselPrevious className="absolute left-6 ml-5 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full" />
                            <CarouselNext className="absolute mr-6 right-0 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full" />

                            {/* Centered text */}
                            <div className="max-w-2xl text-center text-white">
                                <h1 className="text-5xl md:text-6xl font-bold uppercase">
                                    {slide.title}
                                </h1>
                                <p className="mt-4 text-2xl md:text-3xl opacity-90">
                                    {slide.quote}
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
