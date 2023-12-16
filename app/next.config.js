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
    // serverActions: true, //It's not needed anymore for the newer Next.js version
    forceSwcTransforms: true,
  }
}

module.exports = nextConfig;