/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co']
  }
})

module.exports = nextConfig
