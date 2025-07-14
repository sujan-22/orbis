"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { FaPhoneAlt, FaAddressBook } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import ContactForm from "./components/contact-form";

export default function ContactUs() {
    return (
        <section className="bg-gradient-to-b from-[#E5F7FA] to-white py-20">
            <MaxWidthWrapper>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#003B73]">
                    Get in Touch
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Contact Info Card */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-[#003B73]">
                            Contact Information
                        </h3>
                        <ul className="space-y-6 text-gray-700">
                            <li className="flex items-center gap-4">
                                <FaPhoneAlt className="w-6 h-6 text-[#003B73]" />
                                <span className="text-base">
                                    +91 81530 18111
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <MdMail className="w-6 h-6 text-[#003B73]" />
                                <span className="text-base">
                                    sales@orbisvalves.com
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <FaAddressBook className="w-6 h-6 text-[#003B73] mt-1" />
                                <span className="text-base leading-relaxed">
                                    06‑Nilkanth Avenue, B/H Palm Hotel,
                                    <br />
                                    S.P. Ring Road, Odhav,
                                    <br />
                                    Ahmedabad – 382450
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <ContactForm />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
