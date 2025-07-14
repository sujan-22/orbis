// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAddressBook, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import MaxWidthWrapper from "./max-width-wrapper";

// #003B73
// #004AAD
// #5DE0E6
// #0078A6

export default function Footer() {
    return (
        <footer className="bg-[#003B73] text-white pt-16 pb-2">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="inline-block bg-white p-2 rounded-lg shadow-md">
                            <Link href="/">
                                <Image
                                    src="/logo.svg"
                                    alt="Orbis Valves Industries"
                                    width={150}
                                    height={50}
                                    className="block"
                                />
                            </Link>
                        </div>
                        <p className="text-sm opacity-90">
                            Orbis Valves Industries is a leading manufacturer of
                            industrial valves, offering high‑performance
                            solutions globally since 2025.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {[
                                ["Home", "/"],
                                ["About Us", "/about-us"],
                                ["Products", "/products/gate-valve"],
                                ["Applications", "/application"],
                                ["Contact", "/contact"],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link href={href}>
                                        <p className="hover:text-[#5DE0E6] transition-colors">
                                            {label}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
                            Contact Us
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="w-5 h-5 flex-shrink-0" />
                                <a
                                    href="tel:+918153018111"
                                    className="hover:text-[#5DE0E6]"
                                >
                                    +91 81530 18111
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MdMail className="w-5 h-5 flex-shrink-0" />
                                <a
                                    href="mailto:sales@orbisvalves.com"
                                    className="hover:text-[#5DE0E6]"
                                >
                                    sales@orbisvalves.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaAddressBook className="w-5 h-5 flex-shrink-0 mt-1" />
                                <address className="not-italic leading-snug">
                                    06‑Nilkanth Avenue, B/H Palm Hotel,
                                    <br />
                                    S.P. Ring Road, Odhav,
                                    <br />
                                    Ahmedabad – 382450
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white mt-10 pt-2">
                    <p className="text-center text-xs opacity-80">
                        © {new Date().getFullYear()} Orbis Valves Industries.
                        All rights reserved.
                    </p>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
}
