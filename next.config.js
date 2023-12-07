/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["prolog-api.profy.dev"],
  },
  sassOptions: {
    sourceMap: true,
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
