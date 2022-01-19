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
  nextConfig
}

// module.exports = nextConfig
