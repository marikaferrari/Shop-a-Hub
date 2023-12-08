/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      remotePatterns: [{ hostname: "images.unsplash.com" }]
    },
    serverActions: true
  }
}

module.exports = module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
}