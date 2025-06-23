export interface Product {
    slug: string;
    name: string;
    description: string;
    image: string;
    additionalInfo?: string;
}

export const PRODUCTS: Product[] = [
    {
        slug: "gate-valve",
        name: "Gate Valve",
        description:
            '"ORBIS" make Gate Valves are primarily designed to start or stop flow when a straight-line passage and minimal flow restriction are needed. They operate fully open or fully closed, making them ideal for on/off service in pipelines requiring tight isolation. (150# / 300#)',
        image: "/assets/products/gate-valve.png",
        additionalInfo: "150# / 300#",
    },
    {
        slug: "globe-valve-flange-ends",
        name: "Globe Valve Flange Ends",
        description:
            '"ORBIS" make Globe Valves are linear-motion valves designed to stop, start, and regulate flow. The disc can be fully removed from the flow path or completely close it, delivering precise throttling control and easy maintenance. (Flange Ends, 150# / 300#)',
        image: "/assets/products/globe-valve.png",
        additionalInfo: "150# / 300#",
    },
    {
        slug: "2pc-ball-valve",
        name: "2PC Ball Valve",
        description:
            '"ORBIS" make 2PC Ball Valves use a hollow, perforated, pivoting ball for quick quarter-turn operation. The valve is open when the ball’s bore aligns with the flow, and fully closed when rotated 90°. Ideal for rapid on/off control in chemical and industrial services. (150# / 300#)',
        image: "/assets/products/ball-valve-2pc.jpg",
        additionalInfo: "150# / 300#",
    },
    {
        slug: "dual-plate-check-valve",
        name: "Dual Plate Check Valve",
        description:
            '"ORBIS" make Dual Plate Check Valves featuring two spring-loaded plates that open under forward flow and snap shut to prevent backflow. Compact, wafer-style design fits between flanges for space-saving installations. (150# / 300#)',
        image: "/assets/products/dual-plate-check-valve.jpg",
    },
    {
        slug: "wafer-type-check-valve",
        name: "Wafer Type Check Valve",
        description:
            '"ORBIS" make Wafer Type Check Valves as single-plate swing valves with a short wafer body. The low-profile disc design requires minimal differential pressure to open and close, preventing backflow in piping systems. (150# / 300#)',
        image: "/assets/products/wafer-type-check-valve.jpg",
    },
    {
        slug: "lever-operated-butterfly-valve",
        name: "Lever Operated Butterfly Valve",
        description:
            '"ORBIS" make Lever Operated Butterfly Valves for quick quarter-turn shutoff, regulation, and isolation of fluid, gas, or air flow. The lever mechanism enables easy manual operation in low-pressure networks. (150# / 300#)',
        image: "/assets/products/lever-operated-butterfly-valve.jpg",
    },
    {
        slug: "gear-operated-butterfly-valve",
        name: "Gear Operated Butterfly Valve",
        description:
            '"ORBIS" make Gear Operated Butterfly Valves for applications requiring higher torque. The gearbox drive allows precise, smooth operation of the disc, offering reliable isolation and throttling in larger-diameter pipelines. (150# / 300#)',
        image: "/assets/products/gear-operated-butterfly-valve.jpg",
    },
    {
        slug: "knife-edge-gate-valve",
        name: "Knife Edge Gate Valve",
        description:
            '"ORBIS" make Knife Edge Gate Valves with sharp, blade-like gates that cut through slurries and viscous fluids. Ideal for heavy oils, greases, pulp, varnish, and wastewater applications, offering clean closure in demanding environments. (150# / 300#)',
        image: "/assets/products/knife-edge-gate-valve.jpg",
    },
];
