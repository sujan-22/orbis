import { cn } from "@/lib/utils";

interface SectionLabelProps {
    index?: string;
    children: React.ReactNode;
    tone?: "dark" | "light";
    className?: string;
}

const SectionLabel = ({
    index,
    children,
    tone = "dark",
    className,
}: SectionLabelProps) => (
    <p
        className={cn(
            "eyebrow flex items-center gap-3",
            tone === "dark" ? "text-muted-ink" : "text-white/60",
            className
        )}
    >
        <span aria-hidden className="brand-gradient inline-block size-2" />
        {index && (
            <span className={tone === "dark" ? "text-ink" : "text-white"}>
                {index}
            </span>
        )}
        <span>{children}</span>
    </p>
);

export default SectionLabel;
