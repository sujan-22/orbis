"use client";

import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    {
        label: "Product",
        subLinks: [
            { href: "/products/gate-valve", label: "Gate Valve" },
            { href: "/products/globe-valve", label: "Globe Valve" },
            { href: "/products/ball-valve-2pc", label: "Ball Valve (2PC)" },
            {
                href: "/products/dual-plate-check-valve",
                label: "Dual Plate Check Valve",
            },
            { href: "/products/wafer-check-valve", label: "Wafer Check Valve" },
            {
                href: "/products/lever-operated-butterfly-valve",
                label: "Lever Operated Butterfly Valve",
            },
            { href: "/products/knife-gate-valve", label: "Knife Gate Valve" },
            { href: "/products/check-valve", label: "Check Valve" }, // optional, if separate from the above
        ],
    },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/application", label: "Application" },
    { href: "/contact", label: "Contact Us" },
];

export const baseLinkClasses =
    "text-base font-medium uppercase transition-all duration-200";
export const activeClasses = "border-b-2 border-[#0078A6] text-[#003B73]";
export const inactiveClasses = "hover:text-[#004AAD]";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="sticky top-0 inset-x-0 z-40">
            <div className="bg-white">
                <header className="relative h-24 mx-auto border-b border-[#004AAD] duration-200">
                    <MaxWidthWrapper>
                        <nav className="text-sm flex items-center justify-between w-full h-full">
                            {/* Logo - always visible */}
                            <div className="flex items-center h-full">
                                <Link href="/" className="flex items-center">
                                    <Image
                                        src="/logo.svg"
                                        alt="Orbis Valves Industries Logo"
                                        width={180}
                                        height={50}
                                        className="bg-transparent"
                                    />
                                </Link>
                            </div>

                            {/* Desktop Links - visible above 950px */}
                            <div className="hidden min-[950px]:flex items-center space-x-6">
                                {NAV_LINKS.map((link) => {
                                    const isActive =
                                        link.href === pathname ||
                                        (link.subLinks &&
                                            link.subLinks.some((sub) =>
                                                pathname.startsWith(sub.href)
                                            ));

                                    return link.subLinks ? (
                                        <DropdownMenu key={link.label}>
                                            <DropdownMenuTrigger asChild>
                                                <button
                                                    className={`${baseLinkClasses} flex items-center hover:cursor-pointer ${
                                                        isActive
                                                            ? activeClasses
                                                            : inactiveClasses
                                                    }`}
                                                >
                                                    {link.label}
                                                    <IoMdArrowDropdown className="ml-1" />
                                                </button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                {link.subLinks.map((sub) => {
                                                    const isSubActive =
                                                        pathname === sub.href;
                                                    return (
                                                        <DropdownMenuItem
                                                            asChild
                                                            key={sub.href}
                                                        >
                                                            <Link
                                                                href={sub.href}
                                                                className={`block uppercase transition-all duration-200 hover:cursor-pointer ${
                                                                    isSubActive
                                                                        ? "text-[#003B73]"
                                                                        : inactiveClasses
                                                                }`}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    );
                                                })}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`${baseLinkClasses} hover:cursor-pointer ${
                                                isActive
                                                    ? activeClasses
                                                    : inactiveClasses
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Sidebar Trigger - visible at 950px and below */}
                            <div className="hidden max-[950px]:block">
                                <Sidebar />
                            </div>
                        </nav>
                    </MaxWidthWrapper>
                </header>
            </div>
        </div>
    );
};

export default Navbar;
