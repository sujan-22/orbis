/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

interface LogoProps {
    tone?: "dark" | "light";
    lockup?: boolean;
    className?: string;
}

// The brand SVGs are cropped from public/logo.svg; "light" is the white version
// for dark backgrounds.
const Logo = ({ tone = "dark", lockup = false, className }: LogoProps) => {
    const file = `${lockup ? "orbis-lockup" : "orbis-wordmark"}${tone === "light" ? "-white" : ""}.svg`;

    return (
        <img
            src={`/brand/${file}`}
            alt="Orbis Valves Industries"
            width={227}
            height={lockup ? 77 : 61}
            className={cn("h-7 w-auto select-none", className)}
            draggable={false}
        />
    );
};

export default Logo;
