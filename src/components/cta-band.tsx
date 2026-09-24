import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import SectionLabel from "./section-label";
import Reveal from "./reveal";
import { buttonVariants } from "./ui/button";
import { SITE } from "@/lib/site";

const CtaBand = () => (
    <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
            src="/images/refinery-dusk.webp"
            alt=""
            fill
            className="-z-20 object-cover object-center"
        />
        <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30"
        />
        <MaxWidthWrapper className="py-24 lg:py-40">
            <Reveal>
                <SectionLabel tone="light">Start a conversation</SectionLabel>
                <h2 className="display-lg mt-7 max-w-3xl text-balance">
                    Have a specification in hand?
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                    Send us the size, pressure class and media. We&apos;ll
                    recommend the right valve and material for your line.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                        href="/contact"
                        className={buttonVariants({ variant: "light", size: "lg" })}
                    >
                        Request a quote
                        <ArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
                    </Link>
                    <a
                        href={SITE.phone.href}
                        className={buttonVariants({
                            variant: "outline-light",
                            size: "lg",
                        })}
                    >
                        <Phone />
                        {SITE.phone.display}
                    </a>
                </div>
            </Reveal>
        </MaxWidthWrapper>
    </section>
);

export default CtaBand;
