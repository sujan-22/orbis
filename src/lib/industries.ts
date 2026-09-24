export interface Industry {
    slug: string;
    name: string;
    image: string;
    summary: string;
    description: string;
}

export const INDUSTRIES: Industry[] = [
    {
        slug: "power",
        name: "Nuclear & Power",
        image: "/images/industries/nuclear-powerplant.webp",
        summary: "High-pressure valves for critical generation systems.",
        description:
            "Orbis Valves supplies radiation-resistant, high-pressure valves specifically engineered for nuclear reactor systems, ensuring maximum safety and durability in critical power generation environments.",
    },
    {
        slug: "oil-gas",
        name: "Oil & Gas",
        image: "/images/industries/oil.webp",
        summary: "Upstream, midstream and downstream service.",
        description:
            "For upstream drilling, midstream transport, and downstream refining, Orbis Valves delivers high-performance valves that handle extreme pressures and corrosive media, ensuring safe and efficient operations.",
    },
    {
        slug: "marine",
        name: "Marine",
        image: "/images/industries/marine.webp",
        summary: "Corrosion-resistant alloys for saltwater duty.",
        description:
            "Our marine-grade valves are crafted from corrosion-resistant alloys to withstand harsh saltwater conditions, delivering reliable performance for shipbuilding, offshore platforms, and maritime applications.",
    },
    {
        slug: "water",
        name: "Water Treatment",
        image: "/images/industries/water-industry.webp",
        summary: "Precise control for supply and wastewater.",
        description:
            "Designed for municipal and industrial water treatment facilities, our valves provide precise flow control and minimal leakage, supporting clean water distribution and wastewater management systems.",
    },
    {
        slug: "paper",
        name: "Pulp & Paper",
        image: "/images/industries/paper.webp",
        summary: "Abrasion-resistant control of steam and pulp.",
        description:
            "Our valves in paper mills regulate steam, pulp, and chemical flows with precision. They resist abrasion and high temperatures, maintaining uptime and product quality in pulp and paper processes.",
    },
    {
        slug: "process",
        name: "Process Industry",
        image: "/images/industries/process-industry.webp",
        summary: "Chemical, pharmaceutical and food processing.",
        description:
            "Serving chemical, pharmaceutical, and food processing plants, our hygienic and precision-engineered valves ensure safe handling of fluids, gases, and slurries, meeting stringent industry standards.",
    },
];
