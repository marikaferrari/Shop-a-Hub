/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: "images.unsplash.com",
    },
    ],
  },
  experimental: {
    serverActions: true,
  }
}

module.exports = module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
}
