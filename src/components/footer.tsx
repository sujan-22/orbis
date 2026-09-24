/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Logo from "./logo";
import MaxWidthWrapper from "./max-width-wrapper";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

const COMPANY_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/application", label: "Industries" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/contact", label: "Contact" },
];

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
    <h2 className="eyebrow text-white/40">{children}</h2>
);

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-ink text-white">
            <MaxWidthWrapper className="pt-20 lg:pt-28">
                <div className="grid gap-14 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <Logo tone="light" lockup className="h-12" />
                        <p className="mt-8 max-w-xs leading-relaxed text-white/60">
                            Complete global flow control and solution.
                            Industrial valves manufactured in Ahmedabad, India.
                        </p>
                    </div>

                    <div className="grid gap-12 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-[1.3fr_0.7fr_1.2fr]">
                        <div>
                            <FooterHeading>Products</FooterHeading>
                            <ul className="mt-6 space-y-3 text-[0.9375rem]">
                                {PRODUCTS.map((p) => (
                                    <li key={p.slug}>
                                        <Link
                                            href={`/products/${p.slug}`}
                                            className="text-white/75 transition-colors hover:text-white"
                                        >
                                            {p.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <FooterHeading>Company</FooterHeading>
                            <ul className="mt-6 space-y-3 text-[0.9375rem]">
                                {COMPANY_LINKS.map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="text-white/75 transition-colors hover:text-white"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <FooterHeading>Contact</FooterHeading>
                            <ul className="mt-6 space-y-5 text-[0.9375rem]">
                                <li>
                                    <a
                                        href={SITE.phone.href}
                                        className="text-lg font-medium tracking-[-0.01em] transition-colors hover:text-cyan"
                                    >
                                        {SITE.phone.display}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${SITE.email}`}
                                        className="text-lg font-medium tracking-[-0.01em] transition-colors hover:text-cyan"
                                    >
                                        {SITE.email}
                                    </a>
                                </li>
                                <li>
                                    <address className="not-italic leading-relaxed text-white/60">
                                        {SITE.address.lines.map((line) => (
                                            <span key={line} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </address>
                                    <a
                                        href={SITE.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group mt-3 inline-flex items-center gap-1.5 text-sm text-white transition-colors hover:text-cyan"
                                    >
                                        Get directions
                                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col gap-4 border-t border-white/10 py-8 text-white/40 sm:flex-row sm:items-center sm:justify-between lg:mt-28">
                    <p className="eyebrow">
                        © {new Date().getFullYear()} {SITE.name}
                    </p>
                    <p className="eyebrow">Ahmedabad · Gujarat · India</p>
                    <a
                        href="#top"
                        className="eyebrow group inline-flex items-center gap-2 transition-colors hover:text-white"
                    >
                        Back to top
                        <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </MaxWidthWrapper>

            <div aria-hidden className="pointer-events-none select-none">
                <MaxWidthWrapper>
                    <img
                        src="/brand/orbis-wordmark-white.svg"
                        alt=""
                        className="-mb-[3%] w-full opacity-[0.05]"
                    />
                </MaxWidthWrapper>
            </div>
        </footer>
    );
}
