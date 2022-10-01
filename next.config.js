/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bit.ly', 'www.google.com', 'thumbor.forbes.com', 'tudeth.space']
  }
}

module.exports = nextConfig
