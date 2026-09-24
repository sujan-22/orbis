import Image from "next/image";
import CtaBand from "@/components/cta-band";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import { INDUSTRIES } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";
import { cn, pad2 } from "@/lib/utils";

export const metadata = pageMetadata({
    title: "Industries",
    description:
        "Orbis valves serve nuclear and power generation, oil & gas, marine, water treatment, pulp & paper and the process industries.",
    path: "/application/",
});

export default function Applications() {
    return (
        <>
            <PageHeader
                label="Industries"
                title="Built for the industries that can't afford to stop."
                lead="From reactor systems to paper mills, Orbis valves are engineered for the pressures, temperatures and media of each application."
            >
                <ul className="mt-12 flex animate-rise flex-wrap gap-2 [animation-delay:240ms]">
                    {INDUSTRIES.map((industry) => (
                        <li key={industry.slug}>
                            <a
                                href={`#${industry.slug}`}
                                className="inline-flex h-10 items-center border border-line bg-white px-4 text-sm text-ink transition-colors hover:border-ink"
                            >
                                {industry.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </PageHeader>

            <section className="py-20 lg:py-32">
                <MaxWidthWrapper className="space-y-24 lg:space-y-36">
                    {INDUSTRIES.map((industry, i) => {
                        const flipped = i % 2 === 1;
                        return (
                            <article
                                key={industry.slug}
                                id={industry.slug}
                                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-12 lg:gap-10"
                            >
                                <Reveal
                                    className={cn(
                                        "relative aspect-[4/3] overflow-hidden bg-surface lg:col-span-7",
                                        flipped && "lg:order-2 lg:col-start-6"
                                    )}
                                >
                                    <Image
                                        src={industry.image}
                                        alt={industry.name}
                                        fill
                                        priority={i === 0}
                                        className="object-cover"
                                    />
                                </Reveal>
                                <Reveal
                                    delay={0.1}
                                    className={cn(
                                        "lg:col-span-4",
                                        flipped
                                            ? "lg:order-1 lg:col-start-1"
                                            : "lg:col-start-9"
                                    )}
                                >
                                    <p className="eyebrow text-muted-ink">
                                        {pad2(i + 1)} / {pad2(INDUSTRIES.length)}
                                    </p>
                                    <h2 className="display-md mt-5">
                                        {industry.name}
                                    </h2>
                                    <p className="mt-3 text-lg text-ink">
                                        {industry.summary}
                                    </p>
                                    <p className="mt-5 leading-relaxed text-muted-ink">
                                        {industry.description}
                                    </p>
                                </Reveal>
                            </article>
                        );
                    })}
                </MaxWidthWrapper>
            </section>

            <CtaBand />
        </>
    );
}
