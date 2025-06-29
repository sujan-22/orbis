import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAddressBook, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import MaxWidthWrapper from "./max-width-wrapper";

export default function Footer() {
    return (
        <footer
            // style={{
            //     background:
            //         "linear-gradient(to right, white 20%, #003B73 100%)",
            // }}
            className="text-primary pt-12 pb-2 border-t border-[#004AAD] relative z-10"
        >
            <MaxWidthWrapper>
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="space-y-4 lg:col-span-2">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="Orbis Valves Industries"
                                width={150}
                                height={50}
                            />
                        </Link>
                        <p className="text-sm mt-2 text-[#003B73]">
                            Orbis Valves Industries is a leading manufacturer of
                            industrial valves, offering high-performance
                            solutions globally since 2025.
                        </p>
                        {/* <div className="flex items-center space-x-4">
                        <Link href="#">
                            <FaFacebookF className="w-5 h-5 hover:text-[#5DE0E6]" />
                        </Link>
                        <Link href="#">
                            <FaTwitter className="w-5 h-5 hover:text-[#5DE0E6]" />
                        </Link>
                        <Link href="#">
                            <FaLinkedinIn className="w-5 h-5 hover:text-[#5DE0E6]" />
                        </Link>
                        <Link href="#">
                            <FaInstagram className="w-5 h-5 hover:text-[#5DE0E6]" />
                        </Link>
                    </div> */}
                    </div>

                    {/* Navigation */}
                    <div className="uppercase">
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-md text-[#003B73]">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/application">Applications</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="uppercase">
                        <h3 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-3 text-md text-[#003B73]">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="w-6 h-6" />
                                <span>+91 81540 18111</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdMail className="w-6 h-6" />
                                <span>orbisvalves@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaAddressBook className="w-6 h-6" />
                                <span>
                                    06-Nilkanth Avenue, B/H Palm Hotel, <br />
                                    S.P. Ring Road, Odhav, <br />
                                    Ahemdabad - 382450
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </MaxWidthWrapper>
            <div className="mt-8 pt-6 border-t border-[#004AAD] text-center text-sm text-[#003B73]">
                © {new Date().getFullYear()} Orbis Valves Industries. All
                rights reserved.
            </div>
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 90 1440 320"
                className="absolute bottom-1 left-1 right-1 z-0"
            >
                <path
                    fill="#003B73"
                    fillOpacity="1"
                    d="M0,256L60,261.3C120,267,240,277,360,245.3C480,213,600,139,720,96C840,53,960,43,1080,69.3C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg> */}
        </footer>
    );
}
