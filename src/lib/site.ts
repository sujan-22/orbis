const ADDRESS_LINES = [
    "288, Shree Krishana Industrial Estate",
    "B/H Meera Tyre, Sardar Patel Ring Rd",
    "Odhav, Ahmedabad, Gujarat 382415",
];

// Resolves to the company's Google Business listing (pinned at the address above).
const MAPS_QUERY = "Orbis Valves Industries, Odhav, Ahmedabad, Gujarat 382415";

export const SITE = {
    name: "Orbis Valves Industries",
    tagline: "Complete global flow control and solution",
    url: "https://orbisvalves.com",
    phone: {
        display: "+91 81530 18111",
        href: "tel:+918153018111",
    },
    email: "sales@orbisvalves.com",
    address: {
        lines: ADDRESS_LINES,
        street: "288, Shree Krishana Industrial Estate, B/H Meera Tyre, Sardar Patel Ring Rd, Odhav",
        locality: "Ahmedabad",
        region: "Gujarat",
        postalCode: "382415",
        country: "IN",
    },
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`,
    mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=15&output=embed`,
    formEndpoint: "https://formspree.io/f/xnnzpaov",
    brochure: "/assets/orbis_valves_brochure.pdf",
};

export const NAV_LINKS = [
    { href: "/products", label: "Products" },
    { href: "/application", label: "Industries" },
    { href: "/about-us", label: "About" },
    { href: "/catalogue", label: "Catalogue" },
];

// Derived from the product and spec data; used for the headline figures.
export const MATERIAL_GRADES = [
    "GG25",
    "GGG40",
    "A105N",
    "LF2",
    "WCB",
    "WC6",
    "316L",
    "CF8M",
    "250SMO",
    "Duplex",
];
