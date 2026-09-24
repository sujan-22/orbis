import Image from "next/image";
import CtaBand from "@/components/cta-band";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import SectionLabel from "@/components/section-label";
import { INDUSTRIES } from "@/lib/industries";
import { PRODUCTS } from "@/lib/products";
import { MATERIAL_GRADES } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { pad2 } from "@/lib/utils";

export const metadata = pageMetadata({
    title: "About",
    description:
        "Orbis Valves Industries is an Ahmedabad-based manufacturer of gate, globe, ball, check, butterfly and knife-edge valves in ductile iron, carbon steel and stainless steel.",
    path: "/about-us/",
});

const STRENGTHS = [
    {
        title: "Certified quality",
        text: "ISO, PED, API & NACE compliance across the range.",
    },
    {
        title: "Advanced facility",
        text: "CNC machining and automated inspection in Ahmedabad.",
    },
    {
        title: "Global reach",
        text: "Serving power, petrochemical, pharma and more.",
    },
    {
        title: "Customer focus",
        text: "Tailored solutions and 24/7 support.",
    },
];

const MATERIAL_GROUPS = [
    { family: "Cast & ductile iron", grades: ["GG25", "GGG40"] },
    { family: "Carbon & alloy steel", grades: ["A105N", "LF2", "WCB", "WC6"] },
    {
        family: "Stainless & high alloy",
        grades: ["316L", "CF8M", "250SMO", "Duplex"],
    },
];

const FIGURES = [
    { value: pad2(PRODUCTS.length), label: "Valve families" },
    { value: `${MATERIAL_GRADES.length}+`, label: "Material grades" },
    { value: "150# / 300#", label: "Pressure classes" },
    { value: pad2(INDUSTRIES.length), label: "Industries served" },
];

export default function AboutUs() {
    return (
        <>
            <PageHeader
                label="About Orbis"
                title={
                    <>
                        Flow control, engineered with{" "}
                        <span className="text-muted-ink/70">precision.</span>
                    </>
                }
                lead="Orbis Valves Industries builds industrial valves in Ahmedabad, Gujarat — for customers who need durability, precision and a partner they can rely on."
            />

            <section className="relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink sm:aspect-[21/9]">
                    <Image
                        src="/images/handwheel.webp"
                        alt="Close-up of an industrial valve hand wheel"
                        fill
                        priority
                        className="animate-fade object-cover object-[center_60%]"
                    />
                </div>
            </section>

            {/* Story */}
            <section className="py-24 lg:py-36">
                <MaxWidthWrapper className="grid gap-10 lg:grid-cols-12">
                    <Reveal className="lg:col-span-3">
                        <SectionLabel index="01">Who we are</SectionLabel>
                    </Reveal>
                    <div className="lg:col-span-8">
                        <Reveal>
                            <p className="display-md text-balance">
                                We manufacture globe, gate, butterfly, check,
                                ball and knife-edge valves — crafted in ductile
                                iron, carbon steel and premium stainless
                                steels.
                            </p>
                        </Reveal>
                        <div className="mt-12 grid gap-8 text-lg leading-relaxed text-muted-ink md:grid-cols-2">
                            <Reveal>
                                <p>
                                    Since our inception, Orbis Valves
                                    Industries has focused on one thing:
                                    delivering top-tier industrial valves that
                                    earn our customers&apos; trust. Our
                                    facility in Ahmedabad, Gujarat is
                                    continually upgraded to meet growing global
                                    demand.
                                </p>
                            </Reveal>
                            <Reveal delay={0.08}>
                                <p>
                                    We pride ourselves on rigorous quality
                                    control, world-class materials and an
                                    unwavering commitment to exceed
                                    expectations. Our vision is to remain the
                                    benchmark for durability, precision and
                                    customer satisfaction in flow control.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* Figures */}
            <section className="border-y border-line bg-paper">
                <MaxWidthWrapper>
                    <dl className="grid grid-cols-2 lg:grid-cols-4">
                        {FIGURES.map((f, i) => (
                            <Reveal
                                key={f.label}
                                delay={i * 0.06}
                                className="flex flex-col-reverse gap-3 border-line py-10 odd:pr-4 even:border-l even:pl-5 max-lg:[&:nth-child(n+3)]:border-t lg:border-l lg:px-8 lg:py-14 lg:first:border-l-0 lg:first:pl-0"
                            >
                                <dt className="eyebrow text-muted-ink">
                                    {f.label}
                                </dt>
                                <dd className="display-md">{f.value}</dd>
                            </Reveal>
                        ))}
                    </dl>
                </MaxWidthWrapper>
            </section>

            {/* Strengths */}
            <section className="py-24 lg:py-36">
                <MaxWidthWrapper>
                    <Reveal>
                        <SectionLabel index="02">Core strengths</SectionLabel>
                        <h2 className="display-lg mt-7 max-w-3xl text-balance">
                            What sets an Orbis valve apart.
                        </h2>
                    </Reveal>
                    <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {STRENGTHS.map((s, i) => (
                            <Reveal
                                as="li"
                                key={s.title}
                                delay={i * 0.06}
                                className="border-t border-ink pt-6"
                            >
                                <span className="eyebrow text-muted-ink">
                                    {pad2(i + 1)}
                                </span>
                                <h3 className="mt-8 text-2xl font-medium tracking-[-0.025em]">
                                    {s.title}
                                </h3>
                                <p className="mt-3 leading-relaxed text-muted-ink">
                                    {s.text}
                                </p>
                            </Reveal>
                        ))}
                    </ul>
                </MaxWidthWrapper>
            </section>

            {/* Materials */}
            <section className="bg-ink py-24 text-white lg:py-36">
                <MaxWidthWrapper className="grid gap-16 lg:grid-cols-12 lg:gap-10">
                    <Reveal className="lg:col-span-5">
                        <SectionLabel index="03" tone="light">
                            Materials
                        </SectionLabel>
                        <h2 className="display-lg mt-7 text-balance">
                            The right metal for every medium.
                        </h2>
                        <p className="mt-7 max-w-md text-lg leading-relaxed text-white/60">
                            From general water service to corrosive chemical
                            lines, we build in the grade your application
                            demands.
                        </p>
                        <div className="relative mt-12 aspect-[16/10] overflow-hidden">
                            <Image
                                src="/images/refinery-night.webp"
                                alt="Refinery at night"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Reveal>
                    <div className="lg:col-span-6 lg:col-start-7">
                        {MATERIAL_GROUPS.map((group, i) => (
                            <Reveal
                                key={group.family}
                                delay={i * 0.06}
                                className="border-t border-white/15 py-10 last:border-b"
                            >
                                <div className="flex items-baseline justify-between gap-6">
                                    <h3 className="text-2xl font-medium tracking-[-0.025em]">
                                        {group.family}
                                    </h3>
                                    <span className="eyebrow text-white/40">
                                        {pad2(group.grades.length)} grades
                                    </span>
                                </div>
                                <ul className="mt-6 flex flex-wrap gap-2">
                                    {group.grades.map((g) => (
                                        <li
                                            key={g}
                                            className="border border-white/15 px-3.5 py-2 font-mono text-sm text-white/85"
                                        >
                                            {g}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>

            <CtaBand />
        </>
    );
}
