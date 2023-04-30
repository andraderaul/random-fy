/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: "public",
  disable: !isProd,
  runtimeCaching
})

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co']
  }
})

module.exports = nextConfig
