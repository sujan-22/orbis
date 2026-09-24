import type { Metadata } from "next";
import { SITE } from "./site";

interface PageMetadataInput {
    title: string;
    description: string;
    path: string;
}

export function pageMetadata({
    title,
    description,
    path,
}: PageMetadataInput): Metadata {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            title: `${title} | ${SITE.name}`,
            description,
            url: path,
            siteName: SITE.name,
            locale: "en_IN",
            type: "website",
            images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
        },
    };
}
