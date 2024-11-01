import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }, env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_CLIENT_URL: process.env.REACT_APP_CLIENT_URL
  },
};

export default nextConfig;
