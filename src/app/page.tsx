/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import InfoCard from "@/components/helpers/info-card";
import {
    FaAward,
    FaShieldAlt,
    FaBoxes,
    FaLayerGroup,
    FaCogs,
    FaIndustry,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Product from "@/components/helpers/product-card";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

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

const FEATURE_CARDS = [
    {
        icon: FaGear,
        title: "Cutting-Edge Manufacturing",
        description:
            "Our facility in Ahmedabad uses advanced CNC machining and automated testing to deliver valves that meet the highest industrial standards.",
    },
    {
        icon: FaAward,
        title: "Certified Quality",
        description:
            "All products are certified to ISO, ASME, and PED standards and built from premium materials like AISI 316L and 250SMO for maximum corrosion resistance.",
    },
    {
        icon: FaShieldAlt,
        title: "Unmatched Reliability",
        description:
            "Rigorous pressure and endurance testing ensures leak-free performance in the harshest environments, from power plants to chemical refineries.",
    },
];

const DETAIL_CARDS = [
    {
        icon: FaBoxes,
        title: "Range of Products",
        description:
            "Our portfolio includes gate, globe, ball (2PC), dual plate check, wafer check, lever butterfly, and knife gate valves to suit any industrial application.",
    },
    {
        icon: FaLayerGroup,
        title: "Range of Materials",
        description:
            "We offer valves in ductile iron, carbon steel, and stainless steels (GG25, GGG40, A105N, LF2, WCB, WC6, 316L, CF8M, 250SMO, Duplex) for every requirement.",
    },
    {
        icon: FaIndustry,
        title: "Technologies & Machinery",
        description:
            "Harnessing state-of-the-art manufacturing and testing equipment, we craft versatile valves for petrochemical, power, food, and mining sectors.",
    },
    {
        icon: FaCogs,
        title: "Production Process",
        description:
            "Every valve component undergoes meticulous inspection and assembly by our expert technicians to guarantee flawless, durable performance.",
    },
    {
        icon: FaIndustry,
        title: "Material Testing",
        description:
            "Valves pass rigorous mechanical and chemical tests, with detailed certificates provided to customers. Custom tests available on request.",
    },
];

const PRODUCT_LIST = [
    {
        name: "Gate Valve",
        description:
            "Gate valves provide straight-through flow with minimal pressure drop. Designed primarily for on/off control, they offer tight sealing when fully closed but are not ideal for throttling. Common in water, oil, and gas pipelines, they ensure reliable isolation in high-pressure systems.",
        initialImage: "/assets/products/gate-valve.png",
    },
    {
        name: "Globe Valve",
        description:
            "Globe valves employ a port-closure mechanism with a stem-mounted disc regulating flow through a defined opening. Excelling in throttling applications, they deliver precise flow control and durability under frequent operation, making them ideal for applications requiring exact regulation and maintenance ease.",
        initialImage: "/assets/products/globe-valve.png",
    },
    {
        name: "Ball Valve (2PC)",
        description:
            "2PC ball valves feature a rotating ball with a bore that provides tight shut-off and low torque operation. Their compact design and simple quarter-turn action offer rapid opening and closing, ideal for on/off control in chemical, petrochemical, and general industrial services.",
        initialImage: "/assets/products/ball-valve-2pc.jpg",
    },
];

const APPLICATION_IMAGES = [
    {
        name: "Nuclear Power Plant",
        image: "/assets/applications/nuclear_powerplant.jpg",
    },
    {
        name: "Marine Industry",
        image: "/assets/applications/marine.jpg",
    },
    {
        name: "Water Treatment",
        image: "/assets/applications/water-industry.jpg",
    },
    {
        name: "Oil & Gas",
        image: "/assets/applications/oil.jpg",
    },
    {
        name: "Paper Manufacturing",
        image: "/assets/applications/paper.jpg",
    },
    {
        name: "Process Industry",
        image: "/assets/applications/process_industry.jpg",
    },
];

export default function Home() {
    return (
        <div>
            {/* Hero Carousel */}
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

                            <div className="absolute inset-0 flex items-center justify-center px-4">
                                <CarouselPrevious className="absolute left-6 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full" />
                                <CarouselNext className="absolute right-6 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full" />

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

            <MaxWidthWrapper>
                {/* Why Choose Orbis Valves Section */}
                <section className="py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003B73] mb-12">
                        Why Choose Orbis Valves?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {FEATURE_CARDS.map((card) => (
                            <InfoCard
                                key={card.title}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </section>
                {/* Capabilities & Details Section */}
                <section className="py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003B73] mb-12">
                        Our Capabilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {DETAIL_CARDS.map((card) => (
                            <InfoCard
                                key={card.title}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </section>
                {/* Featured Products Section */}
                <section className="py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003B73] mb-12">
                        Featured Products
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {PRODUCT_LIST.map((prod) => (
                            <Product
                                size="square"
                                isFeatured={true}
                                key={prod.name}
                                initialImage={prod.initialImage}
                                name={prod.name}
                                description={prod.description}
                            />
                        ))}
                    </div>
                    <div className="mt-10 flex justify-end">
                        <Link href={"products/gate-valve"}>
                            <Button className="bg-[#003B73] cursor-pointer text-white">
                                View More
                            </Button>
                        </Link>
                    </div>
                </section>
                {/* Applications Section */}
                <div className="max-w-full overflow-hidden mt-4 py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003B73] mb-12">
                        Industries We Serve
                    </h2>
                    <Carousel
                        opts={{ align: "center", loop: true }}
                        plugins={[
                            Autoplay({ delay: 1500, stopOnInteraction: true }),
                        ]}
                        className="w-full relative"
                    >
                        <CarouselContent className="flex">
                            {APPLICATION_IMAGES.map((application, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                                >
                                    <div className="relative">
                                        <img
                                            src={application.image}
                                            alt={application.name}
                                            className="w-full h-full object-cover rounded-md"
                                            style={{
                                                aspectRatio: "1 / 1",
                                            }}
                                        />
                                        <p className="text-lg font-semibold text-[#003B73] text-center">
                                            {application.name}
                                        </p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
                        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
                    </Carousel>
                </div>{" "}
            </MaxWidthWrapper>
        </div>
    );
}
