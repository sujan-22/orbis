import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/components/providers";
import { SITE } from "@/lib/site";

const archivo = Archivo({
    subsets: ["latin"],
    variable: "--font-archivo",
    display: "swap",
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-plex-mono",
    display: "swap",
});

const DESCRIPTION =
    "Orbis Valves Industries manufactures industrial valves in Ahmedabad, India — gate, globe, ball, check, butterfly and knife-edge valves in ductile iron, carbon steel and stainless steel for power, oil & gas, marine, water and process industries.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default:
            "Orbis Valves Industries | Industrial Valve Manufacturer in Ahmedabad, India",
        template: "%s | Orbis Valves Industries",
    },
    description: DESCRIPTION,
    keywords: [
        "Orbis Valves",
        "Industrial Valve Manufacturer",
        "Ball Valve",
        "Globe Valve",
        "Gate Valve",
        "Butterfly Valve",
        "Knife-edge Valve",
        "Check Valve",
        "Wafer Check Valve",
        "Dual Plate Check Valve",
        "Disk Check Valve",
        "Valve Supplier India",
        "Ductile Iron Valve",
        "Stainless Steel Valves",
        "Ahmedabad Valve Company",
        "Oil and Gas Valves",
        "Power Plant Valves",
    ],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    openGraph: {
        title: "Orbis Valves Industries | Industrial valves, engineered for flow",
        description: DESCRIPTION,
        url: SITE.url,
        siteName: SITE.name,
        locale: "en_IN",
        type: "website",
        images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/images/og.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    themeColor: "#f4f6f8",
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/assets/logo.png`,
    email: SITE.email,
    telephone: "+91-81530-18111",
    slogan: SITE.tagline,
    address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
            <body id="top" className="font-sans antialiased">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationJsonLd),
                    }}
                />
                <Providers>
                    <Navbar />
                    <main className="pt-16 lg:pt-[76px]">{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
