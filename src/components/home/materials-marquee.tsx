import { MATERIAL_GRADES } from "@/lib/site";

// Grades and standards referenced across the product spec sheets.
const ITEMS = [
    ...MATERIAL_GRADES,
    "API 598 testing",
    "ANSI B16.5 flanges",
    "ANSI B16.10 face-to-face",
    "Class 150 / 300",
];

export default function MaterialsMarquee() {
    return (
        <section
            aria-label="Materials and standards"
            className="overflow-hidden border-y border-ink bg-ink py-5 text-white"
        >
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {[0, 1].map((copy) => (
                    <ul
                        key={copy}
                        aria-hidden={copy === 1}
                        className="flex shrink-0 items-center"
                    >
                        {ITEMS.map((item) => (
                            <li
                                key={item}
                                className="eyebrow flex items-center gap-10 pr-10 text-white/70"
                            >
                                <span>{item}</span>
                                <span aria-hidden className="size-1 bg-cyan" />
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </section>
    );
}
