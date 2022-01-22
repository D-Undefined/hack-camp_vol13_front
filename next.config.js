/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
  images: {
    domains: ['placehold.jp'],
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_BASE_URL: process.env.NEXT_API_BASE_URL,
  },
  nextConfig
}

// module.exports = nextConfig
