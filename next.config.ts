import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  basePath: isProd ? "/portfolio" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
