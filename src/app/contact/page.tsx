"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import ContactForm from "../catalogue/components";
import { FaPhoneAlt, FaAddressBook } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ContactUs = () => {
    return (
        <MaxWidthWrapper className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#003B73]">
                Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Revised Contact Information */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#003B73]">
                        Contact Information
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="w-5 h-5 text-[#003B73]" />
                            <span className="text-base">+91 81540 18111</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MdMail className="w-5 h-5 text-[#003B73]" />
                            <span className="text-base">
                                orbisvalves@gmail.com
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaAddressBook className="w-5 h-5 mt-1 text-[#003B73]" />
                            <span className="text-base leading-relaxed">
                                06-Nilkanth Avenue, B/H Palm Hotel,
                                <br />
                                S.P. Ring Road, Odhav,
                                <br />
                                Ahmedabad - 382450
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div>
                    <ContactForm />
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default ContactUs;
