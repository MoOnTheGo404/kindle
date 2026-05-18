/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/kindle",
  assetPrefix: "/kindle/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
