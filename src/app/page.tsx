/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animation";
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
import SectionHeading from "@/components/helpers/section-heading";
import { PRODUCTS } from "@/lib/products";

// #003B73
// #004AAD
// #5DE0E6
// #0078A6

const SLIDES = [
    {
        image: "/assets/home1.jpg",
        title: "Orbis Valves Industries",
        quote: "Precision engineered for peak performance under pressure",
    },
    {
        image: "/assets/home2.jpg",
        title: "Orbis Valves Industries",
        quote: "Delivering leak‑proof reliability across every application",
    },
    {
        image: "/assets/home3.jpg",
        title: "Orbis Valves Industries",
        quote: "Your flow control partner—durable, dependable, dynamic",
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
        <div className="">
            {/* Hero */}
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
                                quality={100}
                                draggable={false}
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

            {/* Why Choose */}
            <section className="bg-[#F9FAFB] py-20">
                <MaxWidthWrapper>
                    <SectionHeading title="Why Choose Orbis Valves?" />
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {FEATURE_CARDS.map((c) => (
                            <InfoCard
                                key={c.title}
                                icon={c.icon}
                                title={c.title}
                                description={c.description}
                                color={{
                                    text: "text-[#003B73]",
                                    background: "bg-white",
                                }}
                                transparent
                            />
                        ))}
                    </motion.div>
                </MaxWidthWrapper>
            </section>

            {/* Capabilities */}
            <section className="bg-[#E5F7FA] py-20">
                <MaxWidthWrapper>
                    <SectionHeading title="Our Capabilities" />
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {DETAIL_CARDS.map((c) => (
                            <InfoCard
                                key={c.title}
                                icon={c.icon}
                                title={c.title}
                                description={c.description}
                                color={{
                                    text: "text-[#5DE0E6]",
                                    background: "bg-[#003B73]",
                                    descriptionColor: "text-white",
                                }}
                            />
                        ))}
                    </motion.div>
                </MaxWidthWrapper>
            </section>

            {/* Featured Products */}
            <section className="bg-white py-20">
                <MaxWidthWrapper>
                    <SectionHeading title="Featured Products" />
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeInUp}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {PRODUCTS.slice(0, 3).map((p) => (
                            <Product
                                key={p.slug}
                                size="square"
                                isFeatured
                                initialImage={p.image}
                                name={p.name}
                                description={p.description}
                                slug={p.slug}
                            />
                        ))}
                    </motion.div>
                    <div className="mt-10 text-right">
                        <Link href="/products/gate-valve">
                            <Button className="bg-[#003B73] text-white">
                                View All Products
                            </Button>
                        </Link>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-[#003B73] to-[#004AAD] py-16">
                <MaxWidthWrapper className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Elevate Your Flow Control?
                    </h2>
                    <p className="mb-6 opacity-90">
                        Speak with our experts today and find the perfect valve
                        for your project.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-[#5DE0E6] text-[#003B73] hover:bg-[#0078A6] cursor-pointer">
                            Contact Us
                        </Button>
                    </Link>
                </MaxWidthWrapper>
            </section>

            {/* Industries We Serve */}
            <section className="bg-[#F9FAFB] py-20">
                <MaxWidthWrapper>
                    <SectionHeading title="Industries We Serve" />
                    <Carousel
                        opts={{ align: "center", loop: true }}
                        plugins={[
                            Autoplay({ delay: 1500, stopOnInteraction: true }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="flex gap-4">
                            {APPLICATION_IMAGES.map((app, i) => (
                                <CarouselItem
                                    key={i}
                                    className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                                >
                                    <img
                                        src={app.image}
                                        alt={app.name}
                                        className="w-full aspect-square rounded-lg object-cover"
                                    />
                                    <p className="mt-2 text-center text-[#003B73] font-semibold">
                                        {app.name}
                                    </p>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                    </Carousel>
                </MaxWidthWrapper>
            </section>
        </div>
    );
}
