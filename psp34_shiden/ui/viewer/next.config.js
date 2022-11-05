/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "/viewer",
  async rewrites() {
    return [
      {
        source: "/viewer/api/:path*",
        destination: "/api/:path*",
      },
      {
        source: "/viewer/images/:query*",
        destination: '/_next/image/:query*'
      },
      {
        source: "/viewer/_next/:path*",
        destination: "/_next/:path*",
      },
    ]
  }
}

module.exports = nextConfig
