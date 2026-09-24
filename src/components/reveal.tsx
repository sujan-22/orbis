"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
    as?: "div" | "li" | "section";
}

// Fades content up once as it scrolls into view.
const Reveal = ({
    children,
    className,
    id,
    delay = 0,
    as = "div",
}: RevealProps) => {
    const Component = motion[as];
    return (
        <Component
            id={id}
            className={className}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </Component>
    );
};

export default Reveal;
