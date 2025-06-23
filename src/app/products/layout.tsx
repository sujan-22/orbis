"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { PRODUCTS } from "@/lib/products";
import { MobileProductSelect } from "./[slug]/components/mobile-select";

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <MaxWidthWrapper>
            <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="w-full lg:hidden mt-4">
                    <MobileProductSelect />
                </div>

                <div className="hidden lg:flex flex-col lg:sticky lg:top-44 my-20 lg:max-w-[300px] w-full p-2 border rounded-md">
                    <h2 className="text-3xl font-bold mb-6 text-[#003B73]">
                        Products
                    </h2>
                    <ul className="space-y-1">
                        {PRODUCTS.map((p) => {
                            const isActive = pathname === `/products/${p.slug}`;
                            return (
                                <li key={p.slug}>
                                    <Link
                                        href={`/products/${p.slug}`}
                                        className={`
                    block px-3 py-2 rounded
                    text-base font-medium uppercase
                    transition-colors duration-150
                    ${
                        isActive
                            ? "bg-[#0078A6]/10 text-[#003B73] border-l-4 border-[#0078A6]"
                            : "text-gray-700 hover:text-[#004AAD] hover:bg-gray-50"
                    }
                  `}
                                    >
                                        {p.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="block w-full border rounded-md lg:my-20 mb-20 p-2 relative">
                    {children}
                </div>
            </div>
        </MaxWidthWrapper>
    );
}
