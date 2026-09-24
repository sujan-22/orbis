"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Logo from "./logo";
import MaxWidthWrapper from "./max-width-wrapper";
import MobileMenu from "./mobile-menu";
import { buttonVariants } from "./ui/button";
import { NAV_LINKS, SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { cn, isActivePath } from "@/lib/utils";

const Navbar = () => {
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMegaOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!megaOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMegaOpen(false);
        };
        const onPointer = (e: PointerEvent) => {
            if (!headerRef.current?.contains(e.target as Node)) {
                setMegaOpen(false);
            }
        };
        window.addEventListener("keydown", onKey);
        document.addEventListener("pointerdown", onPointer);
        return () => {
            window.removeEventListener("keydown", onKey);
            document.removeEventListener("pointerdown", onPointer);
        };
    }, [megaOpen]);

    const openMega = useCallback(() => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setMegaOpen(true);
    }, []);

    const scheduleClose = useCallback(() => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
    }, []);

    const solid = scrolled || megaOpen;

    return (
        <header
            ref={headerRef}
            onMouseLeave={scheduleClose}
            className={cn(
                "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
                solid
                    ? "border-line bg-white/85 backdrop-blur-xl"
                    : "border-transparent bg-transparent"
            )}
        >
            <MaxWidthWrapper className="flex h-16 items-center justify-between gap-6 lg:h-[76px]">
                <Link
                    href="/"
                    aria-label="Orbis Valves Industries — home"
                    className="shrink-0"
                    onMouseEnter={scheduleClose}
                >
                    <Logo className="h-6 lg:h-7" />
                </Link>

                <nav aria-label="Main" className="hidden lg:block">
                    <ul className="flex items-center gap-1">
                        {NAV_LINKS.map((link) => {
                            const active = isActivePath(pathname, link.href);
                            const isProducts = link.href === "/products";
                            return (
                                <li
                                    key={link.href}
                                    className="flex items-center"
                                    onMouseEnter={
                                        isProducts ? openMega : scheduleClose
                                    }
                                >
                                    <Link
                                        href={link.href}
                                        aria-current={active ? "page" : undefined}
                                        className={cn(
                                            "relative px-4 py-2 text-[0.9375rem] tracking-[-0.01em] transition-colors",
                                            active
                                                ? "text-ink"
                                                : "text-muted-ink hover:text-ink"
                                        )}
                                    >
                                        {link.label}
                                        {active && (
                                            <span className="brand-gradient absolute inset-x-4 -bottom-0.5 h-px" />
                                        )}
                                    </Link>
                                    {isProducts && (
                                        <button
                                            type="button"
                                            aria-label="Show all products"
                                            aria-expanded={megaOpen}
                                            aria-controls="mega-menu"
                                            onClick={() => setMegaOpen((o) => !o)}
                                            className="-ml-3 grid size-7 cursor-pointer place-items-center text-muted-ink transition-colors hover:text-ink"
                                        >
                                            <ChevronDown
                                                className={cn(
                                                    "size-3.5 transition-transform duration-300",
                                                    megaOpen && "rotate-180"
                                                )}
                                            />
                                        </button>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div
                    className="flex items-center gap-5"
                    onMouseEnter={scheduleClose}
                >
                    <a
                        href={SITE.phone.href}
                        className="eyebrow hidden text-muted-ink transition-colors hover:text-ink xl:block"
                    >
                        {SITE.phone.display}
                    </a>
                    <Link
                        href="/contact"
                        className={cn(
                            buttonVariants({ size: "sm" }),
                            "hidden sm:inline-flex"
                        )}
                    >
                        Contact
                        <ArrowRight className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
                    </Link>
                    <MobileMenu pathname={pathname} />
                </div>
            </MaxWidthWrapper>

            <AnimatePresence>
                {megaOpen && (
                    <motion.div
                        id="mega-menu"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        onMouseEnter={openMega}
                        className="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[0_24px_48px_-24px_rgb(11_23_38/0.18)] lg:block"
                    >
                        <MaxWidthWrapper className="grid grid-cols-12 gap-10 py-10">
                            <div className="col-span-3 flex flex-col border-r border-line pr-10">
                                <p className="eyebrow text-muted-ink">
                                    Product range
                                </p>
                                <p className="mt-4 text-2xl font-medium leading-tight tracking-[-0.03em] text-ink">
                                    Nine valve families for isolation,
                                    regulation and backflow prevention.
                                </p>
                                <div className="mt-auto flex flex-col items-start gap-3 pt-8">
                                    <Link
                                        href="/products"
                                        className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
                                    >
                                        View all products
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <Link
                                        href="/catalogue"
                                        className="group inline-flex items-center gap-2 text-sm text-muted-ink hover:text-ink"
                                    >
                                        Download the catalogue
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                            <ul className="col-span-9 grid grid-cols-3 gap-x-4 gap-y-1">
                                {PRODUCTS.map((p) => {
                                    const active = isActivePath(
                                        pathname,
                                        `/products/${p.slug}`
                                    );
                                    return (
                                        <li key={p.slug}>
                                            <Link
                                                href={`/products/${p.slug}`}
                                                aria-current={active ? "page" : undefined}
                                                className={cn(
                                                    "group flex items-center gap-4 p-2 transition-colors hover:bg-paper",
                                                    active && "bg-paper"
                                                )}
                                            >
                                                <span className="relative size-16 shrink-0 bg-surface">
                                                    <Image
                                                        src={p.image}
                                                        alt=""
                                                        fill
                                                        className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </span>
                                                <span className="min-w-0">
                                                    <span className="block text-[0.9375rem] font-medium leading-snug tracking-[-0.01em] text-ink">
                                                        {p.name}
                                                    </span>
                                                    <span className="eyebrow mt-1 block text-muted-ink">
                                                        {p.category}
                                                    </span>
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </MaxWidthWrapper>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
