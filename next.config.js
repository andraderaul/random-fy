/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const { i18n } = require('./next-i18next.config')

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co']
  },
  i18n
})

module.exports = nextConfig
