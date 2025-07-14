"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    // exit: { opacity: 0, y: -20 },
};

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const path = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={path}
                initial="hidden"
                animate="enter"
                // exit="exit"
                variants={variants}
                transition={{ duration: 0.8 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
