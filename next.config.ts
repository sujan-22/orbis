import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // replaces next export
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
