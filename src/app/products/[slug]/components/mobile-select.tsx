"use client";

import { usePathname, useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { PRODUCTS } from "@/lib/products";

export function MobileProductSelect() {
    const pathname = usePathname();
    const router = useRouter();

    const pathParts = pathname.split("/");
    const currentSlug =
        pathParts[1] === "products" && pathParts[2] ? pathParts[2] : "";

    return (
        <Select
            value={currentSlug}
            onValueChange={(slug) => {
                router.push(`/products/${slug}`);
            }}
        >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
                {PRODUCTS.map((p) => (
                    <SelectItem key={p.slug} value={p.slug}>
                        {p.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
