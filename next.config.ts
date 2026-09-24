import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // replaces next export
    // Emit /about-us/index.html instead of /about-us.html so that static hosts
    // (MilesWeb / LiteSpeed) resolve clean URLs and page refreshes don't 404.
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
