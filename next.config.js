/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
  runtimeCaching
})
const { i18n } = require('./next-i18next.config')

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co']
  },
  i18n
})

module.exports = nextConfig
