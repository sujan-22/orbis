"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";

// Define industries with name, image path, and description
const APPLICATIONS = [
    {
        name: "Nuclear Power Plant",
        image: "/assets/applications/nuclear_powerplant.jpg",
        description:
            "Orbis Valves supplies radiation-resistant, high-pressure valves specifically engineered for nuclear reactor systems, ensuring maximum safety and durability in critical power generation environments.",
    },
    {
        name: "Marine Industry",
        image: "/assets/applications/marine.jpg",
        description:
            "Our marine-grade valves are crafted from corrosion-resistant alloys to withstand harsh saltwater conditions, delivering reliable performance for shipbuilding, offshore platforms, and maritime applications.",
    },
    {
        name: "Water Treatment",
        image: "/assets/applications/water-industry.jpg",
        description:
            "Designed for municipal and industrial water treatment facilities, our valves provide precise flow control and minimal leakage, supporting clean water distribution and wastewater management systems.",
    },
    {
        name: "Oil & Gas",
        image: "/assets/applications/oil.jpg",
        description:
            "For upstream drilling, midstream transport, and downstream refining, Orbis Valves delivers high-performance valves that handle extreme pressures and corrosive media, ensuring safe and efficient operations.",
    },
    {
        name: "Paper Manufacturing",
        image: "/assets/applications/paper.jpg",
        description:
            "Our valves in paper mills regulate steam, pulp, and chemical flows with precision. They resist abrasion and high temperatures, maintaining uptime and product quality in pulp and paper processes.",
    },
    {
        name: "Process Industry",
        image: "/assets/applications/process_industry.jpg",
        description:
            "Serving chemical, pharmaceutical, and food processing plants, our hygienic and precision-engineered valves ensure safe handling of fluids, gases, and slurries, meeting stringent industry standards.",
    },
];

export default function Applications() {
    return (
        <MaxWidthWrapper className="py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#003B73]">
                    Industries We Serve
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {APPLICATIONS.map((app) => (
                    <div
                        key={app.name}
                        className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="relative w-full aspect-square">
                            <Image
                                src={app.image}
                                alt={app.name}
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-4 text-[#003B73]">
                                {app.name}
                            </h3>
                            <p className="text-sm text-[#004AAD] flex-grow">
                                {app.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}
