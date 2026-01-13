/* eslint-disable @next/next/no-img-element */
"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/helpers/section-heading";
import { FaCertificate, FaGlobe, FaIndustry, FaUsers } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function AboutUs() {
    const router = useRouter();
    return (
        <div className="bg-white">
            {/* 1. Hero */}
            <div className="relative h-[240px] sm:h-[320px] md:h-[420px] w-full overflow-hidden">
                <img
                    src="/assets/about_hero.jpg"
                    alt="Orbis Valves"
                    className="h-full w-full object-cover object-center"
                />

                {/* Better overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/10" />

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h1 className="max-w-5xl text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow">
                        Complete Global Flow Control & Solution
                    </h1>
                </div>
            </div>

            <MaxWidthWrapper className="py-16">
                {/* 2. Two‑column intro */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-lg border bg-white shadow-sm p-4">
                        <p className="text-sm font-semibold text-[#003B73] mb-3">
                            Featured Products
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            {[
                                {
                                    src: "/assets/products/gate-valve.png",
                                    label: "Gate Valve",
                                },
                                {
                                    src: "/assets/products/globe-valve.png",
                                    label: "Globe Valve",
                                },
                                {
                                    src: "/assets/products/2pc-ball-valve.png",
                                    label: "2PC Ball Valve",
                                },
                                {
                                    src: "/assets/products/dual-plate-check-valve.png",
                                    label: "Check Valve",
                                },
                            ].map((p) => (
                                <div
                                    key={p.label}
                                    className="rounded-md border bg-[#F9FAFB] p-3 flex flex-col items-center"
                                >
                                    <img
                                        src={p.src}
                                        alt={p.label}
                                        className="h-24 w-full object-contain"
                                        draggable={false}
                                    />
                                    <span className="mt-2 text-xs text-[#004AAD]">
                                        {p.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 text-[#003B73]">
                        <SectionHeading title="About Orbis Valves Industries" />
                        <p className="text-base leading-relaxed">
                            We, <strong>Orbis Valves Industries</strong>, have
                            been winning our customers’ hearts since our
                            inception by delivering top‑tier industrial
                            valves—Globe, Gate, Butterfly, Check, Ball, Pulp,
                            Knife‑Edge and more—crafted in Ductile Iron, Carbon
                            Steel and premium Stainless Steels (GG25, GGG40,
                            A105N, LF2, WCB, WC6, 316L, 250SMO, Duplex, etc.).
                        </p>
                        <p className="text-base leading-relaxed">
                            Based in Ahmedabad, Gujarat, our state‑of‑the‑art
                            facility is continually upgraded to meet growing
                            global demand. We pride ourselves on rigorous
                            quality controls, world‑class materials, and an
                            unwavering commitment to exceed expectations.
                        </p>
                        <p className="text-base leading-relaxed">
                            Our vision is to remain the benchmark for
                            durability, precision, and customer satisfaction in
                            flow‑control solutions around the globe.
                        </p>
                    </div>
                </div>

                {/* 3. Icon Highlights */}
                <div className="mt-16">
                    <SectionHeading title="Our Core Strengths" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                        {[
                            {
                                icon: FaCertificate,
                                title: "Certified Quality",
                                text: "ISO, PED, API & NACE compliance",
                            },
                            {
                                icon: FaIndustry,
                                title: "Advanced Facility",
                                text: "CNC machining & automated inspection",
                            },
                            {
                                icon: FaGlobe,
                                title: "Global Reach",
                                text: "Serving power, petrochem, pharma & more",
                            },
                            {
                                icon: FaUsers,
                                title: "Customer Focus",
                                text: "Tailored solutions & 24/7 support",
                            },
                        ].map((c) => (
                            <div
                                key={c.title}
                                className="flex flex-col items-center text-center p-6 bg-[#F9FAFB] rounded-lg shadow-sm"
                            >
                                <c.icon className="text-4xl text-[#0078A6]" />
                                <h3 className="mt-4 text-xl font-semibold text-[#003B73]">
                                    {c.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    {c.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. CTA */}
                <div className="mt-16 text-center">
                    <Button
                        className="inline-block cursor-pointer bg-[#003B73] text-white font-semibold rounded-lg shadow hover:bg-[#005494] transition"
                        onClick={() => router.push("/contact")}
                    >
                        Get in Touch
                    </Button>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
