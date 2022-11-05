/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "/minter",
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/minter/api/:path*",
        destination: "/api/:path*",
      },
      {
        source: "/minter/images/:query*",
        destination: '/_next/image/:query*'
      },
      {
        source: "/minter/_next/:path*",
        destination: "/_next/:path*",
      },
    ]
  }
}

module.exports = nextConfig
