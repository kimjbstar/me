/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV !== "local" ? "https://kimjbstar.github.io/blog" : ""
}

module.exports = nextConfig
