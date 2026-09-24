"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./logo";
import MaxWidthWrapper from "./max-width-wrapper";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn, isActivePath, pad2 } from "@/lib/utils";

const LINKS = [
    { href: "/", label: "Home" },
    ...NAV_LINKS,
    { href: "/contact", label: "Contact" },
];

const MobileMenu = ({ pathname }: { pathname: string }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
            <DialogPrimitive.Trigger
                aria-label="Open menu"
                className="-mr-2 grid size-11 cursor-pointer place-items-center text-ink lg:hidden"
            >
                <Menu className="size-5" />
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Portal>
                <DialogPrimitive.Content className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-white duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                    <DialogPrimitive.Title className="sr-only">
                        Menu
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="sr-only">
                        Site navigation and contact details
                    </DialogPrimitive.Description>

                    <MaxWidthWrapper className="flex h-16 shrink-0 items-center justify-between">
                        <Link href="/" onClick={() => setOpen(false)}>
                            <Logo className="h-6" />
                        </Link>
                        <DialogPrimitive.Close
                            aria-label="Close menu"
                            className="-mr-2 grid size-11 cursor-pointer place-items-center text-ink"
                        >
                            <X className="size-5" />
                        </DialogPrimitive.Close>
                    </MaxWidthWrapper>

                    <MaxWidthWrapper className="flex flex-1 flex-col pb-10 pt-6">
                        <nav aria-label="Mobile">
                            <ul className="border-t border-line">
                                {LINKS.map((link, i) => {
                                    const active = isActivePath(pathname, link.href);
                                    return (
                                        <li
                                            key={link.href}
                                            className="border-b border-line"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setOpen(false)}
                                                aria-current={active ? "page" : undefined}
                                                className="group flex items-center gap-5 py-5"
                                            >
                                                <span className="eyebrow w-6 text-muted-ink">
                                                    {pad2(i + 1)}
                                                </span>
                                                <span
                                                    className={cn(
                                                        "text-[2rem] font-medium leading-none tracking-[-0.035em]",
                                                        active ? "text-ink" : "text-ink/70"
                                                    )}
                                                >
                                                    {link.label}
                                                </span>
                                                {active && (
                                                    <span className="brand-gradient ml-auto size-2" />
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <div className="mt-auto space-y-5 pt-12">
                            <p className="eyebrow text-muted-ink">Get in touch</p>
                            <a
                                href={SITE.phone.href}
                                className="block text-xl font-medium tracking-[-0.02em]"
                            >
                                {SITE.phone.display}
                            </a>
                            <a
                                href={`mailto:${SITE.email}`}
                                className="block text-xl font-medium tracking-[-0.02em]"
                            >
                                {SITE.email}
                            </a>
                            <a
                                href={SITE.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-2 text-sm leading-relaxed text-muted-ink"
                            >
                                <span>{SITE.address.lines.join(", ")}</span>
                                <ArrowUpRight className="mt-0.5 size-4 shrink-0" />
                            </a>
                        </div>
                    </MaxWidthWrapper>
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    );
};

export default MobileMenu;
