/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  assetPrefix: "/view",
  async rewrites() {
    return [
      {
        source: "/view/api/:path*",
        destination: "/api/:path*",
      },
      {
        source: "/view/images/:query*",
        destination: '/_next/image/:query*'
      },
      {
        source: "/view/_next/:path*",
        destination: "/_next/:path*",
      },
    ]
  }
}

module.exports = nextConfig
