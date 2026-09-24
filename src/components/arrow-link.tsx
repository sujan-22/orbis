import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
    href: string;
    children: React.ReactNode;
    tone?: "dark" | "light";
    className?: string;
}

const ArrowLink = ({ href, children, tone = "dark", className }: ArrowLinkProps) => (
    <Link
        href={href}
        className={cn(
            "group inline-flex items-center gap-2 border-b pb-1.5 text-[0.9375rem] font-medium tracking-[-0.01em] transition-colors",
            tone === "dark"
                ? "border-ink/25 text-ink hover:border-ink"
                : "border-white/30 text-white hover:border-white",
            className
        )}
    >
        {children}
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
);

export default ArrowLink;
