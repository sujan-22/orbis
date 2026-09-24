import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ArrowLink from "@/components/arrow-link";
import CtaBand from "@/components/cta-band";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductCard from "@/components/product-card";
import Reveal from "@/components/reveal";
import SectionLabel from "@/components/section-label";
import { BrochureDialog } from "@/components/helpers/brochure-dialog";
import HeroFigure from "@/components/home/hero-figure";
import IndustriesShowcase from "@/components/home/industries-showcase";
import MaterialsMarquee from "@/components/home/materials-marquee";
import { buttonVariants } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/industries";
import { PRODUCTS } from "@/lib/products";
import { MATERIAL_GRADES } from "@/lib/site";
import { pad2 } from "@/lib/utils";

const STATS = [
    { label: "Valve families", value: pad2(PRODUCTS.length) },
    { label: "Material grades", value: `${MATERIAL_GRADES.length}+` },
    { label: "Pressure classes", value: "150# / 300#" },
    { label: "Industries served", value: pad2(INDUSTRIES.length) },
];

const CAPABILITIES = [
    {
        title: "Advanced manufacturing",
        body: "Our Ahmedabad facility uses CNC machining and automated testing to deliver valves that meet the highest industrial standards.",
    },
    {
        title: "Certified quality",
        body: "Products are certified to ISO, ASME and PED standards and built from premium materials like AISI 316L and 250SMO for maximum corrosion resistance.",
    },
    {
        title: "Material testing",
        body: "Valves pass rigorous mechanical and chemical tests, with detailed certificates provided to customers. Custom tests are available on request.",
    },
    {
        title: "Hydrostatic & pneumatic testing",
        body: "In-process and final inspections — including hydrostatic and pneumatic tests — ensure leak-free performance before any valve leaves the plant.",
    },
    {
        title: "Expert assembly",
        body: "Every component is inspected and assembled by experienced technicians to guarantee durable, dependable performance in service.",
    },
];

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="relative -mt-16 overflow-hidden bg-paper pt-16 lg:-mt-[76px] lg:pt-[76px]">
                <div
                    aria-hidden
                    className="blueprint-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_72%_45%,black_30%,transparent_80%)]"
                />
                <div className="relative flex flex-col lg:min-h-[calc(100svh-76px)]">
                    <MaxWidthWrapper className="grid flex-1 items-center gap-12 pb-12 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-10 lg:pt-8">
                        <div className="lg:col-span-6">
                            <p className="eyebrow animate-rise text-muted-ink">
                                Orbis Valves Industries — Ahmedabad, India
                            </p>
                            <h1 className="mt-7 text-[clamp(2.625rem,1rem+3.9vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-ink">
                                <span className="block animate-rise [animation-delay:80ms]">
                                    Industrial valves,
                                </span>
                                <span className="block animate-rise [animation-delay:160ms]">
                                    engineered{" "}
                                    <span className="text-muted-ink/70">
                                        for flow.
                                    </span>
                                </span>
                            </h1>
                            <p className="mt-8 max-w-lg animate-rise text-lg leading-relaxed text-muted-ink [animation-delay:260ms]">
                                Gate, globe, ball, check, butterfly and
                                knife-edge valves in cast iron, carbon steel and
                                stainless steel — built for power, process,
                                marine and water industries worldwide.
                            </p>
                            <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:340ms]">
                                <Link
                                    href="/products"
                                    className={buttonVariants({ size: "lg" })}
                                >
                                    Explore products
                                    <ArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className={buttonVariants({
                                        variant: "outline",
                                        size: "lg",
                                    })}
                                >
                                    Request a quote
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <HeroFigure />
                        </div>
                    </MaxWidthWrapper>

                    <div className="border-t border-line">
                        <MaxWidthWrapper>
                            <dl className="grid grid-cols-2 lg:grid-cols-4">
                                {STATS.map((stat, i) => (
                                    <div
                                        key={stat.label}
                                        className="flex animate-rise flex-col-reverse gap-2 border-line py-6 odd:pr-4 even:border-l even:pl-5 max-lg:[&:nth-child(n+3)]:border-t lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0 lg:odd:pr-8"
                                        style={{
                                            animationDelay: `${420 + i * 70}ms`,
                                        }}
                                    >
                                        <dt className="eyebrow text-muted-ink">
                                            {stat.label}
                                        </dt>
                                        <dd className="text-2xl font-medium tracking-[-0.03em] text-ink lg:text-3xl">
                                            {stat.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </MaxWidthWrapper>
                    </div>
                </div>
            </section>

            <MaterialsMarquee />

            {/* Company statement */}
            <section className="py-24 lg:py-40">
                <MaxWidthWrapper className="grid gap-10 lg:grid-cols-12">
                    <Reveal className="lg:col-span-3">
                        <SectionLabel index="01">Company</SectionLabel>
                    </Reveal>
                    <div className="lg:col-span-9">
                        <Reveal>
                            <p className="display-md text-balance text-ink">
                                Orbis Valves Industries manufactures industrial
                                valves in ductile iron, carbon steel and
                                stainless steel.{" "}
                                <span className="text-muted-ink">
                                    Each one is engineered for tight shut-off,
                                    precise control and long service life in
                                    demanding pipelines — from refineries and
                                    power plants to water networks and paper
                                    mills.
                                </span>
                            </p>
                        </Reveal>
                        <Reveal
                            delay={0.1}
                            className="mt-12 flex flex-wrap gap-x-10 gap-y-5"
                        >
                            <ArrowLink href="/about-us">
                                About the company
                            </ArrowLink>
                            <ArrowLink href="/catalogue">
                                Download the catalogue
                            </ArrowLink>
                        </Reveal>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* Products */}
            <section className="pb-24 lg:pb-40">
                <MaxWidthWrapper>
                    <Reveal className="flex flex-col gap-8 border-t border-line pt-10 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <SectionLabel index="02">Product range</SectionLabel>
                            <h2 className="display-lg mt-7 max-w-3xl text-balance">
                                Nine valve families. One standard of build.
                            </h2>
                        </div>
                        <ArrowLink href="/products">View all products</ArrowLink>
                    </Reveal>
                    <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                        {PRODUCTS.map((product, i) => (
                            <Reveal as="li" key={product.slug} delay={(i % 3) * 0.08}>
                                <ProductCard product={product} />
                            </Reveal>
                        ))}
                    </ul>
                </MaxWidthWrapper>
            </section>

            {/* Capabilities */}
            <section className="bg-paper py-24 lg:py-40">
                <MaxWidthWrapper className="grid gap-16 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                            <Reveal>
                                <SectionLabel index="03">Why Orbis</SectionLabel>
                                <h2 className="display-lg mt-7 text-balance">
                                    Built with care, from machining to final
                                    test.
                                </h2>
                                <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-ink">
                                    Every Orbis valve is machined, assembled and
                                    pressure-tested in Ahmedabad — with detailed
                                    test certificates for our customers.
                                </p>
                            </Reveal>
                            <Reveal
                                delay={0.1}
                                className="relative mt-12 aspect-[16/10] overflow-hidden"
                            >
                                <Image
                                    src="/images/pipework.webp"
                                    alt="Stainless steel process pipework with actuated valves"
                                    fill
                                    className="object-cover"
                                />
                            </Reveal>
                        </div>
                    </div>
                    <ol className="border-t border-ink/15 lg:col-span-6 lg:col-start-7">
                        {CAPABILITIES.map((item, i) => (
                            <Reveal
                                as="li"
                                key={item.title}
                                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/15 py-9 lg:py-12"
                            >
                                <span className="eyebrow pt-2 text-muted-ink">
                                    {pad2(i + 1)}
                                </span>
                                <div>
                                    <h3 className="text-2xl font-medium tracking-[-0.025em] text-ink lg:text-[1.75rem]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 max-w-lg leading-relaxed text-muted-ink">
                                        {item.body}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </ol>
                </MaxWidthWrapper>
            </section>

            <IndustriesShowcase />

            {/* Catalogue */}
            <section className="py-24 lg:py-40">
                <MaxWidthWrapper className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
                    <Reveal className="group relative grid aspect-[4/5] place-items-center overflow-hidden bg-surface sm:aspect-[5/4] lg:col-span-6 lg:aspect-[5/5]">
                        <div aria-hidden className="blueprint-grid absolute inset-0" />
                        <Image
                            src="/images/brochure-cover.webp"
                            alt="Cover of the Orbis Valves Industries brochure"
                            width={900}
                            height={1308}
                            className="relative w-[52%] -rotate-3 shadow-[0_40px_80px_-24px_rgb(11_23_38/0.45)] transition-transform duration-700 ease-out-expo group-hover:rotate-0 sm:w-[38%] lg:w-[50%]"
                        />
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
                        <SectionLabel index="05">Catalogue</SectionLabel>
                        <h2 className="display-lg mt-7 text-balance">
                            Take the range with you.
                        </h2>
                        <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-ink">
                            Download the Orbis brochure to share with your
                            procurement and engineering teams.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                            <BrochureDialog variant="default" size="lg" />
                            <ArrowLink href="/catalogue">
                                Catalogue page
                            </ArrowLink>
                        </div>
                    </Reveal>
                </MaxWidthWrapper>
            </section>

            <CtaBand />
        </>
    );
}
