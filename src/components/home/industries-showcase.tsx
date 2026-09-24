"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ArrowLink from "@/components/arrow-link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Reveal from "@/components/reveal";
import SectionLabel from "@/components/section-label";
import { INDUSTRIES } from "@/lib/industries";
import { cn, pad2 } from "@/lib/utils";

export default function IndustriesShowcase() {
    const [active, setActive] = useState(0);
    const current = INDUSTRIES[active];

    return (
        <section className="bg-ink py-24 text-white lg:py-36">
            <MaxWidthWrapper>
                <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <SectionLabel index="04" tone="light">
                            Industries
                        </SectionLabel>
                        <h2 className="display-lg mt-7 max-w-2xl text-balance">
                            Where our valves go to work.
                        </h2>
                    </div>
                    <ArrowLink href="/application" tone="light">
                        All industries
                    </ArrowLink>
                </Reveal>

                {/* Desktop: hover list + crossfading image */}
                <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-12">
                    <ul className="col-span-5 border-t border-white/10">
                        {INDUSTRIES.map((industry, i) => {
                            const isActive = i === active;
                            return (
                                <li key={industry.slug}>
                                    <button
                                        type="button"
                                        onMouseEnter={() => setActive(i)}
                                        onFocus={() => setActive(i)}
                                        onClick={() => setActive(i)}
                                        aria-pressed={isActive}
                                        className="group flex w-full cursor-pointer items-center gap-6 border-b border-white/10 py-6 text-left"
                                    >
                                        <span className="eyebrow w-6 text-white/40">
                                            {pad2(i + 1)}
                                        </span>
                                        <span
                                            className={cn(
                                                "text-[2rem] font-medium leading-none tracking-[-0.035em] transition-colors duration-300 xl:text-[2.5rem]",
                                                isActive
                                                    ? "text-white"
                                                    : "text-white/30 group-hover:text-white/60"
                                            )}
                                        >
                                            {industry.name}
                                        </span>
                                        <ArrowRight
                                            className={cn(
                                                "ml-auto size-5 text-cyan transition duration-300",
                                                isActive
                                                    ? "translate-x-0 opacity-100"
                                                    : "-translate-x-2 opacity-0"
                                            )}
                                        />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="col-span-7">
                        <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                            {INDUSTRIES.map((industry, i) => (
                                <Image
                                    key={industry.slug}
                                    src={industry.image}
                                    alt={i === active ? industry.name : ""}
                                    fill
                                    className={cn(
                                        "object-cover transition-[opacity,transform] duration-[900ms] ease-out-expo",
                                        i === active
                                            ? "scale-100 opacity-100"
                                            : "scale-[1.04] opacity-0"
                                    )}
                                />
                            ))}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-8 pt-24">
                                <p
                                    key={current.slug}
                                    aria-live="polite"
                                    className="max-w-lg animate-fade text-[0.9375rem] leading-relaxed text-white/85"
                                >
                                    {current.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile / tablet: simple cards */}
                <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:hidden">
                    {INDUSTRIES.map((industry, i) => (
                        <li key={industry.slug}>
                            <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                                <Image
                                    src={industry.image}
                                    alt={industry.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="eyebrow mt-5 text-white/40">
                                {pad2(i + 1)}
                            </p>
                            <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                                {industry.name}
                            </h3>
                            <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/60">
                                {industry.summary}
                            </p>
                        </li>
                    ))}
                </ul>
            </MaxWidthWrapper>
        </section>
    );
}
