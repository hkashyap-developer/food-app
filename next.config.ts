import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    SC_DISABLE_SPEEDY: "false",
  },
};

export default nextConfig;
