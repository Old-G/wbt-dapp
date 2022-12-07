/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bit.ly', 'www.google.com', 'thumbor.forbes.com', 'tudeth.space', 'lens.infura-ipfs.io']
  },
}

module.exports = nextConfig
