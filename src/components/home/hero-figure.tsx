import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Positions are percentages of the (square) gate-valve image; specs come from
// the gate valve material table in lib/product-material.ts.
const CALLOUTS = [
    { part: "Hand wheel", spec: "S.G. iron", x: 66, y: 14, side: "right" },
    { part: "Stem", spec: "AISI 410 / SS 304 / 316", x: 51, y: 25, side: "left" },
    { part: "Gasket", spec: "Spiral wound metallic", x: 65, y: 46, side: "right" },
    { part: "Body & bonnet", spec: "ASTM A216 WCB / CF8M", x: 41, y: 62, side: "left" },
    { part: "End connection", spec: "Flanged · ANSI B16.5", x: 70, y: 80, side: "right" },
] as const;

// Labels sit outside this band: right-hand labels start at 80%, left-hand
// labels end at 20%.
const EDGE = 80;

export default function HeroFigure() {
    return (
        <figure className="relative mx-auto w-full max-w-[440px] lg:ml-auto lg:mr-0 lg:max-w-[600px]">
            <div className="relative aspect-square">
                <Image
                    src="/images/products/gate-valve.webp"
                    alt="Orbis flanged gate valve"
                    fill
                    priority
                    className="animate-fade object-contain [animation-delay:150ms]"
                />

                <div aria-hidden className="hidden xl:block">
                    {CALLOUTS.map((c, i) => {
                        const delay = 800 + i * 120;
                        const right = c.side === "right";
                        return (
                            <div key={c.part}>
                                <span
                                    className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 animate-fade rounded-full border border-ink bg-paper"
                                    style={{
                                        left: `${c.x}%`,
                                        top: `${c.y}%`,
                                        animationDelay: `${delay}ms`,
                                    }}
                                />
                                <span
                                    className={cn(
                                        "absolute h-px animate-draw-x bg-ink/35",
                                        right ? "origin-left" : "origin-right"
                                    )}
                                    style={
                                        right
                                            ? {
                                                  left: `calc(${c.x}% + 7px)`,
                                                  width: `calc(${EDGE - c.x}% - 11px)`,
                                                  top: `${c.y}%`,
                                                  animationDelay: `${delay}ms`,
                                              }
                                            : {
                                                  right: `calc(${100 - c.x}% + 7px)`,
                                                  width: `calc(${c.x - (100 - EDGE)}% - 11px)`,
                                                  top: `${c.y}%`,
                                                  animationDelay: `${delay}ms`,
                                              }
                                    }
                                />
                                <span
                                    className={cn(
                                        "absolute w-44 -translate-y-2 animate-fade",
                                        right ? "text-left" : "text-right"
                                    )}
                                    style={{
                                        [right ? "left" : "right"]: `calc(${EDGE}% + 4px)`,
                                        top: `${c.y}%`,
                                        animationDelay: `${delay + 300}ms`,
                                    }}
                                >
                                    <span className="eyebrow block text-ink">
                                        {c.part}
                                    </span>
                                    <span className="mt-0.5 block font-mono text-[11px] leading-4 text-muted-ink">
                                        {c.spec}
                                    </span>
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <figcaption className="mt-4 flex animate-fade items-center justify-between gap-4 border-t border-line pt-4 [animation-delay:600ms]">
                <span className="eyebrow text-muted-ink">
                    Fig. 01 — Gate valve · Class 150 / 300
                </span>
                <Link
                    href="/products/gate-valve"
                    className="eyebrow group inline-flex shrink-0 items-center gap-1.5 text-ink"
                >
                    Specs
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </figcaption>
        </figure>
    );
}
