import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  outputFileTracingIncludes: {
    "/api/chat": ["./docs/virtual-andrew-knowledge-base.md"],
  },
};

export default nextConfig;
