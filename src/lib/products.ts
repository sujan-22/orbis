export const PRODUCT_CATEGORIES = [
    "Gate",
    "Globe",
    "Ball",
    "Check",
    "Butterfly",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export interface Product {
    slug: string;
    name: string;
    category: ProductCategory;
    tagline: string;
    description: string;
    image: string;
    additionalInfo?: string;
}

export const PRODUCTS: Product[] = [
    {
        slug: "gate-valve",
        name: "Gate Valve",
        category: "Gate",
        tagline: "Full-bore isolation for on/off service",
        description:
            '"ORBIS" make Gate Valves are primarily designed to start or stop flow when a straight-line passage and minimal flow restriction are needed. They operate fully open or fully closed, making them ideal for on/off service in pipelines requiring tight isolation. (150# / 300#)',
        image: "/images/products/gate-valve.webp",
        additionalInfo: "150# / 300#",
    },
    {
        slug: "globe-valve-flange-ends",
        name: "Globe Valve Flange Ends",
        category: "Globe",
        tagline: "Precise throttling and flow regulation",
        description:
            '"ORBIS" make Globe Valves are linear-motion valves designed to stop, start, and regulate flow. The disc can be fully removed from the flow path or completely close it, delivering precise throttling control and easy maintenance. (Flange Ends, 150# / 300#)',
        image: "/images/products/globe-valve-flange-ends.webp",
        additionalInfo: "150# / 300#",
    },
    {
        slug: "2pc-ball-valve",
        name: "2PC Ball Valve",
        category: "Ball",
        tagline: "Fast quarter-turn shut-off",
        description:
            '"ORBIS" make 2PC Ball Valves use a hollow, perforated, pivoting ball for quick quarter-turn operation. The valve is open when the ball’s bore aligns with the flow, and fully closed when rotated 90°. Ideal for rapid on/off control in chemical and industrial services. (150# / 300#)',
        image: "/images/products/2pc-ball-valve.webp",
        additionalInfo: "150# / 300#",
    },
    {
        slug: "dual-plate-check-valve",
        name: "Dual Plate Check Valve",
        category: "Check",
        tagline: "Spring-loaded plates that stop backflow",
        description:
            '"ORBIS" make Dual Plate Check Valves featuring two spring-loaded plates that open under forward flow and snap shut to prevent backflow. Compact, wafer-style design fits between flanges for space-saving installations. (150# / 300#)',
        image: "/images/products/dual-plate-check-valve.webp",
    },
    {
        slug: "wafer-type-check-valve",
        name: "Wafer Type Check Valve",
        category: "Check",
        tagline: "Low-profile swing check between flanges",
        description:
            '"ORBIS" make Wafer Type Check Valves as single-plate swing valves with a short wafer body. The low-profile disc design requires minimal differential pressure to open and close, preventing backflow in piping systems. (150# / 300#)',
        image: "/images/products/wafer-type-check-valve.webp",
    },
    {
        slug: "lever-operated-butterfly-valve",
        name: "Lever Operated Butterfly Valve",
        category: "Butterfly",
        tagline: "Quick manual isolation for low-pressure lines",
        description:
            '"ORBIS" make Lever Operated Butterfly Valves for quick quarter-turn shutoff, regulation, and isolation of fluid, gas, or air flow. The lever mechanism enables easy manual operation in low-pressure networks. (150# / 300#)',
        image: "/images/products/lever-operated-butterfly-valve.webp",
    },
    {
        slug: "gear-operated-butterfly-valve",
        name: "Gear Operated Butterfly Valve",
        category: "Butterfly",
        tagline: "Geared control for large-diameter lines",
        description:
            '"ORBIS" make Gear Operated Butterfly Valves for applications requiring higher torque. The gearbox drive allows precise, smooth operation of the disc, offering reliable isolation and throttling in larger-diameter pipelines. (150# / 300#)',
        image: "/images/products/gear-operated-butterfly-valve.webp",
    },
    {
        slug: "knife-edge-gate-valve",
        name: "Knife Edge Gate Valve",
        category: "Gate",
        tagline: "Cuts clean through slurry and pulp",
        description:
            '"ORBIS" make Knife Edge Gate Valves with sharp, blade-like gates that cut through slurries and viscous fluids. Ideal for heavy oils, greases, pulp, varnish, and wastewater applications, offering clean closure in demanding environments. (150# / 300#)',
        image: "/images/products/knife-edge-gate-valve.webp",
    },
    {
        slug: "disk-type-check-valve",
        name: "Disk Type Check Valve",
        category: "Check",
        tagline: "Compact, automatic backflow protection",
        description:
            '"ORBIS" make Disk Type Check Valves are automatic valve that open with forward flow and close with reverse flow to prevent backflow.',
        image: "/images/products/disk-type-check-valve.webp",
    },
];

export const productIndex = (slug: string) =>
    String(PRODUCTS.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");
