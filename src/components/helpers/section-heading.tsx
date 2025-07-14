import { motion, Variants, easeInOut } from "framer-motion";

const underline: Variants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.6,
            ease: easeInOut,
        },
    },
};

const SectionHeading = ({ title }: { title: string }) => (
    <div className="text-center mb-12 overflow-hidden">
        <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-[#003B73]">
            {title}
            <motion.span
                className="absolute left-0 bottom-[-0.5rem] block h-1 w-full bg-[#5DE0E6] origin-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={underline}
            />
        </h2>
    </div>
);

export default SectionHeading;
