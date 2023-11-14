/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      image: {
        domains: ['data:image/png;base64'],
    },
}

module.exports = nextConfig
