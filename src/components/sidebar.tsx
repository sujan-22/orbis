"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import {
    NAV_LINKS,
    baseLinkClasses,
    activeClasses,
    inactiveClasses,
} from "./navbar"; // adjust path as needed
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar = () => {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggleExpand = (label: string) => {
        setExpanded((prev) => (prev === label ? null : label));
    };

    return (
        <Sheet>
            <SheetTrigger className="group flex items-center hover:text-muted-foreground">
                <p className="text-sm uppercase">Menu</p>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="flex w-full flex-col sm:max-w-lg z-[1000000] h-full"
            >
                <SheetTitle className="sr-only">menu</SheetTitle>
                <div className="flex flex-col h-full justify-between p-6">
                    <ul className="flex flex-col gap-4 flex-grow">
                        {NAV_LINKS.map((link) => {
                            const isActive =
                                link.href === pathname ||
                                link.subLinks?.some((sub) =>
                                    pathname.startsWith(sub.href)
                                );

                            // If link has subLinks, render expandable section
                            if (link.subLinks) {
                                const isExpanded = expanded === link.label;
                                return (
                                    <li key={link.label}>
                                        <button
                                            onClick={() =>
                                                toggleExpand(link.label)
                                            }
                                            className={`${baseLinkClasses} flex hover:cursor-pointer items-center w-full ${
                                                isActive
                                                    ? activeClasses
                                                    : inactiveClasses
                                            }`}
                                        >
                                            <span>{link.label}</span>
                                            <IoMdArrowDropdown
                                                className={`ml-2 transform transition-transform duration-200 ${
                                                    isExpanded
                                                        ? "rotate-180"
                                                        : "rotate-0"
                                                }`}
                                            />
                                        </button>
                                        {isExpanded && (
                                            <ul className="mt-2 ml-4 flex flex-col gap-2">
                                                {link.subLinks.map((sub) => {
                                                    const isSubActive =
                                                        pathname === sub.href;
                                                    return (
                                                        <li key={sub.href}>
                                                            <SheetClose asChild>
                                                                <Link
                                                                    href={
                                                                        sub.href
                                                                    }
                                                                    className={`${baseLinkClasses} hover:cursor-pointer text-lg ${
                                                                        isSubActive
                                                                            ? activeClasses
                                                                            : inactiveClasses
                                                                    }`}
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            </SheetClose>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                );
                            }

                            // Simple link
                            return (
                                <li key={link.href}>
                                    <SheetClose asChild>
                                        <Link
                                            href={link.href!}
                                            className={`${baseLinkClasses} hover:cursor-pointer ${
                                                isActive
                                                    ? activeClasses
                                                    : inactiveClasses
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;
