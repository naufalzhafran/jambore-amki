/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.212.105.117",
        port: "",
        pathname: "/api/files/**/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
