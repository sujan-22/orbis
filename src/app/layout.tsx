import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Orbis Valves Industries | Industrial Valve Manufacturer in India",
    description:
        "Orbis Valves Industries manufactures high-quality industrial valves including globe, gate, butterfly, check, ball, pulp, and knife-edge valves using materials like Ductile Iron, Carbon Steel, and Stainless Steel. Trusted in petrochemical, power, food, pharma, and water industries globally.",
    keywords: [
        "Orbis Valves",
        "Industrial Valve Manufacturer",
        "Ball Valve",
        "Globe Valve",
        "Gate Valve",
        "Butterfly Valve",
        "Knife-edge Valve",
        "Check Valve",
        "Pulp Valve",
        "Wafer Check Valve",
        "Dual Plate Check Valve",
        "Valve Supplier India",
        "Ductile Iron Valve",
        "Stainless Steel Valves",
        "Ahmedabad Valve Company",
        "High Pressure Valves",
        "Custom Valve Solutions",
        "Oil and Gas Valves",
        "Power Plant Valves",
        "Food and Beverage Valves",
    ],
    authors: [
        {
            name: "Orbis Valves Industries",
            url: "https://orbisvalves.com",
        },
    ],
    creator: "Orbis Valves Industries",
    publisher: "Orbis Valves Industries",
    openGraph: {
        title: "Orbis Valves Industries | Precision Engineered Industrial Valves",
        description:
            "Serving industries worldwide with a complete range of industrial valves made from premium materials. Engineered in Ahmedabad, Gujarat for excellence in flow control.",
        url: "https://orbisvalves.com",
        siteName: "Orbis Valves Industries",
        locale: "en_IN",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
