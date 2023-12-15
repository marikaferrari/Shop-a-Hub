/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: "images.unsplash.com",
    },
    {
      protocol: 'https',
      hostname: 'media.istockphoto.com'
    },
    ],
  },
  experimental: {
    // serverActions: true,
    forceSwcTransforms: true,
  }
}

module.exports = nextConfig;