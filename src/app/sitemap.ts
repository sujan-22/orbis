import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = ["", "products", "application", "about-us", "catalogue", "contact"];
    return [
        ...pages.map((page) => ({
            url: `${SITE.url}/${page ? `${page}/` : ""}`,
            changeFrequency: "monthly" as const,
            priority: page === "" ? 1 : 0.8,
        })),
        ...PRODUCTS.map((p) => ({
            url: `${SITE.url}/products/${p.slug}/`,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
    ];
}
